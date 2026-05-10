import { MetadataRoute } from 'next'
import { getProjects, getEvents } from '@/lib/fetch'
import { JOURNAL_POSTS } from '@/lib/journal'
import { ProjectMetadata, EventMetadata } from '@/lib/types'

export const runtime = 'edge';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://yash-ghodele.pages.dev'
    const projects = await getProjects()
    const events = await getEvents()

    const projectUrls = projects.map((project: { slug: string; metadata: ProjectMetadata }) => ({
        url: `${baseUrl}/work/${project.slug}`,
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
            url: `${baseUrl}/events/${event.slug}`,
            lastModified: date,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }
    })

    const journalUrls = JOURNAL_POSTS.map((post) => ({
        url: `${baseUrl}/journal/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        // New segmented routes
        { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/stack`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        // Dynamic Content
        ...projectUrls,
        ...eventUrls,
        ...journalUrls,
    ]
}
