import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Truck, BarChart3, Radio, Database, MapPin, Layers, Cpu, Wifi, AlertTriangle, Lock, Activity } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'FuelShield - IoT Fuel Theft Detection | Yash Ghodele',
    description: 'Real-time fuel theft detection and fleet analytics platform. Reduces fuel losses by 20% using ESP32 sensors and MQTT.',
}

export default function FuelShieldPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">

            {/* 1. Hero Section */}
            <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-60"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400 px-4 py-1.5 text-sm uppercase tracking-widest bg-purple-500/10 backdrop-blur-md">
                        IoT Solution
                    </Badge>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-blue-900/50">
                        FuelShield
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Stopping fuel theft before it happens. <br />
                        <span className="text-purple-400 font-semibold">Real-time telemetry</span>, anomaly detection, and fleet intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <div className="flex items-center gap-4">
                            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-500 text-white rounded-full h-14 px-10 text-lg shadow-lg shadow-purple-900/20">
                                <Link href="#" className="flex items-center gap-2">
                                    View Dashboard <ExternalLink className="w-5 h-5" />
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
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="container px-6 py-24 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Savings Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BarChart3 size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-zinc-500 uppercase tracking-widest text-sm font-bold mb-2">Impact</h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4">20%</div>
                            <p className="text-zinc-400 text-lg">
                                Reduction in fuel expenses. Tested across <span className="text-white font-bold">50+ commercial fleet vehicles</span>, improving accountability and transparency.
                            </p>
                        </div>
                    </div>

                    {/* Sensor Accuracy */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <Radio className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">99%</div>
                            <div className="text-sm text-zinc-500 font-medium">Ultrasonic Precision</div>
                        </div>
                    </div>

                    {/* Alerts Card */}
                    <div className="col-span-1 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
                        <MapPin className="w-10 h-10 text-purple-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">Live</div>
                            <div className="text-sm text-zinc-500 font-medium">GPS & Geofencing</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-zinc-900/50 border border-white/10 p-8 flex items-center justify-between">
                        <div className="flex gap-4 flex-wrap">
                            {["Next.js", "Firebase", "MQTT", "ESP32", "GSM", "Recharts"].map(tech => (
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
                            Fuel theft is one of the most silent yet expensive problems in commercial fleets. Traditional fuel logs and manual audits fail to detect real-time losses, leading to revenue leakage, disputes, and poor accountability.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                            <Activity className="w-6 h-6" /> The Solution
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            FuelShield was built to <strong>make fuel behavior visible</strong>, measurable, and actionable. It continuously monitors fuel levels using high-precision ultrasonic sensors and instantly alerts fleet owners of any anomalies.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Key Features Grid */}
            <section className="container px-6 py-12 mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Radio, title: "Real-Time Monitoring", desc: "Ultrasonic sensors track fuel levels continuously with noise filtering for accurate readings." },
                        { icon: MapPin, title: "GPS & Geofencing", desc: "Detects theft independent of movement and alerts if fuel is accessed outside designated zones." },
                        { icon: AlertTriangle, title: "Instant Theft Alerts", desc: "MQTT-based low-latency delivery of sudden drop alerts with severity classification." },
                        { icon: BarChart3, title: "Fleet Analytics", desc: "Visual dashboard for fuel usage trends, historical theft records, and vehicle performance." },
                        { icon: Lock, title: "Secure Architecture", desc: "Firebase Authentication and cloud-hosted real-time database for multi-vehicle support." },
                        { icon: Cpu, title: "Edge Processing", desc: "ESP32 handles sensor polling and anomaly detection locally before transmission." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 transition-colors">
                            <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Deep Dive & Architecture */}
            <section className="container px-6 py-24 mx-auto max-w-5xl border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Data from the <span className="text-purple-500">Tank</span>.
                        </h2>
                        <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                            <p>
                                FuelShield bridges embedded hardware and modern web systems. An **ESP32-based edge device** polls ultrasonic sensors at high frequency, filtering noise before calculating the rate of fuel change.
                            </p>
                            <p>
                                When abnormal drops are detected, the device publishes an **MQTT event** containing fuel data and GPS coordinates. The backend consumes these events to update the dashboard and trigger alerts in sub-second time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-8">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500 mt-1">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Hardware Layer</h4>
                                    <p className="text-zinc-500">ESP32 + Ultrasonic Sensor + GSM Fallback.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 mt-1">
                                    <Wifi size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Communication</h4>
                                    <p className="text-zinc-500">MQTT (HiveMQ) for lightweight pub/sub.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-green-500/10 rounded-xl text-green-500 mt-1">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Application</h4>
                                    <p className="text-zinc-500">Next.js Dashboard + Firebase Realtime DB.</p>
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
                            <span className="ml-2 text-xs text-zinc-500 font-mono">mqtt_client.ts</span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <span className="text-fuchsia-400">const</span> client = mqtt.<span className="text-yellow-200">connect</span>(BROKER_URL);<br />
                                <br />
                                <span className="text-zinc-500">{'// Listen for sensor anomalies'}</span><br />
                                client.<span className="text-yellow-200">on</span>(<span className="text-green-400">&apos;message&apos;</span>, (topic, message) =&gt; {'{'}<br />
                                <span className="text-fuchsia-400">const</span> data = JSON.<span className="text-yellow-200">parse</span>(message.toString());<br />
                                <br />
                                <span className="text-zinc-500">{'// Check for sudden fuel drop'}</span><br />
                                <span className="text-fuchsia-400">if</span> (data.<span className="text-blue-400">drop_rate</span> &gt; <span className="text-orange-300">THRESHOLD</span>) {'{'}<br />
                                <span className="text-zinc-500">{'// Trigger critical alert'}</span><br />
                                <span className="text-yellow-200">sendAlert</span>({'{'}<br />
                                truckId: data.<span className="text-blue-400">id</span>,<br />
                                location: data.<span className="text-blue-400">gps</span>,<br />
                                severity: <span className="text-green-400">&apos;CRITICAL&apos;</span><br />
                                {'}'});<br />
                                {'}'}<br />
                                {'}'});
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
