"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, MapPin, Cpu, Globe, ExternalLink } from "lucide-react"
import { JOURNAL_POSTS } from "@/lib/journal"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
}

const TECH_PILLS = [
  { label: "ESP32", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
  { label: "MQTT", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
  { label: "Next.js", color: "text-white border-white/20 bg-white/5" },
  { label: "Firebase", color: "text-amber-400 border-amber-500/30 bg-amber-500/5" },
  { label: "Flutter", color: "text-sky-400 border-sky-500/30 bg-sky-500/5" },
  { label: "Python", color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5" },
]

export default function BentoGateway() {
  const latestPost = JOURNAL_POSTS[0]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 max-w-7xl mx-auto" aria-label="Founder overview">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">
          {"// At a Glance"}
        </span>
        <div className="h-px flex-1 bg-white/5" />
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

        {/* ── Cell 1: Founder Card (lg: spans 2 cols) ── */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-2 group relative rounded-2xl border border-white/5 bg-zinc-950 p-6 md:p-8 overflow-hidden
                     hover:border-primary/20 transition-colors duration-500"
        >
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center text-2xl font-black text-primary">
              YG
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-white tracking-tight">Yash Ghodele</h2>
                <span className="px-2 py-0.5 rounded-full text-xs border border-primary/30 bg-primary/10 text-primary">
                  Founder
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
                ECE engineer turned full-stack product builder. I bridge the gap between hardware
                sensors and high-performance web interfaces — and built Ugam to make that rare
                skill accessible.
              </p>
              <a
                href="https://ugamstudio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
              >
                <Globe className="w-3.5 h-3.5" />
                ugamstudio.vercel.app
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            <Link
              href="/about"
              className="flex-shrink-0 p-2 rounded-xl border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 opacity-60 group-hover:opacity-100"
              aria-label="Read about me"
            >
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>
        </motion.div>


        {/* ── Cell 3: Latest Journal ── */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group rounded-2xl border border-white/5 bg-zinc-950 p-6 overflow-hidden
                     hover:border-primary/20 transition-colors duration-500"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Latest Journal
            </p>
            <span className="px-2 py-0.5 rounded-full text-xs border border-primary/20 bg-primary/5 text-primary/80">
              {latestPost.category}
            </span>
          </div>

          <Link href={`/journal/${latestPost.slug}`} className="block group/link">
            <h3 className="text-base font-semibold text-white leading-snug mb-2 group-hover/link:text-primary transition-colors duration-200 line-clamp-3">
              {latestPost.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {latestPost.excerpt}
            </p>
            <div className="flex items-center gap-1 text-xs text-primary font-medium">
              Read article
              <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </Link>
        </motion.div>

        {/* ── Cell 4: Stack Preview ── */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group rounded-2xl border border-white/5 bg-zinc-950 p-6 overflow-hidden
                     hover:border-primary/20 transition-colors duration-500"
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Stack
            </p>
            <Link
              href="/stack"
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Full stack <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {TECH_PILLS.map((tech) => (
              <span
                key={tech.label}
                className={`px-2.5 py-1 rounded-full text-xs border font-medium ${tech.color} transition-all duration-200 hover:scale-105`}
              >
                {tech.label}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-muted-foreground/50" />
            <span className="text-xs text-muted-foreground/50">IoT → Cloud → UI</span>
          </div>
        </motion.div>

        {/* ── Cell 5: Location ── */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group rounded-2xl border border-white/5 bg-zinc-950 p-6 overflow-hidden
                     hover:border-primary/20 transition-colors duration-500"
        >
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-5">
            Based In
          </p>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-base leading-tight">
                Aurangabad, MH
              </p>
              <p className="text-muted-foreground text-sm mt-0.5">→ Global delivery</p>
            </div>
          </div>
          <div className="mt-5 text-xs text-muted-foreground leading-relaxed">
            Building digital infrastructure for Aurangabad&apos;s 500+ manufacturing units —
            offline-first, Marathi-aware, hardware-resilient.
          </div>
        </motion.div>

        {/* ── Cell 6: Ugam Studio CTA ── */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="group rounded-2xl border border-primary/20 bg-primary/5 p-6 overflow-hidden
                     hover:border-primary/40 hover:bg-primary/10 transition-all duration-500 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

          <p className="text-xs font-mono tracking-widest text-primary/70 uppercase mb-4 relative">
            Startup
          </p>
          <div className="relative">
            <h3 className="text-lg font-bold text-white leading-tight mb-1">
              Ugam Digital Studio
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Where digital begins. IoT systems, manufacturing dashboards, and engineering education —
              built for Bharat&apos;s industrial heartland.
            </p>
            <a
              href="https://ugamstudio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 group/btn"
            >
              Visit Studio
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
