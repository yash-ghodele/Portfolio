import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Trophy, Target, BarChart3, Sparkles, Music, Landmark, ShieldCheck } from 'lucide-react'
import { EventClientFeatures } from '@/components/event-client-features'
import { ContentRenderer } from '@/components/ui/content-renderer'
import Footer from '@/components/footer'

const hue = 15

const event = {
    title: "SPIC MACAY's Virasat'24",
    subtitle: "Bridging the Gap Between Legend & Learner",
    image: "/images/events/spic-macay.jpg",
    role: "Head of Hospitality",
    date: "February 2024",
    location: "Maharashtra, India",
    verified: true,
    attendees: "MIT College & Rural Schools",
    summary: "Managed high-stakes hospitality and logistics for Pandit Ronu Majumdar, ensuring a seamless cultural experience across urban and rural venues.",
    metrics: [
        "Bansuri Concert",
        "Rural Outreach",
        "Artist Hospitality"
    ],
    skills: [
        "Hospitality Management",
        "Logistics",
        "Audience Management",
        "Cultural Curation"
    ],
    content: [
        {
            type: "p" as const,
            text: "As Cultural Secretary of the IETE Students' Forum, I spearheaded the organization of SPIC MACAY's Virasat'24 at our college — a landmark cultural event celebrating India's classical performing arts heritage. This was a significant endeavor in bringing a nationally recognized cultural initiative to our campus."
        },
        {
            type: "h3" as const,
            text: "The Mission"
        },
        {
            type: "p" as const,
            text: "SPIC MACAY (Society for the Promotion of Indian Classical Music And Culture Amongst Youth) brings world-class Indian classical artists to educational institutions. Hosting Virasat'24 meant delivering a professional-grade cultural experience for hundreds of students."
        },
        {
            type: "gridConfig" as const,
            cols: 3,
            items: [
                { title: "Classical Music", description: "Live performances by acclaimed classical musicians, exposing students to centuries-old Indian musical traditions." },
                { title: "Classical Dance", description: "Traditional dance forms presented by skilled artists, showcasing the elegance and discipline of Indian performing arts." },
                { title: "Cultural Heritage", description: "Interactive sessions connecting students with India's rich artistic legacy and inspiring cultural appreciation." }
            ]
        },
        {
            type: "p" as const,
            text: "The event was designed to bridge the gap between students and India's classical heritage, creating an immersive cultural experience that went beyond passive observation."
        },
        {
            type: "h3" as const,
            text: "Planning & Execution"
        },
        {
            type: "p" as const,
            text: "Coordinating a SPIC MACAY event required meticulous planning across multiple domains — from securing artist bookings to venue acoustics, audience management, and institutional coordination."
        },
        {
            type: "gridConfig" as const,
            cols: 3,
            items: [
                { title: "Artist Coordination", description: "Managed communication with SPIC MACAY's national team and coordinated arrival logistics, rehearsals, and performance schedules for visiting artists." },
                { title: "Venue & Production", description: "Oversaw stage design, sound engineering, lighting setup, and seating arrangements to create an authentic concert-hall experience." },
                { title: "Outreach & Engagement", description: "Drove campus-wide promotions, managed registrations, and ensured strong student turnout through strategic social media and on-ground campaigns." }
            ]
        },
        {
            type: "blockquote" as const,
            text: "Culture is the widening of the mind and of the spirit."
        },
        {
            type: "p" as const,
            text: "The event drew enthusiastic participation and created a lasting impression, demonstrating that classical arts have a powerful place in modern educational settings. It strengthened the college's cultural identity and opened doors for more such initiatives."
        }
    ]
}

export default function SpicMacayVirasat() {
    return (
        <div>
            <div
                className="event-page min-h-screen bg-zinc-950 text-white selection:bg-amber-500/30 font-sans antialiased pt-20"
                style={{ ['--accent-hue' as string]: hue } as React.CSSProperties}
            >
                <EventClientFeatures accentHue={hue} />
                <style>{`
                    .event-page {
                        --a-blob1: hsla(${hue}, 70%, 45%, 0.12);
                        --a-blob2: hsla(${hue + 25}, 65%, 40%, 0.08);
                        --a-blob3: hsla(${hue - 15}, 55%, 35%, 0.06);
                        --a-border: hsla(${hue}, 70%, 55%, 0.20);
                        --a-border-hover: hsla(${hue}, 75%, 60%, 0.35);
                        --a-fill: hsla(${hue}, 70%, 55%, 0.10);
                        --a-fill-hover: hsla(${hue}, 75%, 60%, 0.18);
                        --a-text: hsl(${hue}, 75%, 85%);
                        --a-text-muted: hsl(${hue}, 50%, 75%);
                        --a-text-subtle: hsla(${hue}, 60%, 70%, 0.7);
                        --a-dot: hsla(${hue}, 70%, 70%, 0.7);
                        --a-glow: hsla(${hue}, 75%, 55%, 0.25);
                        --a-edge: hsla(${hue}, 70%, 60%, 0.30);
                        --a-quote-mark: hsla(${hue}, 60%, 65%, 0.25);
                        --a-quote-text: hsl(${hue}, 50%, 92%);
                        --a-card-num: hsla(${hue}, 50%, 60%, 0.35);
                        --a-blockquote-border: hsla(${hue}, 65%, 60%, 0.5);
                        --a-blockquote-text: hsl(${hue}, 30%, 90%);
                    }
                    .metric-card { border: 1px solid rgba(245, 158, 11, 0.1); transition: all 0.3s ease; }
                    .metric-card:hover { border-color: var(--a-border-hover); transform: translateY(-2px); }
                    .skill-badge { background: var(--a-fill); border: 1px solid var(--a-border); color: var(--a-text-muted); transition: all 0.3s; }
                    .skill-badge:hover { background: var(--a-fill-hover); border-color: var(--a-border-hover); color: var(--a-text); }
                    .event-grid-card { border: 1px solid rgba(255,255,255,0.08); transition: all 0.5s; }
                    .event-grid-card:hover { border-color: var(--a-border-hover); box-shadow: 0 10px 40px -10px var(--a-glow); background: rgba(255,255,255,0.04); }
                    .event-grid-card .accent-line { transition: width 0.5s; }
                    .event-grid-card:hover .accent-line { width: 3.5rem; }
                    .sidebar-card .card-glow { opacity: 0; transition: opacity 0.5s; }
                    .sidebar-card:hover .card-glow { opacity: 1; }
                    .nav-circle { transition: all 0.3s; }
                    .nav-circle:hover { background: var(--a-fill); border-color: var(--a-border); }
                    .event-prose a { color: var(--a-text-muted); border-bottom: 1px solid var(--a-border); text-decoration: none; transition: all 0.3s; }
                    .event-prose a:hover { color: var(--a-text); border-color: var(--a-text-muted); }
                `}</style>

                {/* Ambient Background */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-25%] right-[-15%] w-[950px] h-[950px] rounded-full blur-[160px]"
                        style={{ backgroundColor: 'var(--a-blob1)' }} />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[750px] h-[750px] rounded-full blur-[140px]"
                        style={{ backgroundColor: 'var(--a-blob2)' }} />
                    <div className="absolute top-[45%] left-[50%] w-[450px] h-[450px] rounded-full blur-[110px]"
                        style={{ backgroundColor: 'var(--a-blob3)' }} />
                </div>

                {/* Hero Section */}
                <section className="relative w-full min-h-[78vh] md:min-h-[82vh] flex flex-col justify-end overflow-hidden border-b border-amber-500/15">
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/65 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/60 via-transparent to-[#050508]/60" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 md:pb-20">
                        <Link
                            href="/events"
                            scroll={true}
                            className="inline-flex items-center text-xs tracking-[0.2em] text-amber-200/60 hover:text-amber-200 mb-10 transition-all duration-300 group uppercase font-medium backdrop-blur-xl bg-amber-500/[0.06] px-5 py-2 rounded-full border border-amber-500/20 hover:border-amber-500/40"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 mr-2.5 group-hover:-translate-x-1 transition-transform duration-300 text-amber-400" />
                            Community &amp; Culture
                        </Link>

                        <div className="max-w-5xl space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                {event.verified && (
                                    <div className="inline-flex items-center gap-2 text-amber-400 bg-amber-500/[0.10] border border-amber-500/25 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Verified Cultural Landmark
                                    </div>
                                )}
                                {event.attendees && (
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider border backdrop-blur-md"
                                        style={{ color: 'var(--a-text)', backgroundColor: 'var(--a-fill)', borderColor: 'var(--a-border)' }}>
                                        <Landmark className="w-3.5 h-3.5 text-amber-400" />
                                        {event.attendees}
                                    </div>
                                )}
                            </div>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 drop-shadow-sm">
                                {event.title}
                            </h1>

                            {event.subtitle && (
                                <p className="text-xl md:text-2xl text-amber-200/80 font-light max-w-3xl leading-relaxed italic border-l-2 border-amber-500/40 pl-4">
                                    {event.subtitle}
                                </p>
                            )}

                            <div className="flex flex-wrap items-center gap-6 pt-2">
                                <span className="flex items-center gap-2.5 text-sm text-stone-300 font-medium">
                                    <Calendar className="w-4 h-4 text-amber-400" />
                                    {event.date}
                                </span>
                                {event.location && (
                                    <span className="flex items-center gap-2.5 text-sm text-stone-400 font-medium">
                                        <MapPin className="w-4 h-4 text-amber-500/70" />
                                        {event.location}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ background: `linear-gradient(to right, transparent, var(--a-edge), transparent)` }} />
                </section>

                {/* Main Content & Sidebar */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">

                    {/* Restructured Executive Overview Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
                        <div className="p-6 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15 backdrop-blur-sm">
                            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Role &amp; Leadership
                            </div>
                            <div className="text-xl font-bold text-white">{event.role}</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15 backdrop-blur-sm">
                            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2 flex items-center gap-2">
                                <Music className="w-4 h-4" /> Format &amp; Reach
                            </div>
                            <div className="text-xl font-bold text-white">Bansuri Concert &amp; Outreach</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15 backdrop-blur-sm">
                            <div className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2 flex items-center gap-2">
                                <Landmark className="w-4 h-4" /> Venue Scope
                            </div>
                            <div className="text-xl font-bold text-white">Urban Campus &amp; Rural Schools</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 order-2 lg:order-1">
                            <div className="lg:sticky lg:top-10 space-y-8">

                                {/* Role Card */}
                                <div className="sidebar-card relative group">
                                    <div className="card-glow absolute -inset-px rounded-2xl"
                                        style={{ background: `linear-gradient(to bottom, var(--a-glow), transparent)` }} />
                                    <div className="relative p-7 rounded-2xl bg-white/[0.025] border border-amber-500/20 backdrop-blur-sm">
                                        <label className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] font-semibold block mb-3">Role</label>
                                        <div className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white">
                                            {event.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Summary Card */}
                                <div className="sidebar-card relative group">
                                    <div className="card-glow absolute -inset-px rounded-2xl"
                                        style={{ background: `linear-gradient(to bottom, var(--a-glow), transparent)` }} />
                                    <div className="relative p-7 rounded-2xl bg-white/[0.025] border border-white/[0.08] backdrop-blur-sm">
                                        <div className="flex items-center gap-2.5 mb-4">
                                            <Trophy className="w-4 h-4 text-amber-400" />
                                            <label className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] font-semibold">Summary</label>
                                        </div>
                                        <p className="text-[15px] text-stone-300 leading-relaxed font-light">{event.summary}</p>
                                    </div>
                                </div>

                                {/* Impact Metrics */}
                                {event.metrics && event.metrics.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-5">
                                            <BarChart3 className="w-4 h-4 text-amber-400" />
                                            <span className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] font-semibold">Highlights</span>
                                        </div>
                                        <div className="space-y-2.5">
                                            {event.metrics.map((metric, i) => (
                                                <div key={i} className="metric-card flex items-center gap-4 p-4 rounded-xl bg-amber-500/[0.03] border border-amber-500/10">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-amber-500/15">
                                                        <span className="text-xs font-mono font-bold text-amber-300">
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
                                            <Target className="w-4 h-4 text-amber-400" />
                                            <span className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] font-semibold">Skills &amp; Leadership</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {event.skills.map((skill, i) => (
                                                <span key={i} className="skill-badge px-3.5 py-1.5 rounded-full text-xs tracking-wide font-medium cursor-default">
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
                                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:pb-5 prose-h2:border-b prose-h2:border-amber-500/15
                                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-14 prose-h3:mb-4 prose-h3:font-semibold prose-h3:text-amber-200
                                prose-h4:text-lg prose-h4:mt-10 prose-h4:mb-3
                                prose-p:text-stone-300/90 prose-p:leading-[1.85] prose-p:font-light prose-p:text-[17px]
                                prose-strong:text-white prose-strong:font-semibold
                                prose-blockquote:border-0 prose-blockquote:p-0 prose-blockquote:m-0 prose-blockquote:not-italic
                                prose-ul:pl-4 prose-ul:space-y-2
                                prose-li:text-stone-300/90 prose-li:text-[17px]
                                prose-hr:border-amber-500/15 prose-hr:my-16
                                prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-amber-500/20
                                prose-code:bg-amber-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-normal prose-code:text-amber-200"
                                style={{
                                    ['--tw-prose-headings' as string]: 'white',
                                    ['--tw-prose-bullets' as string]: 'var(--a-text-subtle)',
                                    ['--tw-prose-code' as string]: 'var(--a-text)',
                                } as React.CSSProperties}
                            >
                                <ContentRenderer content={event.content} hue={hue} />
                            </div>

                            {/* Bottom Navigation */}
                            <div className="mt-24 pt-10 border-t border-amber-500/15">
                                <Link href="/events" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                                    <div className="nav-circle w-14 h-14 rounded-full border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/50">
                                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-amber-400" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-amber-400/70 mb-1 font-medium">Return to</div>
                                        <div className="text-lg font-semibold tracking-tight text-white">Community &amp; Events</div>
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
