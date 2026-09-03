import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Cpu, Wifi, Smartphone, Database, CheckCircle2, AlertTriangle, Zap, Activity, Layers, Server, Cloud, Brain, ShieldCheck, Languages, Wind, Volume2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function SanjivaniV2() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-teal-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[88vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-teal-500/15">
                {/* Background FX: Teal/Cyan Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/30 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[850px] h-[850px] rounded-full blur-[160px] bg-teal-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] bg-cyan-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-teal-500/30 text-teal-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-teal-950/40 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                            Production-Grade AI Platform (Standalone Release)
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-teal-400 drop-shadow-sm">
                            Sanjivani <span className="text-teal-400">2.0</span>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        The Next-Gen AI Agronomist Platform. Hybrid <span className="text-teal-400 font-medium">CNN + Gemini 1.5 Flash</span> architecture that understands your crops, speaks regional dialects, and optimizes spraying schedules.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-500 text-white rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-teal-900/40 transition-all">
                                <Link href="https://sanjivani-1ai.pages.dev/" target="_blank" className="flex items-center gap-2">
                                    Launch 2.0 Demo <ExternalLink className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-teal-500/30 text-zinc-200 hover:bg-teal-500/10 hover:text-white rounded-full h-14 px-8 text-base backdrop-blur-md">
                                <Link href="https://github.com/yash-ghodele/Sanjivani.git" target="_blank" className="flex items-center gap-2">
                                    <Github className="w-4 h-4" /> View Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-teal-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Hybrid AI Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-teal-950/20 border border-teal-500/20 p-8 relative overflow-hidden group hover:border-teal-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-teal-400">
                            <Brain size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end space-y-4">
                            <div className="flex gap-2 mb-2">
                                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 font-mono text-xs">MobileNetV2 Edge</Badge>
                                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-mono text-xs">Gemini 1.5 Flash</Badge>
                            </div>
                            <h3 className="text-teal-400 uppercase tracking-widest text-xs font-bold">Hybrid Intelligence</h3>
                            <div className="text-5xl md:text-6xl font-black text-white tracking-tight">Dual-Mode AI</div>
                            <p className="text-zinc-300 text-lg max-w-md font-light leading-relaxed">
                                Deterministic vision for <span className="text-white font-medium">95% accuracy</span> in &lt;10ms, coupled with LLM contextual reasoning to synthesize weather, soil, and regional spray advice.
                            </p>
                        </div>
                    </div>

                    {/* Speed Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-teal-500/30 transition-all backdrop-blur-sm">
                        <Zap className="w-10 h-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">&lt; 10ms</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Edge Prescreen Latency</div>
                        </div>
                    </div>

                    {/* Multilingual Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-teal-500/30 transition-all backdrop-blur-sm">
                        <Languages className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">3 Langs</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">English / Hindi / Marathi</div>
                        </div>
                    </div>

                    {/* Tech Stack Horizontal */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["Next.js 14", "FastAPI Microservices", "Gemini 1.5 Flash", "TensorFlow Lite", "Cloudflare Pages", "Render", "Firebase"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-teal-500/10 hover:bg-teal-500/20 text-teal-200 border-teal-500/20 px-4 py-2 text-xs font-mono">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The 2.0 Evolution Shift */}
            <section className="max-w-5xl px-6 py-24 mx-auto border-b border-teal-500/15">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="border-teal-500/30 text-teal-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-teal-500/10">
                            Product Evolution
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">The 2.0 Architectural Shift</h2>
                        <p className="text-zinc-400 text-lg font-light">Evolving from a single offline diagnostic tool (1.0) into a full microservices farm management ecosystem (2.0).</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-6 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-zinc-400">Sanjivani 1.0 (Edge Vision Tool)</h3>
                            <ul className="space-y-4 text-zinc-400 text-sm font-light">
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500" />Single Monolith (Flask API)</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500" />Manual Server Deployment</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500" />English Text Only</li>
                                <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-red-500" />Fixed Image Disease Classification</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-3xl bg-teal-500/[0.04] border border-teal-500/25 space-y-6 relative overflow-hidden backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-teal-400">Sanjivani 2.0 (Platform Suite)</h3>
                            <ul className="space-y-4 text-zinc-200 text-sm font-medium">
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-400" /> Decoupled Microservices (Next.js 14 + FastAPI)</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-400" /> Automated CI/CD on Cloudflare Pages &amp; Render</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-400" /> Native Marathi, Hindi &amp; English Voice UI</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-teal-400" /> Contextual Spray Index &amp; Farm Growth Suite</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Deep Architectural Pipeline Grid (NEW DETAILS) */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-teal-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-teal-500/30 text-teal-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-teal-500/10">
                        Hybrid AI Engine
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Hybrid CNN + LLM Orchestration
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        Combining ultra-fast deterministic edge vision with LLM contextual reasoning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            icon: Cpu,
                            title: "10ms Edge Prescreen",
                            desc: "MobileNetV2 handles initial visual scan. If confidence is below 60%, safety guardrails reject non-plant or noisy images."
                        },
                        {
                            step: "02",
                            icon: Wind,
                            title: "Real-time Context Fetch",
                            desc: "FastAPI microservice fetches hyper-local humidity, wind speed, and precipitation data for the farmer's GPS location."
                        },
                        {
                            step: "03",
                            icon: Brain,
                            title: "Gemini 1.5 Flash Synthesis",
                            desc: "LLM contextualizes the visual diagnosis with weather risks (e.g. high humidity warning for Copper Oxychloride application)."
                        },
                        {
                            step: "04",
                            icon: Volume2,
                            title: "Regional Voice Output",
                            desc: "Generates spoken Marathi/Hindi advice so farmers without literacy barriers receive immediate step-by-step guidance."
                        }
                    ].map((pipeline, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-teal-500/30 transition-all backdrop-blur-sm relative group">
                            <div className="text-teal-400 font-mono text-xs uppercase tracking-widest font-bold mb-4">{pipeline.step} // STAGE</div>
                            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <pipeline.icon className="w-6 h-6 text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{pipeline.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{pipeline.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Engineering Deep Dive */}
            <section className="max-w-6xl px-6 py-24 mx-auto border-b border-teal-500/15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                            Engineered for <br /> <span className="text-teal-400">Resilience</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                Sanjivani 2.0 moved beyond static classification. Instead of returning raw labels (&quot;Early Blight&quot;), the <strong className="text-white font-medium">Hybrid AI Pipeline</strong> evaluates environmental risks before generating remedies.
                            </p>
                            <p>
                                If high humidity and rain are forecast, the system advises delaying spray applications to prevent chemical runoff—saving farmers money and protecting soil health.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-teal-500/[0.03] border border-teal-500/15">
                                <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 mt-1">
                                    <Brain size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Gemini 1.5 Flash LLM</h4>
                                    <p className="text-zinc-400 text-sm font-light">Contextual agronomist prompt engineering with weather payload injection.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-teal-500/[0.03] border border-teal-500/15">
                                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 mt-1">
                                    <Languages size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Multilingual Translation Engine</h4>
                                    <p className="text-zinc-400 text-sm font-light">Native Marathi &amp; Hindi localization with Web Speech API audio playback.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-2xl overflow-hidden border border-teal-500/20 bg-zinc-950 shadow-2xl relative group">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-teal-400 font-mono">hybrid_pipeline.py</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-fuchsia-400">async def</span> <span className="text-yellow-200">analyze_crop_health</span>(image, context):<br />
                                &nbsp;&nbsp;<span className="text-zinc-500"># 1. Fast Edge Prescreen (&lt;10ms)</span><br />
                                &nbsp;&nbsp;visual_pred = mobilenet.predict(image)<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">if</span> visual_pred.confidence &lt; <span className="text-orange-300">0.6</span>:<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">return</span> Security.flag_uncertainty()<br />
                                <br />
                                &nbsp;&nbsp;<span className="text-zinc-500"># 2. Fetch Hyper-local Weather Payload</span><br />
                                &nbsp;&nbsp;weather = <span className="text-fuchsia-400">await</span> weather_service.get(context.lat, context.lon)<br />
                                <br />
                                &nbsp;&nbsp;<span className="text-zinc-500"># 3. Gemini 1.5 Flash Agronomist Context</span><br />
                                &nbsp;&nbsp;advice = <span className="text-fuchsia-400">await</span> gemini.generate(<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;role=<span className="text-green-400">&quot;agronomist&quot;</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;lang=context.language,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;prompt=f<span className="text-green-400">&quot;Diagnosed {'{'}visual_pred.disease{'}'} in {'{'}weather.humidity{'}'}% humidity...&quot;</span><br />
                                &nbsp;&nbsp;)<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">return</span> Response(diagnosis=visual_pred, advice=advice)
                            </pre>
                        </div>
                    </div>

                </div>
            </section>

            {/* 6. Features Grid */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-white">
                    Beyond Diagnosis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Activity, title: "Spraying Index", desc: "Real-time wind speed & rain tracking to advise the safest hours for spray application." },
                        { icon: Layers, title: "Crop Growth Calendar", desc: "Dynamic timeline tracking growth milestones from sowing to harvest with preventative tips." },
                        { icon: Database, title: "Scan History & Trends", desc: "Cloud database sync across mobile devices to track farm recovery over multiple seasons." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-teal-500/30 transition-all text-center group backdrop-blur-sm">
                            <div className="mx-auto w-12 h-12 bg-teal-500/10 rounded-2xl border border-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon size={24} className="text-teal-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-teal-500/20 flex items-center justify-center group-hover:border-teal-500/50 bg-teal-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-teal-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-teal-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
