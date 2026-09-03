import Link from 'next/link'
import { ArrowLeft, ExternalLink, Layout, Cpu, Zap, Activity, Clock, Shield, BarChart3, Layers, Settings, Terminal, ShieldCheck } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function WireFlow() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-rose-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-rose-500/15">
                {/* Background FX: Industrial Rose/Crimson Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/30 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[150px] bg-rose-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[130px] bg-red-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-rose-500/30 text-rose-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-rose-500/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                            Industrial Manufacturing Dashboard
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-400 drop-shadow-sm">
                            WireFlow
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Signal over noise. <br className="hidden md:block" />
                        A <span className="text-rose-400 font-medium">real-time manufacturing engine</span> that turns complex telemetry into instant floor-level actions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-500 text-white rounded-full h-14 px-10 text-base font-semibold shadow-lg shadow-rose-900/40 transition-all">
                            <Link href="#" className="flex items-center gap-2">
                                Request Demo <ExternalLink className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Stats Bento */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-rose-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-rose-950/20 border border-rose-500/20 p-8 relative overflow-hidden group hover:border-rose-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-rose-400">
                            <Clock size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-rose-400 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Real-time Telemetry Lag
                            </h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">14ms</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Sub-perception lag. When a machine stops, the dashboard updates before the operator can look up.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-rose-500/30 transition-all backdrop-blur-sm">
                        <Activity className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">22%</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Downtime Reduction</div>
                        </div>
                    </div>

                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-rose-500/30 transition-all backdrop-blur-sm">
                        <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">5s</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Mean Time to Action</div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["Next.js", "FastAPI", "MQTT", "Redis", "SQLite", "Framer Motion"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-200 border-rose-500/20 px-4 py-2 text-xs font-mono">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Logic Deep Dive */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            Engineered for <span className="text-rose-400">Clarity</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                Most manufacturing dashboards fail because they optimize for data richness. WireFlow optimizes for <strong className="text-white font-medium">Action Clarity</strong>.
                            </p>
                            <p>
                                We moved secondary metrics to drill-down layers, keeping the primary interface focused on the 6 numbers that actually drive floor decisions.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-rose-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center px-4 py-3 bg-white/[0.03] border-b border-white/5 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-xs text-zinc-400 font-mono">telemetry_bridge.ts</span>
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
                                <span className="text-fuchsia-400">if</span> (data.status === <span className="text-rose-400">&apos;CRITICAL&apos;</span>) {'{'}<br />
                                <span className="text-yellow-200">triggerEmergencyAlert</span>(data.unitId);<br />
                                {'}'}<br />
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
