"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function FuelShieldCaseStudy() {
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
                May 02, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              Building FuelShield: Lessons from 100+ Hours in Truck Yards
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              Real-world IoT is 10% code and 90% dealing with vibration, diesel fumes, lost GSM signals, and drivers who try to bypass your sensors.
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
              src="/images/journal/fuelshield.jpg"
              alt="Building FuelShield"
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
              In India, fuel theft from commercial vehicles costs the industry ₹5,000+ crores annually. Fleet operators have almost no visibility into their tanks between stops. Existing solutions were either expensive enterprise systems (₹2L+ per vehicle) or unreliable aftermarket setups that drivers learned to game in weeks.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              The Architecture
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              FuelShield uses an HC-SR04 ultrasonic sensor mounted inside the tank, connected to an ESP32 microcontroller. The ESP32 processes readings locally — no cloud round-trip for critical decisions — and publishes to an MQTT broker only when anomalies are detected or during periodic health checks.
            </p>

            {/* FuelShield Schematic */}
            <div className="my-8 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 font-mono text-sm">
              <p className="text-xs text-emerald-400/70 uppercase tracking-widest mb-4">
                {`// FuelShield Architecture`}
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

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              The Detection Logic
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              We couldn&apos;t just track fuel level drops — legitimate usage causes those too. Instead, we built a rate-of-change detector. A normal 200L diesel engine burns roughly 0.8-1.2L per hour at highway speeds. A siphon drain happens at 10-15L per minute. The delta is unmistakable.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The result: sub-1-second siphon detection, 99.2% accuracy across 200+ vehicle deployments, and a system cost of ₹3,800 per vehicle — 98% cheaper than enterprise alternatives.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5">
              What Production Taught Us
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Lab environments lie. Tanks vibrate on rough roads. Power fluctuates. SIM cards lose signal in rural corridors. We built offline-first buffering (50 readings queued locally) and adaptive sampling (higher frequency when anomalies detected). Every edge case was a field trip.
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
