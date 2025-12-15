import { client } from "@/sanity/lib/client"
import { type Project } from "@/lib/data"

export async function getProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      title,
      subtitle,
      "slug": slug.current,
      description,
      stats,
      "image": image.asset->url,
      tech,
      links,
      color
    }
  `)
}

export async function getProject(slug: string): Promise<Project | null> {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      title,
      subtitle,
      "slug": slug.current,
      description,
      stats,
      "image": image.asset->url,
      tech,
      links,
      color
    }
  `, { slug })
}
