"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"
import HeroNetwork from "@/components/ui/hero-network"

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
    label: "Hardware & IoT",
    icon: "⚡",
    color: "border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-500/40",
    description: "Embedded microcontrollers, telemetry & edge sensors",
    items: [
      { name: "ESP32", note: "Primary Dual-Core MCU" },
      { name: "ESP8266", note: "NodeMCU Wi-Fi Nodes" },
      { name: "Arduino", note: "C/C++ Firmware" },
      { name: "MQTT", note: "Edge Pub/Sub Broker" },
      { name: "LoRaWAN", note: "Long-Range IoT Corridor" },
      { name: "HC-SR04 & DHT22", note: "Ultrasonic & Temp/Humidity" },
      { name: "SIM800L", note: "GSM/GPRS Cellular Module" },
      { name: "L293D & SG90", note: "Motor IC & Servo Actuators" },
      { name: "I2C / SPI / UART", note: "Bus Protocols" },
    ],
  },
  {
    label: "Frontend & Mobile",
    icon: "🖥",
    color: "border-blue-500/25 bg-blue-500/5 hover:border-blue-500/40",
    description: "Web apps, dashboards & cross-platform mobile UI",
    items: [
      { name: "Next.js 14–16", note: "App Router & SSR" },
      { name: "React 18/19", note: "Hooks & Server Components" },
      { name: "TypeScript", note: "Strict Type Safety" },
      { name: "Tailwind CSS v4", note: "Design System Styling" },
      { name: "Framer Motion", note: "Micro-animations & Gestures" },
      { name: "Flutter & Dart", note: "Cross-Platform Mobile" },
      { name: "Expo / React Native", note: "Native Mobile Protocol" },
      { name: "PWA & IndexedDB", note: "Offline-First Engine" },
      { name: "shadcn/ui", note: "Accessible Component Primitives" },
    ],
  },
  {
    label: "Backend, Cloud & Data",
    icon: "☁",
    color: "border-purple-500/25 bg-purple-500/5 hover:border-purple-500/40",
    description: "APIs, real-time sync, databases & edge hosting",
    items: [
      { name: "Firebase", note: "Auth & Realtime DB" },
      { name: "Supabase", note: "Postgres & Row Level Security" },
      { name: "FastAPI & Flask", note: "Async Python REST Microservices" },
      { name: "Prisma ORM", note: "Type-Safe DB Client" },
      { name: "Cloudflare Pages & R2", note: "Edge Hosting & Zero-Egress Storage" },
      { name: "Vercel", note: "Production Next.js Platform" },
      { name: "AWS SNS", note: "Transactional SMS & OTP Pipeline" },
      { name: "WebSockets", note: "Sub-14ms Real-Time Streams" },
      { name: "SQLite & Redis", note: "Edge & Memory Caching" },
    ],
  },
  {
    label: "AI & Computer Vision",
    icon: "🧠",
    color: "border-cyan-500/25 bg-cyan-500/5 hover:border-cyan-500/40",
    description: "Edge neural networks & generative LLM pipelines",
    items: [
      { name: "PyTorch", note: "Deep Learning Model Training" },
      { name: "MobileNetV2", note: "Sub-2s Edge Vision Classifier" },
      { name: "TensorFlow", note: "Model Quantization" },
      { name: "Gemini 1.5 LLM", note: "Context Retrieval & Multi-Lingual RAG" },
      { name: "Hybrid CNN + LLM", note: "Edge Vision + Cloud Intelligence" },
      { name: "Recharts", note: "Analytical Data Visualizations" },
    ],
  },
  {
    label: "Languages & Enterprise Engines",
    icon: "{ }",
    color: "border-amber-500/25 bg-amber-500/5 hover:border-amber-500/40",
    description: "Languages & execution environments used across production",
    items: [
      { name: "TypeScript", note: "Primary Full-Stack Language" },
      { name: "Python", note: "AI Pipelines & Data Services" },
      { name: "C / C++", note: "Embedded Firmware & Hardware Logic" },
      { name: "Dart", note: "Flutter Mobile Apps" },
      { name: "SQL", note: "Postgres & Query Optimization" },
      { name: "VBA & WinAPI", note: "RAM Array Engine for 100k+ Records" },
    ],
  },
  {
    label: "Tools & Dev Ecosystem",
    icon: "🔧",
    color: "border-slate-500/25 bg-slate-500/5 hover:border-slate-500/40",
    description: "Toolchain, hardware flashing & design workflow",
    items: [
      { name: "Git & GitHub", note: "Version Control & CI Workflows" },
      { name: "VS Code", note: "Primary IDE Environment" },
      { name: "Arduino IDE & PlatformIO", note: "MCU Firmware Development" },
      { name: "Figma", note: "UI/UX Wireframes & Component Design" },
      { name: "Postman", note: "API Endpoint Testing" },
      { name: "ESLint & Prettier", note: "Automated Code Quality" },
      { name: "Mammoth.js & KaTeX", note: "Document Conversion & Math Engine" },
    ],
  },
]

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
            Every tool I reach for has been stress-tested across real projects, truck yards, factory floors,
            agricultural fields, and high-throughput pipelines. This is what actually works.
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
              { label: "Sensor / Camera", color: "text-emerald-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "ESP32 / Edge ML", color: "text-emerald-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "MQTT / WebSockets", color: "text-blue-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "FastAPI & Supabase", color: "text-blue-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "Gemini 1.5 LLM", color: "text-cyan-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "Next.js Dashboard", color: "text-purple-400" },
              { label: "→", color: "text-muted-foreground/40" },
              { label: "< 14ms Latency", color: "text-primary font-bold" },
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
