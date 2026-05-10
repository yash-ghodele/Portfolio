import Link from 'next/link'
import { ArrowLeft, ExternalLink, Layout, Cpu, Zap, Activity, Clock, Shield, BarChart3, Layers, Settings, Terminal } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'WireFlow - Industrial Operations Dashboard | Yash Ghodele',
    description: 'Smart manufacturing system with sub-14ms latency goals and offline-first SSR architecture. Replaces complex ERPs with actionable clarity.',
    openGraph: {
        title: 'WireFlow - Industrial Operations Dashboard | Yash Ghodele',
        description: 'Smart manufacturing system with sub-14ms latency goals.',
        url: 'https://yash-ghodele.pages.dev/work/wireflow',
        siteName: 'Yash Ghodele Portfolio',
        images: [{ url: '/images/projects/wireflow-dashboard.jpg', width: 1200, height: 630, alt: 'WireFlow Industrial Dashboard' }],
        locale: 'en_US',
        type: 'article',
    },
    alternates: {
        canonical: 'https://yash-ghodele.pages.dev/work/wireflow',
    },
}

export default function WireFlowPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">

            {/* 1. Hero Section */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black opacity-60"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-blue-500/10 backdrop-blur-md">
                        Industrial Dashboard
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-900/50">
                        WireFlow
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Signal over noise. <br className="hidden md:block" />
                        A <span className="text-blue-400 font-semibold">real-time manufacturing engine</span> that turns complex telemetry into instant floor-level actions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full h-14 px-10 text-lg">
                            <Link href="#" className="flex items-center gap-2">
                                Request Demo <ExternalLink className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Stats Bento */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Clock size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-2">End-to-End Latency</h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4">14ms</div>
                            <p className="text-zinc-400 text-lg">
                                Sub-perception lag. When a machine stops, the dashboard updates before the operator can look up.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between">
                        <Activity className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">22%</div>
                            <div className="text-sm text-zinc-500 font-medium">Downtime Reduction</div>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between">
                        <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">5s</div>
                            <div className="text-sm text-zinc-500 font-medium">Mean Time to Action</div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex items-center justify-between">
                        <div className="flex gap-4 flex-wrap">
                            {["Next.js", "FastAPI", "MQTT", "Redis", "SQLite", "Framer Motion"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-white/5 text-zinc-300 border-white/5 px-4 py-2">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Logic Deep Dive */}
            <section className="container px-6 py-24 mx-auto max-w-5xl border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Engineered for <span className="text-blue-500">Clarity</span>.
                        </h2>
                        <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                            <p>
                                Most manufacturing dashboards fail because they optimize for data richness. WireFlow optimizes for **Action Clarity**.
                            </p>
                            <p>
                                We moved secondary metrics to drill-down layers, keeping the primary interface focused on the 6 numbers that actually drive floor decisions.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
                        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <span className="ml-2 text-xs text-zinc-500 font-mono">telemetry_bridge.ts</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-zinc-500">{'// Real-time MQTT stream to React state'}</span><br />
                                <span className="text-fuchsia-400">client</span>.on(<span className="text-green-400">&apos;message&apos;</span>, (topic, payload) =&gt; {'{'}<br />
                                <span className="text-fuchsia-400">const</span> data = <span className="text-yellow-200">parseBuffer</span>(payload);<br />
                                <br />
                                <span className="text-zinc-500">{'// Zero-latency state update'}</span><br />
                                <span className="text-yellow-200">useProductionStore</span>.getState().<span className="text-yellow-200">updateMetric</span>(topic, data);<br />
                                <br />
                                <span className="text-zinc-500">{'// Action trigger'}</span><br />
                                <span className="text-fuchsia-400">if</span> (data.status === <span className="text-orange-400">&apos;CRITICAL&apos;</span>) {'{'}<br />
                                <span className="text-yellow-200">triggerEmergencyAlert</span>(data.unitId);<br />
                                {'}'}<br />
                                {'}'});
                            </pre>
                        </div>
                    </div>
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
