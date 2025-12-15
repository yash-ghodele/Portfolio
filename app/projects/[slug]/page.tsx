import { MDXRemote } from 'next-mdx-remote/rsc'
import { getProjects } from '@/lib/mdx'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, Layout, Cpu, Terminal, Shield, LucideIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Icon Map (Duplicate of what's in Projects component - could be shared but fine here)
const iconMap: Record<string, LucideIcon> = {
    "Layout": Layout,
    "Cpu": Cpu,
    "Terminal": Terminal,
    "Shield": Shield
}

export async function generateStaticParams() {
    const projects = getProjects()
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const project = getProjects().find((p) => p.slug === params.slug)
    if (!project) {
        return
    }
    return {
        title: `${project.metadata.title} | Yash Ghodele`,
        description: project.metadata.description,
    }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjects().find((p) => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    const IconComponent = iconMap[project.metadata.iconName] || Terminal

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={project.metadata.image}
                    alt={project.metadata.title}
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container px-4 max-w-4xl pt-20">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/10"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.metadata.color} bg-opacity-20 border border-white/10 backdrop-blur-xl`}>
                                <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <Badge variant="outline" className="text-sm border-white/20 bg-white/5 px-3 py-1">
                                {project.metadata.subtitle}
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                            {project.metadata.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-8">
                            {project.metadata.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild className="bg-white text-black hover:bg-gray-200">
                                <a href={project.metadata.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/10">
                                <a href={project.metadata.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <Github className="w-4 h-4 mr-2" /> Source Code
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container px-4 max-w-4xl py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-400 prose-li:text-gray-400">
                            <MDXRemote source={project.content} />
                        </article>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-[#111] border border-white/10">
                            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Key Impact</h3>
                            <p className="text-2xl font-bold text-primary">
                                {project.metadata.stats}
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#111] border border-white/10">
                            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.metadata.tech.map((t) => (
                                    <Badge key={t} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-300 border-transparent">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#111] border border-white/10">
                            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Project Info</h3>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-gray-400">Year</span>
                                <span className="font-mono">{new Date(project.metadata.publishedAt).getFullYear()}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-gray-400">Role</span>
                                <span>Lead Developer</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
