import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Trophy, Target, BarChart3, Sparkles } from 'lucide-react'
import { EventClientFeatures } from '@/components/event-client-features'
import { ContentRenderer } from '@/components/ui/content-renderer'
import Footer from '@/components/footer'

const hue = 270

const event = {
    title: "InnoHack",
    subtitle: "A Student-Led Hackathon for Emerging Technologies",
    image: "/images/events/innohack.JPG",
    role: "Executive Head",
    date: "4th & 5th June 2025",
    location: "Chhatrapati Sambhajinagar",
    verified: true,
    attendees: "200+ Participants",
    summary: "Orchestrated Chhatrapati Sambhajinagar's largest student-led hackathon with 200+ participants, focusing on automation and innovation.",
    metrics: [
        "200+ participants",
        "50 teams",
        "10 industry mentors",
        "36-hour build sprint"
    ],
    skills: [
        "Event Strategy",
        "Team Leadership",
        "Inter-College Coordination",
        "Logistics & Operations",
        "Technical Event Execution"
    ],
    content: [
        {
            type: "p" as const,
            text: "As the Executive Head of BotBuddies, I played a key role in organizing InnoHack in collaboration with the AIDS Department of C.S.M.S.S. College of Engineering, executing what became Chhatrapati Sambhajinagar's largest student-led hackathon. The event brought together students, mentors, and institutions to create a high-energy environment focused on innovation, collaboration, and hands-on problem solving."
        },
        {
            type: "h3" as const,
            text: "The Vision"
        },
        {
            type: "p" as const,
            text: "The hackathon theme was designed to challenge students to think beyond theory and build practical solutions. Problem statements were centered around strict industry domains."
        },
        {
            type: "gridConfig" as const,
            cols: 3,
            items: [
                { title: "Robotics", description: "Designing autonomous systems and hardware integration challenges for real-world scenarios." },
                { title: "AI & ML", description: "Building predictive models and intelligent automation systems to solve complex datasets." },
                { title: "Web Dev", description: "Creating scalable, user-centric web applications with modern tech stacks." }
            ]
        },
        {
            type: "p" as const,
            text: "The goal was to encourage participants to design scalable, automation-driven solutions aligned with emerging industry needs."
        },
        {
            type: "h3" as const,
            text: "Execution & Challenges"
        },
        {
            type: "p" as const,
            text: "Organizing an event of this scale required hands-on coordination and rapid problem-solving across multiple teams. My responsibilities included:"
        },
        {
            type: "gridConfig" as const,
            cols: 3,
            items: [
                { title: "Strategy & Planning", description: "Worked closely with the AIDS Department faculty and student coordinators to align schedules, evaluation flow, and execution timelines." },
                { title: "Logistics & Ops", description: "Managed venue readiness, participant flow, food arrangements, and power backup to support uninterrupted overnight coding." },
                { title: "Tech Execution", description: "Coordinated on-ground technical requirements (Wi-Fi, server access) to ensure smooth hackathon operations across 50 teams." }
            ]
        },
        {
            type: "blockquote" as const,
            text: "Leadership isn't about being in charge. It's about taking care of those in your charge."
        },
        {
            type: "p" as const,
            text: "Seeing students collaborate, debug, and build solutions under intense time pressure reinforced the impact of creating platforms that empower innovation."
        }
    ]
}

export default function InnoHack() {
    return (
        <div>
            <div
                className="event-page min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30 font-sans antialiased pt-20"
                style={{ ['--accent-hue' as string]: hue } as React.CSSProperties}
            >
                <EventClientFeatures accentHue={hue} />
                <style>{`
                    .event-page {
                        --a-blob1: hsla(${hue}, 60%, 40%, 0.07);
                        --a-blob2: hsla(${hue + 30}, 50%, 35%, 0.04);
                        --a-blob3: hsla(${hue - 20}, 45%, 30%, 0.03);
                        --a-border: hsla(${hue}, 60%, 60%, 0.15);
                        --a-border-hover: hsla(${hue}, 60%, 60%, 0.25);
                        --a-fill: hsla(${hue}, 60%, 60%, 0.08);
                        --a-fill-hover: hsla(${hue}, 60%, 60%, 0.15);
                        --a-text: hsl(${hue}, 60%, 80%);
                        --a-text-muted: hsl(${hue}, 40%, 70%);
                        --a-text-subtle: hsla(${hue}, 50%, 65%, 0.6);
                        --a-dot: hsla(${hue}, 60%, 65%, 0.6);
                        --a-glow: hsla(${hue}, 60%, 50%, 0.20);
                        --a-edge: hsla(${hue}, 60%, 60%, 0.25);
                        --a-quote-mark: hsla(${hue}, 50%, 60%, 0.2);
                        --a-quote-text: hsl(${hue}, 40%, 90%);
                        --a-card-num: hsla(${hue}, 40%, 55%, 0.3);
                        --a-blockquote-border: hsla(${hue}, 50%, 55%, 0.4);
                        --a-blockquote-text: hsl(${hue}, 20%, 85%);
                    }
                    .metric-card { border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s; }
                    .metric-card:hover { border-color: var(--a-border-hover); }
                    .skill-badge { background: var(--a-fill); border: 1px solid var(--a-border); color: var(--a-text-muted); transition: all 0.3s; }
                    .skill-badge:hover { background: var(--a-fill-hover); border-color: var(--a-border-hover); color: var(--a-text); }
                    .event-grid-card { border: 1px solid rgba(255,255,255,0.06); transition: all 0.5s; }
                    .event-grid-card:hover { border-color: var(--a-border-hover); box-shadow: 0 10px 40px -10px var(--a-glow); background: rgba(255,255,255,0.04); }
                    .event-grid-card .accent-line { transition: width 0.5s; }
                    .event-grid-card:hover .accent-line { width: 3rem; }
                    .sidebar-card .card-glow { opacity: 0; transition: opacity 0.5s; }
                    .sidebar-card:hover .card-glow { opacity: 1; }
                    .nav-circle { transition: all 0.3s; }
                    .nav-circle:hover { background: var(--a-fill); border-color: var(--a-border); }
                    .event-prose a { color: var(--a-text-muted); border-bottom: 1px solid var(--a-border); text-decoration: none; transition: all 0.3s; }
                    .event-prose a:hover { color: var(--a-text); border-color: var(--a-text-muted); }
                `}</style>

                {/* Ambient Background */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-30%] right-[-15%] w-[900px] h-[900px] rounded-full blur-[150px]"
                        style={{ backgroundColor: 'var(--a-blob1)' }} />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[130px]"
                        style={{ backgroundColor: 'var(--a-blob2)' }} />
                    <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full blur-[100px]"
                        style={{ backgroundColor: 'var(--a-blob3)' }} />
                </div>

                {/* Hero Section */}
                <section className="relative w-full min-h-[75vh] md:min-h-[80vh] flex flex-col justify-end overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover object-center opacity-50 scale-110"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-[#050508]/40" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 md:pb-20">
                        <Link
                            href="/events"
                            className="inline-flex items-center text-xs tracking-[0.2em] text-white/50 hover:text-white mb-10 transition-all duration-300 group uppercase font-medium backdrop-blur-xl bg-white/[0.04] px-5 py-2 rounded-full border border-white/[0.08] hover:border-white/20"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 mr-2.5 group-hover:-translate-x-1 transition-transform duration-300" />
                            Community
                        </Link>

                        <div className="max-w-5xl space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {event.verified && (
                                    <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/15 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Verified
                                    </div>
                                )}
                                {event.attendees && (
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider border"
                                        style={{ color: 'var(--a-text)', backgroundColor: 'var(--a-fill)', borderColor: 'var(--a-border)' }}>
                                        <Sparkles className="w-3.5 h-3.5" />
                                        {event.attendees}
                                    </div>
                                )}
                            </div>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.92] text-white">
                                {event.title}
                            </h1>

                            {event.subtitle && (
                                <p className="text-xl md:text-2xl text-stone-400 font-light max-w-3xl leading-relaxed">
                                    {event.subtitle}
                                </p>
                            )}

                            <div className="flex flex-wrap items-center gap-6 pt-2">
                                <span className="flex items-center gap-2.5 text-sm text-white/70 font-medium">
                                    <Calendar className="w-4 h-4" style={{ color: 'var(--a-text-muted)' }} />
                                    {event.date}
                                </span>
                                {event.location && (
                                    <span className="flex items-center gap-2.5 text-sm text-white/50 font-medium">
                                        <MapPin className="w-4 h-4" style={{ color: 'var(--a-text-subtle)' }} />
                                        {event.location}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ background: `linear-gradient(to right, transparent, var(--a-edge), transparent)` }} />
                </section>

                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 order-2 lg:order-1">
                            <div className="lg:sticky lg:top-10 space-y-8">

                                {/* Role Card */}
                                <div className="sidebar-card relative group">
                                    <div className="card-glow absolute -inset-px rounded-2xl"
                                        style={{ background: `linear-gradient(to bottom, var(--a-glow), transparent)` }} />
                                    <div className="relative p-7 rounded-2xl bg-white/[0.025] border border-white/[0.06] backdrop-blur-sm">
                                        <label className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-semibold block mb-3">Role</label>
                                        <div className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight" style={{ color: 'var(--a-text)' }}>
                                            {event.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Summary Card */}
                                <div className="sidebar-card relative group">
                                    <div className="card-glow absolute -inset-px rounded-2xl"
                                        style={{ background: `linear-gradient(to bottom, var(--a-glow), transparent)` }} />
                                    <div className="relative p-7 rounded-2xl bg-white/[0.025] border border-white/[0.06] backdrop-blur-sm">
                                        <div className="flex items-center gap-2.5 mb-4">
                                            <Trophy className="w-4 h-4" style={{ color: 'var(--a-text-subtle)' }} />
                                            <label className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-semibold">Summary</label>
                                        </div>
                                        <p className="text-[15px] text-stone-300/80 leading-relaxed font-light">{event.summary}</p>
                                    </div>
                                </div>

                                {/* Impact Metrics */}
                                {event.metrics && event.metrics.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-5">
                                            <BarChart3 className="w-4 h-4" style={{ color: 'var(--a-text-subtle)' }} />
                                            <span className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-semibold">Impact</span>
                                        </div>
                                        <div className="space-y-2">
                                            {event.metrics.map((metric, i) => (
                                                <div key={i} className="metric-card flex items-center gap-4 p-4 rounded-xl bg-white/[0.02]">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--a-fill)' }}>
                                                        <span className="text-xs font-mono font-bold" style={{ color: 'var(--a-text-muted)' }}>
                                                            {String(i + 1).padStart(2, '0')}
                                                        </span>
                                                    </div>
                                                    <span className="text-[15px] text-stone-200 font-medium">{metric}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Skills */}
                                {event.skills && event.skills.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-5">
                                            <Target className="w-4 h-4" style={{ color: 'var(--a-text-subtle)' }} />
                                            <span className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-semibold">Skills</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {event.skills.map((skill, i) => (
                                                <span key={i} className="skill-badge px-3.5 py-1.5 rounded-full text-xs tracking-wide font-normal cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </aside>

                        {/* Article Content */}
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            <div className="event-prose prose prose-invert prose-lg max-w-none
                                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:pb-5 prose-h2:border-b prose-h2:border-white/[0.06]
                                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-14 prose-h3:mb-4 prose-h3:font-semibold
                                prose-h4:text-lg prose-h4:mt-10 prose-h4:mb-3
                                prose-p:text-stone-300/85 prose-p:leading-[1.85] prose-p:font-light prose-p:text-[17px]
                                prose-strong:text-white prose-strong:font-semibold
                                prose-blockquote:border-0 prose-blockquote:p-0 prose-blockquote:m-0 prose-blockquote:not-italic
                                prose-ul:pl-4 prose-ul:space-y-2
                                prose-li:text-stone-300/85 prose-li:text-[17px]
                                prose-hr:border-white/[0.06] prose-hr:my-16
                                prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10
                                prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-normal prose-code:before:content-[''] prose-code:after:content-['']"
                                style={{
                                    ['--tw-prose-headings' as string]: 'white',
                                    ['--tw-prose-bullets' as string]: 'var(--a-text-subtle)',
                                    ['--tw-prose-code' as string]: 'var(--a-text)',
                                } as React.CSSProperties}
                            >
                                <ContentRenderer content={event.content} hue={hue} />
                            </div>

                            {/* Bottom Navigation */}
                            <div className="mt-24 pt-10 border-t border-white/[0.06]">
                                <Link href="/events" className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                                    <div className="nav-circle w-14 h-14 rounded-full border border-white/[0.08] flex items-center justify-center">
                                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-medium">Return to</div>
                                        <div className="text-lg font-semibold tracking-tight">Community &amp; Events</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
