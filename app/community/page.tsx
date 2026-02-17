import { getEvents } from "@/lib/sanity/fetch"
import EventsTimeline from '@/components/events-timeline'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Users, Target, Mic, Globe, BarChart, Handshake, Sparkles, Zap } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/reveal-on-scroll"
import { EventMetadata } from "@/lib/types"

type CommunityEvent = {
    slug: string
    metadata: EventMetadata
}

export const metadata = {
    title: 'Community & Events',
    description: 'Community building, event leadership, and real-world execution — from organizing InnoHack (200+ participants) to coordinating SPIC MACAY cultural festivals.',
    openGraph: {
        title: 'Community & Events | Yash Ghodele',
        description: 'Hackathon organizer, cultural event coordinator, and student community leader. Leading events with 200+ participants across technology and arts.',
        url: 'https://yash-ghodele.pages.dev/community',
        siteName: 'Yash Ghodele Portfolio',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: 'Community & Events | Yash Ghodele',
        description: 'Hackathon organizer, cultural event coordinator, and student community leader.',
        creator: '@why_be_yashhh',
    },
    alternates: {
        canonical: 'https://yash-ghodele.pages.dev/community',
    },
}

// Core Skills Data
const CORE_SKILLS = [
    {
        icon: Target,
        title: "Event Strategy",
        desc: "From ideation to execution.",
        gradient: "from-violet-500 to-purple-600"
    },
    {
        icon: Users,
        title: "Team Leadership",
        desc: "Managing diverse teams effectively.",
        gradient: "from-purple-500 to-indigo-600"
    },
    {
        icon: Mic,
        title: "Speaker Coordination",
        desc: "Liaising with industry experts.",
        gradient: "from-indigo-500 to-blue-600"
    },
    {
        icon: Globe,
        title: "PR & Outreach",
        desc: "Driving engagement & footfall.",
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        icon: BarChart,
        title: "Logistics & Ops",
        desc: "End-to-end on-ground handling.",
        gradient: "from-violet-500 to-fuchsia-600"
    },
    {
        icon: Handshake,
        title: "Sponsorships",
        desc: "Securing funding & partners.",
        gradient: "from-fuchsia-500 to-pink-600"
    }
]

const STATS = [
    { number: "5+", label: "Events Led" },
    { number: "500+", label: "Participants" },
    { number: "20+", label: "Team Members" },
    { number: "₹50k+", label: "Funds Raised" },
]

import HeroNetwork from "@/components/ui/hero-network"

export default async function CommunityPage() {
    const events: CommunityEvent[] = (await getEvents()).sort((a: CommunityEvent, b: CommunityEvent) => {
        return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    })

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30 selection:text-violet-100 overflow-hidden relative">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 bg-[#050505]">
                <HeroNetwork showParticles={false} />
            </div>

            {/* Decorative Grid Pattern */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <main className="relative z-10">

                {/* 1. Hero Section */}
                <section className="relative pt-40 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
                    {/* Decorative floating orbs */}
                    <div className="absolute top-20 right-10 w-72 h-72 bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between mb-20">
                        <div className="max-w-3xl">
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {/* Pill badge with sparkle */}
                                <span className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-md">
                                    <Sparkles className="w-3 h-3" />
                                    Community &amp; Operations
                                </span>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1] mb-8">
                                    <span className="text-white">Designing Experiences.</span> <br />
                                    <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent italic animate-gradient" style={{ backgroundSize: '200% auto' }}>Leading Communities.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl leading-relaxed">
                                    From hackathons to cultural showcases, I&apos;ve led and executed student-driven events focused on impact, learning, and scale.
                                </p>
                            </div>
                        </div>

                        {/* Stats Counter — animated gradient border */}
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards relative group">
                            {/* Animated border glow */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-600/50 via-purple-500/50 to-indigo-600/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
                            <div className="relative grid grid-cols-2 gap-8 md:gap-12 bg-[#0a0a0a]/80 backdrop-blur-xl border border-violet-500/15 p-8 rounded-3xl hover:border-violet-500/30 transition-all duration-500 shadow-2xl shadow-violet-500/5">
                                {STATS.map((stat, i) => (
                                    <Stat key={i} number={stat.number} label={stat.label} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative horizontal line */}
                    <div className="flex items-center gap-4 opacity-30">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                        <Zap className="w-4 h-4 text-violet-400" />
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                    </div>
                </section>

                {/* 2. Signature Events Section */}
                <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
                    <RevealOnScroll>
                        <div className="flex items-baseline justify-between mb-16">
                            <div>
                                <span className="text-xs text-violet-400 uppercase tracking-[0.3em] font-medium mb-3 block">Selected Highlights</span>
                                <h2 className="text-3xl md:text-5xl font-serif font-medium gradient-text">Signature Events</h2>
                            </div>
                            <span className="hidden md:block text-stone-600 text-sm font-mono">{events.length} events</span>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 gap-14">
                        {events.slice(0, 3).map((event: any, index: number) => (
                            <RevealOnScroll key={event.slug} delay={index * 0.1}>
                                <EventCard event={event} index={index} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </section>

                {/* 3. Skills / Strengths Section */}
                <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto relative">
                    {/* Decorative orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

                    <RevealOnScroll>
                        <div className="relative bg-white/[0.02] backdrop-blur-md border border-violet-500/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 md:gap-24 overflow-hidden">
                            {/* Inner decorative gradient */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-500/5 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

                            <div className="md:w-1/3 relative z-10">
                                <span className="text-xs text-violet-400 uppercase tracking-[0.3em] font-medium mb-3 block">What I Bring</span>
                                <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">Execution <br />Arsenal</h2>
                                <p className="text-stone-400 leading-relaxed mb-8">
                                    My approach to event management goes beyond logistics. It&apos;s about creating cohesive systems where teams thrive and audiences engage.
                                </p>
                                <Link href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 text-violet-300 hover:text-white transition-colors border border-violet-500/20 hover:border-violet-400/50 hover:bg-violet-500/10 px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase group">
                                    View Full Resume <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>

                            <StaggerContainer className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                                {CORE_SKILLS.map((skill, idx) => (
                                    <StaggerItem key={idx}>
                                        <div className="group cursor-default p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/25 transition-all duration-500 relative overflow-hidden h-full">
                                            {/* Hover gradient fill */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                                            <div className={`relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <skill.icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="relative z-10 text-base font-medium text-white mb-1 group-hover:text-violet-200 transition-colors">{skill.title}</h3>
                                            <p className="relative z-10 text-sm text-stone-500 leading-relaxed text-balance group-hover:text-stone-400 transition-colors">{skill.desc}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </RevealOnScroll>
                </section>

                {/* 4. The Journey (Timeline) */}
                <section className="py-20">
                    <RevealOnScroll>
                        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
                            <span className="text-xs text-violet-400 uppercase tracking-[0.3em] font-medium mb-3 block">The Journey</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-medium gradient-text mb-4">The Timeline</h2>
                        </div>
                    </RevealOnScroll>
                    <EventsTimeline events={events} />
                </section>

                {/* 5. Trusted By / Social Proof — Marquee Style */}
                <section className="py-16 overflow-hidden relative border-y border-white/5">
                    {/* Side fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                    <RevealOnScroll className="text-center mb-8">
                        <p className="text-stone-500 uppercase tracking-[0.3em] text-xs font-semibold">Trusted by Communities at</p>
                    </RevealOnScroll>

                    {/* Marquee row */}
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...Array(3)].map((_, repeat) => (
                            <div key={repeat} className="flex items-center mx-2">
                                {["MIT Chhatrapati Sambhajinagar", "SPIC MACAY", "GDSC", "RedX Club", "ECESA", "BotBuddies"].map((name, i) => (
                                    <div key={`${repeat}-${i}`} className="flex items-center">
                                        <span className="text-2xl md:text-4xl font-serif text-white/40 hover:text-violet-300 transition-colors duration-500 whitespace-nowrap px-6 cursor-default">
                                            {name}
                                        </span>
                                        <span className="w-2 h-2 rounded-full bg-violet-500/30 flex-shrink-0" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. CTA */}
                <section className="py-32 px-6 md:px-10 text-center relative overflow-hidden">
                    {/* CTA ambient glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[120px]" />
                    </div>

                    <RevealOnScroll className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                            <Sparkles className="w-3 h-3 text-violet-400" />
                            <span className="text-xs text-violet-300 uppercase tracking-[0.2em] font-medium">Open to Collaborate</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">Ready to Build?</h2>
                        <p className="text-lg text-stone-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
                            If you&apos;re looking for someone who can plan, lead, and execute under pressure — let&apos;s connect.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link href="#contact" className="group relative px-8 py-4 rounded-full font-medium w-full md:w-auto overflow-hidden">
                                {/* Button gradient bg */}
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:from-violet-500 group-hover:to-indigo-500 transition-all duration-300" />
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                                    Let&apos;s Talk <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </Link>
                            <Link href="/resume.pdf" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-violet-500/10 hover:border-violet-500/25 transition-all w-full md:w-auto backdrop-blur-sm hover:scale-105 transform duration-300">
                                View Resume
                            </Link>
                        </div>
                    </RevealOnScroll>
                </section>
            </main>
        </div>
    )
}

function Stat({ number, label }: { number: string, label: string }) {
    return (
        <div className="flex flex-col text-center md:text-left">
            <span className="text-3xl md:text-4xl font-serif font-medium text-white mb-1">
                <AnimatedCounter target={number} />
            </span>
            <span className="text-stone-500 text-xs uppercase tracking-wider font-medium">{label}</span>
        </div>
    )
}

function EventCard({ event, index }: { event: CommunityEvent, index: number }) {
    return (
        <Link href={`/community/${event.slug}`} className="group block relative">
            {/* Hover Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2rem] blur-xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 p-4 md:p-8 rounded-3xl transition-all duration-500 border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:border-violet-500/20 group-hover:bg-white/[0.04]">
                {/* Image Side */}
                <div className="w-full md:w-5/12 aspect-video md:aspect-[4/3] relative overflow-hidden rounded-2xl bg-white/5 shadow-2xl border border-white/5 group-hover:border-violet-500/25 transition-all duration-500">
                    <Image
                        src={event.metadata.image || "/placeholder.jpg"}
                        alt={event.metadata.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-lg">
                            {event.metadata.date.split(' ').pop() || event.metadata.date}
                        </Badge>
                    </div>
                    {/* Corner accent */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-2xl" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 flex flex-col justify-center py-2 md:py-4">
                    <div className="mb-4">
                        <Badge variant="outline" className="mb-3 text-violet-300 border-violet-500/25 bg-violet-500/10 hover:bg-violet-500/20 px-3 py-1 text-xs tracking-wider uppercase font-medium">
                            {event.metadata.role}
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-violet-200 transition-colors mb-4">
                            {event.metadata.title}
                        </h3>
                        <p className="text-stone-400 leading-relaxed font-light mb-8 max-w-xl group-hover:text-stone-300 transition-colors">
                            {event.metadata.summary}
                        </p>
                    </div>

                    {/* Metrics Grid */}
                    {event.metadata.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/5 group-hover:border-violet-500/15 transition-colors">
                            {event.metadata.metrics.slice(0, 3).map((metric: string, i: number) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-violet-500/50" />
                                    <span className="text-white font-medium text-sm text-balance group-hover:text-violet-100 transition-colors">{metric}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Skills Tags */}
                    {event.metadata.skills && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {event.metadata.skills.map((skill: string, i: number) => (
                                <span key={i} className="text-xs text-stone-500 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5 group-hover:border-violet-500/20 group-hover:bg-violet-500/10 group-hover:text-violet-300 transition-all duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}
