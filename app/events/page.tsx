import { getEvents } from "@/lib/sanity/fetch"
import EventsTimeline from '@/components/events-timeline'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Users, Target, Mic, Globe, BarChart, Handshake, Sparkles, Zap, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/reveal-on-scroll"
import { EventMetadata } from "@/lib/types"
import HeroNetwork from "@/components/ui/hero-network"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

type CommunityEvent = {
    slug: string
    metadata: EventMetadata
}

export const metadata = {
    title: 'Events & Community | Yash Ghodele',
    description: 'Community building, event leadership, and real-world execution — from organizing InnoHack (200+ participants) to coordinating SPIC MACAY cultural festivals.',
}

const STATS = [
    { number: "5+", label: "Signature Events", icon: Zap },
    { number: "500+", label: "Participants", icon: Users },
    { number: "25+", label: "Partners", icon: Handshake },
    { number: "₹50k+", label: "Capital", icon: Target },
]

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

export default async function EventsPage() {
    const events: CommunityEvent[] = (await getEvents()).sort((a: CommunityEvent, b: CommunityEvent) => {
        return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    })

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30 selection:text-violet-100 font-sans antialiased overflow-x-hidden">
            
            {/* Background Grid/Network (Following Stack skeleton) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <HeroNetwork showParticles={false} />
            </div>

            <main className="relative z-10 pt-28 pb-32">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    
                    {/* ── Header (Following Stack skeleton) ── */}
                    <RevealOnScroll className="mb-20">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">{"// Events"}</span>
                            <div className="h-px w-16 bg-white/10" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
                            Designing Experience —<br />
                            <span className="text-primary">Leading Communities.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                            From industrial-scale hackathons to curated cultural showcases, I bridge the gap between vision and execution through system-driven leadership.
                        </p>
                    </RevealOnScroll>

                    {/* ── Stats Scoreboard (Following Stack's card-like structure) ── */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
                        {STATS.map((stat, i) => (
                            <RevealOnScroll key={i} delay={i * 0.05}>
                                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-300 group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <stat.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">{stat.label}</span>
                                    </div>
                                    <div className="text-3xl md:text-4xl font-black text-white">
                                        <AnimatedCounter target={stat.number} />
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>

                    {/* ── Main Collection ── */}
                    <div className="mb-32">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-2xl font-bold tracking-tight">Signature Highlights</h2>
                            <div className="h-px flex-1 mx-8 bg-white/5 hidden md:block" />
                            <span className="text-xs font-mono text-muted-foreground">{events.length} ARCHIVED_POSTS</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {events.map((event, index) => (
                                <RevealOnScroll key={event.slug} delay={index * 0.1}>
                                    <Link href={`/events/${event.slug}`} className="group block">
                                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-primary/40 transition-all duration-500 mb-6">
                                            <Image
                                                src={event.metadata.image || "/placeholder.jpg"}
                                                alt={event.metadata.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase">
                                                    {event.metadata.date.split(' ').pop()}
                                                </Badge>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-mono text-primary uppercase tracking-widest">{event.metadata.role}</span>
                                                {event.metadata.verified && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors leading-tight">
                                                {event.metadata.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                {event.metadata.summary}
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {event.metadata.skills?.slice(0, 3).map((skill, i) => (
                                                    <span key={i} className="text-[10px] font-mono text-muted-foreground border border-white/5 bg-white/4 px-2 py-0.5 rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>

                    {/* ── Chronology ── */}
                    <div className="mb-32">
                        <div className="flex items-center gap-3 mb-12">
                            <h2 className="text-2xl font-bold tracking-tight whitespace-nowrap">Chronology</h2>
                            <div className="h-px w-full bg-white/5" />
                        </div>
                        <EventsTimeline events={events} />
                    </div>

                    {/* ── Arsenal ── */}
                    <div className="mb-32">
                        <div className="flex items-center gap-3 mb-12">
                            <h2 className="text-2xl font-bold tracking-tight whitespace-nowrap">Execution Arsenal</h2>
                            <div className="h-px w-full bg-white/5" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {CORE_SKILLS.map((skill, idx) => (
                                <RevealOnScroll key={idx} delay={idx * 0.05}>
                                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-300 h-full group">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <skill.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{skill.title}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>

                    {/* ── CTA ── */}
                    <RevealOnScroll className="text-center py-24 border-t border-white/5">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                            Ready to build something <br />
                            <span className="text-primary">impactful?</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="#contact" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all">
                                Get in Touch
                            </Link>
                            <Link href="/resume.pdf" target="_blank" className="px-8 py-3 border border-white/10 hover:bg-white/5 rounded-full font-bold transition-all">
                                View Credentials
                            </Link>
                        </div>
                    </RevealOnScroll>

                </div>
            </main>
            <Footer />
        </div>
    )
}
