import Link from 'next/link'
import { ArrowLeft, ExternalLink, Cpu, GraduationCap, Code, Zap, Users, BookOpen, CheckCircle2, Globe, Github, Smartphone } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'Ugam Campus - Project-as-a-Service | Yash Ghodele',
    description: 'The internal protocol and templating system for professional-grade engineering projects. 50+ projects shipped with zero plagiarism.',
    openGraph: {
        title: 'Ugam Campus - Project-as-a-Service | Yash Ghodele',
        description: 'Professional-grade delivery protocol for student engineering projects.',
        url: 'https://yash-ghodele.pages.dev/work/ugam-campus',
        siteName: 'Yash Ghodele Portfolio',
        images: [{ url: '/images/projects/ugam-campus-projects.jpg', width: 1200, height: 630, alt: 'Ugam Campus Projects' }],
        locale: 'en_US',
        type: 'article',
    },
    alternates: {
        canonical: 'https://yash-ghodele.pages.dev/work/ugam-campus',
    },
}

export default function UgamCampusPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">

            {/* 1. Hero Section */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-black to-black opacity-60"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-orange-500/30 text-orange-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-orange-500/10 backdrop-blur-md">
                        Engineering Education
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-100 to-orange-900/50">
                        Ugam Campus
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Project-as-a-Service. <br className="hidden md:block" />
                        We engineering professional-grade <span className="text-orange-400 font-semibold">final year projects</span> that bridge the gap between B.Tech and the Real World.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-500 text-white rounded-full h-14 px-10 text-lg">
                            <Link href="https://ugamstudio.vercel.app" target="_blank" className="flex items-center gap-2">
                                Visit Ugam Studio <ExternalLink className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Stats Bento */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <GraduationCap size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-2">Portfolio Impact</h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4">50+</div>
                            <p className="text-zinc-400 text-lg">
                                Professional projects shipped for students across MH. Zero plagiarism, 100% custom implementation.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between">
                        <Users className="w-10 h-10 text-blue-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">200+</div>
                            <div className="text-sm text-zinc-500 font-medium">Students Mentored</div>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">0</div>
                            <div className="text-sm text-zinc-500 font-medium">Plagiarism Flags</div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex items-center justify-between">
                        <div className="flex gap-4 flex-wrap">
                            {["IoT", "Robotics", "Full Stack", "AI/ML", "Hardware Design", "Presentation Coaching"].map(track => (
                                <Badge key={track} variant="secondary" className="bg-white/5 text-zinc-300 border-white/5 px-4 py-2">
                                    {track}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Protocol */}
            <section className="container px-6 py-24 mx-auto max-w-4xl border-t border-white/5">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The Alchemist Protocol</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Initialization", desc: "Problem statement analysis and feasibility audit." },
                        { title: "Architecture", desc: "System design, BOM selection, and schematic drafting." },
                        { title: "Execution", desc: "Parallel hardware build and software development." },
                        { title: "Validation", desc: "Unit testing, calibration, and edge-case hardening." }
                    ].map((step, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-colors">
                            <div className="text-orange-500 font-mono mb-4">Phase 0{i+1}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <section className="border-t border-white/5 py-12 bg-zinc-900/30">
                <div className="container px-6 mx-auto flex justify-between items-center text-sm text-zinc-500">
                    <Link href="/" className="flex items-center hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <span>Part of the Ugam Digital Studio Ecosystem</span>
                </div>
            </section>
        </div>
    )
}
