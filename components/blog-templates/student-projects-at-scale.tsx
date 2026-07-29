"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import Footer from "@/components/footer"

import Image from "next/image"

export default function StudentProjectsAtScale() {
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
              <span className="px-2.5 py-0.5 rounded-full text-xs border font-medium text-purple-400 border-purple-500/30 bg-purple-500/5">
                Process
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                Apr 20, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                6 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              Building Student Projects at Scale: How We Deliver in 48 Hours
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              The internal protocol and templating system that allows Ugam Campus to ship professional-grade engineering projects consistently and fast.
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
              src="/images/journal/ugam-campus.jpg"
              alt="Building Student Projects at Scale"
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
              Every semester, thousands of engineering students face the same panic: final year projects due, no idea where to start, no time to learn from scratch. We built Ugam Campus to solve this — not by cutting corners, but by engineering a repeatable delivery system.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              The Alchemist Protocol
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Every project runs through 5 phases: Initialization (problem statement analysis), Architecture (system design and component selection), Execution (hardware + software build), Validation (testing and calibration), and Viva Prep (documentation and presentation coaching). Each phase has a fixed time budget and clear exit criteria.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              The Template Advantage
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              We reuse 70% of the architecture across projects. IoT projects share the same ESP32 + MQTT + Firebase stack. Web projects share the same Next.js + Tailwind + Supabase foundation. The 30% customization is the project-specific logic — and that&apos;s where we focus our energy.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The result: 50+ projects delivered, zero plagiarism flags (custom implementations every time), and students who actually understand their own system because they built it alongside us — not just received it.
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
