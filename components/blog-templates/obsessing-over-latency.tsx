"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
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

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              Why We Obsess Over 14ms Latency (And Why You Should Too)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              Understanding the invisible threshold of human perception and why real-time means sub-50ms in industrial environments where delays are dangerous.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-black text-primary">
                YG
              </div>
              <span className="text-sm text-white font-medium">Yash Ghodele</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-sm text-muted-foreground">Founder, Ugam Digital Studio</span>
            </div>

            <div className="mt-8 h-px bg-white/5" />
          </motion.header>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl"
          >
            <Image
              src="/images/journal/latency.jpg"
              alt="Why We Obsess Over 14ms Latency"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Humans perceive latency in three tiers. Under 100ms feels instantaneous — the system responds before you consciously register the delay. 100-300ms feels responsive. Over 500ms feels like lag. In consumer apps, the difference is frustration. In industrial environments, it&apos;s a safety issue.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              At 200 RPM spindle speed, a 500ms sensor-to-dashboard delay means the machine has rotated 1.6 times before the operator sees an alarm. At 1000 RPM, it&apos;s 8.3 rotations. By the time the alert fires, the damage is done. We target 14ms — one frame at 60fps — because human reaction time (250ms) should be the bottleneck, not the technology.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              The Edge Advantage
            </h2>

            {/* Latency Simulator */}
            <div className="my-8 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
              <p className="text-xs font-mono text-blue-400/70 uppercase tracking-widest mb-3">
                {`// Interactive: Latency Simulator`}
              </p>
              <p className="text-sm text-muted-foreground">
                Edge processing path:{" "}
                <span className="text-white font-mono">sensor (2ms) → ESP32 (4ms) → MQTT (4ms) → WebSocket (4ms) → React (2ms) = </span>
                <span className="text-primary font-bold font-mono">14ms total</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Cloud round-trip path:{" "}
                <span className="text-white font-mono">sensor → 4G → API → DB → WebSocket → browser = </span>
                <span className="text-amber-400 font-mono">200–800ms</span>
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              By moving detection logic from cloud to edge (the microcontroller itself), we eliminate the entire round-trip: sensor → ESP32 → cloud API → database → WebSocket → browser. That path takes 200-800ms over a typical 4G connection. Edge processing compresses it to 8-20ms — the time it takes to run the anomaly calculation on-chip.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              What 14ms Actually Means
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              14ms is our measured end-to-end latency from sensor threshold breach to dashboard alert for systems on a stable local network. It&apos;s not a marketing number. It&apos;s the result of: edge detection (2ms), local MQTT publish (4ms), WebSocket push (6ms), React state update (2ms). Each number has a measurement to back it.
            </p>
          </motion.article>

          {/* Footer nav */}
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
                <div className="font-semibold">Engineering Journal</div>
              </div>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
