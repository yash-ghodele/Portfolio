import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Cpu, Wifi, Smartphone, Database, CheckCircle2, AlertTriangle, Zap, Activity, Layers, Server } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'Sanjivani - AI Crop Disease Detection | Yash Ghodele',
    description: 'An offline-capable PWA using Deep Learning (MobileNetV2) to detect crop diseases in under 2 seconds. Built for the 2G world.',
}

export default function SanjivaniPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">

            {/* 1. Hero Section: "The Product Launch" */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Background FX */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-black to-black opacity-60"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-emerald-500/10 backdrop-blur-md">
                        AI for Agriculture
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
                        Sanjivani
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Instant crop diagnosis for the 2G world. <br className="hidden md:block" />
                        <span className="text-emerald-400 font-semibold">Edge-first AI</span> powered by MobileNetV2, built for real farms—not fast internet.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <div className="flex items-center gap-4">
                            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-emerald-900/20">
                                <Link href="#" className="flex items-center gap-2">
                                    View Live Demo <ExternalLink className="w-5 h-5" />
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

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
                </div>
            </section>

            {/* 2. Bento Grid Stats: "The Impact" */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Main Impact Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Cpu size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-2">Model Accuracy</h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4">98.2%</div>
                            <p className="text-zinc-400 text-lg">
                                Validated across 15 different crop disease classes (Tomato, Potato, Pepper) using a custom MobileNetV2 architecture.
                            </p>
                        </div>
                    </div>

                    {/* Speed Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">2s</div>
                            <div className="text-sm text-zinc-500 font-medium">Diagnosis Time (vs 3 Days)</div>
                        </div>
                    </div>

                    {/* Offline Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Wifi className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">Offline</div>
                            <div className="text-sm text-zinc-500 font-medium">PWA Capabilities</div>
                        </div>
                    </div>

                    {/* Tech Stack Horizontal */}
                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex items-center justify-between">
                        <div className="flex gap-4 flex-wrap">
                            {["PyTorch", "Flask", "React", "MobileNetV2", "PWA", "IndexedDB"].map(tech => (
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
                            Most farmers rely on delayed expert visits or guesswork, often losing days and yields. Existing AI tools assume reliable internet and high-end devices—luxuries that rural agriculture rarely has.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                            <Activity className="w-6 h-6" /> The Solution
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Sanjivani brings Expert AI to the edge. Farmers capture a leaf image and get <strong>instant actionable insights</strong> within seconds, even in offline or low-bandwidth conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Key Features Grid */}
            <section className="container px-6 py-12 mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Cpu, title: "Edge AI Detection", desc: "Custom MobileNetV2 model covering 15+ disease classes for Tomato, Potato, and Pepper." },
                        { icon: Zap, title: "Ultra-Fast Inference", desc: "Sub-2-second diagnosis replaces multi-day consultation delays." },
                        { icon: Wifi, title: "Offline-First PWA", desc: "Functional without active internet. Syncs data automatically when connectivity returns." },
                        { icon: Smartphone, title: "Mobile Optimized", desc: "Designed for low-end Android devices with minimal memory and compute footprint." },
                        { icon: Database, title: "Local Caching", desc: "IndexedDB ensures zero data loss during network failures or outages." },
                        { icon: CheckCircle2, title: "Actionable Insights", desc: "Provides immediate treatment recommendations alongside disease identification." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors">
                            <feature.icon className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Deep Dive: "The Engineering" */}
            <section className="container px-6 py-24 mx-auto max-w-5xl border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Text Content */}
                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Engineered for the <span className="text-emerald-500">Edge</span>.
                        </h2>
                        <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                            <p>
                                The core challenge wasn&apos;t just accuracy—it was <strong>accessibility</strong>. Rural farmers have <span className="text-white">zero latency tolerance</span> and spotty connection.<br />
                            </p>
                            <p>
                                We utilized a &quot;Store-and-Forward&quot; architecture. Images are cached locally in IndexedDB and predictions are served immediately from the device&apos;s model or a lightweight local server, syncing only when possible.<br />
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-8">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 mt-1">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">AI Layer</h4>
                                    <p className="text-zinc-500">MobileNetV2 (Fine-tuned) + PyTorch.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 mt-1">
                                    <Server size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Backend</h4>
                                    <p className="text-zinc-500">Flask API + OpenCV Pre-processing.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 mt-1">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Frontend</h4>
                                    <p className="text-zinc-500">React PWA + Service Workers.</p>
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
                            <span className="ml-2 text-xs text-zinc-500 font-mono">inference_engine.py</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-fuchsia-400">@app.route</span>(<span className="text-green-400">&apos;/predict&apos;</span>, methods=[<span className="text-green-400">&apos;POST&apos;</span>])<br />
                                <span className="text-blue-400">def</span> <span className="text-yellow-200">predict</span>():<br />
                                <span className="text-zinc-500"># 1. Validate Input</span><br />
                                <span className="text-fuchsia-400">if</span> <span className="text-green-400">&apos;file&apos;</span> <span className="text-fuchsia-400">not in</span> request.files:<br />
                                <span className="text-fuchsia-400">return</span> jsonify({'{'}<span className="text-green-400">&apos;error&apos;</span>: <span className="text-green-400">&apos;No file&apos;</span>{'}'})<br />
                                <br />
                                <span className="text-zinc-500"># 2. Pre-process for MobileNet</span><br />
                                img_bytes = request.files[<span className="text-green-400">&apos;file&apos;</span>].read()<br />
                                tensor = transform_image(img_bytes)<br />
                                <br />
                                <span className="text-zinc-500"># 3. Inference Time</span><br />
                                prediction = model(tensor)<br />
                                confidence = torch.softmax(prediction)<br />
                                <br />
                                <span className="text-fuchsia-400">return</span> jsonify({'{'}<br />
                                <span className="text-green-400">&apos;class&apos;</span>: class_names[prediction.argmax()],<br />
                                <span className="text-green-400">&apos;confidence&apos;</span>: confidence.item()<br />
                                {'}'})
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Footer "Next Project" Navigation */}
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
