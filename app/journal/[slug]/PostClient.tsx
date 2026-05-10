"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { JournalPost } from "@/lib/journal"

const CATEGORY_COLORS: Record<JournalPost["category"], string> = {
  Insights: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  Technical: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  Engineering: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  Process: "text-purple-400 border-purple-500/30 bg-purple-500/5",
}

export default function PostClient({ post }: { post: JournalPost }) {
  return (
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
            <span className={`px-2.5 py-0.5 rounded-full text-xs border font-medium ${CATEGORY_COLORS[post.category]}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-black text-primary">
              YG
            </div>
            <span className="text-sm text-white font-medium">{post.author}</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-sm text-muted-foreground">Founder, Ugam Digital Studio</span>
          </div>

          <div className="mt-8 h-px bg-white/5" />
        </motion.header>

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {post.content.map((block, i) => {
            if (block.type === "h3") {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === "p") {
              return (
                <p
                  key={i}
                  className="text-base text-muted-foreground leading-[1.85] font-light"
                >
                  {block.text}
                </p>
              )
            }
            if (block.type === "interactive" && block.component === "LatencySim") {
              return (
                <div
                  key={i}
                  className="my-8 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5"
                >
                  <p className="text-xs font-mono text-blue-400/70 uppercase tracking-widest mb-3">
                    {"// Interactive: Latency Simulator"}
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
              )
            }
            if (block.type === "interactive" && block.component === "FuelShieldSchematic") {
              return (
                <div
                  key={i}
                  className="my-8 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 font-mono text-sm"
                >
                  <p className="text-xs text-emerald-400/70 uppercase tracking-widest mb-4">
                    {"// FuelShield Architecture"}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-white/80">
                    {[
                      { label: "HC-SR04", color: "text-emerald-400" },
                      { label: "→", color: "text-muted-foreground/40" },
                      { label: "ESP32", color: "text-emerald-400" },
                      { label: "→ (local detection) →", color: "text-muted-foreground/40" },
                      { label: "MQTT", color: "text-blue-400" },
                      { label: "→", color: "text-muted-foreground/40" },
                      { label: "Firebase", color: "text-amber-400" },
                      { label: "→", color: "text-muted-foreground/40" },
                      { label: "Next.js Dashboard", color: "text-purple-400" },
                    ].map((step, j) => (
                      <span key={j} className={step.color}>{step.label}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Detection runs on-chip. Only alerts reach the cloud. Offline buffer: 50 readings.
                  </p>
                </div>
              )
            }
            return null
          })}
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
  )
}
