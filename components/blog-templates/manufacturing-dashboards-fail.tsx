"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, LayoutDashboard, SlidersHorizontal, AlertTriangle, Eye, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ManufacturingDashboardsFail() {
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
              <span className="px-2.5 py-0.5 rounded-full text-xs border font-medium text-cyan-400 border-cyan-500/30 bg-cyan-500/5">
                Technical
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                Apr 28, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                7 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-400">
              Why Manufacturing Dashboards Fail (And How WireFlow Solves It)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-cyan-500/40 pl-4 italic">
              Most factory software is built by people who have never spent a day on a plant floor. The result is dashboards full of information—and empty of action.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-xs font-black text-cyan-400">
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
            className="mb-14 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl relative aspect-[16/9]"
          >
            <Image
              src="/images/journal/wireflow.jpg"
              alt="Why Manufacturing Dashboards Fail — Whiteboard vs Telemetry Screen"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              Walk into almost any factory running modern manufacturing software and you&apos;ll see a familiar scene.
            </p>

            <p>
              A large monitor displays dozens of charts, gauges, percentages, trend lines, and KPIs. Then, a few meters away, you&apos;ll find a whiteboard.
            </p>

            <p>
              And that whiteboard often contains the <strong>five numbers operators actually care about</strong>.
            </p>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-cyan-500/30 text-sm text-zinc-200 font-medium space-y-1">
              <p className="text-cyan-400 font-bold">That tells you everything you need to know:</p>
              <p>The dashboard exists for reporting. The whiteboard exists for operations.</p>
            </div>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-cyan-400" />
                The Dashboard Paradox
              </h2>
              <p>
                Most manufacturing software is designed around a simple assumption: <em>More visibility leads to better decisions.</em> In practice, the opposite often happens.
              </p>
              <p>
                Every additional chart competes for attention. Every extra metric increases cognitive load. Every dashboard screen becomes harder to scan under pressure.
              </p>
              <p>
                When something goes wrong on the factory floor, operators don&apos;t need more information. <strong>They need clarity.</strong>
              </p>

              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <h4 className="font-bold text-cyan-400 text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  The 3 Questions Every Manager Must Answer in Seconds
                </h4>
                <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4">
                  <li>Are we producing as planned?</li>
                  <li>Is anything broken?</li>
                  <li>Do I need to act right now?</li>
                </ul>
                <p className="text-xs text-zinc-400 pt-1 italic">
                  If the dashboard cannot answer those questions within a few seconds, it has failed its primary purpose.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-cyan-400" />
                The WireFlow Audit
              </h2>
              <p>
                While studying manufacturing operations in Aurangabad&apos;s wire industry, we noticed a pattern. Several factories were running sophisticated ERP and reporting systems with screens showing 40+ KPIs at once.
              </p>
              <p>
                On paper, the dashboards looked impressive. In reality, operators rarely used them. Instead, teams maintained handwritten whiteboards beside the terminals containing:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-semibold">
                <div className="p-3 rounded-lg bg-zinc-900 border border-cyan-500/20 text-cyan-300">Production Count</div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-cyan-500/20 text-cyan-300">Machine Status</div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-cyan-500/20 text-cyan-300">Downtime Info</div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-cyan-500/20 text-cyan-300">Quality Issues</div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-cyan-500/20 text-cyan-300">Shift Targets</div>
              </div>

              <p className="text-sm text-zinc-400">
                Five numbers. No charts. No filters. No drill-down menus. Just the information required to make decisions.
              </p>
              <p>
                That was the moment we realized the problem wasn&apos;t missing data. <strong>It was too much data.</strong>
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-cyan-400" />
                The Signal-to-Noise Principle
              </h2>
              <p>
                WireFlow was built around a simple constraint:
              </p>

              <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/40 text-center font-bold text-lg text-cyan-300">
                &ldquo;Everything visible on the primary screen must be actionable within five minutes.&rdquo;
              </div>

              <p>
                If a metric cannot trigger an action, it does not belong on the main dashboard. Historical trends and detailed analytics still exist, but they don&apos;t compete for attention during live operations.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-cyan-400" />
                Designing for Plant Managers, Not Analysts
              </h2>
              <p>
                Many industrial dashboards are designed as if every user is a data analyst. Most users are not. They&apos;re supervisors managing multiple machines, operators responding to alarms, and production managers balancing targets.
              </p>
              <p>
                A good manufacturing dashboard should be understandable from several feet away. A great manufacturing dashboard should communicate system status before the user consciously starts reading.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                What Changed
              </h2>
              <p>
                After simplifying the interface and reducing information overload, something interesting happened. Operators stopped relying on external tracking systems. The whiteboards gradually disappeared.
              </p>
              <p className="text-cyan-300 font-semibold">
                The dashboard became the first place people looked when they needed answers.
              </p>
              <p>
                And that&apos;s the metric we care about most: <strong>Trust</strong>. Because when operators abandon their workarounds and rely on the software itself, the software has finally become useful.
              </p>
            </div>

            {/* Section 6 - Conclusion */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                The Real Job of a Dashboard
              </h2>
              <p>
                Most dashboards are designed to display data. We believe dashboards should support decisions. Those are very different goals.
              </p>
              <p className="text-zinc-200">
                That&apos;s why every screen in WireFlow starts with the same question: <strong>What action should happen next?</strong>
              </p>
              <p className="text-cyan-200 font-medium">
                In manufacturing, the most important information is rarely the most detailed. It&apos;s the information that helps someone act before a problem becomes a loss.
              </p>
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
