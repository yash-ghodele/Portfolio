import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Shield, Lock, Activity, Wifi, Cpu, AlertTriangle, Fingerprint, Zap, Layers, Smartphone } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'IoT Security - Smart Lock System | Yash Ghodele',
    description: '3-Layer Auth Smart Lock with autonomous lockdown and sub-300ms cloud latency.',
}

export default function IoTSecurityPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">

            {/* 1. Hero Section */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Background FX - Cyan/Blue Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-black to-black opacity-60"></div>
                {/* Circuit board effect simulation */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-cyan-500/10 backdrop-blur-md">
                        Embedded Systems
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-blue-900/50">
                        IoT Security
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Security that reacts before you do. <br className="hidden md:block" />
                        <span className="text-cyan-400 font-semibold">Event-driven defense</span> with real-time cloud intelligence and <span className="text-white font-semibold">sub-300ms latency</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <div className="flex items-center gap-4">
                            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-cyan-900/20">
                                <Link href="#" className="flex items-center gap-2">
                                    View Schematic <ExternalLink className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 rounded-full h-14 px-10 text-lg">
                                <Link href="#" className="flex items-center gap-2">
                                    <Github className="w-5 h-5" /> Firmware
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Latency Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Wifi size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-2">Cloud Latency</h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4">300ms</div>
                            <p className="text-zinc-400 text-lg">
                                Achieved via <span className="text-white font-bold">WebSocket</span> optimization, down from 2s standard HTTP polling. Feels instantaneous.
                            </p>
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Lock className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">3 Layers</div>
                            <div className="text-sm text-zinc-500 font-medium">Biometric / PIN / App</div>
                        </div>
                    </div>

                    {/* Uptime Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Shield className="w-10 h-10 text-red-500 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">Active</div>
                            <div className="text-sm text-zinc-500 font-medium">3-Strike Lockdown</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex items-center justify-between">
                        <div className="flex gap-4 flex-wrap">
                            {["ESP8266 (NodeMCU)", "C++", "Blynk IoT", "WebSockets", "Hardware Design"].map(tech => (
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
                            Conventional smart locks rely on slow polling loops, single-point authentication, and delayed cloud updates. This makes them vulnerable to brute-force attempts and delays critical alerts.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                            <Zap className="w-6 h-6" /> The Solution
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            This system secures entry points with <strong>3 independent layers</strong> (Biometric, PIN, App) and uses an <strong>event-driven architecture</strong> to react to threats instantly, not periodically.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Key Features Grid */}
            <section className="container px-6 py-12 mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Fingerprint, title: "3-Layer Auth", desc: "Start with Biometric verification, fallback to encrypted PIN, or use Mobile App override." },
                        { icon: Wifi, title: "Sub-300ms Latency", desc: "WebSocket-based communication eliminates HTTP polling lag for real-time control." },
                        { icon: Shield, title: "Autonomous Lockdown", desc: "3-strike intrusion detection instantly disables access and alerts the owner." },
                        { icon: Zap, title: "Power Efficient", desc: "Interrupt-driven wake-up allows the system to sleep deeply until a physical event occurs." },
                        { icon: Activity, title: "Self-Healing", desc: "Watchdog timers and automatic recovery routines prevent system hangs or crashes." },
                        { icon: Smartphone, title: "Remote Control", desc: "Full system state sync with the Blynk IoT app for remote monitoring and unlock." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-cyan-500/30 transition-colors">
                            <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Deep Dive */}
            <section className="container px-6 py-24 mx-auto max-w-5xl border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 sticky top-24">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Event-Driven <span className="text-cyan-500">Defense</span>.
                        </h2>
                        <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                            <p>
                                Standard polling loops waste power and are too slow for security. We built a fully **Interrupt-Driven Architecture**.
                            </p>
                            <p>
                                Physical tampering or fingerprint detection triggers a hardware interrupt within microseconds. The ESP8266 wakes from deep sleep, transitions to an authentication state, and pushes a WebSocket alert immediately.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-8">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 mt-1">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Hardware Layer</h4>
                                    <p className="text-zinc-500">ESP8266 + Biometric/Motion Sensors.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 mt-1">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Firmware Layer</h4>
                                    <p className="text-zinc-500">C++ State Machine + Watchdog Timers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-500 mt-1">
                                    <Wifi size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Cloud Layer</h4>
                                    <p className="text-zinc-500">Blynk IoT Platform + WebSocket Real-time Sync.</p>
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
                            <span className="ml-2 text-xs text-zinc-500 font-mono">isr_handler.cpp</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-zinc-500">// Interrupt Service Routine</span><br />
                                <span className="text-fuchsia-400">void IRAM_ATTR</span> <span className="text-yellow-200">detectFinger</span>() {'{'}<br />
                                <span className="text-fuchsia-400">if</span> (systemState == <span className="text-blue-400">IDLE</span>) {'{'}<br />
                                <span className="text-zinc-500">// Immediate State Transition</span><br />
                                <span className="text-blue-400">systemState</span> = <span className="text-blue-400">AUTH_WAIT</span>;<br />
                                wakeUpTime = <span className="text-blue-400">millis</span>();<br />
                                <br />
                                <span className="text-zinc-500">// Wake ESP8266 from Light Sleep</span><br />
                                wifi_fpm_do_wakeup();<br />
                                <br />
                                <span className="text-zinc-500">// Push Websocket Alert</span><br />
                                Blynk.<span className="text-yellow-200">virtualWrite</span>(V1, <span className="text-green-400">"Motion Detected"</span>);<br />
                                {'}'}<br />
                                {'}'}<br />
                                <br />
                                <span className="text-zinc-500">// Hardware Attach</span><br />
                                attachInterrupt(<span className="text-blue-400">digitalPinToInterrupt</span>(D2), <span className="text-yellow-200">detectFinger</span>, <span className="text-blue-400">RISING</span>);
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
