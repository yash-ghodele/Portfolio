import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Cpu, Wifi, Smartphone, Database, CheckCircle2, AlertTriangle, Zap, Activity, Layers, Server, ShieldCheck, Camera, Sparkles, BookOpen, HardDriveDownload } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function Sanjivani() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[88vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-emerald-500/15">
                {/* Background FX - Emerald/Teal Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[850px] h-[850px] rounded-full blur-[160px] bg-emerald-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] bg-teal-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-emerald-500/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            AI for Agriculture &amp; Edge Vision
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-400 drop-shadow-sm">
                            Sanjivani
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Instant crop diagnosis for the 2G world. <br className="hidden md:block" />
                        <span className="text-emerald-400 font-medium">Edge-first AI</span> powered by INT8 MobileNetV2, built for real farms—not fast internet.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-emerald-900/40 transition-all">
                                <Link href="#" className="flex items-center gap-2">
                                    View Live Demo <ExternalLink className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-emerald-500/30 text-zinc-200 hover:bg-emerald-500/10 hover:text-white rounded-full h-14 px-8 text-base backdrop-blur-md">
                                <Link href="#" className="flex items-center gap-2">
                                    <Github className="w-4 h-4" /> Source Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-emerald-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Main Impact Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-emerald-950/20 border border-emerald-500/20 p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-emerald-400">
                            <Cpu size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-emerald-400 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Classification Benchmark
                            </h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">98.2%</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Validated across 15 crop disease classes (Tomato Early Blight, Potato Late Scab, Pepper Spot) using fine-tuned MobileNetV2 trained on 54,000+ PlantVillage images.
                            </p>
                        </div>
                    </div>

                    {/* Speed Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-all backdrop-blur-sm">
                        <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">&lt; 150ms</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">WASM Inference Speed</div>
                        </div>
                    </div>

                    {/* Model Footprint */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-all backdrop-blur-sm">
                        <HardDriveDownload className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">3.4 MB</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">INT8 Quantized Model</div>
                        </div>
                    </div>

                    {/* Tech Stack Horizontal */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["PyTorch", "MobileNetV2 INT8", "Flask", "React PWA", "ONNX WebAssembly", "IndexedDB", "OpenCV"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200 border-emerald-500/20 px-4 py-2 text-xs font-mono">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Problem & Solution */}
            <section className="max-w-5xl px-6 py-24 mx-auto border-b border-emerald-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-red-500/[0.03] border border-red-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2.5">
                            <AlertTriangle className="w-6 h-6" /> The Problem
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            Most farmers rely on delayed agronomy consultations or guesswork, losing critical harvest days. Existing AI solutions demand high-end smartphones and 5G connections—luxuries absent in rural agriculture.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2.5">
                            <Activity className="w-6 h-6" /> The Solution
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            Sanjivani embeds expert CNN vision into offline progressive web apps. Farmers snap a photo of infected leaves and receive <strong className="text-white font-medium">instant diagnosis and remedy instructions</strong>—even without internet.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Deep Offline-First Signal Pipeline (NEW DETAILS) */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-emerald-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-emerald-500/10">
                        Zero Latency Pipeline
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Offline Vision Architecture
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        How Sanjivani diagnoses crop diseases locally on budget Android phones without server roundtrips.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            icon: Camera,
                            title: "Camera Capture & Preprocess",
                            desc: "HTML5 Camera API captures leaf image, applies CLAHE contrast normalization, and resizes to 224x224 RGB array."
                        },
                        {
                            step: "02",
                            icon: Cpu,
                            title: "ONNX WASM Inference",
                            desc: "Runs INT8 quantized MobileNetV2 directly inside WebAssembly, completing forward pass in under 150ms."
                        },
                        {
                            step: "03",
                            icon: Database,
                            title: "IndexedDB Local Cache",
                            desc: "Prediction result, leaf image, and GPS tag are cached into IndexedDB for offline history and review."
                        },
                        {
                            step: "04",
                            icon: Wifi,
                            title: "Low-Bandwidth Sync",
                            desc: "When 2G/3G connectivity is restored, Service Worker quietly syncs diagnostic telemetry to Flask cloud DB."
                        }
                    ].map((pipeline, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-emerald-500/30 transition-all backdrop-blur-sm relative group">
                            <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold mb-4">{pipeline.step} // STAGE</div>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <pipeline.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{pipeline.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{pipeline.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Key Features Grid */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-emerald-500/15">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-white">
                    System Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Cpu, title: "Edge AI Detection", desc: "Fine-tuned MobileNetV2 covering 15+ disease classes across Tomato, Potato, and Pepper crops." },
                        { icon: Zap, title: "Sub-150ms WASM Speed", desc: "Instant local classification replaces multi-day consultation delays for critical farm decisions." },
                        { icon: Wifi, title: "Offline-First PWA Engine", desc: "Fully functional without cellular service. Service Workers handle model caching and assets." },
                        { icon: Smartphone, title: "Budget Device Optimized", desc: "Minimal RAM and memory footprint (< 50MB runtime RAM) tailored for low-cost Android hardware." },
                        { icon: Database, title: "IndexedDB Persistence", desc: "Store-and-Forward architecture guarantees zero data loss during power or network outages." },
                        { icon: CheckCircle2, title: "Actionable Remedies", desc: "Pairs disease classification with precise organic and chemical spray dosage instructions." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-emerald-500/30 transition-all group backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Hardware & Deep Dive */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            Engineered for the <span className="text-emerald-400">Edge</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                The core engineering challenge wasn&apos;t just accuracy—it was <strong className="text-white font-medium">accessibility</strong> under extreme bandwidth constraints. Rural farmers cannot wait for 15MB cloud model payloads.
                            </p>
                            <p>
                                By quantizing PyTorch MobileNetV2 parameters into <strong className="text-white font-medium">INT8 precision</strong>, we shrank the binary from 14.2MB to 3.4MB, enabling ONNX WebAssembly to run predictions on-device at 60 FPS.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/15">
                                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mt-1">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Model Quantization</h4>
                                    <p className="text-zinc-400 text-sm font-light">MobileNetV2 INT8 Quantized PyTorch model (3.4 MB).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/15">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 mt-1">
                                    <Server size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Inference Runtime</h4>
                                    <p className="text-zinc-400 text-sm font-light">ONNX Runtime WebAssembly + OpenCV CLAHE normalization.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/15">
                                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 mt-1">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Client Application</h4>
                                    <p className="text-zinc-400 text-sm font-light">React PWA + Service Workers + IndexedDB Store-and-Forward.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-2xl overflow-hidden border border-emerald-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-emerald-400 font-mono">quantized_model.py</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-zinc-500">{'# 1. Load Fine-Tuned PyTorch Model'}</span><br />
                                <span className="text-blue-400">model</span> = torch.hub.load(<span className="text-green-400">&apos;pytorch/vision&apos;</span>, <span className="text-green-400">&apos;mobilenet_v2&apos;</span>)<br />
                                model.classifier[1] = nn.Linear(1280, <span className="text-orange-300">15</span>)<br />
                                <br />
                                <span className="text-zinc-500">{'# 2. INT8 Dynamic Post-Training Quantization'}</span><br />
                                <span className="text-blue-400">quantized_model</span> = torch.quantization.quantize_dynamic(<br />
                                &nbsp;&nbsp;model, {'{'}nn.Linear, nn.Conv2d{'}'}, dtype=torch.qint8<br />
                                )<br />
                                <br />
                                <span className="text-zinc-500">{'# 3. Export to ONNX for WebAssembly Edge Exec'}</span><br />
                                torch.onnx.export(<br />
                                &nbsp;&nbsp;quantized_model,<br />
                                &nbsp;&nbsp;torch.randn(<span className="text-orange-300">1</span>, <span className="text-orange-300">3</span>, <span className="text-orange-300">224</span>, <span className="text-orange-300">224</span>),<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;sanjivani_int8.onnx&quot;</span>,<br />
                                &nbsp;&nbsp;input_names=[<span className="text-green-400">&apos;leaf_tensor&apos;</span>],<br />
                                &nbsp;&nbsp;output_names=[<span className="text-green-400">&apos;disease_probs&apos;</span>]<br />
                                )
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500/50 bg-emerald-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-emerald-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-emerald-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
