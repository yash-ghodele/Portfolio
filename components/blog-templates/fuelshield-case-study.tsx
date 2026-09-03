"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, ShieldCheck, Truck, Cpu, AlertTriangle, WifiOff, Activity, CheckCircle2 } from "lucide-react"
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

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-400">
              Building FuelShield: Lessons from 100+ Hours in Truck Yards
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-emerald-500/40 pl-4 italic">
              Real-world IoT is 10% code and 90% dealing with vibration, diesel fumes, power fluctuations, lost GSM signals, and humans determined to bypass your system.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xs font-black text-emerald-400">
                YG
              </div>
              <div>
                <span className="text-sm font-semibold text-white block">Yash Ghodele</span>
                <span className="text-xs text-muted-foreground">Founder, Ugam Digital Studio</span>
              </div>
            </div>
          </motion.header>

          {/* Hero Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl relative aspect-[16/9]"
          >
            <Image
              src="/images/journal/fuelshield.jpg"
              alt="Building FuelShield — Truck Yard Hardware Deployment"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              Most IoT demos look impressive: a sensor reports data, a dashboard updates in real time, an alert appears when something goes wrong. Everything works perfectly.
            </p>

            <p className="text-emerald-300 font-semibold border-l-2 border-emerald-400 pl-4 py-1">
              Then you deploy it in the real world. That&apos;s where the real engineering begins.
            </p>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-400" />
                The Problem Nobody Can See
              </h2>
              <p>
                Fuel theft is one of the most expensive hidden costs in commercial transportation. Across India&apos;s logistics ecosystem, fleet operators lose thousands of crores annually to unauthorized fuel siphoning, inaccurate reporting, and undetected leakages.
              </p>
              <p>
                The challenge isn&apos;t discovering the theft afterward. The challenge is <strong>knowing it is happening while it is happening</strong>.
              </p>
              <p>
                Existing solutions generally fall into two categories:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-red-400">Enterprise Systems</div>
                  <div className="text-zinc-400">Cost more than many operators can justify (&gt;&sharp;2L+ per vehicle).</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-amber-400">Aftermarket Devices</div>
                  <div className="text-zinc-400">Low cost, but drivers learn to bypass or game them within weeks.</div>
                </div>
              </div>

              <p>
                We believed there was room for something different: an affordable, reliable system capable of operating in the unpredictable conditions of Indian transportation networks. That became <strong>FuelShield</strong>.
              </p>
            </div>

            {/* Section 2 - Architecture */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                The Architecture
              </h2>
              <p>
                At its core, FuelShield is intentionally simple. An ultrasonic sensor measures fuel levels inside the tank, an ESP32 microcontroller processes readings locally, and only meaningful events are transmitted to the cloud.
              </p>

              {/* Architecture Diagram Box */}
              <div className="my-6 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 font-mono text-sm space-y-3">
                <p className="text-xs text-emerald-400/70 uppercase tracking-widest">
                  {`// FuelShield Data Pipeline`}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-white/90">
                  <span className="text-emerald-400 font-bold">Fuel Tank</span>
                  <span className="text-zinc-600">&rarr;</span>
                  <span className="text-emerald-400 font-bold">HC-SR04</span>
                  <span className="text-zinc-600">&rarr;</span>
                  <span className="text-emerald-400 font-bold">ESP32</span>
                  <span className="text-zinc-600">&rarr;</span>
                  <span className="text-blue-400 font-bold">MQTT</span>
                  <span className="text-zinc-600">&rarr;</span>
                  <span className="text-amber-400 font-bold">Firebase</span>
                  <span className="text-zinc-600">&rarr;</span>
                  <span className="text-purple-400 font-bold">Dashboard</span>
                </div>
                <p className="text-xs text-zinc-400 pt-2 border-t border-emerald-500/20">
                  Anomaly detection happens directly on device. The cloud receives alerts; the edge device makes decisions.
                </p>
              </div>
            </div>

            {/* Section 3 - Velocity Detection */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                Detecting Theft Without Detecting Normal Usage
              </h2>
              <p>
                The first assumption we made was wrong. Initially, it seemed obvious that fuel theft could be identified by monitoring sudden drops in fuel level.
              </p>
              <p>
                The problem is that fuel levels naturally decrease during operation: engines consume fuel, vehicles climb hills, fuel sloshes inside tanks, and sensors experience noise.
              </p>

              <div className="p-5 rounded-xl bg-zinc-900/60 border border-emerald-500/30 text-sm space-y-2">
                <h4 className="font-bold text-emerald-400">The Solution: Measuring Rate of Change (Velocity)</h4>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  A commercial diesel engine consumes fuel gradually over time (0.8–1.2L/hr). A siphon theft event removes fuel dramatically faster (10–15L/min). Once we shifted our detection model from quantity to velocity, accuracy improved to <strong>99.2%</strong>.
                </p>
              </div>
            </div>

            {/* Section 4 - Field Lessons */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-emerald-400" />
                What the Field Taught Us
              </h2>
              <p>
                The biggest lessons did not come from coding. They came from truck yards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                  <div className="font-bold text-zinc-400 uppercase tracking-wider">In the Lab</div>
                  <ul className="space-y-1 text-zinc-400 list-disc pl-4">
                    <li>Sensors remain stable</li>
                    <li>Power supplies are clean</li>
                    <li>Networks stay connected</li>
                    <li>Hardware stays mounted</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-emerald-500/30 space-y-2">
                  <div className="font-bold text-emerald-400 uppercase tracking-wider">On Actual Vehicles</div>
                  <ul className="space-y-1 text-zinc-300 list-disc pl-4">
                    <li>Tanks vibrate continuously</li>
                    <li>Diesel fumes degrade seals</li>
                    <li>Power fluctuates &amp; spikes</li>
                    <li>GSM signals vanish for hours</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 - Offline First */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <WifiOff className="w-5 h-5 text-emerald-400" />
                Designing for Failure &amp; Offline Resilience
              </h2>
              <p>
                One of the most important lessons was that connectivity cannot be trusted. Assuming continuous internet access would have made the system unusable.
              </p>
              <p>
                Instead, FuelShield was designed as an <strong>offline-first platform</strong>: readings, detection, and alerts are queued locally in a 50-event buffer and automatically sync when network returns.
              </p>
            </div>

            {/* Section 6 - Conclusion */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                The Biggest Lesson
              </h2>
              <p>
                After more than a hundred hours spent around trucks, workshops, fleet operators, and service technicians, one lesson stands out:
              </p>
              <p className="text-emerald-300 font-semibold">
                Technology does not operate in controlled environments. It operates in reality. Reality is noisy, unpredictable, and breaks assumptions.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/40 text-center font-bold text-lg text-white">
                &ldquo;The job of engineering is to build systems that continue working despite reality. That&apos;s the difference between a prototype and a product people trust in production.&rdquo;
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
