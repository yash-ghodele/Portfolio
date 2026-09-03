"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Rocket, Layers, ShieldCheck, CheckCircle2, Workflow, Cpu, FastForward } from "lucide-react"
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

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-purple-400">
              Building Student Projects at Scale: How We Deliver in 48 Hours
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-purple-500/40 pl-4 italic">
              The systems, templates, and internal workflows that allow Ugam Campus to consistently deliver professional-grade engineering projects in days instead of weeks.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-xs font-black text-purple-400">
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
            className="mb-14 rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl relative aspect-[16/9]"
          >
            <Image
              src="/images/journal/ugam-campus.jpg"
              alt="Building Student Projects at Scale — Innovation Lab"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              Every semester begins with the same cycle.
            </p>

            <p>
              Students receive a final-year project requirement. Enthusiasm lasts a few days. Then reality arrives: the problem statement is unclear, the technology stack is unfamiliar, components need to be selected, documentation has to be written, presentations are due, and viva examinations are approaching.
            </p>

            <p className="border-l-2 border-purple-400 pl-4 py-1 font-medium text-white">
              Most students are not struggling because they lack intelligence. They&apos;re struggling because engineering projects require a process, and nobody teaches the process.
            </p>

            <p>
              That&apos;s the problem we set out to solve.
            </p>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Workflow className="w-5 h-5 text-purple-400" />
                From Project Building to System Building
              </h2>
              <p>
                When we delivered our first few projects, everything was custom. Every requirement was analyzed from scratch. Every architecture decision was debated. Every documentation template was rebuilt.
              </p>
              <p>
                The projects worked. <strong>The process didn&apos;t.</strong>
              </p>
              <p>
                As demand grew, we realized we weren&apos;t building engineering projects anymore—we were building a project delivery system.
              </p>              <p>
                Today, every project moves through a standardized internal workflow that dramatically reduces delivery time while maintaining quality and customization. We call it the <strong>Alchemist Protocol</strong>.
              </p>
            </div>

            {/* Section 2 - Alchemist Protocol */}
            <div className="pt-6 border-t border-zinc-800 space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                The Alchemist Protocol
              </h2>
              <p>
                Every project follows five defined phases:
              </p>

              <div className="space-y-4">
                {/* Phase 1 */}
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-purple-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-300">1</span>
                    Initialization
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Understands the actual problem. Identifies core objectives, expected outputs, hardware/software requirements, academic constraints, and evaluation criteria. Eliminates ambiguity before development begins.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-purple-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-300">2</span>
                    Architecture
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Designs the system blueprint: component selection, tech stack selection, database design, communication architecture, UI planning, and documentation structure.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-purple-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-300">3</span>
                    Execution
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Hardware and software integration: IoT integration, embedded programming, web applications, mobile interfaces, cloud deployment, and live dashboards.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-purple-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-300">4</span>
                    Validation
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Functional testing, sensor calibration, error handling validation, performance verification, and live demonstration prep. Completes only when consistent under real usage.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-purple-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-300">5</span>
                    Viva Preparation
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Documentation, report preparation, PPT creation, architecture explanation, Q&amp;A prep, and demonstration strategy. Empowers students to defend their project with complete confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 - Template Advantage */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                The Template Advantage
              </h2>
              <p>
                People often assume speed comes from shortcuts. In reality, speed comes from <strong>reuse</strong>.
              </p>
              <p>
                Across dozens of projects, we&apos;ve discovered that roughly <strong>70% of engineering work is structurally similar</strong>.
              </p>

              <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-sm space-y-2">
                <h4 className="font-bold text-purple-300">The 70/30 Rule</h4>
                <p className="text-zinc-200 text-xs leading-relaxed">
                  Instead of rebuilding ESP32 MQTT controllers or Next.js database foundations every time, we maintain proven templates that accelerate development. That allows us to focus our energy on the remaining 30%—the unique logic that makes each project different.
                </p>
              </div>
            </div>

            {/* Section 4 - Why This Works */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <FastForward className="w-5 h-5 text-purple-400" />
                Why This Works
              </h2>
              <p>
                A repeatable system creates three distinct advantages:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-purple-400 text-sm">Faster Delivery</div>
                  <div className="text-zinc-300">Projects take days instead of weeks because decisions are pre-validated.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-purple-400 text-sm">Better Reliability</div>
                  <div className="text-zinc-300">Proven architectures eliminate implementation errors &amp; random bugs.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-purple-400 text-sm">Better Learning</div>
                  <div className="text-zinc-300">Students build alongside us so they can confidently defend their viva.</div>
                </div>
              </div>
            </div>

            {/* Section 5 - Conclusion */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                Engineering the Process
              </h2>
              <p>
                Most people think project success comes from writing better code. We&apos;ve learned that success comes from designing better systems.
              </p>
              <p className="text-zinc-200 font-semibold">
                Ugam Campus exists because engineering projects shouldn&apos;t begin with panic. They should begin with a proven roadmap.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-950 border border-purple-500/40 text-center font-bold text-lg text-white">
                &ldquo;When the process is engineered correctly, delivering professional-grade projects in 48 hours becomes not an exception—but the standard.&rdquo;
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
