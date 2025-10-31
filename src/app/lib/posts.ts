import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/app/content/posts')

export function getPostSlugs() {
    const postFilePaths = fs.readdirSync(postsDirectory)
    return postFilePaths.map((filename) => filename.replace('\.md', ''))
}

export function getPostBySlug(slug: string) {
    const filePath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug,
        metadata: data,
        content
    }
}