// ... imports remain the same
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

    const { title, description, image, publishedAt } = project.metadata
    const ogImage = image || `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

    return {
        title: `${title} | Yash Ghodele`,
        description,
        openGraph: {
            title: `${title} | Yash Ghodele`,
            description,
            type: 'article',
            publishedTime: publishedAt,
            url: `https://yash-ghodele.pages.dev/projects/${params.slug}`,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjects().find((p) => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    const IconComponent = iconMap[project.metadata.iconName] || Terminal

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20">
            {/* Hero Section with Radial Spotlight */}
            <div className="relative h-[65vh] min-h-[500px] w-full flex items-end pb-16 overflow-hidden">
                {/* Background Image */}
                <Image
                    src={project.metadata.image}
                    alt={project.metadata.title}
                    fill
                    className="object-cover opacity-40 scale-105"
                    priority
                />

                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>

                {/* Radial Glow Effect */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 50% 30%, ${project.metadata.color.includes('blue') ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.1)'}, transparent 70%)`
                    }}
                ></div>

                <div className="container relative z-10 px-6 max-w-6xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    {/* Badge & Icon Row */}
                    <div className="flex items-center gap-4 mb-6 animate-in slide-in-from-bottom-5 fade-in duration-700">
                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl`}>
                            <IconComponent className="w-6 h-6 text-zinc-100" />
                        </div>
                        <Badge variant="secondary" className="bg-white/10 text-zinc-200 border-white/5 hover:bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                            {project.metadata.subtitle}
                        </Badge>
                    </div>

                    {/* Title & Description */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
                        {project.metadata.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-200">
                        {project.metadata.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold rounded-full h-12 px-8">
                            <a href={project.metadata.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                View Live <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full h-12 px-8 backdrop-blur-sm">
                            <a href={project.metadata.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Github className="w-4 h-4 mr-2" /> GitHub Repo
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container px-6 max-w-6xl mx-auto py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Main Article (8 columns) */}
                    <main className="lg:col-span-8">
                        <article className="prose prose-invert prose-lg md:prose-xl max-w-none 
                            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-100
                            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-l-4 prose-h2:border-white/20 prose-h2:pl-6
                            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                            prose-p:text-zinc-400 prose-p:leading-loose prose-p:my-8
                            prose-li:text-zinc-400 prose-li:my-4 prose-li:leading-relaxed
                            prose-strong:text-white prose-strong:font-semibold
                            prose-code:text-zinc-200 prose-code:bg-zinc-900 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:border prose-code:border-white/10
                            prose-blockquote:border-l-white/30 prose-blockquote:bg-zinc-900/30 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-12
                            ">
                            <MDXRemote source={project.content} />
                        </article>

                        {/* Article Footer */}
                        <div className="mt-20 pt-10 border-t border-white/10">
                            <p className="text-zinc-500 text-sm">
                                Published on {new Date(project.metadata.publishedAt).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })} • Built by Yash Ghodele
                            </p>
                        </div>
                    </main>

                    {/* Sidebar Sticky (4 columns) */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-8">

                        {/* Tech Stack Card */}
                        <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-white/10 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>

                            <h3 className="text-xs font-bold text-zinc-500 mb-6 uppercase tracking-[0.2em] relative z-10">Technologies</h3>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {project.metadata.tech.map((t) => (
                                    <Badge
                                        key={t}
                                        variant="secondary"
                                        className="bg-zinc-800/80 text-zinc-300 border border-white/5 hover:bg-zinc-700 hover:text-white px-3 py-1.5 transition-all cursor-default"
                                    >
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl shadow-2xl relative group hover:border-white/10 transition-colors">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur opacity-20"></div>
                            <h3 className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-[0.2em] relative z-10">Key Impact</h3>
                            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 relative z-10">
                                {project.metadata.stats}
                            </p>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    )
}
