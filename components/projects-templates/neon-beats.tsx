import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, ExternalLink, Github, Linkedin, Cpu, ShieldCheck, Zap, ShoppingBag, 
  Activity, RefreshCw, FileText, Music, Sparkles, GraduationCap, CheckCircle2, 
  Layers, Sliders, Smartphone, Check, Lock, Star
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function NeonBeats() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-pink-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-28 pb-20 border-b border-pink-500/15">
                {/* Background FX - Neon Pink & Cyan Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/30 via-zinc-950 to-zinc-950 opacity-90 pointer-events-none" />
                <div className="absolute top-[-25%] right-[-10%] w-[900px] h-[900px] rounded-full blur-[180px] bg-pink-600/15 pointer-events-none" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] bg-cyan-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25 pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <div>
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                            <Badge variant="outline" className="border-pink-500/30 text-pink-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-pink-500/10 backdrop-blur-md inline-flex items-center gap-2 shadow-lg shadow-pink-950/50">
                                <Music className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                                Premium E-Commerce Prototype
                            </Badge>
                            <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10 backdrop-blur-md inline-flex items-center gap-2">
                                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                                Ugam Campus Product Project
                            </Badge>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-cyan-400 drop-shadow-2xl">
                            Neon Beats
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base font-mono text-pink-400/90 tracking-widest uppercase font-semibold mt-4">
                            High-Fidelity Musical Instrument Storefront &amp; Cart Engine
                        </p>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        A modern dark-neon musical instruments web application featuring glassmorphism Bento Grid architecture, dynamic category filtering, interactive sliding drawer cart, and real-time state persistence built under the <span className="text-amber-400 font-medium">Ugam Campus Alchemist Protocol</span>.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-2xl h-12 px-6 shadow-xl shadow-pink-900/30">
                            <a href="https://neon-beats-a-music-store.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-semibold rounded-2xl h-12 px-6 backdrop-blur-md">
                            <a href="https://github.com/riya-ghodele/Neon-Beats-A-Music-Store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Github className="w-4 h-4" /> GitHub Repository
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-blue-500/30 hover:bg-blue-500/10 text-blue-300 font-semibold rounded-2xl h-12 px-6 backdrop-blur-md">
                            <a href="https://lnkd.in/p/dzvkANqU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn Post
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-pink-500/30 hover:bg-pink-500/10 text-pink-300 font-semibold rounded-2xl h-12 px-6 backdrop-blur-md">
                            <Link href="/reports/neon-beats.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono">
                                <FileText className="w-4 h-4 text-pink-400" /> Report (PDF)
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Showcase Screenshot Container */}
                <div className="max-w-6xl w-full px-6 mt-16 relative z-20">
                    <div className="rounded-3xl overflow-hidden border border-pink-500/30 bg-zinc-900/90 shadow-2xl shadow-pink-950/70 p-3 backdrop-blur-2xl">
                        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 rounded-t-2xl border-b border-white/5 font-mono text-xs text-zinc-400">
                            <div className="flex items-center gap-2.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-zinc-200 font-semibold tracking-wide">Neon Beats - Storefront Cockpit</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping" />
                                <span className="text-pink-400 font-semibold tracking-wider uppercase">V2.3 PRODUCTION RELEASE</span>
                            </div>
                        </div>
                        <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-zinc-950">
                            <Image 
                                src="/images/projects/neon-beats.png" 
                                alt="Neon Beats Music Store Interface" 
                                fill
                                className="object-cover object-top hover:scale-102 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Key Architecture Metrics */}
            <section className="max-w-7xl px-6 py-20 mx-auto border-b border-pink-500/15">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "Curated Catalog", val: "11 Instruments", desc: "Guitars, Keyboards, Drums & Accessories", icon: ShoppingBag, color: "text-pink-400" },
                        { label: "Rendering Performance", val: "60 FPS / <16ms", desc: "Hardware-accelerated CSS keyframe transitions", icon: Zap, color: "text-cyan-400" },
                        { label: "State Persistence", val: "LocalStorage", desc: "Zero-loss cart & session state management", icon: RefreshCw, color: "text-purple-400" },
                        { label: "Client-Side Processing", val: "100% Pure Web", desc: "Zero-dependency vanilla HTML/CSS/JS runtime", icon: Sparkles, color: "text-amber-400" }
                    ].map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-pink-500/30 transition-all backdrop-blur-sm group">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{stat.label}</span>
                                    <Icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                                </div>
                                <div className={`text-2xl sm:text-3xl font-black tracking-tight mb-2 text-white`}>
                                    {stat.val}
                                </div>
                                <div className="text-xs font-light text-zinc-400">
                                    {stat.desc}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* 3. Core Features Walkthrough */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-pink-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-pink-500/30 text-pink-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-pink-500/10">
                        Interactive Modules
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Tactile Interaction</span>.
                    </h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Designed with modern e-commerce UX best practices to simulate a production-grade instrument retail storefront.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Sliders,
                            title: "Real-Time Category Filtering",
                            desc: "Instant client-side sorting across Guitars, Keyboards, Drums, and Accessories with zero layout thrashing and smooth opacity fades."
                        },
                        {
                            icon: ShoppingBag,
                            title: "Sliding Cart & Live Calculation",
                            desc: "Interactive drawer cart with increment/decrement item controls, persistent subtotal and tax computations, and sticky checkout action bar."
                        },
                        {
                            icon: Layers,
                            title: "Glassmorphic Bento Grid",
                            desc: "Signature backdrop-filter blur surfaces with neon-accented borders showcasing instrument collections, technical specs, and customer guarantees."
                        },
                        {
                            icon: Lock,
                            title: "Interactive Auth & Modals",
                            desc: "Simulated user authentication and quick-view inspection popups with backdrop light traps and keyboard accessibility."
                        },
                        {
                            icon: Smartphone,
                            title: "Adaptive Mobile-First Layout",
                            desc: "Fluid CSS Grid and flexbox layouts optimized for mobile devices, tablets, and high-DPI desktop displays without external UI frameworks."
                        },
                        {
                            icon: Sparkles,
                            title: "Elastic Logo Splash Screen",
                            desc: "Staggered letter-gathering intro animation spelling out 'NEON BEATS' with alternating neon brand hues and smooth fade out."
                        }
                    ].map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-pink-500/40 transition-all backdrop-blur-sm group flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-pink-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm font-light text-zinc-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* 4. Technical Architecture & Alchemist Protocol */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-pink-500/15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                            Academic &amp; Studio Delivery
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                            Delivered via the <span className="text-amber-400">Alchemist Protocol</span>.
                        </h2>
                        <p className="text-zinc-300 leading-relaxed font-light text-base sm:text-lg">
                            Engineered by <strong>Riya Ghodele</strong> under the Ugam Campus mentorship framework. The project was executed following structured phases: requirement specification, responsive design scaffolding, reactive state implementation, and complete academic documentation.
                        </p>
                        <div className="space-y-3 pt-2">
                            {[
                                "Complete 6-document academic submission suite (Technical Report, User Guide, Developer Docs, Style Guide)",
                                "Zero external CSS frameworks — crafted entirely with custom CSS custom properties and Flexbox/Grid",
                                "Full INR (₹) price formatting and realistic musical instrument equipment taxonomy",
                                "Comprehensive project report PDF available for verification and technical review"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                                    <span className="text-sm text-zinc-300 font-light">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <span className="font-mono text-sm text-zinc-400 uppercase tracking-wider">Project Specification</span>
                            <Badge variant="outline" className="border-cyan-500/40 text-cyan-300 bg-cyan-500/10 font-mono text-xs">
                                Web Prototype
                            </Badge>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-zinc-500">Project Title:</span>
                                <span className="text-white font-semibold">Neon Beats Music Store</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-zinc-500">Developer:</span>
                                <span className="text-pink-300 font-semibold">Riya Ghodele</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-zinc-500">Incubator:</span>
                                <span className="text-amber-300 font-semibold">Ugam Campus Product</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-zinc-500">Tech Stack:</span>
                                <span className="text-zinc-300">HTML5, CSS3, ES6+ JavaScript</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/5">
                                <span className="text-zinc-500">Documentation:</span>
                                <span className="text-emerald-400 font-semibold">PDF Report Included</span>
                            </div>
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row gap-2">
                            <Button asChild className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl">
                                <a href="https://neon-beats-a-music-store.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="flex-1 border-white/10 hover:bg-white/5 text-white font-semibold rounded-xl">
                                <Link href="/reports/neon-beats.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    <FileText className="w-4 h-4 text-pink-400" /> Report PDF
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Navigation */}
            <section className="max-w-7xl px-6 py-12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                <Link href="/work" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to All Projects
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/work/ugam-campus" className="hover:text-amber-400 transition-colors">
                        Ugam Campus Overview
                    </Link>
                    <Link href="/work/authosec" className="hover:text-pink-400 transition-colors">
                        AuthoSec Project &rarr;
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
