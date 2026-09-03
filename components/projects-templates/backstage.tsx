import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, ExternalLink, Github, Layout, Calendar, Layers, Clock, ShieldCheck, 
  Database, Users, FileText, CheckCircle2, Cloud, HardDrive, RefreshCw, Radio, 
  MapPin, Share2, Sparkles, Check, ChevronRight, Sliders, Lock, FileSpreadsheet,
  Megaphone, Truck, Shield
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function Backstage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-rose-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-28 pb-20 border-b border-rose-500/15">
                {/* Dynamic Crimson Radial Lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/30 via-zinc-950 to-zinc-950 opacity-90 pointer-events-none" />
                <div className="absolute top-[-25%] right-[-10%] w-[900px] h-[900px] rounded-full blur-[180px] bg-rose-600/15 pointer-events-none" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] bg-crimson-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25 pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Badge variant="outline" className="border-rose-500/30 text-rose-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-rose-500/10 backdrop-blur-md inline-flex items-center gap-2 shadow-lg shadow-rose-950/50">
                            <Layout className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                            Event Production &amp; Logistics OS
                        </Badge>
                        <Badge variant="outline" className="border-rose-400/30 text-rose-200 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-rose-400/10 backdrop-blur-md inline-flex items-center gap-2">
                            <Cloud className="w-3.5 h-3.5 text-rose-300" />
                            Cloudflare R2 &amp; Firebase Architecture
                        </Badge>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-3">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-500 drop-shadow-2xl">
                            Backstage
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base font-mono text-rose-400/90 tracking-widest uppercase font-semibold">
                            Unified Real-Time Event Coordination &amp; Operational Logistics Cockpit
                        </p>
                    </div>

                    {/* Subheadline */}
                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Replacing fragmented spreadsheets and WhatsApp groups with <span className="text-rose-400 font-medium">master runsheet timelines</span>, 4-stage logistics inventory tracking, and zero-egress Cloudflare R2 asset storage.
                    </p>

                    {/* CTA Action Bar */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button asChild size="lg" className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold rounded-full h-14 px-9 text-base shadow-xl shadow-rose-900/40 transition-all hover:scale-105">
                            <Link href="https://github.com/yash-ghodele/Backstage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                Explore GitHub Repository <Github className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-rose-500/30 text-zinc-200 hover:bg-rose-500/10 hover:text-white rounded-full h-14 px-9 text-base backdrop-blur-md">
                            <Link href="https://github.com/yash-ghodele/Backstage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono">
                                <Github className="w-4 h-4 text-rose-400" /> Source Repository
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* 2. Cockpit Screenshot Showcase */}
                <div className="max-w-6xl w-full px-6 mt-16 relative z-20">
                    <div className="rounded-3xl overflow-hidden border border-rose-500/30 bg-zinc-900/90 shadow-2xl shadow-rose-950/70 p-3 backdrop-blur-2xl">
                        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 rounded-t-2xl border-b border-white/5 font-mono text-xs text-zinc-400">
                            <div className="flex items-center gap-2.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="ml-2 text-zinc-200 font-semibold tracking-wide">Backstage Production Cockpit v1.0</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
                                <span className="text-rose-400 font-semibold tracking-wider uppercase">LIVE EVENT ENGINE</span>
                            </div>
                        </div>
                        <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-zinc-950">
                            <Image 
                                src="/images/projects/backstage.jpg" 
                                alt="Backstage Production Cockpit Interface" 
                                fill
                                className="object-cover object-top hover:scale-102 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. 8 Core Operational Modules Grid */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-rose-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-rose-500/30 text-rose-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-rose-500/10">
                        Operational Core
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        8 Specialized <span className="text-rose-400">Workspace Modules</span>.
                    </h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Designed to streamline end-to-end event execution from pre-event planning through post-event archiving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            code: "MODULE 01",
                            icon: Clock,
                            title: "Master Runsheet Timeline",
                            desc: "Day-of chronological schedule with time markers (08:00 AM), stage cues, venue assignments, and Move Up/Down reordering controls."
                        },
                        {
                            code: "MODULE 02",
                            icon: Layers,
                            title: "3-Column Task Kanban",
                            desc: "Drag-and-drop workflow (To Do, In Progress, Done) with priority tags (Low, Medium, High) and automated notification triggers."
                        },
                        {
                            code: "MODULE 03",
                            icon: Truck,
                            title: "4-Stage Logistics Pipeline",
                            desc: "Real-time inventory tracking (Pending → In Transit → Delivered → Ready) across Equipment, Supplies, Food &amp; Beverage, and Signage."
                        },
                        {
                            code: "MODULE 04",
                            icon: HardDrive,
                            title: "Cloudflare R2 File Vault",
                            desc: "Direct presigned upload URLs, expiring inline-view links, zero egress charges, and granular visibility controls (event vs restricted)."
                        },
                        {
                            code: "MODULE 05",
                            icon: Megaphone,
                            title: "5-Platform Marketing Studio",
                            desc: "Social campaign builder across Instagram, Twitter, LinkedIn, Facebook, and Newsletters with 4-stage approval (Draft → Published)."
                        },
                        {
                            code: "MODULE 06",
                            icon: Users,
                            title: "Teams & Onboarding Roster",
                            desc: "Roster allocations, lead designations, role permissions (Admin, Lead, Volunteer), and personalized onboarding briefs."
                        },
                        {
                            code: "MODULE 07",
                            icon: MapPin,
                            title: "Venue & Capacity Manager",
                            desc: "Physical space allocations (Stages, Booths, Lounges), seating capacities, and responsible team assignments."
                        },
                        {
                            code: "MODULE 08",
                            icon: FileSpreadsheet,
                            title: "Multi-Section CSV Engine",
                            desc: "One-click admin export generating structured CSV archives containing overview, teams, rosters, tasks, venues, files, and logistics."
                        }
                    ].map((mod, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/40 transition-all backdrop-blur-sm group flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5 font-mono font-black text-6xl text-rose-400 group-hover:opacity-10 transition-opacity">
                                0{i + 1}
                            </div>
                            <div className="space-y-4">
                                <div className="p-3.5 bg-rose-500/10 rounded-2xl text-rose-400 w-fit group-hover:scale-110 transition-transform">
                                    <mod.icon size={26} />
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">{mod.code}</span>
                                    <h3 className="text-xl font-bold text-white mt-1">{mod.title}</h3>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    {mod.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Bento Grid Architecture Cockpit */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-rose-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Zero-Egress Storage Feature Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-rose-950/20 border border-rose-500/20 p-8 relative overflow-hidden group hover:border-rose-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-rose-400">
                            <Cloud size={220} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-rose-400 uppercase tracking-widest text-xs font-mono font-bold mb-2 flex items-center gap-2">
                                <HardDrive className="w-4 h-4" /> Zero Egress Cloud Storage
                            </h3>
                            <div className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">Cloudflare R2</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Eliminating bandwidth penalties with S3-compatible object storage. Server-side Route Handlers issue presigned upload &amp; download URLs with 15-minute expiration windows.
                            </p>
                        </div>
                    </div>

                    {/* Firestore Realtime Listeners Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-rose-500/30 transition-all backdrop-blur-sm">
                        <RefreshCw className="w-10 h-10 text-rose-400 mb-4 animate-spin-slow" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">Real-Time</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Firestore State Sync</div>
                        </div>
                    </div>

                    {/* RBAC Security Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-rose-500/30 transition-all backdrop-blur-sm">
                        <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">3 Roles</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Admin, Lead &amp; Volunteer RBAC</div>
                        </div>
                    </div>

                    {/* Tech Stack Specs */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full font-mono text-xs text-zinc-300">
                            <div><span className="text-rose-400 font-bold">Framework:</span> Next.js 14</div>
                            <div><span className="text-rose-400 font-bold">Database:</span> Firestore</div>
                            <div><span className="text-rose-400 font-bold">Auth:</span> Firebase Auth</div>
                            <div><span className="text-rose-400 font-bold">Storage:</span> Cloudflare R2</div>
                            <div><span className="text-rose-400 font-bold">Styling:</span> Tailwind CSS</div>
                            <div><span className="text-rose-400 font-bold">Icons:</span> Lucide React</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. System Code Inspector */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 md:sticky md:top-24">
                        <div className="space-y-3">
                            <Badge variant="outline" className="border-rose-500/30 text-rose-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-rose-500/10">
                                Cloud Infrastructure
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                                Presigned S3 URLs &amp; <span className="text-rose-400">Zero-Egress Storage</span>.
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                Backstage integrates Cloudflare R2 via `@aws-sdk/client-s3` and `@aws-sdk/s3-request-presigner`. Files are uploaded directly from the browser to R2 buckets using presigned `PutObject` commands, avoiding server upload overhead and bandwidth fees.
                            </p>
                            <div className="space-y-3 text-sm font-mono text-rose-200/90 pt-2">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Presigned PUT URLs for Direct R2 Uploads</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Presigned GET URLs with 15-Minute Expiration</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Firebase Admin Authentication Verification</div>
                            </div>
                        </div>
                    </div>

                    {/* Code Terminal */}
                    <div className="rounded-2xl overflow-hidden border border-rose-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-rose-400 font-mono">lib/r2.ts</span>
                        </div>
                        <div className="p-6 overflow-x-auto font-mono">
                            <pre className="text-sm leading-relaxed">
                                <span className="text-zinc-500">// Cloudflare R2 S3 Client &amp; Presigner</span><br />
                                <span className="text-fuchsia-400">import</span> {'{'} S3Client, GetObjectCommand {'}'} <span className="text-fuchsia-400">from</span> <span className="text-emerald-300">&quot;@aws-sdk/client-s3&quot;</span>;<br />
                                <span className="text-fuchsia-400">import</span> {'{'} getSignedUrl {'}'} <span className="text-fuchsia-400">from</span> <span className="text-emerald-300">&quot;@aws-sdk/s3-request-presigner&quot;</span>;<br /><br />
                                <span className="text-fuchsia-400">export const</span> <span className="text-yellow-200">r2Client</span> = <span className="text-fuchsia-400">new</span> <span className="text-yellow-200">S3Client</span>({'{'}<br />
                                &nbsp;&nbsp;region: <span className="text-emerald-300">&quot;auto&quot;</span>,<br />
                                &nbsp;&nbsp;endpoint: <span className="text-emerald-300">`https://$&#123;process.env.CLOUDFLARE_ACCOUNT_ID&#125;.r2.cloudflarestorage.com`</span>,<br />
                                &nbsp;&nbsp;credentials: {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;accessKeyId: process.env.R2_ACCESS_KEY_ID!,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,<br />
                                &nbsp;&nbsp;{'}'},<br />
                                {'}'});
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-rose-500/20 flex items-center justify-center group-hover:border-rose-500/50 bg-rose-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-rose-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-rose-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
