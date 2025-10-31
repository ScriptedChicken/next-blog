import { getPostBySlug, getPostSlugs } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import { marked } from 'marked'
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import Link from 'next/link'

export async function generateStaticParams() {
    const slugs = getPostSlugs()
    return slugs.map((slug) => ({slug}))
}

export async function processPostContent(content: string) {
    const html = await marked(content); // await the Promise
    
    const window = new JSDOM('').window;
    const purify = DOMPurify(window);
    const clean = purify.sanitize(html);
    
    return clean;
}

export default async function PostPage({params}: {params: {slug: string}}) {
    const { slug } = await params
    const post =  getPostBySlug(slug)
    if (!post) return notFound()

        const clean = await processPostContent(post.content)
    
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        {/* Back button */}
                        <Link 
                            href='/posts' 
                            className="btn btn-outline-primary mb-4 d-inline-flex align-items-center"
                        >
                            <i className="bi bi-arrow-left me-2"></i>
                            Back to all posts
                        </Link>

                        {/* Article card */}
                        <article className="card shadow-sm border-0">
                            <div className="card-body p-4 p-md-5">
                                {/* Header */}
                                <header className="mb-4">
                                    <h1 className="card-title display-4 fw-bold text-dark mb-3">
                                        {post.metadata.title}
                                    </h1>
                                    <div className="d-flex flex-wrap align-items-center text-muted small">
                                        <span className="d-flex align-items-center me-3 mb-2">
                                            <i className="bi bi-calendar3 me-2"></i>
                                            {post.metadata.date}
                                        </span>
                                        <span className="d-flex align-items-center mb-2">
                                            <i className="bi bi-person me-2"></i>
                                            by {post.metadata.author}
                                        </span>
                                    </div>
                                </header>

                                {/* Content */}
                                <div 
                                    className="post-content fs-5 lh-base"
                                    style={{ lineHeight: '1.7' }}
                                    dangerouslySetInnerHTML={{ __html: clean }} 
                                />
                            </div>
                        </article>

                        {/* Bottom back button for longer articles */}
                        <div className="text-center mt-5 pt-3 border-top">
                            <Link 
                                href='/posts' 
                                className="btn btn-primary px-4"
                            >
                                <i className="bi bi-list-ul me-2"></i>
                                View All Posts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
}