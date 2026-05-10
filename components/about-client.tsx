"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Zap, MapPin, GraduationCap, Briefcase, Users, ExternalLink } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
}

import HeroNetwork from "@/components/ui/hero-network"

const TIMELINE = [
  {
    year: "2025 →",
    title: "Founder — Ugam Digital Studio",
    subtitle: "Aurangabad, MH",
    desc: "Building IoT fleet management, manufacturing dashboards, and engineering education at scale. 200+ vehicle deployments, 50+ engineering projects delivered.",
    icon: Briefcase,
    highlight: true,
  },
  {
    year: "2024 →",
    title: "Executive Head",
    subtitle: "BotBuddies (Nextechminds Pvt. Ltd & S2P Robotics Pvt. Ltd.)",
    desc: "Leading robotics initiatives and managing team operations for innovative IoT and robotics projects.",
    icon: Zap,
    highlight: false,
  },
  {
    year: "2024",
    title: "Lead Organizer — InnoHack",
    subtitle: "MIT Aurangabad",
    desc: "Organized MIT's flagship hackathon — 200+ participants, 40+ projects across AI, IoT, and web tracks. Full logistics, mentorship coordination, and industry judging.",
    icon: Users,
    highlight: false,
  },
  {
    year: "2023 - 2024",
    title: "Event Head",
    subtitle: "ECESA (Electronics & Communication Engineering Students Association)",
    desc: "Organized and managed technical events, workshops, and seminars for the engineering community.",
    icon: Users,
    highlight: false,
  },
  {
    year: "2023 - 2024",
    title: "Cultural Secretary",
    subtitle: "IETE Students Forum",
    desc: "Coordinated cultural and technical events, fostering community engagement and collaboration.",
    icon: Zap,
    highlight: false,
  },
  {
    year: "2022 →",
    title: "B.Tech Electronics & Communication Engineering",
    subtitle: "MIT College of Engineering, Aurangabad",
    desc: "Core: Digital Signal Processing, Embedded Systems, Communication Networks. Active in technical clubs, SPIC MACAY cultural leadership, and IEEE.",
    icon: GraduationCap,
    highlight: false,
  },
]

const PRINCIPLES = [
  {
    icon: "⚡",
    title: "Hardware Thinking, Software Execution",
    desc: "Signal integrity, power budgets, and reliability are the same problems in circuits as in distributed systems — just at different abstraction levels.",
  },
  {
    icon: "🏭",
    title: "Regional First",
    desc: "Aurangabad has 500+ manufacturing units that are underserved by enterprise software. Local context — power outages, Marathi, intermittent 4G — matters enormously.",
  },
  {
    icon: "🎯",
    title: "Edge Before Cloud",
    desc: "Critical decisions should never wait for a round-trip. Detection logic lives on the microcontroller. The cloud gets alerts, not raw data.",
  },
  {
    icon: "📐",
    title: "Signal Over Noise",
    desc: "Every visible metric must be actionable within 5 minutes. Everything else is a drill-down. This principle applies to dashboards, codebases, and conversations.",
  },
]

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-32 relative overflow-hidden">
      {/* Background Grid/Network */}
      <div className="absolute inset-0 z-0">
        <HeroNetwork showParticles={false} />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">{"// About"}</span>
            <div className="h-px w-16 bg-white/10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
            The Hardware-to-Software Bridge.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I&apos;m Yash Ghodele — an ECE engineer from MIT Aurangabad who builds full-stack products and IoT systems.
            I founded{" "}
            <a href="https://ugamdigitalstudio.tech" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:underline font-medium">
              Ugam Digital Studio
            </a>{" "}
            to bring professional-grade digital infrastructure to the manufacturers, startups, and engineers that
            enterprise software ignores.
          </p>
        </motion.div>

        {/* Location pill */}
        <motion.div
          custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="flex items-center gap-3 mb-16 p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm w-fit"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-white font-medium">Aurangabad, Maharashtra → Global delivery</span>
        </motion.div>

        {/* Timeline */}
        <motion.div
          custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary" />
            Journey
          </h2>
          <div className="space-y-6">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`flex gap-6 p-6 rounded-2xl border transition-colors duration-300 backdrop-blur-sm
                    ${item.highlight
                      ? "border-primary/25 bg-primary/5 hover:border-primary/40"
                      : "border-white/5 bg-white/[0.02] hover:border-white/10"
                    }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                    ${item.highlight ? "bg-primary/15 text-primary" : "bg-white/5 text-muted-foreground"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-muted-foreground">{item.year}</span>
                      <h3 className={`font-bold ${item.highlight ? "text-primary" : "text-white"}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* How I Work / Features */}
        <motion.div
          custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">
            <div className="md:col-span-7 space-y-8">
              <h2 className="text-3xl font-bold text-white">How I work</h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I design systems that have to work in the real world — not just demos. My work lives where embedded hardware, software platforms, and execution collide.
                </p>
                <p>
                  Leading teams and events taught me what textbooks don&apos;t: assumptions fail, coordination breaks, and clarity beats speed when pressure hits.
                </p>
                <p className="pt-3 text-foreground font-semibold">
                  My work converges around three areas:
                </p>
                <ul className="space-y-4 pl-1">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span><span className="text-foreground font-semibold">IoT & Embedded Systems</span> — devices built for unpredictable environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span><span className="text-foreground font-semibold">Full Stack Platforms</span> — software that makes hardware usable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span><span className="text-foreground font-semibold">Execution & Systems</span> — people, processes, and timelines that actually ship</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center space-y-10">
              {[
                {
                  icon: Zap,
                  title: "Hardware Resilience",
                  desc: "Building IoT solutions with ESP32 and sensors that operate in unpredictable real-world conditions.",
                  color: "primary"
                },
                {
                  icon: Users,
                  title: "Team Orchestration",
                  desc: "Leading teams through execution pressure — InnoHack, BotBuddies, and ECESA communities.",
                  color: "purple-500"
                },
                {
                  icon: ArrowUpRight,
                  title: "Tradeoff Analysis",
                  desc: "Balancing scope, timelines, and coordination when assumptions break during production.",
                  color: "blue-500"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="group flex items-start gap-6 relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <div className={`relative p-4 rounded-2xl bg-${feature.color}/10 border border-${feature.color}/20 backdrop-blur-sm group-hover:border-${feature.color}/50 transition-colors`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Engineering Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={i}
                custom={i + 11}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-colors duration-300"
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA row */}
        <motion.div
          custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://ugamdigitalstudio.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Ugam Digital Studio
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            See My Work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
