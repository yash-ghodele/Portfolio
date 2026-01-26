import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Cpu, Wifi, Smartphone, Database, CheckCircle2, AlertTriangle, Zap, Activity, Layers, Server, Cloud, Brain } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'Sanjivani 2.0 - AI Crop Doctor | Yash Ghodele',
    description: 'Production-grade AI agriculture platform. Hybrid CNN+LLM architecture with edge optimization, multilingual support, and comprehensive testing.',
}

export default function SanjivaniV2Page() {
    return (
        <div className="min-h-screen bg-[#0a0e1a] text-white selection:bg-teal-500/30">

            {/* 1. Hero Section: "The Evolution" */}
            <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Background FX: Teal/Cyan Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-[#0a0e1a] to-[#0a0e1a]"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

                {/* Floating Elements Animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-teal-500/30 text-teal-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-teal-950/30 backdrop-blur-md">
                        Production-Grade AI System
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
                        Sanjivani <span className="text-teal-400">2.0</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        The AI Crop Doctor. Hybrid <span className="text-teal-400 font-semibold">CNN + GenAI</span> architecture
                        that understands your crops, speaks your language, and works offline.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <div className="flex items-center gap-4">
                            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-500 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-teal-900/20 transition-all hover:scale-105">
                                <Link href="https://sanjivani-1ai.pages.dev/" target="_blank" className="flex items-center gap-2">
                                    Launch 2.0 Demo <ExternalLink className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 rounded-full h-14 px-10 text-lg backdrop-blur-sm transition-all hover:scale-105">
                                <Link href="https://github.com/yash-ghodele/Sanjivani.git" target="_blank" className="flex items-center gap-2">
                                    <Github className="w-5 h-5" /> View Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0"></div>
                </div>
            </section>

            {/* 2. Bento Grid Stats: "The Architecture" */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Hybrid AI Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/30 border border-white/10 p-8 relative overflow-hidden group backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Brain size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end space-y-4">
                            <div className="flex gap-2 mb-2">
                                <Badge className="bg-teal-500/20 text-teal-400 border-none">MobileNetV2</Badge>
                                <Badge className="bg-cyan-500/20 text-cyan-400 border-none">Gemini 1.5</Badge>
                            </div>
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold">Hybrid Intelligence</h3>
                            <div className="text-5xl md:text-6xl font-black text-white">Dual-Mode AI</div>
                            <p className="text-zinc-400 text-lg max-w-md">
                                Deterministic vision for <span className="text-white">95% accuracy</span> in &lt;100ms, combined with Generative AI for contextual advice and native language explanations.
                            </p>
                        </div>
                    </div>

                    {/* Speed Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/30 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors backdrop-blur-sm">
                        <Zap className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">&lt; 100ms</div>
                            <div className="text-sm text-zinc-500 font-medium">Edge Inference Latency</div>
                        </div>
                    </div>

                    {/* Multilingual Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/30 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors backdrop-blur-sm">
                        <Cloud className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">3 Langs</div>
                            <div className="text-sm text-zinc-500 font-medium">English / Hindi / Marathi</div>
                        </div>
                    </div>

                    {/* Tech Stack Horizontal */}
                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/30 border border-white/10 p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["Next.js 14", "FastAPI", "TensorFlow", "Firebase", "Cloudflare", "Render"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-zinc-300 border-white/5 px-4 py-2 text-sm">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The 2.0 Shift */}
            <section className="container px-6 py-24 mx-auto max-w-4xl border-t border-white/5">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold">The 2.0 Shift</h2>
                        <p className="text-zinc-400 text-lg">From a prototype to a production-grade platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 space-y-6">
                            <h3 className="text-xl font-bold text-zinc-500">Sanjivani 1.0</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500"></span>Single Monolith (Flask)</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500"></span>Manual Deployment</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500"></span>English Only</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500"></span>Disease Detection Only</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-950/20 to-zinc-900/40 border border-teal-500/20 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-teal-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="text-xl font-bold text-teal-400">Sanjivani 2.0</h3>
                            <ul className="space-y-4 text-white">
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Microservices (Next.js + FastAPI)</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-500" /> CI/CD on Cloudflare & Render</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Native Multilingual Support</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Full Farm Management Suite</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Engineering Deep Dive */}
            <section className="container px-6 py-24 mx-auto max-w-6xl border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Engineered for <br /> <span className="text-teal-400">Resilience</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                            <p>
                                We moved beyond simple classification. Sanjivani 2.0 implements a **Hybrid AI Pipeline**. The MobileNetV2 model runs first for speed and safety. Only if a disease is detected, the context (weather, location, crop stage) is injected into **Gemini 1.5 Flash**.
                            </p>
                            <p>
                                This ensures that the advice isn&apos;t just &quot;Early Blight&quot;—it&apos;s &quot;Early Blight detected in Pune during high humidity; skip watering and use Copper Oxychloride.&quot;<br />
                            </p>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl relative group hover:border-teal-500/30 transition-colors">
                        <div className="absolute top-0 right-0 p-4">
                            <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-none">hybrid_pipeline.py</Badge>
                        </div>
                        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-fuchsia-400">async def</span> <span className="text-yellow-200">analyze_crop_health</span>(image, context):<br />
                                <span className="text-zinc-500"># 1. Fast Edge Inference (10ms)</span><br />
                                visual_pred = mobilenet.predict(image)<br />
                                <br />
                                <span className="text-zinc-500"># 2. Safety Guardrails</span><br />
                                <span className="text-fuchsia-400">if</span> visual_pred.confidence &lt; 0.6:<br />
                                <span className="text-fuchsia-400">return</span> Security.flag_uncertainty()<br />
                                <br />
                                <span className="text-zinc-500"># 3. GenAI Contextualization (1.2s)</span><br />
                                advice = <span className="text-fuchsia-400">await</span> gemini.generate(<br />
                                role=<span className="text-green-400">&quot;agronomist&quot;</span>,<br />
                                prompt=f<span className="text-green-400">&quot;Diagnosed {'{'}visual_pred.disease{'}'} in {'{'}context.weather{'}'}...&quot;</span><br />
                                )<br />
                                <br />
                                <span className="text-fuchsia-400">return</span> Response(diagnosis=visual_pred, advice=advice)
                            </pre>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. Features Grid */}
            <section className="container px-6 py-24 mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-16 text-zinc-300">Beyond Diagnosis</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Activity, title: "Spraying Index", desc: "Real-time wind & rain tracking to advise the perfect time to spray." },
                        { icon: Layers, title: "Crop Calendar", desc: "Dynamic timeline tracking growth stages from sowing to harvest." },
                        { icon: Database, title: "Scan History", desc: "Local-first storage of all diagnoses for long-term farm tracking." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-800/20 transition-all text-center group">
                            <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-teal-500/10 group-hover:text-teal-500">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-500 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Footer "Next Project" Navigation */}
            <section className="border-t border-white/5 py-12 bg-zinc-900/30 backdrop-blur-md">
                <div className="container px-6 mx-auto flex justify-between items-center text-sm text-zinc-500">
                    <Link href="/" className="flex items-center hover:text-white transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <span>Part of the 2026 Portfolio</span>
                </div>
            </section>

        </div>
    )
}
