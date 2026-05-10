import { STATIC_PROJECTS } from "./projects"
import { STATIC_EVENTS } from "./events"
import { STATIC_POSTS } from "./journal"
import { ProjectMetadata, EventMetadata } from "./types"

export async function getProjects(): Promise<{ slug: string; metadata: ProjectMetadata }[]> {
  return STATIC_PROJECTS
}

export async function getProject(slug: string): Promise<ProjectMetadata & { slug: string } | null> {
  const project = STATIC_PROJECTS.find(p => p.slug === slug)
  if (!project) return null
  return {
    ...project.metadata,
    slug: project.slug
  }
}

export async function getEvents(): Promise<{ slug: string; metadata: EventMetadata }[]> {
  return STATIC_EVENTS
}

export async function getEvent(slug: string): Promise<EventMetadata & { slug: string } | null> {
  const event = STATIC_EVENTS.find(e => e.slug === slug)
  if (!event) return null
  return {
    ...event.metadata,
    slug: event.slug
  }
}

export async function getJournalPosts(): Promise<any[]> {
  return STATIC_POSTS
}

export async function getJournalPost(slug: string): Promise<any | null> {
  const post = STATIC_POSTS.find((p) => p.slug === slug)
  if (!post) return null
  return post
}
