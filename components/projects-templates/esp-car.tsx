import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, ExternalLink, Github, Cpu, ShieldCheck, Zap, Server, Wifi, Radio, 
  Smartphone, Activity, GraduationCap, CheckCircle2, Check, X, Compass, Layers, 
  RefreshCw, Sparkles, Navigation, Gauge
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function ESPCar() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-28 pb-20 border-b border-cyan-500/15">
                {/* Background FX - Cyan/Teal Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/35 via-zinc-950 to-zinc-950 opacity-90 pointer-events-none" />
                <div className="absolute top-[-25%] right-[-10%] w-[900px] h-[900px] rounded-full blur-[180px] bg-cyan-600/15 pointer-events-none" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] bg-teal-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25 pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <div>
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                            <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-cyan-500/10 backdrop-blur-md inline-flex items-center gap-2 shadow-lg shadow-cyan-950/50">
                                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                                IoT Robotics &amp; Remote Telemetry
                            </Badge>
                            <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10 backdrop-blur-md inline-flex items-center gap-2">
                                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                                Ugam Campus Product Project
                            </Badge>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-2xl">
                            ESP Car
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base font-mono text-cyan-400/90 tracking-widest uppercase font-semibold mt-4">
                            Wi-Fi Controlled Smart Robotic Vehicle &amp; Telemetry OS
                        </p>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Powered by <span className="text-cyan-400 font-medium">ESP8266 NodeMCU</span>, L293D dual motor H-bridge driver, and low-latency Blynk IoT Virtual Pin stream controls engineered under the <span className="text-amber-400 font-medium">Ugam Campus Engineering Framework</span>.
                    </p>
                </div>

                {/* Repositioned Showcase Screenshot Container */}
                <div className="max-w-6xl w-full px-6 mt-16 relative z-20">
                    <div className="rounded-3xl overflow-hidden border border-cyan-500/30 bg-zinc-900/90 shadow-2xl shadow-cyan-950/70 p-3 backdrop-blur-2xl">
                        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 rounded-t-2xl border-b border-white/5 font-mono text-xs text-zinc-400">
                            <div className="flex items-center gap-2.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="ml-2 text-zinc-200 font-semibold tracking-wide">ESP Car Hardware Cockpit</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                                <span className="text-cyan-400 font-semibold tracking-wider uppercase">TELEMETRY LINK ONLINE</span>
                            </div>
                        </div>
                        <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-zinc-950">
                            <Image 
                                src="/images/projects/esp-car.jpg" 
                                alt="ESP Car Robotic Hardware Chassis & Control Platform" 
                                fill
                                className="object-cover object-top hover:scale-102 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. 4-Stage Control & Telemetry Pipeline */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-cyan-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-cyan-500/10">
                        Telemetry Control Pipeline
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        4-Step <span className="text-cyan-400">Execution Sequence</span>.
                    </h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Sub-20ms remote control pipeline over local Wi-Fi station network.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            step: "STAGE 01",
                            icon: Wifi,
                            title: "Wi-Fi Socket Handshake",
                            desc: "ESP8266 NodeMCU connects to local AP, binds static IP, and initializes persistent TCP socket with Blynk cloud server."
                        },
                        {
                            step: "STAGE 02",
                            icon: Smartphone,
                            title: "Virtual Pin Decoding",
                            desc: "Blynk mobile app triggers Virtual Pins V0 (Forward), V1 (Backward), V2 (Left), V3 (Right), V4 (Stop) over 20ms stream."
                        },
                        {
                            step: "STAGE 03",
                            icon: Cpu,
                            title: "L293D Logic Switching",
                            desc: "GPIO pins drive dual H-bridge motor driver IC inputs (IN1-IN4) to select forward/reverse current polarity."
                        },
                        {
                            step: "STAGE 04",
                            icon: Navigation,
                            title: "Differential Steering",
                            desc: "Twin TT DC gearmotors execute tank turns, speed modulation, and immediate emergency brake stop maneuvers."
                        }
                    ].map((phase, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-all backdrop-blur-sm group flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5 font-mono font-black text-6xl text-cyan-400 group-hover:opacity-10 transition-opacity">
                                0{i + 1}
                            </div>
                            <div className="space-y-4">
                                <div className="p-3.5 bg-cyan-500/10 rounded-2xl text-cyan-400 w-fit group-hover:scale-110 transition-transform">
                                    <phase.icon size={26} />
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">{phase.step}</span>
                                    <h3 className="text-xl font-bold text-white mt-1">{phase.title}</h3>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    {phase.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Bento Grid Stats & Specs */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-cyan-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Latency Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-cyan-950/20 border border-cyan-500/20 p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-cyan-400">
                            <Wifi size={220} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-cyan-400 uppercase tracking-widest text-xs font-mono font-bold mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Command Latency
                            </h3>
                            <div className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">&lt; 20ms</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Immediate directional execution (Forward, Backward, Tank Turns, Emergency Stop) using Blynk IoT Virtual Pin stream handlers over local Wi-Fi station network.
                            </p>
                        </div>
                    </div>

                    {/* CPU Clock Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                        <Cpu className="w-10 h-10 text-cyan-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">80 MHz</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">ESP8266 CPU Clock Rate</div>
                        </div>
                    </div>

                    {/* Motor IC Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                        <Gauge className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">L293D</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Dual H-Bridge Driver IC</div>
                        </div>
                    </div>

                    {/* Component Specs Badge Grid */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full font-mono text-xs text-zinc-300">
                            <div><span className="text-cyan-400 font-bold">SoC:</span> ESP8266 NodeMCU V3</div>
                            <div><span className="text-cyan-400 font-bold">Protocol:</span> Blynk IoT TCP</div>
                            <div><span className="text-cyan-400 font-bold">Pins:</span> Virtual V0 - V4</div>
                            <div><span className="text-cyan-400 font-bold">Motor Rail:</span> 7.4V Li-Ion</div>
                            <div><span className="text-cyan-400 font-bold">Steering:</span> Differential Tank</div>
                            <div><span className="text-cyan-400 font-bold">Firmware:</span> Arduino C++</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Hardware Component Breakdown */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-cyan-500/15">
                <div className="space-y-4 mb-12">
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-cyan-500/10">
                        System Hardware Architecture
                    </Badge>
                    <h2 className="text-4xl font-black text-white tracking-tight">
                        Robotic Hardware &amp; <span className="text-cyan-400">Motor Control Specs</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "ESP8266 NodeMCU V3", pin: "Tensilica LX106", desc: "Wi-Fi SoC micro-controller operating at 80MHz with integrated IEEE 802.11 b/g/n radio transceiver." },
                        { title: "L293D Motor Driver Expansion", pin: "Pins D1, D2, D3, D4", desc: "Dual H-Bridge IC providing bidirectional DC motor control up to 600mA continuous per channel." },
                        { title: "Twin TT DC Gear Motors", pin: "3V - 6V Motors", desc: "1:48 gear ratio dual shaft motors providing high torque output for obstacle navigation." },
                        { title: "2S Li-Ion Power Battery Pack", pin: "7.4V / 2200mAh", desc: "Dedicated high-current discharge battery powering motor rails and NodeMCU 3.3V LDO regulator." },
                        { title: "Blynk IoT Mobile Control UI", pin: "Virtual Pins V0-V4", desc: "Custom smartphone touch interface mapping directional touch buttons to instantaneous microsecond commands." },
                        { title: "Differential Steering Matrix", pin: "Software Polarity", desc: "Allows 360-degree zero-radius tank spinning by running left and right motors in opposite directions." }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all backdrop-blur-sm space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">{item.pin}</span>
                                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Firmware Code Inspector */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 md:sticky md:top-24">
                        <div className="space-y-3">
                            <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-cyan-500/10">
                                Embedded C++ Codebase
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                                Wi-Fi Telemetry &amp; <span className="text-cyan-400">Motor Control</span>.
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                The ESP Car platform bridges low-level hardware actuation with cloud/local smartphone telemetry. Built as a flagship <strong className="text-amber-400">Ugam Campus product project</strong>, the NodeMCU listens for incoming Virtual Pin triggers (`BLYNK_WRITE(V0)` through `V4`) over a persistent socket connection to drive high-side and low-side H-bridge logic.
                            </p>
                            <div className="space-y-3 text-sm font-mono text-cyan-200/90 pt-2">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Virtual Pin Socket Packet Handlers (`BLYNK_WRITE`)</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> L293D Directional Truth Table (`IN1` to `IN4`)</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Instantaneous Emergency Brake &amp; Tank Turn Logic</div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-cyan-400 font-mono">carcode1_0.ino</span>
                        </div>
                        <div className="p-6 overflow-x-auto font-mono">
                            <pre className="text-sm leading-relaxed">
                                <span className="text-zinc-500">// Blynk Virtual Pin Control Handlers</span><br />
                                <span className="text-yellow-200">BLYNK_WRITE</span>(V0) {'{'}<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">if</span> (param.asInt()) <span className="text-yellow-200">moveForward</span>();<br />
                                {'}'}<br />
                                <br />
                                <span className="text-yellow-200">BLYNK_WRITE</span>(V2) {'{'}<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">if</span> (param.asInt()) <span className="text-yellow-200">turnLeft</span>();<br />
                                {'}'}<br />
                                <br />
                                <span className="text-zinc-500">// L293D Motor Drive Logic</span><br />
                                <span className="text-blue-400">void</span> <span className="text-yellow-200">moveForward</span>() {'{'}<br />
                                &nbsp;&nbsp;digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);<br />
                                &nbsp;&nbsp;digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);<br />
                                {'}'}
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
