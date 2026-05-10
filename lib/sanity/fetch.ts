import { client } from "@/sanity/lib/client";
import { projectsQuery, eventsQuery, projectBySlugQuery, eventBySlugQuery } from "./queries";
import { ProjectMetadata, EventMetadata } from "@/lib/types";
import { STATIC_PROJECTS } from "@/lib/projects";

const fetchOptions = { next: { revalidate: 60 } } as any;

export async function getProjects() {
    const sanityProjects = await client.fetch(projectsQuery, {}, fetchOptions);
    const mappedSanity = sanityProjects.map((p: any) => ({
        slug: p.slug,
        metadata: {
            ...p,
            tech: p.tech || [],
        } as ProjectMetadata
    }));

    // Merge static and sanity, avoiding duplicates by slug
    const allProjects = [...STATIC_PROJECTS];
    mappedSanity.forEach((sp: any) => {
        if (!allProjects.find(ap => ap.slug === sp.slug)) {
            allProjects.push(sp);
        }
    });

    return allProjects;
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
    // Check static first
    const staticProject = STATIC_PROJECTS.find(p => p.slug === slug);
    if (staticProject) return staticProject.metadata;

    return await client.fetch(projectBySlugQuery, { slug }, fetchOptions);
}

export async function getEvent(slug: string) {
    return await client.fetch(eventBySlugQuery, { slug }, fetchOptions);
}

