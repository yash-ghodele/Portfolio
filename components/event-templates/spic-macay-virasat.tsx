import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Trophy, Target, BarChart3, Sparkles, Music, Landmark, ShieldCheck } from 'lucide-react'
import { EventClientFeatures } from '@/components/event-client-features'
import { ContentRenderer } from '@/components/ui/content-renderer'
import Footer from '@/components/footer'

const hue = 15

const event = {
    title: "SPIC MACAY Virasat 2024",
    subtitle: "Bansuri Concert — A Journey of Music, Dignity & Connection",
    image: "/images/events/spic-macay.jpg",
    role: "Head of Hospitality & Audience Management",
    date: "14 – 15 February 2024",
    location: "Chhatrapati Sambhajinagar & Sudamwadi, MH",
    verified: true,
    attendees: "MIT College & ZP High School Sudamwadi",
    summary: "Coordinated high-stakes hospitality, logistics, and audience flow for Bansuri Maestro Pt. Ronu Majumdar, Pt. Ajeet Pathak, and Pt. Kalpesh Sachla across urban and rural concert venues.",
    metrics: [
        "Bansuri Maestro Concert",
        "Urban & Rural Outreach",
        "Artist Hospitality & Escort"
    ],
    skills: [
        "Hospitality Management",
        "Audience Management",
        "Artist Escort & Transport",
        "Cultural Curation",
        "Event Coordination"
    ],
    content: [
        {
            type: "p" as const,
            text: "Some experiences transcend the boundary of single events — they unfold as profound **journeys**. My association with **SPIC MACAY’s Virasat 2024 – Bansuri Concert** was precisely that: an immersive, grounding experience that continued to resonate long after the final note faded and the applause subsided."
        },
        {
            type: "h3" as const,
            text: "The Context"
        },
        {
            type: "p" as const,
            text: "In February 2024, I had the privilege of serving as a **Coordinator and Core Team Member** for SPIC MACAY’s Virasat series. In this capacity, I took on the role of **Head of Hospitality and Audience Management** for a classical instrumental concert series hosted across two contrasting yet equally meaningful settings:"
        },
        {
            type: "gridConfig" as const,
            cols: 2,
            items: [
                {
                    title: "14 February 2024",
                    description: "MIT College of Engineering, Chhatrapati Sambhajinagar — An urban campus performance featuring full stage production, audience management, and an intimate session with our Music Department."
                },
                {
                    title: "15 February 2024",
                    description: "ZP High School, Sudamwadi (Raghunathpurwadi, Shivoor) — A rural school concert dedicated to bringing India's rich classical heritage directly to village students."
                }
            ]
        },
        {
            type: "p" as const,
            text: "We had the rare honor of hosting maestros who represent the pinnacle of Indian classical music:"
        },
        {
            type: "gridConfig" as const,
            cols: 3,
            items: [
                {
                    title: "Pt. Ranendranath “Ronu” Majumdar",
                    description: "Foremost disciple of Bharat Ratna Pt. Hariprasad Chaurasia; one of India’s most celebrated Bansuri maestros of the Maihar Gharana."
                },
                {
                    title: "Pt. Ajeet Pathak",
                    description: "Eminent tabla virtuoso and master exponent of the Banaras and Darbhanga gharanas."
                },
                {
                    title: "Pt. Kalpesh Sachla",
                    description: "Accomplished flautist and dedicated disciple of Pandit Ronu Majumdar."
                }
            ]
        },
        {
            type: "p" as const,
            text: "Being entrusted with their hospitality, well-being, and movement was both an incredible privilege and a responsibility I held with the utmost reverence."
        },
        {
            type: "h3" as const,
            text: "Hospitality Beyond Logistics"
        },
        {
            type: "p" as const,
            text: "My responsibilities commenced early on 14 February when I met the artists at **Ahmednagar**, accompanying them through every phase of their tour until dropping them off safely at **Nashik** after their final concert. Over these two intense days, my role extended far beyond transport and accommodation logistics — I was responsible for safeguarding their comfort, managing rigid schedules, ensuring seamless venue transitions, and curating an off-stage environment defined by tranquility and care."
        },
        {
            type: "blockquote" as const,
            text: "SPIC MACAY imparts a fundamental philosophy: When you host art, you must first host the artist — with unyielding dignity."
        },
        {
            type: "h3" as const,
            text: "The MIT College Concert"
        },
        {
            type: "p" as const,
            text: "The opening concert at MIT College of Engineering executed with flawless precision. From backstage discipline to audience movement, every operational detail functioned seamlessly, creating a serene atmosphere where the music could take center stage."
        },
        {
            type: "p" as const,
            text: "Following the performance, the artists honored us with a visit to our **Music Department**. We spent invaluable time engaged in warm conversation, sharing reflections on music and life, and capturing memories I will cherish indefinitely. As I escorted them back to the hotel, I knew the next day would present a completely different landscape."
        },
        {
            type: "h3" as const,
            text: "Sudamwadi: Where Music Met the Village"
        },
        {
            type: "p" as const,
            text: "On 15 February, our journey led us to **Sudamwadi** — a tranquil village that bestowed a profound, unexpected depth upon the entire initiative. This rural school concert wasn't about stage grandeur or technical scale; it was about pure, unfiltered human connection."
        },
        {
            type: "p" as const,
            text: "Following their performance, we sat together for a humble lunch in the village, enveloped by nature, genuine warmth, and the heartfelt hospitality of the local residents. The serene environment and grounded spirit of the village served as a powerful reminder of why SPIC MACAY exists: to deliver timeless Indian classical art directly to the hearts of people everywhere."
        },
        {
            type: "highlight" as const,
            text: "It reminded me why SPIC MACAY exists in the first place: to take Indian classical art to places where it truly belongs — among the people."
        },
        {
            type: "h3" as const,
            text: "The Closing Moment & Gratitude"
        },
        {
            type: "p" as const,
            text: "Following the Sudamwadi performance, we set out for Nashik. As the tour drew to a close and I dropped the artists at their destination, we shared a quiet, wholesome moment. Collecting their autographs and taking a personal photo together felt less like concluding an assignment as a coordinator, and more like reflecting as a student who had witnessed mastery, humility, and tradition up close."
        },
        {
            type: "p" as const,
            text: "I extend my deepest gratitude to **Shon Patil Sir** and **Nitin Gaikwad Sir** for placing their trust in me and guiding me through this unforgettable journey."
        },
        {
            type: "h3" as const,
            text: "Final Reflection"
        },
        {
            type: "gridConfig" as const,
            cols: 3,
            items: [
                {
                    title: "Respect in Hospitality",
                    description: "Hospitality is far more than operational coordination — it is an active gesture of deep respect for the artist and their craft."
                },
                {
                    title: "Service-Driven Leadership",
                    description: "Leadership does not always require high visibility; it often thrives in quiet, calm, service-oriented dedication behind the scenes."
                },
                {
                    title: "Trust & Tradition",
                    description: "Certain responsibilities are defined by trust. Carrying forward a living cultural tradition, even briefly, leaves a lifelong imprint."
                }
            ]
        },
        {
            type: "p" as const,
            text: "I didn’t merely manage an event — I held space for a living tradition. The lessons in humility, discipline, and reverence will stay with me for a lifetime."
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
