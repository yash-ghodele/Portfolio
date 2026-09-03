import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Terminal, Lock, Activity, Cpu, FileCheck, Layout, Zap, BarChart3, Database, Layers, Wifi, FileSpreadsheet, Server, ShieldCheck, HardDrive, FileText, Code2, Eye, Keyboard, Presentation, FileCode, Sparkles } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function LocalMD() {
    const shortcuts = [
        { action: "Open Local File", shortcut: "Ctrl + O" },
        { action: "Undo / Redo", shortcut: "Ctrl + Z / Y" },
        { action: "Save Changes", shortcut: "Ctrl + S" },
        { action: "Save As / New File", shortcut: "Ctrl + Shift + S" },
        { action: "Export Markdown", shortcut: "Ctrl + M" },
        { action: "Export HTML", shortcut: "Ctrl + E" },
        { action: "Print / PDF Export", shortcut: "Ctrl + P" },
        { action: "Toggle View Layout", shortcut: "Ctrl + /" },
        { action: "Switch Visual Theme", shortcut: "Ctrl + D" },
    ]

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[88vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-indigo-500/15">
                {/* Background FX - Indigo/Blue Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[850px] h-[850px] rounded-full blur-[160px] bg-indigo-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] bg-blue-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-indigo-500/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <Lock className="w-3.5 h-3.5 text-indigo-400" />
                            Liquid Glassmorphism Markdown Suite
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-400 drop-shadow-sm">
                            LocalMD
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Experience a state-of-the-art <span className="text-indigo-400 font-medium">Liquid Glassmorphism editor</span> designed for privacy, performance, and professional documentation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-indigo-900/40 transition-all">
                                <Link href="https://localmd.vercel.app/" target="_blank" className="flex items-center gap-2">
                                    Launch Editor <ExternalLink className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-indigo-500/30 text-zinc-200 hover:bg-indigo-500/10 hover:text-white rounded-full h-14 px-8 text-base backdrop-blur-md">
                                <Link href="#" className="flex items-center gap-2">
                                    <Github className="w-4 h-4" /> View Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-indigo-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Local Privacy Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-indigo-950/20 border border-indigo-500/20 p-8 relative overflow-hidden group hover:border-indigo-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-indigo-400">
                            <Lock size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-indigo-400 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Zero-Cloud Architecture
                            </h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">100%</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Pure client-side processing. All document processing (PDF parsing, PPTX unzipping, DOCX transformation, and Markdown rendering) happens 100% locally in your browser memory.
                            </p>
                        </div>
                    </div>

                    {/* Latency Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-indigo-500/30 transition-all backdrop-blur-sm">
                        <Zap className="w-10 h-10 text-indigo-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">0 KB</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Network Data Sent</div>
                        </div>
                    </div>

                    {/* FS Access Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-indigo-500/30 transition-all backdrop-blur-sm">
                        <HardDrive className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">Native</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">File System Access API</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["Next.js 16", "React 19", "Tailwind 4", "Mammoth.js AST", "KaTeX Engine", "Mermaid.js", "PWA Cache", "Web Workers"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-200 border-indigo-500/20 px-4 py-2 text-xs font-mono">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Smart Document Imports Grid */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-indigo-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-indigo-500/10">
                        Smart Document Imports
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Transform Existing Assets Instantly
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        Drop any document into the browser sandbox for immediate, structured Markdown conversion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-indigo-500/30 transition-all backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                            <FileText className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">PDF Transformation</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                            Drag and drop any PDF to extract structured text with automatic heading and paragraph detection.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-indigo-500/30 transition-all backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                            <FileCode className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">DOCX Integration</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                            Convert Microsoft Word documents to semantic Markdown using Mammoth.js AST parsers.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-indigo-500/30 transition-all backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                            <Presentation className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">PPTX Integration</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                            Import PowerPoint slides; slide titles, bullet hierarchies, and structure are automatically preserved.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Productivity Command Center (Keyboard Shortcuts Table) */}
            <section className="max-w-6xl px-6 py-24 mx-auto border-b border-indigo-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-indigo-500/10">
                        Productivity Suite
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white flex items-center justify-center gap-3">
                        <Keyboard className="w-8 h-8 text-indigo-400 inline-block" /> Productivity Command Center
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        Master desktop-grade keyboard navigation designed for frictionless writing speed.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden backdrop-blur-sm p-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {shortcuts.map((sc, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-indigo-500/30 transition-all">
                                <span className="text-sm text-zinc-300 font-medium">{sc.action}</span>
                                <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-300 border-indigo-500/30 font-mono text-xs px-3 py-1">
                                    {sc.shortcut}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Advanced Rendering Suite (LaTeX & Mermaid) */}
            <section className="max-w-6xl px-6 py-24 mx-auto border-b border-indigo-500/15 space-y-16">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-indigo-500/10">
                        Rendering Engine
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Advanced Rendering Suite
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* Mermaid Diagram Card */}
                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] space-y-6 flex flex-col justify-between backdrop-blur-sm">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-indigo-400" /> Engineering Diagrams (Mermaid)
                                </h3>
                                <Badge variant="outline" className="text-xs font-mono border-indigo-500/20 text-indigo-300">SVG Engine</Badge>
                            </div>
                            <p className="text-zinc-400 text-sm font-light">Generate architecture flowcharts and sequence diagrams directly in text.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-indigo-500/20 font-mono text-xs space-y-2 text-zinc-300 overflow-x-auto">
                            <span className="text-zinc-500">graph LR</span><br />
                            &nbsp;&nbsp;A[PDF/PPTX] --&gt;|Import| B(Local MD)<br />
                            &nbsp;&nbsp;B --&gt;|Refine| C{'{'}Export{'}'}<br />
                            &nbsp;&nbsp;C --&gt;|Static| D[HTML]<br />
                            &nbsp;&nbsp;C --&gt;|Vector| E[PDF]<br />
                            &nbsp;&nbsp;C --&gt;|Source| F[Markdown]
                        </div>
                    </div>

                    {/* Scientific LaTeX Support Card */}
                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] space-y-6 flex flex-col justify-between backdrop-blur-sm">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-indigo-400" /> Scientific LaTeX (KaTeX)
                                </h3>
                                <Badge variant="outline" className="text-xs font-mono border-indigo-500/20 text-indigo-300">KaTeX 60FPS</Badge>
                            </div>
                            <p className="text-zinc-400 text-sm font-light">Full math typesetting for quantum mechanics and advanced engineering.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-indigo-500/20 text-center font-mono text-sm text-indigo-200 overflow-x-auto">
                            <div className="text-xs text-zinc-500 mb-2 font-sans">Schrödinger Equation</div>
                            <code className="text-indigo-300 font-bold">iℏ ∂/∂t Ψ(r,t) = [ -ℏ²/2m ∇² + V(r,t) ] Ψ(r,t)</code>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Disk IO & Deep Dive */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            File Access without <span className="text-indigo-400">Servers</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                Web applications traditionally rely on cloud uploads or temporary file blobs. LocalMD bypasses server layers entirely by leveraging the native W3C <strong className="text-white font-medium">File System Access API</strong> (`showOpenFilePicker`).
                            </p>
                            <p>
                                Once a file handle is granted, hitting `Ctrl+S` streams data directly back to disk through a `FileSystemWritableFileStream` at native disk read/write speeds, offering a desktop-class IDE experience inside the browser.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-indigo-500/[0.03] border border-indigo-500/15">
                                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mt-1">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Client Parsing Engine</h4>
                                    <p className="text-zinc-400 text-sm font-light">Mammoth.js AST + RemarkGFM + KaTeX Math Engine.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-indigo-500/[0.03] border border-indigo-500/15">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 mt-1">
                                    <HardDrive size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Direct Disk Stream</h4>
                                    <p className="text-zinc-400 text-sm font-light">W3C File System Access API (FileSystemFileHandle).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-indigo-500/[0.03] border border-indigo-500/15">
                                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mt-1">
                                    <Wifi size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Offline PWA Runtime</h4>
                                    <p className="text-zinc-400 text-sm font-light">Workbox Service Worker + CacheStorage isolation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-2xl overflow-hidden border border-indigo-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-indigo-400 font-mono">native_file_stream.ts</span>
                        </div>
                        <div className="p-6 overflow-x-auto font-mono">
                            <pre className="text-sm leading-relaxed">
                                <span className="text-zinc-500">{'// 1. Open Local File Stream Handle'}</span><br />
                                <span className="text-fuchsia-400">async function</span> <span className="text-yellow-200">openLocalMarkdown</span>() {'{'}<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">const</span> [fileHandle] = <span className="text-fuchsia-400">await</span> window.<span className="text-yellow-200">showOpenFilePicker</span>({'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;types: [{'{'} description: <span className="text-green-400">&apos;Markdown Files&apos;</span>, accept: {'{'} <span className="text-green-400">&apos;text/markdown&apos;</span>: [<span className="text-green-400">&apos;.md&apos;</span>] {'}'} {'}'}]<br />
                                &nbsp;&nbsp;{'}'});<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">return</span> fileHandle;<br />
                                {'}'}<br />
                                <br />
                                <span className="text-zinc-500">{'// 2. Direct Disk Stream Write on Ctrl+S'}</span><br />
                                <span className="text-fuchsia-400">async function</span> <span className="text-yellow-200">saveDirectToDisk</span>(fileHandle, content) {'{'}<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">const</span> writable = <span className="text-fuchsia-400">await</span> fileHandle.<span className="text-yellow-200">createWritable</span>();<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">await</span> writable.<span className="text-yellow-200">write</span>(content);<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">await</span> writable.<span className="text-yellow-200">close</span>(); <span className="text-zinc-500">{'// Flush to local NVMe'}</span><br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-indigo-500/20 flex items-center justify-center group-hover:border-indigo-500/50 bg-indigo-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-indigo-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-indigo-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
