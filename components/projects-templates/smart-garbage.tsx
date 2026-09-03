import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, ExternalLink, Github, Cpu, ShieldCheck, Zap, Server, AlertTriangle, 
  Activity, RefreshCw, Trash2, Droplets, Volume2, GraduationCap, CheckCircle2, 
  Check, X, Compass, Layers, Radio, Sparkles
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function SmartGarbage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-28 pb-20 border-b border-emerald-500/15">
                {/* Background FX - Bio Green Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/35 via-zinc-950 to-zinc-950 opacity-90 pointer-events-none" />
                <div className="absolute top-[-25%] right-[-10%] w-[900px] h-[900px] rounded-full blur-[180px] bg-emerald-600/15 pointer-events-none" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] bg-teal-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25 pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <div>
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-emerald-500/10 backdrop-blur-md inline-flex items-center gap-2 shadow-lg shadow-emerald-950/50">
                                <Trash2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                                IoT &amp; Waste Automation System
                            </Badge>
                            <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10 backdrop-blur-md inline-flex items-center gap-2">
                                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                                Ugam Campus Product Project
                            </Badge>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-400 drop-shadow-2xl">
                            Smart Garbage
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base font-mono text-emerald-400/90 tracking-widest uppercase font-semibold mt-4">
                            Automated Wet &amp; Dry Waste Classification Engine
                        </p>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Microcontroller-based IR proximity detection, 5-sample analog moisture thresholding, and SG90 servo motor chute deflection engineered under the <span className="text-amber-400 font-medium">Ugam Campus Alchemist Protocol</span>.
                    </p>
                </div>

                {/* Repositioned Showcase Screenshot Container */}
                <div className="max-w-6xl w-full px-6 mt-16 relative z-20">
                    <div className="rounded-3xl overflow-hidden border border-emerald-500/30 bg-zinc-900/90 shadow-2xl shadow-emerald-950/70 p-3 backdrop-blur-2xl">
                        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 rounded-t-2xl border-b border-white/5 font-mono text-xs text-zinc-400">
                            <div className="flex items-center gap-2.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="ml-2 text-zinc-200 font-semibold tracking-wide">Smart Garbage Hardware Cockpit</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                <span className="text-emerald-400 font-semibold tracking-wider uppercase">AUTOMATED CLASSIFICATION ACTIVE</span>
                            </div>
                        </div>
                        <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-zinc-950">
                            <Image 
                                src="/images/projects/smart-garbage.jpg" 
                                alt="Smart Garbage Hardware System Interface" 
                                fill
                                className="object-cover object-top hover:scale-102 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. 4-Stage Automated Classification Pipeline */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-emerald-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-emerald-500/10">
                        Hardware Execution Pipeline
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        4-Step <span className="text-emerald-400">Classification Sequence</span>.
                    </h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Real-time hardware pipeline ensuring accurate wet vs dry separation in under 50 milliseconds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            step: "STAGE 01",
                            icon: Activity,
                            title: "IR Proximity Approach",
                            desc: "Active IR sensor detects incoming waste item at chute entrance on Digital Pin 2, triggering microsecond interrupt."
                        },
                        {
                            step: "STAGE 02",
                            icon: Droplets,
                            title: "Analog Moisture Probe",
                            desc: "Soil moisture probe polls Analog Pin A0 across 5 consecutive samples (50ms window) to eliminate static ADC noise."
                        },
                        {
                            step: "STAGE 03",
                            icon: RefreshCw,
                            title: "PWM Servo Routing",
                            desc: "SG90 servo motor deflects chute to 20° for Wet Waste (Moisture < 950) or 160° for Dry Waste (Moisture ≥ 950)."
                        },
                        {
                            step: "STAGE 04",
                            icon: Volume2,
                            title: "Feedback & Auto-Reset",
                            desc: "Flashes Green/Red LED, sounds active tone buzzer, and automatically returns servo to 90° center home after 3 seconds."
                        }
                    ].map((phase, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/40 transition-all backdrop-blur-sm group flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5 font-mono font-black text-6xl text-emerald-400 group-hover:opacity-10 transition-opacity">
                                0{i + 1}
                            </div>
                            <div className="space-y-4">
                                <div className="p-3.5 bg-emerald-500/10 rounded-2xl text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                                    <phase.icon size={26} />
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">{phase.step}</span>
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
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-emerald-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Classification Latency Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-emerald-950/20 border border-emerald-500/20 p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-emerald-400">
                            <Trash2 size={220} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-emerald-400 uppercase tracking-widest text-xs font-mono font-bold mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Classification Speed
                            </h3>
                            <div className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">&lt; 50ms</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Instant object detection via IR proximity sensor coupled with 5-sample analog moisture averaging to eliminate sensor noise. Engineered under the Ugam Campus Alchemist Protocol.
                            </p>
                        </div>
                    </div>

                    {/* Deflection Angle Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-all backdrop-blur-sm">
                        <RefreshCw className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">140°</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Servo Sweep Range (20° - 160°)</div>
                        </div>
                    </div>

                    {/* Sensitivity Threshold Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-all backdrop-blur-sm">
                        <Droplets className="w-10 h-10 text-cyan-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">950</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Analog Moisture Cutoff Threshold</div>
                        </div>
                    </div>

                    {/* Component Specs Badge Grid */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full font-mono text-xs text-zinc-300">
                            <div><span className="text-emerald-400 font-bold">MCU:</span> ATmega328P</div>
                            <div><span className="text-emerald-400 font-bold">IR Pin:</span> Digital Pin 2</div>
                            <div><span className="text-emerald-400 font-bold">Moisture Pin:</span> Analog A0</div>
                            <div><span className="text-emerald-400 font-bold">Servo Pin:</span> Digital 9 (PWM)</div>
                            <div><span className="text-emerald-400 font-bold">Wet Deflection:</span> 20°</div>
                            <div><span className="text-emerald-400 font-bold">Dry Deflection:</span> 160°</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Hardware Component Breakdown */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-emerald-500/15">
                <div className="space-y-4 mb-12">
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-emerald-500/10">
                        BOM Component Matrix
                    </Badge>
                    <h2 className="text-4xl font-black text-white tracking-tight">
                        Hardware Schematic &amp; <span className="text-emerald-400">Bill of Materials</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "IR Proximity Sensor Module", pin: "Digital Pin 2", desc: "Active infrared transmitter and receiver pair calibrated to detect waste items within 5cm of chute entrance." },
                        { title: "Soil Moisture Sensor Probe", pin: "Analog Pin A0", desc: "Dual conductor probe calculating electrical conductivity of waste. Values < 950 indicate high moisture content." },
                        { title: "SG90 Micro Servo Motor", pin: "Pin 9 (PWM)", desc: "1.8kg-cm torque micro servo positioning the waste divider flap between Wet (20°), Home (90°), and Dry (160°)." },
                        { title: "Green & Red Status LEDs", pin: "Pins 6 & 7", desc: "Visual indicator lights giving immediate status feedback to users during classification." },
                        { title: "Piezo Audio Buzzer", pin: "Digital Pin 8", desc: "Audio confirmation tone triggered upon successful waste detection and chute deflection." },
                        { title: "Arduino Microcontroller", pin: "ATmega328P", desc: "Central embedded controller executing C++ firmware with 16MHz clock speed and 10-bit ADC conversion." }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 transition-all backdrop-blur-sm space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">{item.pin}</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
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
                            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-emerald-500/10">
                                Embedded C++ Codebase
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                                Microcontroller Firmware &amp; <span className="text-emerald-400">PWM Control</span>.
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                Manual waste segregation is inefficient and hazardous. As a flagship <strong className="text-amber-400">Ugam Campus product project</strong>, the Smart Garbage System detects incoming waste at the chute using an active IR sensor, polls soil moisture levels across 5 consecutive samples, and routes the waste into dedicated wet (20°) or dry (160°) compartments via an SG90 servo motor.
                            </p>
                            <div className="space-y-3 text-sm font-mono text-emerald-200/90 pt-2">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 5-Sample ADC Moisture Noise Reduction</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> PWM Servo Angle Deflection (20° Wet / 160° Dry)</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Automatic Home Position Reset (3000ms delay)</div>
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
                            <span className="text-xs text-emerald-400 font-mono">SmartGarbage.ino</span>
                        </div>
                        <div className="p-6 overflow-x-auto font-mono">
                            <pre className="text-sm leading-relaxed">
                                <span className="text-zinc-500">// Read 5-sample averaged moisture content</span><br />
                                <span className="text-blue-400">int</span> moistureValue = <span className="text-amber-300">0</span>;<br />
                                <span className="text-fuchsia-400">for</span> (<span className="text-blue-400">int</span> i = <span className="text-amber-300">0</span>; i &lt; <span className="text-amber-300">5</span>; i++) {'{'}<br />
                                &nbsp;&nbsp;moistureValue += analogRead(MOISTURE_PIN);<br />
                                &nbsp;&nbsp;delay(<span className="text-amber-300">10</span>);<br />
                                {'}'}<br />
                                moistureValue /= <span className="text-amber-300">5</span>;<br />
                                <br />
                                <span className="text-zinc-500">// Classify &amp; Route Waste Chute</span><br />
                                <span className="text-fuchsia-400">if</span> (moistureValue &lt; MOISTURE_THRESHOLD) {'{'}<br />
                                &nbsp;&nbsp;<span className="text-zinc-500">// Wet Waste Path (20 degrees)</span><br />
                                &nbsp;&nbsp;digitalWrite(LED_GREEN_PIN, HIGH);<br />
                                &nbsp;&nbsp;binServo.write(SERVO_WET_ANGLE);<br />
                                {'}'} <span className="text-fuchsia-400">else</span> {'{'}<br />
                                &nbsp;&nbsp;<span className="text-zinc-500">// Dry Waste Path (160 degrees)</span><br />
                                &nbsp;&nbsp;digitalWrite(LED_RED_PIN, HIGH);<br />
                                &nbsp;&nbsp;binServo.write(SERVO_DRY_ANGLE);<br />
                                {'}'}
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
