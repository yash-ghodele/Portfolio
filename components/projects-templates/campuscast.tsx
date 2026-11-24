'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    ArrowLeft, ExternalLink, Github, Linkedin, Tv, ShieldCheck, Zap, MessageSquare,
    Activity, FileText, Lock, Radio, Layers, CheckCircle2, Clock,
    Server, Smartphone, AlertTriangle, BookOpen, LayoutGrid
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

const SHOWCASE_VIEWS = [
    {
        id: 'overview',
        label: 'Hallway Overview',
        windowTitle: 'CampusCast — WhatsApp-to-Smart-TV Corridor Signage',
        badge: 'LIVE ON HALLWAY TV',
        src: '/images/projects/campuscast-hero.jpg',
        alt: 'CampusCast wall-mounted 4K Smart TV notice board in university engineering corridor synced from WhatsApp',
        caption: 'Zero-hardware Smart TV corridor display updating in real time when an authorized faculty member sends a WhatsApp message.'
    },
    {
        id: 'admin',
        label: 'Admin Command Center',
        windowTitle: 'campus-cast-admin.vercel.app — Dashboard Overview',
        badge: '6/6 SCREENS ONLINE',
        src: '/images/projects/campuscast/02_admin_dashboard.png',
        alt: 'CampusCast Admin Command Center Dashboard with live screen telemetry and ingestion gateway status',
        caption: '8-module Next.js App Router console featuring live screen heartbeat telemetry, message analytics, and Twilio/Meta gateway diagnostics.'
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp Ingestion',
        windowTitle: 'WhatsApp Gateway — Authenticated Faculty Publishing',
        badge: 'HMAC-SHA1 VERIFIED',
        src: '/images/projects/campuscast/01_whatsapp_notice_submission.png',
        alt: 'CampusCast WhatsApp notice submission with #urgent and #exam tags receiving instant confirmation',
        caption: 'Authorized faculty submit plain-text notices, tags (#urgent, #exam, #ece), or PDF/image circulars directly from WhatsApp with instant TwiML confirmation.'
    },
    {
        id: 'kiosk',
        label: 'Department Smart TV',
        windowTitle: 'campus-cast-display.vercel.app/display/ece — Adaptive Kiosk',
        badge: 'ZERO-HARDWARE TV',
        src: '/images/projects/campuscast/04_department_wise_notice_display.png',
        alt: 'CampusCast ECE department hallway Smart TV display showing adaptive media spotlight, QR-linked PDFs, and bulletin feed',
        caption: 'Adaptive Smart Multi-Media View pairing visual spotlights, QR-accessible PDF circulars, upcoming schedules, and live bulletin feeds.'
    },
    {
        id: 'matrix',
        label: '6-Dept Matrix',
        windowTitle: 'campus-cast-display.vercel.app/display/all — All-Campus Wall',
        badge: 'REAL-TIME ONSNAPSHOT',
        src: '/images/projects/campuscast/03_digital_notice_board_on_screen.png',
        alt: 'CampusCast All-Campus 6-department screen matrix across ECE, CSE, AIML, MECH, CIVIL, and EEE',
        caption: 'Unified all-campus matrix monitoring ECE, CSE, AIML, MECH, CIVIL, and EEE corridor displays simultaneously with a live bottom ticker.'
    },
    {
        id: 'kanban',
        label: 'Kanban Lifecycle',
        windowTitle: 'campus-cast-admin.vercel.app/notices — Kanban Management',
        badge: 'AUTO-EXPIRY ENGINE',
        src: '/images/projects/campuscast/05_notice_management_interface.png',
        alt: 'CampusCast Notice Management Kanban board with Scheduled, Active on Kiosks, and Expired columns',
        caption: 'Kanban lifecycle console with Scheduled, Active, and Expired columns, department scope filters, and in-place WhatsApp notice editing.'
    }
] as const

export default function CampusCast() {
    const [activeViewId, setActiveViewId] = useState<string>('overview')
    const activeView = SHOWCASE_VIEWS.find((v) => v.id === activeViewId) ?? SHOWCASE_VIEWS[0]

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveViewId((prev) => {
                const idx = SHOWCASE_VIEWS.findIndex((v) => v.id === prev)
                return SHOWCASE_VIEWS[(idx + 1) % SHOWCASE_VIEWS.length].id
            })
        }, 5000)
        return () => clearInterval(timer)
    }, [activeViewId])

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-28 pb-20 border-b border-blue-500/15">
                {/* Background FX */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-zinc-950 to-zinc-950 opacity-90 pointer-events-none" />
                <div className="absolute top-[-25%] right-[-10%] w-[900px] h-[900px] rounded-full blur-[180px] bg-blue-600/15 pointer-events-none" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] bg-emerald-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25 pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <div>
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                            <Badge variant="outline" className="border-blue-500/30 text-blue-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-blue-500/10 backdrop-blur-md inline-flex items-center gap-2 shadow-lg shadow-blue-950/50">
                                <Tv className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                                Zero-Hardware Smart TV Signage OS
                            </Badge>
                            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-emerald-500/10 backdrop-blur-md inline-flex items-center gap-2">
                                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                                B.Tech Major Project-II
                            </Badge>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-400 drop-shadow-2xl">
                            CampusCast
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base font-mono text-blue-400/90 tracking-widest uppercase font-semibold mt-4">
                            WhatsApp-Driven Campus Communication Operating System
                        </p>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Updates physical hallway Smart TVs the moment an authorized faculty member hits send on WhatsApp. Engineered with <span className="text-blue-400 font-medium">HMAC-authenticated webhooks</span>, deterministic lexical parsing, and real-time <span className="text-emerald-400 font-medium">Cloud Firestore onSnapshot</span> sync with zero Raspberry Pi or external media hardware.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-2xl h-12 px-6 shadow-xl shadow-blue-900/30">
                            <a href="https://campus-cast-display.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Tv className="w-4 h-4" /> Live TV Display
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-300 font-semibold rounded-2xl h-12 px-6 backdrop-blur-md">
                            <a href="https://campus-cast-admin.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="w-4 h-4 text-emerald-400" /> Admin Console
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white font-semibold rounded-2xl h-12 px-6 backdrop-blur-md">
                            <a href="https://github.com/yash-ghodele/CampusCast" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Github className="w-4 h-4" /> GitHub Repository
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-blue-500/30 hover:bg-blue-500/10 text-blue-300 font-semibold rounded-2xl h-12 px-6 backdrop-blur-md">
                            <Link href="/reports/campuscast-major-project-report.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono">
                                <FileText className="w-4 h-4 text-blue-400" /> Final Report (PDF)
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Interactive Showcase Screenshot Container */}
                <div className="max-w-6xl w-full px-2 sm:px-6 mt-16 relative z-20">
                    {/* View Switcher Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                        {SHOWCASE_VIEWS.map((view) => {
                            const isActive = view.id === activeView.id
                            return (
                                <button
                                    key={view.id}
                                    type="button"
                                    onClick={() => setActiveViewId(view.id)}
                                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                                        isActive
                                            ? 'bg-blue-500/20 border-blue-400/60 text-blue-200 shadow-lg shadow-blue-950/60'
                                            : 'bg-zinc-900/70 border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
                                    }`}
                                >
                                    {view.label}
                                </button>
                            )
                        })}
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-blue-500/30 bg-zinc-900/90 shadow-2xl shadow-blue-950/70 p-3 backdrop-blur-2xl">
                        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 rounded-t-2xl border-b border-white/5 font-mono text-xs text-zinc-400 gap-4">
                            <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-3 h-3 rounded-full bg-red-500/80 shrink-0" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80 shrink-0" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shrink-0" />
                                <span className="ml-2 text-zinc-200 font-semibold tracking-wide truncate">{activeView.windowTitle}</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                <span className="text-emerald-400 font-semibold tracking-wider uppercase">{activeView.badge}</span>
                            </div>
                        </div>
                        <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-zinc-950">
                            {SHOWCASE_VIEWS.map((view, idx) => {
                                const isActive = view.id === activeView.id
                                return (
                                    <Image
                                        key={view.id}
                                        src={view.src}
                                        alt={view.alt}
                                        fill
                                        className={`object-cover object-top transition-opacity duration-700 ${
                                            isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                                        }`}
                                        priority={idx === 0}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm text-zinc-400 mt-4 max-w-3xl mx-auto">
                        {activeView.caption}
                    </p>
                </div>
            </section>

            {/* 2. Empirical Benchmark Metrics */}
            <section className="max-w-7xl px-6 py-20 mx-auto border-b border-blue-500/15">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            label: "Deployed E2E Latency",
                            val: "1,252.7 ms",
                            desc: "Mean webhook POST to display push (N=10, P95 1,402.8 ms vs <5s SLA)",
                            icon: Zap,
                            color: "text-blue-400"
                        },
                        {
                            label: "Firestore Listener Sync",
                            val: "235.9 ms",
                            desc: "Dual-client onSnapshot propagation in asia-south1 (N=20, P95 530.2 ms)",
                            icon: Activity,
                            color: "text-emerald-400"
                        },
                        {
                            label: "Zero-Hardware Rollout",
                            val: "6 Dept Kiosks",
                            desc: "ECE, CSE, AIML, MECH, CIVIL, EEE + All-Campus matrix in native TV browsers",
                            icon: Tv,
                            color: "text-purple-400"
                        },
                        {
                            label: "Verification & Security",
                            val: "14/14 Tests",
                            desc: "12 component tests + 2 code inspections, 36/36 endpoints & 20-point audit",
                            icon: ShieldCheck,
                            color: "text-amber-400"
                        }
                    ].map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 transition-all backdrop-blur-sm group">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{stat.label}</span>
                                    <Icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                                </div>
                                <div className="text-2xl sm:text-3xl font-black tracking-tight mb-2 text-white">
                                    {stat.val}
                                </div>
                                <div className="text-xs font-light text-zinc-400 leading-relaxed">
                                    {stat.desc}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* 3. End-to-End Architecture & Deterministic Ingestion */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-blue-500/15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <Badge variant="outline" className="border-blue-500/30 text-blue-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-blue-500/10">
                            8-Stage Ingestion Pipeline
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                            WhatsApp as an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Authenticated Publisher</span>.
                        </h2>
                        <p className="text-zinc-300 leading-relaxed font-light text-base sm:text-lg">
                            Faculty never log into an ERP dashboard to post an urgent lab notice or exam timetable. Sending a structured WhatsApp message triggers an 8-stage serverless pipeline that verifies cryptographic signatures, authorizes the phone number against the Firestore roster, parses tags deterministically, and pushes live updates to corridor Smart TVs.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {[
                                {
                                    title: "HMAC Signature Check",
                                    desc: "Timing-safe X-Twilio-Signature (SHA1) & X-Hub-Signature-256 (SHA256) verification."
                                },
                                {
                                    title: "Deterministic Lexical Parser",
                                    desc: "Zero LLM latency or prompt-injection risk; parses #urgent, #exam, #schedule, and ECE:."
                                },
                                {
                                    title: "Offline Display Resilience",
                                    desc: "localStorage fallback keeps notices rotating on hallway TVs during Wi-Fi dropouts."
                                },
                                {
                                    title: "Immutable Audit Ledger",
                                    desc: "Append-only Firestore rules (allow update, delete: if false) with masked phone PII."
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                    <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Real Code Block */}
                    <div className="rounded-2xl overflow-hidden border border-blue-500/20 bg-zinc-900/70 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                <span className="ml-2 text-xs text-zinc-400 font-mono">packages/shared/src/parsing.ts</span>
                            </div>
                            <span className="text-[11px] font-mono text-emerald-400">Sub-ms Lexical Engine</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-xs sm:text-sm font-mono leading-relaxed text-zinc-300">
                                <span className="text-zinc-500">{'// Deterministic parseNoticeMessage("#urgent #ece ECE: DSP Lab suspended")'}</span>{'\n'}
                                <span className="text-blue-400">export function</span> <span className="text-amber-300">parseNoticeMessage</span>(text: <span className="text-emerald-400">string</span>) {'{'}{'\n'}
                                {'  '}<span className="text-blue-400">let</span> priority: NoticePriority = <span className="text-green-400">&apos;normal&apos;</span>;{'\n'}
                                {'  '}<span className="text-blue-400">if</span> (/<span className="text-rose-400">#urgent</span>/i.test(content)) {'{'}{'\n'}
                                {'    '}priority = <span className="text-green-400">&apos;urgent&apos;</span>;{'\n'}
                                {'    '}category = <span className="text-green-400">&apos;emergency&apos;</span>;{'\n'}
                                {'  '}{'}'}{'\n\n'}
                                {'  '}<span className="text-zinc-500">{'// Timing-safe webhook signature check in /api/webhook/twilio'}</span>{'\n'}
                                {'  '}<span className="text-blue-400">const</span> hmac = crypto.createHmac(<span className="text-green-400">&apos;sha1&apos;</span>, authToken){'\n'}
                                {'    '}.update(data, <span className="text-green-400">&apos;utf-8&apos;</span>).digest(<span className="text-green-400">&apos;base64&apos;</span>);{'\n'}
                                {'  '}<span className="text-blue-400">return</span> crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(hmac));{'\n'}
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. 6 Display Experience Modes */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-blue-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-emerald-500/10">
                        Smart TV Display Engine
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        6 Adaptive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Kiosk Modes</span>.
                    </h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Runs directly inside Android TV, LG webOS, Samsung Tizen, or Fire TV browsers via clean departmental routes like <code className="text-blue-300 font-mono text-sm">/display/ece</code>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Layers,
                            title: "Adaptive Multi-Media View",
                            desc: "Default layout pairing a 7-column visual spotlight, QR-linked official PDF circulars, and a live typographic bulletin feed."
                        },
                        {
                            icon: Smartphone,
                            title: "Hero Notice + QR Handoff",
                            desc: "80% screen footprint hero card with category badges, schedule chips, and instant WhatsApp QR code scanning for students."
                        },
                        {
                            icon: Radio,
                            title: "News Ticker Marquee",
                            desc: "Always-visible 48px bottom scrolling ticker bar keeping secondary announcements and active notice counts visible."
                        },
                        {
                            icon: AlertTriangle,
                            title: "Emergency Override (#DC2626)",
                            desc: "Full-screen high-contrast red alert triggered by #urgent WhatsApp messages or PIN-protected Admin emergency overrides."
                        },
                        {
                            icon: LayoutGrid,
                            title: "6-Department Matrix (/display/all)",
                            desc: "Live oversight wall streaming ECE, CSE, AIML, MECH, CIVIL, and EEE corridor statuses with 30-second heartbeat uptimes."
                        },
                        {
                            icon: Clock,
                            title: "Scheduled Lifecycle & Auto-Expiry",
                            desc: "Composite-indexed Cloud Firestore scheduler (/api/scheduler) transitions notices automatically from Scheduled to Active to Expired."
                        }
                    ].map((mode, i) => {
                        const Icon = mode.icon
                        return (
                            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/40 transition-all backdrop-blur-sm group">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-200 transition-colors">
                                    {mode.title}
                                </h3>
                                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                                    {mode.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* 5. Monorepo Architecture, Security & Report CTA */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-blue-500/15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                            Academic Research &amp; Production Audit
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                            20-Point Security &amp; <span className="text-amber-400">Empirical Benchmarks</span>.
                        </h2>
                        <p className="text-zinc-300 leading-relaxed font-light text-base sm:text-lg">
                            Submitted as a B.Tech Major Project-II in Electronics and Computer Engineering at MIT College of Engineering, Chhatrapati Sambhajinagar under the guidance of{' '}
                            <a
                                href="https://www.linkedin.com/in/roopali-palwe-a79b6659/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-medium hover:text-blue-400 underline decoration-blue-500/40 underline-offset-4 transition-colors"
                            >
                                Prof. Roopali Palwe
                            </a>{' '}
                            (Project Guide). Evaluated across dual-client Cloud Firestore trials, live Vercel webhook benchmarks, and a 20-category cybersecurity audit.
                        </p>
                        <div className="space-y-3 pt-2">
                            {[
                                "Monorepo workspaces: campuscast-display, campuscast-admin, and @campuscast/shared",
                                "Strict XSS URI sanitization via getSafeUrl() neutralizing javascript: and vbscript: payloads",
                                "Token-bucket burst rate limiting (10 msgs/min) & silent drop for unauthorized numbers",
                                "Full Major Project-II Report PDF & engineering architecture blog available for review"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Lock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span className="text-sm text-zinc-300 font-light">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2">
                            <Link
                                href="/blogs/shipping-campuscast-in-production"
                                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:underline"
                            >
                                <BookOpen className="w-4 h-4" />
                                Read production deep dive &rarr;
                            </Link>
                            <Link
                                href="/blogs/whatsapp-pipelines-research"
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline"
                            >
                                <BookOpen className="w-4 h-4" />
                                Read pipeline research (Part 1) &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <span className="font-mono text-sm text-zinc-400 uppercase tracking-wider">System Specification</span>
                            <Badge variant="outline" className="border-emerald-500/40 text-emerald-300 bg-emerald-500/10 font-mono text-xs">
                                Production Verified
                            </Badge>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between gap-4 py-2 border-b border-white/5">
                                <span className="text-zinc-500">Project Guide:</span>
                                <a
                                    href="https://www.linkedin.com/in/roopali-palwe-a79b6659/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-white hover:text-blue-400 font-semibold text-right transition-colors"
                                >
                                    <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                    <span>Prof. Roopali Palwe</span>
                                </a>
                            </div>
                            <div className="flex justify-between gap-4 py-2 border-b border-white/5">
                                <span className="text-zinc-500">Architecture:</span>
                                <span className="text-white font-semibold text-right">Next.js 14 Monorepo</span>
                            </div>
                            <div className="flex justify-between gap-4 py-2 border-b border-white/5">
                                <span className="text-zinc-500">Cloud Sync:</span>
                                <span className="text-emerald-300 font-semibold text-right">Firestore (asia-south1)</span>
                            </div>
                            <div className="flex justify-between gap-4 py-2 border-b border-white/5">
                                <span className="text-zinc-500">E2E Latency:</span>
                                <span className="text-blue-300 font-semibold text-right">1.25s Mean / 1.40s P95</span>
                            </div>
                            <div className="flex justify-between gap-4 py-2 border-b border-white/5">
                                <span className="text-zinc-500">Gateways:</span>
                                <span className="text-zinc-300 text-right">Twilio &amp; Meta Cloud API</span>
                            </div>
                            <div className="flex justify-between gap-4 py-2 border-b border-white/5">
                                <span className="text-zinc-500">Report PDF:</span>
                                <span className="text-amber-300 font-semibold text-right">Major Project-II Final</span>
                            </div>
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row gap-2">
                            <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl">
                                <a href="https://campus-cast-display.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    <Server className="w-4 h-4" /> Live Display
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="flex-1 border-white/10 hover:bg-white/5 text-white font-semibold rounded-xl">
                                <Link href="/reports/campuscast-major-project-report.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    <FileText className="w-4 h-4 text-blue-400" /> Report PDF
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
                    <Link href="/blogs/whatsapp-pipelines-research" className="hover:text-emerald-400 transition-colors">
                        Architecture Blog
                    </Link>
                    <Link href="/work/fuelshield" className="hover:text-blue-400 transition-colors">
                        FuelShield Project &rarr;
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
