import { MetadataRoute } from 'next'
import { getProjects } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://yash-ghodele.pages.dev'
    const projects = getProjects()

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.metadata.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        ...projectUrls,
    ]
}
