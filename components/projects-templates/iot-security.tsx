import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Shield, Lock, Activity, Wifi, Cpu, AlertTriangle, Fingerprint, Zap, Layers, Smartphone, ShieldAlert } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function IoTSecurity() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-cyan-500/15">
                {/* Background FX - Cyan/Blue Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[150px] bg-cyan-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[130px] bg-blue-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-cyan-500/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                            Embedded Systems &amp; Hardware Defense
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-400 drop-shadow-sm">
                            IoT Security
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Security that reacts before you do. <br className="hidden md:block" />
                        <span className="text-cyan-400 font-medium">Event-driven defense</span> with real-time cloud intelligence and <span className="text-white font-medium">sub-300ms latency</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-cyan-900/40 transition-all">
                                <Link href="#" className="flex items-center gap-2">
                                    View Schematic <ExternalLink className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-cyan-500/30 text-zinc-200 hover:bg-cyan-500/10 hover:text-white rounded-full h-14 px-8 text-base backdrop-blur-md">
                                <Link href="#" className="flex items-center gap-2">
                                    <Github className="w-4 h-4" /> Firmware
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-cyan-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Latency Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-cyan-950/20 border border-cyan-500/20 p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-cyan-400">
                            <Wifi size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-cyan-400 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Response Performance
                            </h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">300ms</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Achieved via <span className="text-white font-semibold">WebSocket</span> optimization, down from 2s standard HTTP polling. Feels instantaneous.
                            </p>
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                        <Lock className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">3 Layers</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Biometric / PIN / App</div>
                        </div>
                    </div>

                    {/* Uptime Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                        <Shield className="w-10 h-10 text-red-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">Active</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">3-Strike Lockdown</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["ESP8266 (NodeMCU)", "C++", "Blynk IoT", "WebSockets", "Hardware Design"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200 border-cyan-500/20 px-4 py-2 text-xs font-mono">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Problem & Solution */}
            <section className="max-w-5xl px-6 py-24 mx-auto border-b border-cyan-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-red-500/[0.03] border border-red-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2.5">
                            <AlertTriangle className="w-6 h-6" /> The Problem
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            Conventional smart locks rely on slow polling loops, single-point authentication, and delayed cloud updates. This makes them vulnerable to brute-force attempts and delays critical alerts.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-cyan-500/[0.03] border border-cyan-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2.5">
                            <Zap className="w-6 h-6" /> The Solution
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            This system secures entry points with <strong className="text-white font-medium">3 independent layers</strong> (Biometric, PIN, App) and uses an <strong className="text-white font-medium">event-driven architecture</strong> to react to threats instantly, not periodically.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Key Features Grid */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-cyan-500/15">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-white">
                    Key Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Fingerprint, title: "3-Layer Auth", desc: "Start with Biometric verification, fallback to encrypted PIN, or use Mobile App override." },
                        { icon: Wifi, title: "Sub-300ms Latency", desc: "WebSocket-based communication eliminates HTTP polling lag for real-time control." },
                        { icon: Shield, title: "Autonomous Lockdown", desc: "3-strike intrusion detection instantly disables access and alerts the owner." },
                        { icon: Zap, title: "Power Efficient", desc: "Interrupt-driven wake-up allows the system to sleep deeply until a physical event occurs." },
                        { icon: Activity, title: "Self-Healing", desc: "Watchdog timers and automatic recovery routines prevent system hangs or crashes." },
                        { icon: Smartphone, title: "Remote Control", desc: "Full system state sync with the Blynk IoT app for remote monitoring and unlock." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-cyan-500/30 transition-all group backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Deep Dive */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            Event-Driven <span className="text-cyan-400">Defense</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                Standard polling loops waste power and are too slow for security. We built a fully <strong className="text-white font-medium">Interrupt-Driven Architecture</strong>.
                            </p>
                            <p>
                                Physical tampering or fingerprint detection triggers a hardware interrupt within microseconds. The ESP8266 wakes from deep sleep, transitions to an authentication state, and pushes a WebSocket alert immediately.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/15">
                                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 mt-1">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Hardware Layer</h4>
                                    <p className="text-zinc-400 text-sm font-light">ESP8266 + Biometric/Motion Sensors.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/15">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 mt-1">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Firmware Layer</h4>
                                    <p className="text-zinc-400 text-sm font-light">C++ State Machine + Watchdog Timers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/15">
                                <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 mt-1">
                                    <Wifi size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Cloud Layer</h4>
                                    <p className="text-zinc-400 text-sm font-light">Blynk IoT Platform + WebSocket Real-time Sync.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center px-4 py-3 bg-white/[0.03] border-b border-white/5 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-xs text-zinc-400 font-mono">isr_handler.cpp</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-zinc-500">{'// Interrupt Service Routine'}</span><br />
                                <span className="text-fuchsia-400">void IRAM_ATTR</span> <span className="text-yellow-200">detectFinger</span>() {'{'}<br />
                                <span className="text-fuchsia-400">if</span> (systemState == <span className="text-blue-400">IDLE</span>) {'{'}<br />
                                <span className="text-zinc-500">{'// Immediate State Transition'}</span><br />
                                <span className="text-blue-400">systemState</span> = <span className="text-blue-400">AUTH_WAIT</span>;<br />
                                wakeUpTime = <span className="text-blue-400">millis</span>();<br />
                                <br />
                                <span className="text-zinc-500">{'// Wake ESP8266 from Light Sleep'}</span><br />
                                wifi_fpm_do_wakeup();<br />
                                <br />
                                <span className="text-zinc-500">{'// Push Websocket Alert'}</span><br />
                                Blynk.<span className="text-yellow-200">virtualWrite</span>(V1, <span className="text-green-400">&quot;Motion Detected&quot;</span>);<br />
                                {'}'}<br />
                                {'}'}<br />
                                <br />
                                <span className="text-zinc-500">{'// Hardware Attach'}</span><br />
                                attachInterrupt(<span className="text-blue-400">digitalPinToInterrupt</span>(D2), <span className="text-yellow-200">detectFinger</span>, <span className="text-blue-400">RISING</span>);
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500/50 bg-cyan-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-cyan-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-cyan-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
