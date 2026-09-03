import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, BarChart3, Radio, MapPin, Layers, Cpu, Wifi, AlertTriangle, Lock, Activity, ShieldCheck, Zap, Server, Gauge, CheckCircle2, BatteryCharging, BellRing, Route } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function FuelShield() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-purple-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[88vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-purple-500/15">
                {/* Background FX - Cyber Purple Ambient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[850px] h-[850px] rounded-full blur-[160px] bg-purple-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] bg-blue-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-purple-500/30 text-purple-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-purple-500/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                            IoT Telemetry &amp; Fleet Intelligence
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-400 drop-shadow-sm">
                            FuelShield
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Stopping fuel theft before it happens. <br className="hidden md:block" />
                        <span className="text-purple-400 font-medium">Real-time telemetry</span>, Kalman-filtered anomaly detection, and sub-second fleet intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-500 text-white rounded-full h-14 px-8 text-base font-semibold shadow-lg shadow-purple-900/40 transition-all">
                                <Link href="#" className="flex items-center gap-2">
                                    View Dashboard <ExternalLink className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-purple-500/30 text-zinc-200 hover:bg-purple-500/10 hover:text-white rounded-full h-14 px-8 text-base backdrop-blur-md">
                                <Link href="#" className="flex items-center gap-2">
                                    <Github className="w-4 h-4" /> Source Code
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-purple-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Savings Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-purple-950/20 border border-purple-500/20 p-8 relative overflow-hidden group hover:border-purple-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-purple-400">
                            <BarChart3 size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-purple-400 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Operational &amp; Financial Impact
                            </h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">20%</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Average reduction in fuel expenses (~₹1.2L saved monthly per 10 trucks). Tested across <span className="text-white font-semibold">50+ commercial fleet vehicles</span>, eliminating unaccounted fuel siphoning.
                            </p>
                        </div>
                    </div>

                    {/* Sensor Accuracy */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-purple-500/30 transition-all backdrop-blur-sm">
                        <Radio className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">99.4%</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Ultrasonic Level Accuracy</div>
                        </div>
                    </div>

                    {/* Alerts Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-purple-500/30 transition-all backdrop-blur-sm">
                        <MapPin className="w-10 h-10 text-purple-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">&lt; 800ms</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Theft Alert Latency</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["ESP32", "Ultrasonic Transducer", "NEO-6M GPS", "SIM800L GSM", "HiveMQ MQTT", "Firebase Realtime", "Next.js 16", "Recharts"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-200 border-purple-500/20 px-4 py-2 text-xs font-mono">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Problem & Solution */}
            <section className="max-w-5xl px-6 py-24 mx-auto border-b border-purple-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-red-500/[0.03] border border-red-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2.5">
                            <AlertTriangle className="w-6 h-6" /> The Problem
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            Fuel theft is one of the most silent yet expensive losses in logistics fleets. Traditional fuel logs and manual dipstick audits fail to detect real-time losses during overnight parking, unauthorized fuel transfers, or partial siphoning.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2.5">
                            <Activity className="w-6 h-6" /> The Solution
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            FuelShield was built to <strong className="text-white font-medium">make fuel behavior visible</strong> in real time. It monitors liquid height via non-invasive ultrasonic sensors, runs edge noise-filtering algorithms, and alerts fleet managers instantly when an anomaly occurs.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Deep Architectural Workflow Breakdown (NEW DETAILS) */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-purple-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-purple-500/10">
                        Signal Pipeline
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        How FuelShield Detects Theft
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        From raw ultrasonic waves inside the diesel tank to instant push notifications on fleet manager devices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            icon: Gauge,
                            title: "Ultrasonic Wave Polling",
                            desc: "Sensors mounted at the bottom of fuel tanks send high-frequency sound pulses (100Hz) through the diesel liquid layer."
                        },
                        {
                            step: "02",
                            icon: Cpu,
                            title: "Kalman Filter & Slosh Reduction",
                            desc: "Edge ESP32 runs a Kalman Filter to eliminate noise caused by vehicle vibration, liquid sloshing, and incline variations."
                        },
                        {
                            step: "03",
                            icon: Wifi,
                            title: "MQTT Telemetry & GSM Failover",
                            desc: "Fuel height & GPS coordinates are packed into binary MQTT payloads and sent via 4G/GSM to HiveMQ brokers."
                        },
                        {
                            step: "04",
                            icon: BellRing,
                            title: "Instant Push & Audit Log",
                            desc: "If the fuel volume drop rate exceeds threshold outside geofenced pumps, emergency alerts are pushed to Next.js dashboard."
                        }
                    ].map((pipeline, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-purple-500/30 transition-all backdrop-blur-sm relative group">
                            <div className="text-purple-400 font-mono text-xs uppercase tracking-widest font-bold mb-4">{pipeline.step} // STEP</div>
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <pipeline.icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{pipeline.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{pipeline.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Key Features Grid */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-purple-500/15">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-white">
                    System Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Radio, title: "Non-Invasive Ultrasonic Sensing", desc: "Measures fuel height from outside the bottom of the tank without drilling or tank modifications." },
                        { icon: MapPin, title: "GPS & Geofencing Verification", desc: "Cross-checks sudden volume increases against known petrol pump coordinates to auto-verify refuels." },
                        { icon: AlertTriangle, title: "Instant Theft Severity Classification", desc: "Differentiates between normal engine consumption rates and critical siphoning drops (>0.5L/min)." },
                        { icon: BarChart3, title: "Fleet-wide Analytics", desc: "Interactive charts showing fuel consumption per km, driver efficiency, and historical anomaly logs." },
                        { icon: BatteryCharging, title: "Tamper & Cut Detection", desc: "Internal backup battery triggers an immediate alert if the main vehicle battery leads are severed." },
                        { icon: Lock, title: "Enterprise Security & Sync", desc: "Encrypted MQTT over TLS with Firebase Authentication and sub-second multi-device synchronization." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-purple-500/30 transition-all group backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-purple-400" />
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
                            Data from the <span className="text-purple-400">Tank</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                FuelShield bridges embedded hardware and modern web systems. An <strong className="text-white font-medium">ESP32-based edge device</strong> polls ultrasonic sensors at 100Hz, running a continuous Kalman filter to isolate true liquid height from sloshing.
                            </p>
                            <p>
                                When abnormal drops are detected, the device publishes an <strong className="text-white font-medium">MQTT payload</strong> containing fuel volume, timestamp, and NEO-6M GPS coordinates. The Next.js dashboard receives this stream in sub-second time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-purple-500/[0.03] border border-purple-500/15">
                                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 mt-1">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Hardware Layer</h4>
                                    <p className="text-zinc-400 text-sm font-light">ESP32 (240MHz) + Ultrasonic Transducer + SIM800L GSM Failover + NEO-6M GPS.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-purple-500/[0.03] border border-purple-500/15">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 mt-1">
                                    <Wifi size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Communication Protocol</h4>
                                    <p className="text-zinc-400 text-sm font-light">MQTT over TLS (HiveMQ Broker) with GPRS &amp; SMS emergency fallback.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-purple-500/[0.03] border border-purple-500/15">
                                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mt-1">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Application Stack</h4>
                                    <p className="text-zinc-400 text-sm font-light">Next.js 16 Dashboard + Firebase Realtime DB + Recharts Telemetry Charts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-2xl overflow-hidden border border-purple-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-purple-400 font-mono">telemetry_processor.ts</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-zinc-500">{'// 1. Initialize MQTT Connection'}</span><br />
                                <span className="text-fuchsia-400">const</span> client = mqtt.<span className="text-yellow-200">connect</span>(BROKER_URL, {'{'}<br />
                                &nbsp;&nbsp;clean: <span className="text-blue-400">false</span>,<br />
                                &nbsp;&nbsp;clientId: <span className="text-green-400">&apos;fuelshield_fleet_node&apos;</span><br />
                                {'}'});<br />
                                <br />
                                <span className="text-zinc-500">{'// 2. Telemetry Stream Listener'}</span><br />
                                client.<span className="text-yellow-200">on</span>(<span className="text-green-400">&apos;message&apos;</span>, (topic, message) =&gt; {'{'}<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">const</span> telemetry = JSON.<span className="text-yellow-200">parse</span>(message.toString());<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">const</span> {'{'} fuelLiters, dropRate, gps, isMoving {'}'} = telemetry;<br />
                                <br />
                                &nbsp;&nbsp;<span className="text-zinc-500">{'// 3. Theft Anomaly Detection Engine'}</span><br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">if</span> (dropRate &gt; <span className="text-orange-300">0.5</span> &amp;&amp; !isMoving) {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">{'// Check if truck is at authorized petrol pump'}</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">const</span> isAtGasStation = <span className="text-yellow-200">verifyGeofence</span>(gps);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">if</span> (!isAtGasStation) {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">triggerEmergencyAlert</span>({'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;truckId: telemetry.truckId,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stolenVolume: dropRate,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coords: gps,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;severity: <span className="text-green-400">&apos;CRITICAL_SIPHON_ALERT&apos;</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'});<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                                &nbsp;&nbsp;{'}'}<br />
                                {'}'});
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500/50 bg-purple-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-purple-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
