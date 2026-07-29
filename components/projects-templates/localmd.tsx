import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Terminal, Lock, Activity, Cpu, FileCheck, Layout, Zap, BarChart3, Database, Layers, Wifi, FileSpreadsheet, Server } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function LocalMD() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-amber-500/30">

            {/* 1. Hero Section */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-950/40 via-black to-black opacity-60"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-amber-500/10 backdrop-blur-md">
                        Local-First Editor
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-900/50 font-sans">
                        LocalMD
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Your files stay yours. <br />
                        <span className="text-amber-400 font-semibold">100% in-browser</span> Markdown editor and document transformation engine with offline capabilities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <div className="flex items-center gap-4">
                            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-500 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-amber-900/20">
                                <Link href="#" className="flex items-center gap-2">
                                    Launch Editor <ExternalLink className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 rounded-full h-14 px-10 text-lg">
                                <Link href="#" className="flex items-center gap-2">
                                    <Github className="w-5 h-5" /> View Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Local Privacy Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Lock size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-2">Data Privacy</h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4">100%</div>
                            <p className="text-zinc-400 text-lg">
                                Local processing. Your documents, formulas, and diagrams never leave your browser. Zero servers, zero trackers.
                            </p>
                        </div>
                    </div>

                    {/* Latency Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Zap className="w-10 h-10 text-amber-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">0ms</div>
                            <div className="text-sm text-zinc-500 font-medium">Server Round-Trip Latency</div>
                        </div>
                    </div>

                    {/* FS Access Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Database className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">Native</div>
                            <div className="text-sm text-zinc-500 font-medium">File System Access API</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex items-center justify-between">
                        <div className="flex gap-4 flex-wrap">
                            {["Next.js 16", "React 19", "Tailwind 4", "Mammoth.js", "KaTeX", "PWA", "Mermaid"].map(tech => (
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
                            <Lock className="w-6 h-6" /> The Privacy Leak
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Modern markdown editors require sending your PDFs, Word documents, or slides to remote servers for processing. This presents significant privacy risks for confidential and enterprise documents.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                            <Zap className="w-6 h-6" /> The Edge Solution
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            LocalMD compiles document parser engines to run client-side. Word documents, PDFs, and slide presentations are transformed into clean Markdown <strong>entirely inside the browser sandbox</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Key Features Grid */}
            <section className="container px-6 py-12 mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: FileCheck, title: "Multi-Format Import", desc: "Drag-and-drop Word, PDF, or PowerPoint files for instant local conversion." },
                        { icon: Layout, title: "Split Sync Preview", desc: "Synchronized scroll-split editor with live equations and Mermaid flowcharts." },
                        { icon: Lock, title: "Secure Sandbox", desc: "Zero cloud synchronization or network requests after initial service worker load." },
                        { icon: BarChart3, title: "Auto-Generated TOC", desc: "Interactive table of contents automatically mapped from document headers." },
                        { icon: Cpu, title: "Undo/Redo History", desc: "Robust in-memory editor history queue preserving formatting changes." },
                        { icon: Zap, title: "Offline-First PWA", desc: "Service workers keep the application fully functional without active connection." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-amber-500/30 transition-colors">
                            <feature.icon className="w-10 h-10 text-amber-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Deep Dive & Architecture */}
            <section className="container px-6 py-24 mx-auto max-w-5xl border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            File Access without <span className="text-amber-500">Servers</span>.
                        </h2>
                        <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                            <p>
                                Traditional web apps require uploading files to server endpoints or downloading blobs. LocalMD implements the native **File System Access API** (showOpenFilePicker) to establish direct stream handles to local files.
                            </p>
                            <p>
                                When editing a local file and hitting Ctrl+S, the app writes changes directly back to the file system handle at native disk I/O speeds, matching the experience of a desktop IDE.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-8">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 mt-1">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Parsing Layer</h4>
                                    <p className="text-zinc-500">Mammoth.js + React-Markdown + RemarkGFM.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 mt-1">
                                    <Server size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Disk IO System</h4>
                                    <p className="text-zinc-500">File System Access API (WritableStream).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-green-500/10 rounded-xl text-green-500 mt-1">
                                    <Wifi size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Offline Engine</h4>
                                    <p className="text-zinc-500">Service Worker + CacheStorage PWA caching.</p>
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
                            <span className="ml-2 text-xs text-zinc-500 font-mono">file_handler.ts</span>
                        </div>
                        <div className="p-6 overflow-x-auto font-mono">
                            <pre className="text-sm leading-relaxed">
                                <span className="text-fuchsia-400">async function</span> <span className="text-yellow-200">saveLocalFile</span>(handle, content) {'{'}<br />
                                &nbsp;&nbsp;<span className="text-zinc-500">{'// 1. Request write stream'}</span><br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">const</span> writable = <span className="text-fuchsia-400">await</span> handle.<span className="text-yellow-200">createWritable</span>();<br />
                                <br />
                                &nbsp;&nbsp;<span className="text-zinc-500">{'// 2. Write content stream'}</span><br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">await</span> writable.<span className="text-yellow-200">write</span>(content);<br />
                                <br />
                                &nbsp;&nbsp;<span className="text-zinc-500">{'// 3. Flush buffer to disk'}</span><br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">await</span> writable.<span className="text-yellow-200">close</span>();<br />
                                &nbsp;&nbsp;console.<span className="text-yellow-200">log</span>(<span className="text-green-400">&quot;Written to local disk.&quot;</span>);<br />
                                {'}'}
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
                    <span>Part of the 2026 Portfolio</span>
                </div>
            </section>

        </div>
    )
}
