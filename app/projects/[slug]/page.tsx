import { PortableText } from 'next-sanity'
import { getProjects, getProject } from "@/lib/sanity/fetch"

export const runtime = 'edge';
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, ChevronRight, Layout, Cpu, Terminal, Shield, LucideIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, LucideIcon> = {
    "Layout": Layout,
    "Cpu": Cpu,
    "Terminal": Terminal,
    "Shield": Shield
}

export async function generateStaticParams() {
    const projects = await getProjects()
    return projects.map((project: { slug: string }) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug)
    if (!project) return

    const { title, description, image, tech } = project

    return {
        title: `${title} | Yash Ghodele`,
        description: description,
        keywords: tech,
        authors: [{ name: "Yash Ghodele" }],
        openGraph: {
            title,
            description,
            url: `https://yash-ghodele.pages.dev/projects/${params.slug}`,
            siteName: "Yash Ghodele Portfolio",
            images: [{ url: image || "/placeholder.jpg", width: 1200, height: 630, alt: title }],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image || "/placeholder.jpg"],
            creator: "@why_be_yashhh",
        },
        alternates: {
            canonical: `https://yash-ghodele.pages.dev/projects/${params.slug}`,
        },
    }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProject(params.slug)

    if (!project) notFound()

    const { title, subtitle, image, iconName, description, stats, tech, demoLink, codeLink, color, content } = project
    const IconComponent = iconMap[iconName] || Terminal

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            {/* 1. Hero Section */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] ${color || "from-purple-900/40 via-black to-black"} opacity-60`}></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-white/10 text-white/80 px-4 py-1.5 text-sm uppercase tracking-widest bg-white/5 backdrop-blur-md">
                        {subtitle}
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-500">
                        {title}
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        {demoLink && (
                            <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full h-14 px-10 text-lg shadow-lg">
                                <Link href={demoLink} target="_blank" className="flex items-center gap-2">
                                    View Live <ExternalLink className="w-5 h-5" />
                                </Link>
                            </Button>
                        )}
                        {codeLink && (
                            <Button asChild variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 rounded-full h-14 px-10 text-lg">
                                <Link href={codeLink} target="_blank" className="flex items-center gap-2">
                                    <Github className="w-5 h-5" /> Source Code
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            {/* 2. Stats & Tech */}
            <section className="container px-6 py-12 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
                        <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-4">Key Impact</h3>
                        <p className="text-3xl md:text-4xl font-bold text-white">{stats}</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
                        <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {tech && tech.map((t: string) => (
                                <Badge key={t} variant="secondary" className="bg-white/5 hover:bg-white/10 text-zinc-300 border-white/5 px-3 py-1">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Main Content */}
            <section className="container px-6 py-24 mx-auto max-w-4xl">
                <article className="prose prose-invert prose-lg max-w-none 
                            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                            prose-p:text-zinc-400 prose-p:leading-relaxed
                            prose-strong:text-white
                            prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                            prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10
                        ">
                    <PortableText value={content} />
                </article>
            </section>

            {/* Footer */}
            <section className="border-t border-white/5 py-12 bg-zinc-900/30">
                <div className="container px-6 mx-auto flex justify-between items-center text-sm text-zinc-500">
                    <Link href="/" className="flex items-center hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                </div>
            </section>
        </div>
    )
}
