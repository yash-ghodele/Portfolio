import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Metadata = {
    title: string
    publishedAt: string
    summary: string
    image?: string
}


export type ProjectMetadata = {
    title: string
    subtitle: string
    image: string
    iconName: string
    description: string
    stats: string
    tech: string[]
    demoLink: string
    codeLink: string
    color: string
    publishedAt: string
}

function getMDXFiles(dir: string) {
    console.log('MDX READ DIR:', dir)
    if (!fs.existsSync(dir)) {
        console.log('MDX DIR MISSING')
        return []
    }
    const files = fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
    console.log('MDX FILES FOUND:', files)
    return files
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, 'utf-8')
    return matter(rawContent)
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        const { data, content } = readMDXFile(path.join(dir, file))
        const slug = path.basename(file, path.extname(file))
        return {
            metadata: data as any,
            slug,
            content,
        }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'content', 'posts')).map(post => ({
        ...post,
        metadata: post.metadata as Metadata
    }))
}

export function getProjects() {
    const dir = path.join(process.cwd(), 'content', 'projects')
    console.log('GET PROJECTS FROM:', dir)
    return getMDXData(dir).map(project => ({
        ...project,
        metadata: project.metadata as ProjectMetadata
    }))
}
