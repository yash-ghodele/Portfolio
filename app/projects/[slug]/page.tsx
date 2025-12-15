import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Layers } from "lucide-react"
import { projects } from "@/lib/data"
import { Metadata } from "next"

export const runtime = 'edge'

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) return { title: "Project Not Found" }

    return {
        title: `${project.title} | Yash Ghodele`,
        description: project.description,
    }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>
            <div className={`fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${project.color} opacity-10 blur-[120px] pointer-events-none rounded-full`}></div>

            {/* Navigation */}
            <nav className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto">
                    <Link href="/#projects">
                        <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5 gap-2">
                            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    {project.icon}
                                </div>
                                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">
                                    {project.subtitle}
                                </Badge>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                                {project.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </Button>
                                    </a>
                                )}
                                {project.links.code && (
                                    <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5">
                                            <Github className="w-4 h-4 mr-2" /> View Code
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <section className="py-16 px-4 bg-[#0a0a0a]">
                <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Sidebar: Stats & Tech */}
                    <div className="md:col-span-1 space-y-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">Impact Stats</h3>
                            <p className="text-2xl font-bold text-white">{project.stats}</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                                <Layers className="w-4 h-4" /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="secondary" className="bg-black/40 text-gray-300 hover:bg-black/60">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Timeline
                            </h3>
                            <p className="text-gray-300">Completed 2024</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
                            <div className="prose prose-invert prose-lg text-gray-400">
                                <p>
                                    This project represents a significant milestone in applying {project.tech[0]} to solve real-world problems.
                                    The architecture focused on scalability and performance, ensuring that {project.subtitle} could handle usage at scale.
                                </p>
                                <p>
                                    Key challenges involved integrating strict security protocols while maintaining a seamless user experience.
                                    By leveraging modern frameworks, we achieved a response time that exceeds industry standards.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <li key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                        <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0"></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Advanced Feature {i}</h4>
                                            <p className="text-sm text-gray-400">Implementation details regarding this specific feature and its value to the user.</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Layer */}
            <section className="py-24 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Interested in building something similar?</h2>
                <Link href="/#contact">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-purple-600 hover:scale-105 transition-transform">
                        Let's Collaborate
                    </Button>
                </Link>
            </section>
        </div>
    )
}
