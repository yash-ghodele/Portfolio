import Link from 'next/link'
import { ArrowLeft, ExternalLink, Cpu, GraduationCap, Code, Zap, Users, BookOpen, CheckCircle2, Globe, Github, Smartphone, ShieldCheck, Layers, FileText, Server, Building2, Sparkles, Compass, Rocket } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function UgamCampus() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[88vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-amber-500/15">
                {/* Background FX - Golden Amber & Electric Dawn Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[850px] h-[850px] rounded-full blur-[160px] bg-amber-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] bg-yellow-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-amber-500/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                            Ugam Digital Studio // Where Digital Begins
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 drop-shadow-sm">
                            Ugam Campus
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Project-as-a-Service &amp; Engineering Education Engine. <br className="hidden md:block" />
                        Bridging the gap between <span className="text-amber-400 font-medium">circuit and cloud</span>, theory and shipped production products.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-500 text-white rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-amber-900/40 transition-all">
                                <Link href="https://www.ugamdigitalstudio.tech/" target="_blank" className="flex items-center gap-2">
                                    Official Studio Website <ExternalLink className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Stats Bento Grid */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                    
                    {/* Primary Scale Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-amber-950/20 border border-amber-500/20 p-8 relative overflow-hidden group hover:border-amber-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-amber-400">
                            <GraduationCap size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-amber-400 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Portfolio &amp; Delivery Impact
                            </h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">50+</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Production-grade engineering projects shipped across Maharashtra. Combining 70% reusable architecture templates with 30% bespoke logic for zero plagiarism flags.
                            </p>
                        </div>
                    </div>

                    {/* Mentored Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/30 transition-all backdrop-blur-sm">
                        <Users className="w-10 h-10 text-blue-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">200+</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Engineers Mentored</div>
                        </div>
                    </div>

                    {/* Zero Plagiarism Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/30 transition-all backdrop-blur-sm">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">0</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Plagiarism Flags</div>
                        </div>
                    </div>

                    {/* Engineering Tracks */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["IoT Nodes", "Embedded Systems", "PCB Design", "Full-Stack Web", "Manufacturing ERP", "AI/ML Edge Vision", "Viva Defense Prep"].map(track => (
                                <Badge key={track} variant="secondary" className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 border-amber-500/20 px-4 py-2 text-xs font-mono">
                                    {track}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Two-Wing Studio Architecture (FROM UGAM DNA) */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-amber-500/10">
                        Studio Structure
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Two-Wing Digital Studio Architecture
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        Ugam operates as a dual-engine engineering studio: empowering students on campus and digitizing industry on the factory floor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Wing 1: Ugam Campus */}
                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-amber-500/30 transition-all backdrop-blur-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <span className="text-xs text-amber-400 font-mono uppercase tracking-widest font-semibold">Wing 01 // Student Engine</span>
                                <h3 className="text-2xl font-bold text-white">Ugam Campus</h3>
                            </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed font-light">
                            Rapid-delivery Project-as-a-Service for engineering students (ECE, CS, IT). Scopes vague ideas into buildable technical specifications and delivers working hardware/software setups along with technical documentation reports, presentation decks, and viva defense coaching.
                        </p>
                        <ul className="space-y-2 text-xs font-mono text-amber-200/80 pt-2">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> 50+ Completed Engineering Projects</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Flagships: AuthoSec, Smart Garbage, ESP Car</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Complete Codebase + Report + Viva Coaching</li>
                        </ul>
                    </div>

                    {/* Wing 2: Ugam Studio */}
                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-amber-500/30 transition-all backdrop-blur-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400">
                                <Building2 size={24} />
                            </div>
                            <div>
                                <span className="text-xs text-orange-400 font-mono uppercase tracking-widest font-semibold">Wing 02 // Industry Engine</span>
                                <h3 className="text-2xl font-bold text-white">Ugam Studio</h3>
                            </div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed font-light">
                            Premium engineering studio targeting Aurangabad&apos;s industrial manufacturing sector. Replaces manual spreadsheet and WhatsApp workflows with custom real-time IoT telemetry dashboards, manufacturing ERP-Lite platforms, quality control tools, and supply chain applications.
                        </p>
                        <ul className="space-y-2 text-xs font-mono text-orange-200/80 pt-2">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Real-time Industrial IoT &amp; Telemetry Dashboards</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Production Tracking &amp; Manufacturing ERP-Lite</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Custom Retainer Engagements for SME Digitization</li>
                        </ul>
                    </div>
                </div>

                {/* Shipped Product Portfolio Highlights */}
                <div className="mt-12 p-8 rounded-3xl bg-amber-950/20 border border-amber-500/20 backdrop-blur-md space-y-4">
                    <h4 className="text-lg font-bold text-amber-300 uppercase tracking-wider font-mono">Flagship Ugam Campus Engineering Products:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link href="/work/authosec" className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all block">
                            <div className="text-white font-bold text-base mb-1">AuthoSec</div>
                            <div className="text-xs text-zinc-400">Dual-QR Secure Payment &amp; Compliance Protocol</div>
                        </Link>
                        <Link href="/work/smart-garbage" className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all block">
                            <div className="text-white font-bold text-base mb-1">Smart Garbage</div>
                            <div className="text-xs text-zinc-400">Automated Wet &amp; Dry Waste Classification Bin</div>
                        </Link>
                        <Link href="/work/esp-car" className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all block">
                            <div className="text-white font-bold text-base mb-1">ESP Car</div>
                            <div className="text-xs text-zinc-400">Wi-Fi Robotic Vehicle &amp; Blynk Remote Controls</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. The 5-Phase Alchemist Delivery Protocol (UPDATED FROM UGAM DNA) */}
            <section className="max-w-6xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-amber-500/10">
                        Delivery Methodology
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        The 5-Phase Alchemist Protocol
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        A rigorous 5-phase delivery pipeline that ensures speed, zero plagiarism, and total technical comprehension.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { step: "01", icon: Compass, title: "Initialization", desc: "Free consultation, problem statement scoping, and technical feasibility audit." },
                        { step: "02", icon: Layers, title: "Architecture", desc: "Component selection, Bill of Materials (BOM), circuit schematics, and cloud design." },
                        { step: "03", icon: Cpu, title: "Execution", desc: "Parallel hardware assembly, sensor calibration, microservices build, and UI layout." },
                        { step: "04", icon: ShieldCheck, title: "Validation", desc: "Unit testing, edge-case stress testing, and custom logic isolation." },
                        { step: "05", icon: Rocket, title: "Viva Defense", desc: "Technical report documentation, slide deck creation, and mock oral viva coaching." }
                    ].map((phase, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-amber-500/30 transition-all backdrop-blur-sm group flex flex-col justify-between">
                            <div>
                                <div className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold mb-3">PHASE {phase.step}</div>
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <phase.icon className="w-5 h-5 text-amber-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                                <p className="text-zinc-400 text-xs leading-relaxed font-light">{phase.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Production Tech Boilerplates & Custom Logic */}
            <section className="max-w-5xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-amber-500/10">
                            Architecture Design
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                            70% Proven Templates. <br />
                            <span className="text-amber-400">30% Bespoke Logic.</span>
                        </h2>
                        <p className="text-zinc-300 leading-relaxed font-light text-base">
                            Rather than reinventing common infrastructure for every build, Ugam utilizes standardized production-ready boilerplates (ESP32 + MQTT + Firebase for IoT nodes; Next.js + Tailwind + Supabase for web platforms).
                        </p>
                        <p className="text-zinc-300 leading-relaxed font-light text-base">
                            We dedicate maximum development time to the 30% custom domain logic—ensuring each project is unique, plagiarism-free, and ready for strict academic panel defense.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-amber-500/20 bg-zinc-950 p-8 space-y-6 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-amber-400" />
                            <h3 className="text-xl font-bold text-white">Template vs Custom Ratio</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                                    <span>Standardized Infrastructure Stack</span>
                                    <span className="text-amber-400">70%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full w-[70%]" />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                                    <span>Unique Custom Domain Logic</span>
                                    <span className="text-emerald-400">30%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full w-[30%]" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 text-xs text-zinc-400 leading-relaxed">
                            Tagline: <strong className="text-white">&quot;Where Digital Begins.&quot;</strong> (उगम - Hindi for origin/beginning).
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/50 bg-amber-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-amber-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-amber-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
