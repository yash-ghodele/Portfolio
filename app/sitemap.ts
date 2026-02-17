import { MetadataRoute } from 'next'
import { getProjects, getEvents } from '@/lib/sanity/fetch'
import { ProjectMetadata, EventMetadata } from '@/lib/types'

export const runtime = 'edge';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://yash-ghodele.pages.dev'
    const projects = await getProjects()
    const events = await getEvents()

    const projectUrls = projects.map((project: { slug: string; metadata: ProjectMetadata }) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.metadata.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const eventUrls = events.map((event: { slug: string; metadata: EventMetadata }) => {
        let date = new Date(event.metadata.date)
        if (isNaN(date.getTime())) {
            date = new Date()
        }
        return {
            url: `${baseUrl}/community/${event.slug}`,
            lastModified: date,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }
    })

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/community`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // Hardcoded Projects (Legacy/Featured)
        { url: `${baseUrl}/projects/fuelshield`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/projects/sanjivani`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/projects/sanjivani-v2`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/projects/iot-security`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/projects/smart-crm`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        // Dynamic Content
        ...projectUrls,
        ...eventUrls,
    ]
}
