import { client } from "@/sanity/lib/client";
import { projectsQuery, eventsQuery, projectBySlugQuery, eventBySlugQuery } from "./queries";
import { ProjectMetadata, EventMetadata } from "@/lib/types";

const fetchOptions = { next: { revalidate: 60 } } as any;

// Map Sanity response to existing ProjectMetadata shape
// Note: Sanity returns flat objects, MDX had { metadata: ... } wrapper.
// usage in components: projects.map(p => p.metadata.title)
// We need to return structure: { slug: string, metadata: ProjectMetadata }[]

export async function getProjects() {
    const projects = await client.fetch(projectsQuery, {}, fetchOptions);
    return projects.map((p: any) => ({
        slug: p.slug,
        metadata: {
            ...p,
            // Ensure arrays are initialized
            tech: p.tech || [],
        } as ProjectMetadata
    }));
}

export async function getEvents() {
    const events = await client.fetch(eventsQuery, {}, fetchOptions);
    return events.map((e: any) => ({
        slug: e.slug,
        metadata: {
            ...e,
            metrics: e.metrics || [],
            skills: e.skills || []
        } as EventMetadata
    }));
}

export async function getProject(slug: string) {
    return await client.fetch(projectBySlugQuery, { slug }, fetchOptions);
}

export async function getEvent(slug: string) {
    return await client.fetch(eventBySlugQuery, { slug }, fetchOptions);
}

