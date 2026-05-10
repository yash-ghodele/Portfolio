"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" },
  }),
}

type StackCategory = {
  label: string
  icon: string
  color: string
  description: string
  items: { name: string; note?: string }[]
}

const STACK: StackCategory[] = [
  {
    label: "Hardware / IoT",
    icon: "⚡",
    color: "border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-500/40",
    description: "Embedded systems and connected devices",
    items: [
      { name: "ESP32", note: "Primary MCU" },
      { name: "Arduino" },
      { name: "MQTT", note: "Edge messaging" },
      { name: "LoRaWAN", note: "Long-range IoT" },
      { name: "HC-SR04", note: "Ultrasonic ranging" },
      { name: "DHT22", note: "Temp/humidity" },
      { name: "SIM800L", note: "GSM for remote areas" },
      { name: "I2C / SPI / UART" },
    ],
  },
  {
    label: "Frontend / UI",
    icon: "🖥",
    color: "border-blue-500/25 bg-blue-500/5 hover:border-blue-500/40",
    description: "Web and mobile interfaces",
    items: [
      { name: "Next.js 14", note: "App Router" },
      { name: "React", note: "v18" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Flutter", note: "Mobile" },
      { name: "shadcn/ui" },
    ],
  },
  {
    label: "Backend / Cloud",
    icon: "☁",
    color: "border-purple-500/25 bg-purple-500/5 hover:border-purple-500/40",
    description: "APIs, databases, and real-time systems",
    items: [
      { name: "Firebase", note: "Auth + Realtime DB" },
      { name: "Supabase" },
      { name: "FastAPI", note: "Python REST" },
      { name: "Sanity CMS" },
      { name: "Cloudflare Pages" },
      { name: "Vercel" },
      { name: "WebSockets", note: "Live dashboards" },
    ],
  },
  {
    label: "Languages",
    icon: "{ }",
    color: "border-amber-500/25 bg-amber-500/5 hover:border-amber-500/40",
    description: "What I code in daily",
    items: [
      { name: "TypeScript", note: "Primary" },
      { name: "Python", note: "IoT + data" },
      { name: "C/C++", note: "Embedded" },
      { name: "Dart", note: "Flutter" },
      { name: "SQL" },
    ],
  },
  {
    label: "Tools & Dev",
    icon: "🔧",
    color: "border-slate-500/25 bg-slate-500/5 hover:border-slate-500/40",
    description: "Workflow and toolchain",
    items: [
      { name: "Git / GitHub" },
      { name: "VS Code" },
      { name: "Arduino IDE" },
      { name: "Figma", note: "UI design" },
      { name: "Postman" },
      { name: "ESLint + Prettier" },
    ],
  },
  {
    label: "Philosophy",
    icon: "🎯",
    color: "border-rose-500/25 bg-rose-500/5 hover:border-rose-500/40",
    description: "How I choose what to use",
    items: [
      { name: "Edge-first detection" },
      { name: "Offline-first buffering" },
      { name: "Signal > noise UI" },
      { name: "Local context matters" },
      { name: "Ship, then iterate" },
      { name: "Hardware resilience" },
    ],
  },
]

import HeroNetwork from "@/components/ui/hero-network"

export default function StackClient() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-32 relative overflow-hidden">
      {/* Background Grid/Network */}
      <div className="absolute inset-0 z-0">
        <HeroNetwork showParticles={false} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">{"// Stack"}</span>
            <div className="h-px w-16 bg-white/10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-5">
            Sensor to Screen —<br />
            <span className="text-primary">The Full Arsenal.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Every tool I reach for has been stress-tested in production — dusty factory floors,
            intermittent 4G, power fluctuations. This is what actually works.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {STACK.map((cat, i) => (
            <motion.div
              key={cat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onClick={() => setActive(active === cat.label ? null : cat.label)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                ${cat.color}
                ${active === cat.label ? "ring-1 ring-primary/30" : ""}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-sm">{cat.label}</h3>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground/50">{cat.items.length}</span>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="group/pill relative">
                    <span className="px-2.5 py-1 rounded-full text-xs border border-white/8 bg-white/4 text-white/80 hover:text-white hover:border-white/20 transition-colors duration-200 block">
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] bg-zinc-800 border border-white/10 text-muted-foreground whitespace-nowrap opacity-0 group-hover/pill:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                        {item.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* IoT Pipeline visual strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
        >
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-6">
            {"// The full pipeline"}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {[
              { label: "Sensor", color: "text-emerald-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "ESP32", color: "text-emerald-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "MQTT", color: "text-blue-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "Firebase / Supabase", color: "text-blue-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "WebSocket", color: "text-purple-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "Next.js Dashboard", color: "text-purple-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "14ms", color: "text-primary font-bold" },
            ].map((step, i) => (
              <span key={i} className={`font-mono ${step.color}`}>
                {step.label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
