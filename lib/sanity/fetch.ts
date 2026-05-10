import { STATIC_PROJECTS } from "@/lib/projects";
import { STATIC_EVENTS } from "@/lib/events";

export async function getProjects() {
    return STATIC_PROJECTS;
}

export async function getEvents() {
    return STATIC_EVENTS;
}

export async function getProject(slug: string) {
    const project = STATIC_PROJECTS.find(p => p.slug === slug);
    return project ? project.metadata : null;
}

export async function getEvent(slug: string) {
    const event = STATIC_EVENTS.find(e => e.slug === slug);
    return event ? event.metadata : null;
}

