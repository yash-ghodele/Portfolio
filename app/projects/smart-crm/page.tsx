import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Database, FileSpreadsheet, ShieldCheck, Zap, Server, AlertTriangle, Activity, Code, Layers, FileCheck, Repeat } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'Smart CRM - Business Automation | Yash Ghodele',
    description: 'High-throughput VBA automation engine handling 100k+ B2B leads with 99.9% validation accuracy.',
}

export default function SmartCRMPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">

            {/* 1. Hero Section */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Background FX - Orange/Red Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/40 via-black to-black opacity-60"></div>
                {/* Matrix/Data Rain effect simulation via mask */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-orange-500/30 text-orange-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-orange-500/10 backdrop-blur-md">
                        Business Automation
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-100 to-orange-900/50">
                        Smart CRM
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Enterprise-scale automation inside Excel. <br className="hidden md:block" />
                        <span className="text-orange-500 font-semibold">100k+ leads</span> processed in seconds with bulletproof validation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <div className="flex items-center gap-4">
                            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-500 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-orange-900/20">
                                <Link href="#" className="flex items-center gap-2">
                                    View Logic Flow <ExternalLink className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 rounded-full h-14 px-10 text-lg">
                                <Link href="#" className="flex items-center gap-2">
                                    <Github className="w-5 h-5" /> Source Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Scale Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Database size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-2">Throughput</h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4">100k+</div>
                            <p className="text-zinc-400 text-lg">
                                Verified B2B contacts processed per session. The system replaced a manual workflow that capped at 500/day.
                            </p>
                        </div>
                    </div>

                    {/* Speed Optimization Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">45s</div>
                            <div className="text-sm text-zinc-500 font-medium">Batch Time (vs 40m)</div>
                        </div>
                    </div>

                    {/* Accuracy Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                            <div className="text-sm text-zinc-500 font-medium">Deliverability Score</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex items-center justify-between">
                        <div className="flex gap-4 flex-wrap">
                            {["VBA", "MS Access", "Excel Automation", "WinAPI", "SQL", "Regex"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-zinc-300 border-white/5 px-4 py-2">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Problem & Solution */}
            <section className="container px-6 py-24 mx-auto max-w-4xl border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6" /> The Problem
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Traditional Excel workflows break down beyond a few thousand rows. Manual filtering and row-by-row tasks cause severe performance bottlenecks, data corruption, and human error.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
                            <Activity className="w-6 h-6" /> The Solution
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Smart CRM pushes Excel beyond its limits, turning it into a high-throughput engine. It loads entire datasets into RAM, validates them instantly, and exports clean data—all without external servers.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Key Features Grid */}
            <section className="container px-6 py-12 mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Database, title: "High-Throughput", desc: "Processes 100k+ records per session, replacing workflows capped at ~500/day." },
                        { icon: Zap, title: "In-Memory Optimization", desc: "Uses Array Processing to eliminate slow cell-by-cell operations." },
                        { icon: ShieldCheck, title: "Enterprise Validation", desc: "Perform Deep email syntax checks, domain validation, and regex sanitization." },
                        { icon: Repeat, title: "Duplicate Detection", desc: "Intelligent algorithm to identify and merge duplicate records across large datasets." },
                        { icon: FileCheck, title: "Transactional Safety", desc: "Custom rollback logic prevents partial writes and corrupted datasets." },
                        { icon: Layers, title: "Structured Export", desc: "clean, formatted output ready for direct ingestion into downstream CRM tools." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-colors">
                            <feature.icon className="w-10 h-10 text-orange-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Deep Dive */}
            <section className="container px-6 py-24 mx-auto max-w-5xl border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Brute Force <span className="text-orange-500">Efficiency</span>.
                        </h2>
                        <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                            <p>
                                The core bottleneck was the <strong>Interface Barrier</strong> (reading/writing to cells one by one). Smart CRM bypasses this by dumping the entire dataset into a <strong>2D RAM Array</strong>.
                            </p>
                            <p>
                                Validation logic executes in memory at millisecond speed, and results are written back in a single bulk operation. This transforms Excel from a UI tool into a memory-driven data engine.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-8">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 mt-1">
                                    <FileSpreadsheet size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Processing Layer</h4>
                                    <p className="text-zinc-500">VBA Variant Arrays + Optimized Loops.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-red-500/10 rounded-xl text-red-500 mt-1">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Validation Layer</h4>
                                    <p className="text-zinc-500">Regex Rules + Domain Checks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 mt-1">
                                    <Server size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Reliability Layer</h4>
                                    <p className="text-zinc-500">ACID-style transaction flow & rollbacks.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
                        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <span className="ml-2 text-xs text-zinc-500 font-mono">optimizer.bas</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-zinc-500">&apos; 1. Optimization: Read 100k rows into RAM</span><br />
                                <span className="text-blue-400">Dim</span> DataArray <span className="text-blue-400">As Variant</span><br />
                                DataArray = Range(<span className="text-orange-300">&quot;A1:Z100000&quot;</span>).Value<br />
                                <br />
                                <span className="text-zinc-500">&apos; 2. Process in Memory (Millisecond speed)</span><br />
                                <span className="text-fuchsia-400">For</span> i = <span className="text-blue-400">LBound</span>(DataArray) <span className="text-fuchsia-400">To</span> <span className="text-blue-400">UBound</span>(DataArray)<br />
                                <span className="text-fuchsia-400">If</span> IsValidEmail(DataArray(i, 5)) <span className="text-fuchsia-400">Then</span><br />
                                DataArray(i, 6) = <span className="text-orange-300">&quot;Verified&quot;</span><br />
                                <span className="text-fuchsia-400">End If</span><br />
                                <span className="text-fuchsia-400">Next</span> i<br />
                                <br />
                                <span className="text-zinc-500">&apos; 3. Dump back to Sheet (Single Op)</span><br />
                                Range(<span className="text-orange-300">&quot;A1:Z100000&quot;</span>).Value = DataArray
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
                    <span>Part of the 2024 Portfolio</span>
                </div>
            </section>

        </div>
    )
}
