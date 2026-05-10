export type ContentSection = {
    type: "p" | "h3" | "interactive" | "highlight" | "gridConfig" | "blockquote"
    text?: string
    component?: string
    cols?: number
    items?: Array<{ title: string; description: string }>
}

export type EventMetadata = {
    title: string
    role: string
    date: string
    attendees: string
    summary: string
    image: string
    metrics?: string[]
    skills?: string[]
    subtitle?: string
    location?: string
    verified?: boolean
    accentColor?: number
    content?: ContentSection[]
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
    accentColor?: number
    content?: ContentSection[]
}
