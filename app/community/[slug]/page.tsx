import { PortableText } from 'next-sanity'
import { getEvents, getEvent } from "@/lib/sanity/fetch"

export const runtime = 'edge';
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Trophy, Target, BarChart3, Sparkles } from 'lucide-react'
import { notFound } from 'next/navigation'
import { portableTextComponents, preprocessPortableText } from "@/lib/sanity/portable-text-components"

export async function generateStaticParams() {
    const events = await getEvents()
    return events.map((event: { slug: string }) => ({
        slug: event.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const event = await getEvent(params.slug)
    if (!event) return

    const { title, summary, image, skills } = event

    return {
        title: `${title} | Yash Ghodele`,
        description: summary,
        keywords: skills,
        authors: [{ name: "Yash Ghodele" }],
        openGraph: {
            title,
            description: summary,
            url: `https://yash-ghodele.pages.dev/community/${params.slug}`,
            siteName: "Yash Ghodele Portfolio",
            images: [{ url: image || "/placeholder.jpg", width: 1200, height: 630, alt: title }],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: summary,
            images: [image || "/placeholder.jpg"],
            creator: "@why_be_yashhh",
        },
        alternates: {
            canonical: `https://yash-ghodele.pages.dev/community/${params.slug}`,
        },
    }
}

export default async function EventPage({ params }: { params: { slug: string } }) {
    const event = await getEvent(params.slug)
    if (!event) notFound()

    const { content, title, subtitle, image, role, date, location, verified, metrics, skills, summary, attendees, accentColor } = event

    const hue = accentColor ?? 270

    return (
        <div
            className="event-page min-h-screen bg-[#050508] text-white selection:bg-violet-500/30 font-sans antialiased"
            style={{ ['--accent-hue' as string]: hue } as React.CSSProperties}
        >
            {/* Inject accent-driven CSS custom properties */}
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

                /* Metric cards hover */
                .metric-card { border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s; }
                .metric-card:hover { border-color: var(--a-border-hover); }

                /* Skill badges hover */
                .skill-badge {
                    background: var(--a-fill);
                    border: 1px solid var(--a-border);
                    color: var(--a-text-muted);
                    transition: all 0.3s;
                }
                .skill-badge:hover {
                    background: var(--a-fill-hover);
                    border-color: var(--a-border-hover);
                    color: var(--a-text);
                }

                /* Grid cards hover */
                .event-grid-card { border: 1px solid rgba(255,255,255,0.06); transition: all 0.5s; }
                .event-grid-card:hover {
                    border-color: var(--a-border-hover);
                    box-shadow: 0 10px 40px -10px var(--a-glow);
                    background: rgba(255,255,255,0.04);
                }
                .event-grid-card .accent-line { transition: width 0.5s; }
                .event-grid-card:hover .accent-line { width: 3rem; }

                /* Sidebar card hover glow */
                .sidebar-card .card-glow { opacity: 0; transition: opacity 0.5s; }
                .sidebar-card:hover .card-glow { opacity: 1; }

                /* Bottom nav hover */
                .nav-circle { transition: all 0.3s; }
                .nav-circle:hover { background: var(--a-fill); border-color: var(--a-border); }

                /* Prose link colors */
                .event-prose a { color: var(--a-text-muted); border-bottom: 1px solid var(--a-border); text-decoration: none; transition: all 0.3s; }
                .event-prose a:hover { color: var(--a-text); border-color: var(--a-text-muted); }
            `}</style>

            {/* ═══ Ambient Background ═══ */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-30%] right-[-15%] w-[900px] h-[900px] rounded-full blur-[150px]"
                    style={{ backgroundColor: 'var(--a-blob1)' }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[130px]"
                    style={{ backgroundColor: 'var(--a-blob2)' }} />
                <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full blur-[100px]"
                    style={{ backgroundColor: 'var(--a-blob3)' }} />
            </div>

            {/* ═══ Hero Section ═══ */}
            <section className="relative w-full min-h-[75vh] md:min-h-[80vh] flex flex-col justify-end overflow-hidden">
                {/* Image Layer */}
                <div className="absolute inset-0">
                    <Image
                        src={image || "/placeholder.jpg"}
                        alt={title}
                        fill
                        className="object-cover object-center opacity-50 scale-105"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-[#050508]/40" />
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16 md:pb-20">
                    <Link
                        href="/community"
                        className="inline-flex items-center text-xs tracking-[0.2em] text-white/50 hover:text-white mb-10 transition-all duration-300 group uppercase font-medium backdrop-blur-xl bg-white/[0.04] px-5 py-2 rounded-full border border-white/[0.08] hover:border-white/20"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 mr-2.5 group-hover:-translate-x-1 transition-transform duration-300" />
                        Community
                    </Link>

                    <div className="max-w-5xl space-y-6">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3">
                            {verified && (
                                <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/15 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    Verified
                                </div>
                            )}
                            {attendees && (
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider border"
                                    style={{ color: 'var(--a-text)', backgroundColor: 'var(--a-fill)', borderColor: 'var(--a-border)' }}
                                >
                                    <Sparkles className="w-3.5 h-3.5" />
                                    {attendees} Attendees
                                </div>
                            )}
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.92] text-white">
                            {title}
                        </h1>

                        {subtitle && (
                            <p className="text-xl md:text-2xl text-stone-400 font-light max-w-3xl leading-relaxed">
                                {subtitle}
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-6 pt-2">
                            <span className="flex items-center gap-2.5 text-sm text-white/70 font-medium">
                                <Calendar className="w-4 h-4" style={{ color: 'var(--a-text-muted)' }} />
                                {date}
                            </span>
                            {location && (
                                <span className="flex items-center gap-2.5 text-sm text-white/50 font-medium">
                                    <MapPin className="w-4 h-4" style={{ color: 'var(--a-text-subtle)' }} />
                                    {location}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(to right, transparent, var(--a-edge), transparent)` }} />
            </section>

            {/* ═══ Main Content ═══ */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* ── Sidebar ── */}
                    <aside className="lg:col-span-4 order-2 lg:order-1">
                        <div className="lg:sticky lg:top-10 space-y-8">

                            {/* Role Card */}
                            <div className="sidebar-card relative group">
                                <div className="card-glow absolute -inset-px rounded-2xl"
                                    style={{ background: `linear-gradient(to bottom, var(--a-glow), transparent)` }} />
                                <div className="relative p-7 rounded-2xl bg-white/[0.025] border border-white/[0.06] backdrop-blur-sm">
                                    <label className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-semibold block mb-3">Role</label>
                                    <div className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight" style={{ color: 'var(--a-text)' }}>
                                        {role}
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
                                    <p className="text-[15px] text-stone-300/80 leading-relaxed font-light">{summary}</p>
                                </div>
                            </div>

                            {/* Impact Metrics */}
                            {metrics && metrics.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-2.5 mb-5">
                                        <BarChart3 className="w-4 h-4" style={{ color: 'var(--a-text-subtle)' }} />
                                        <span className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-semibold">Impact</span>
                                    </div>
                                    <div className="space-y-2">
                                        {metrics.map((metric: string, i: number) => (
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
                            {skills && skills.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-2.5 mb-5">
                                        <Target className="w-4 h-4" style={{ color: 'var(--a-text-subtle)' }} />
                                        <span className="text-[11px] text-stone-500 uppercase tracking-[0.2em] font-semibold">Skills</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill: string, i: number) => (
                                            <span key={i} className="skill-badge px-3.5 py-1.5 rounded-full text-xs tracking-wide font-normal cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* ── Article Content ── */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <article className="event-prose prose prose-invert prose-lg max-w-none
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
                            prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-normal prose-code:before:content-[''] prose-code:after:content-['']
                        "
                            style={{
                                ['--tw-prose-headings' as string]: 'white',
                                ['--tw-prose-bullets' as string]: 'var(--a-text-subtle)',
                                ['--tw-prose-code' as string]: 'var(--a-text)',
                            } as React.CSSProperties}
                        >
                            <PortableText
                                value={preprocessPortableText(content)}
                                components={
                                    {
                                        ...portableTextComponents,
                                        types: {
                                            ...portableTextComponents.types,
                                            highlight: ({ value: v }: { value: { text: string } }) => (
                                                <div className="relative my-16 group not-prose">
                                                    <div className="absolute -inset-px rounded-2xl blur-sm"
                                                        style={{ background: `linear-gradient(135deg, var(--a-glow), hsla(${hue + 40}, 50%, 50%, 0.15), var(--a-glow))` }} />
                                                    <div className="relative p-10 md:p-12 rounded-2xl bg-[#0a0a0f]/90 backdrop-blur-xl" style={{ border: '1px solid var(--a-border)' }}>
                                                        <div className="absolute top-6 left-8 text-6xl font-serif leading-none select-none" style={{ color: 'var(--a-quote-mark)' }}>&ldquo;</div>
                                                        <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-center italic leading-relaxed px-4" style={{ color: 'var(--a-quote-text)' }}>
                                                            {v.text}
                                                        </p>
                                                        <div className="absolute bottom-6 right-8 text-6xl font-serif leading-none select-none" style={{ color: 'var(--a-quote-mark)' }}>&rdquo;</div>
                                                    </div>
                                                </div>
                                            ),
                                            gridConfig: ({ value: v }: { value: { cols: number; items: Array<{ title: string; description: string }> } }) => (
                                                <div className="grid gap-4 my-12 not-prose" style={{ gridTemplateColumns: `repeat(${Math.min(v.cols || 3, 3)}, minmax(0, 1fr))` }}>
                                                    {v.items?.map((item, i) => (
                                                        <div key={i} className="event-grid-card relative p-6 rounded-xl bg-white/[0.02]">
                                                            <span className="absolute top-4 right-4 text-xs font-mono tracking-wider" style={{ color: 'var(--a-card-num)' }}>
                                                                {String(i + 1).padStart(2, '0')}
                                                            </span>
                                                            <div className="accent-line w-8 h-0.5 rounded-full mb-4"
                                                                style={{ background: `linear-gradient(to right, var(--a-dot), transparent)` }} />
                                                            <h4 className="text-base font-semibold text-white mb-2 tracking-tight">{item.title}</h4>
                                                            <p className="text-sm text-stone-400/90 leading-relaxed">{item.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ),
                                        },
                                        block: {
                                            ...portableTextComponents.block,
                                            blockquote: ({ children }: { children?: React.ReactNode }) => (
                                                <blockquote className="relative my-16 pl-8 md:pl-10 py-6 not-prose" style={{ borderLeft: '2px solid var(--a-blockquote-border)' }}>
                                                    <div className="absolute -left-[5px] top-8 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--a-dot)' }} />
                                                    <p className="text-xl md:text-2xl font-serif italic leading-relaxed" style={{ color: 'var(--a-blockquote-text)' }}>
                                                        {children}
                                                    </p>
                                                </blockquote>
                                            ),
                                        },
                                    } as any
                                }
                            />
                        </article>

                        {/* Bottom Navigation */}
                        <div className="mt-24 pt-10 border-t border-white/[0.06]">
                            <Link href="/community" className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                                <div className="nav-circle w-14 h-14 rounded-full border border-white/[0.08] flex items-center justify-center">
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" />
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-medium">Return to</div>
                                    <div className="text-lg font-semibold tracking-tight">Community & Events</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
