import { getPostBySlug, getPostSlugs } from '../lib/posts'

export default function Posts() {
    const slugs = getPostSlugs()
    const posts = slugs.map(getPostBySlug)

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="display-4 text-center mb-5">Blog</h1>
                    
                    {posts.map(({slug, metadata, content}) => (
                        <div key={slug} className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title h4">{metadata.title}</h2>
                                <p className="card-subtitle mb-2 text-muted small">
                                    <i className="bi bi-calendar me-1"></i>
                                    {metadata.date} 
                                    <i className="bi bi-person ms-3 me-1"></i>
                                    by {metadata.author}
                                </p>
                                <p className="card-text">
                                    {content.length > 20 ? `${content.substring(0, 20)}...` : content}
                                </p>
                                <a href={`/posts/${slug}`} className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}