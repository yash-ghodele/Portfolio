"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Zap, Cpu, Gauge, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ObsessingOverLatency() {
  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Journal
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-2.5 py-0.5 rounded-full text-xs border font-medium text-blue-400 border-blue-500/30 bg-blue-500/5">
                Technical
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                Apr 18, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-blue-400">
              Why We Obsess Over 14ms Latency (And Why You Should Too)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-blue-500/40 pl-4 italic">
              Understanding the invisible threshold of human perception and why real-time systems need to be genuinely real-time.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-black text-blue-400">
                YG
              </div>
              <div>
                <span className="text-sm font-semibold text-white block">Yash Ghodele</span>
                <span className="text-xs text-muted-foreground">Embedded Systems &amp; Web Architect</span>
              </div>
            </div>
          </motion.header>

          {/* Hero Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl relative aspect-[16/9]"
          >
            <Image
              src="/images/journal/latency.jpg"
              alt="Why We Obsess Over 14ms Latency — Industrial Sensor Microsecond Precision"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              Most software companies talk about features. We talk about milliseconds.
            </p>

            <p>
              Because in industrial environments, the difference between a system responding in 14 milliseconds and 500 milliseconds isn&apos;t merely performance—it&apos;s the difference between acting on a problem and discovering it after the damage is already done.
            </p>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-400" />
                The Human Side of Latency
              </h2>
              <p>
                Humans perceive delays in roughly three categories:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-emerald-500/30 text-emerald-300">
                  <div className="font-bold text-sm mb-1 text-emerald-400">&lt; 100ms</div>
                  <div>Feels instantaneous. Responds before conscious delay.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-amber-500/30 text-amber-300">
                  <div className="font-bold text-sm mb-1 text-amber-400">100–300ms</div>
                  <div>Feels responsive, but noticeable to trained eyes.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-red-500/30 text-red-300">
                  <div className="font-bold text-sm mb-1 text-red-400">&gt; 500ms</div>
                  <div>Feels noticeably delayed. Lag breaks real-time safety.</div>
                </div>
              </div>

              <p>
                For a social media app, an extra half-second is annoying. For a factory floor, it can be expensive.
              </p>
              <p>
                Operators make decisions based on what they see. If the data arriving on a dashboard is already half a second old, they are reacting to the past rather than the present. The faster a machine moves, the more dangerous that gap becomes.
              </p>
            </div>

            {/* Section 2 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-400" />
                When Milliseconds Become Physical Distance
              </h2>
              <p>
                Consider a spindle rotating at 1000 RPM.
              </p>
              <p>
                A traditional cloud-based monitoring system with a 500ms delay means the machine completes <strong>more than eight rotations</strong> before the operator even sees the alert.
              </p>
              <p>
                By the time the warning appears, the event that triggered it has already happened. The machine doesn&apos;t care that the dashboard is still waiting for a database write.
              </p>

              <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-500/30 text-sm space-y-1">
                <p className="text-blue-300 font-bold">Physics moves first.</p>
                <p className="text-zinc-300">Software catches up later. Our goal is to make that gap as small as possible.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                Why Edge Processing Matters
              </h2>
              <p>
                Most industrial monitoring systems follow a familiar path:
              </p>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 font-mono text-xs text-red-300">
                <strong>Typical Cloud Path:</strong> Sensor &rarr; 4G Network &rarr; API &rarr; Database &rarr; WebSocket &rarr; Browser
                <span className="block mt-1 text-zinc-400">Total latency: <strong>200–800ms</strong></span>
              </div>

              <p>
                Every step adds latency. Every network hop introduces uncertainty. Every dependency becomes another point of failure. We take a different approach:
              </p>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-emerald-500/30 font-mono text-xs text-emerald-300">
                <strong>Edge Processing Path:</strong> Sensor &rarr; ESP32 &rarr; MQTT &rarr; WebSocket &rarr; Dashboard
                <span className="block mt-1 text-emerald-400">Total latency: <strong>~14ms</strong></span>
              </div>

              <p>
                Instead of sending raw data to the cloud and waiting for a response, detection happens directly on the device collecting the data. The result is immediate action rather than delayed analysis. An order-of-magnitude improvement.
              </p>
            </div>

            {/* Section 4 - Breakdown Table */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                What 14ms Actually Means
              </h2>
              <p>
                The number isn&apos;t theoretical. It&apos;s measured end-to-end on a stable local network:
              </p>

              <div className="overflow-x-auto rounded-xl border border-zinc-800">
                <table className="w-full text-left text-xs text-zinc-300">
                  <thead className="bg-zinc-900 text-zinc-400 uppercase tracking-wider font-semibold border-b border-zinc-800">
                    <tr>
                      <th className="p-3.5">Component Layer</th>
                      <th className="p-3.5">Measured Latency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 bg-zinc-950/50 font-mono">
                    <tr>
                      <td className="p-3.5 font-sans font-medium text-white">Edge Detection (ESP32 On-Chip)</td>
                      <td className="p-3.5 text-blue-400 font-bold">2ms</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-sans font-medium text-white">Local MQTT Publish</td>
                      <td className="p-3.5 text-blue-400 font-bold">4ms</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-sans font-medium text-white">WebSocket Delivery</td>
                      <td className="p-3.5 text-blue-400 font-bold">6ms</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-sans font-medium text-white">React Dashboard DOM State Update</td>
                      <td className="p-3.5 text-blue-400 font-bold">2ms</td>
                    </tr>
                    <tr className="bg-blue-500/10 font-bold">
                      <td className="p-3.5 font-sans text-blue-300">Total End-to-End Latency</td>
                      <td className="p-3.5 text-blue-400 text-sm">14ms (1 Frame @ 60 FPS)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                That means a threshold breach detected by a sensor appears on the operator&apos;s screen in approximately one frame at 60 FPS. At that point, the limiting factor is no longer technology — it&apos;s human reaction time. And that&apos;s exactly where it should be.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Real-Time Means More Than Fast
              </h2>
              <p>
                Many industrial platforms advertise &ldquo;real-time monitoring.&rdquo; What they often mean is data refreshed every few seconds.
              </p>
              <p>
                That&apos;s useful for reporting. It&apos;s not useful for intervention.
              </p>
              <p>
                Real-time systems should allow operators to act while an event is still happening, not after it has already finished. That requires software architecture designed around speed from the beginning, not added later as an optimization.
              </p>
            </div>

            {/* Section 6 - Philosophy */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                The Engineering Philosophy
              </h2>
              <p>
                We don&apos;t chase low latency because it looks impressive in benchmarks. We chase it because every millisecond removed from the system reduces the gap between reality and information.
              </p>
              <p>
                The closer those two become, the better decisions people can make. In industrial environments, that means less downtime, faster responses, safer operations, and more confidence in the systems people rely on every day.
              </p>
              <p className="text-blue-300 font-bold text-lg">
                Fourteen milliseconds isn&apos;t the product. It&apos;s what happens when every layer of the product is designed around a simple idea:
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-zinc-900 to-zinc-950 border border-blue-500/40 text-center font-bold text-xl text-white">
                &ldquo;The real world shouldn&apos;t have to wait for software.&rdquo;
              </div>
            </div>

          </article>

          {/* Footer Back link */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-3 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground/50 mb-0.5">Return to</div>
                <div className="font-semibold text-white">Engineering Journal</div>
              </div>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
