"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function HardwareToWeb() {
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
              <span className="px-2.5 py-0.5 rounded-full text-xs border font-medium text-emerald-400 border-emerald-500/30 bg-emerald-500/5">
                Engineering
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                May 12, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                7 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              From Hardware Circuits to Web Interfaces: Bridging the Mindset Gap
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              What electrical engineering taught me about frontend state management, race conditions, and building software that doesn&apos;t catch fire.
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
              src="/images/journal/hardware-to-web.jpg"
              alt="From Hardware Circuits to Web Interfaces"
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
              When I started my B.Tech in ECE at MIT Aurangabad, I was drowning in circuit theory. BJTs, operational amplifiers, transmission lines — all fascinating, but divorced from reality. Nobody was showing me how circuits connected to real-world products.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The industry gap was brutal. ECE students graduate knowing circuits but can&apos;t ship code. CS students know frameworks but don&apos;t understand the physical layer. Meanwhile, products that actually matter — industrial monitoring systems, autonomous vehicles, medical devices — require both.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              The Mental Model Shift
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              In circuit design, you think about signal integrity, power efficiency, and reliability. These exact principles apply to distributed systems. Network latency is the new noise floor. Resource usage is the new power budget. Once I realized hardware and software were the same problem at different abstraction levels, the learning curve flattened dramatically.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              Why This Bridge Is Rare
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Most developers specialize in one layer. The ones who span both — who can debug an MQTT packet loss issue and a React hydration bug in the same afternoon — are extraordinarily rare. That&apos;s the core of Ugam: we don&apos;t just build dashboards for IoT data. We design the entire pipeline from sensor to screen.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              If you&apos;re an ECE student reading this, stop waiting for your curriculum to connect the dots. Pick a sensor. Build a web dashboard for it. Ship it. The mental models from circuits will map directly — you&apos;ll be surprised how fast.
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
