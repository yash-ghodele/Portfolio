"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Cpu, Layers, Bug, Sparkles, Network, Lightbulb, ShieldCheck } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function HardwareAndSoftwareSameProblem() {
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

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-400">
              The Day I Realized Hardware and Software Are the Same Problem
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-emerald-500/40 pl-4 italic">
              What electrical engineering taught me about distributed systems, frontend development, and why abstraction layers matter less than most people think.
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
              src="/images/journal/hardware-and-software-are-the-same-problem.jpg"
              alt="The Day I Realized Hardware and Software Are the Same Problem"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              When I started my B.Tech in Electronics and Communication Engineering, I spent most of my time buried in circuit theory: BJTs, operational amplifiers, communication systems, transmission lines.
            </p>

            <p>
              At the time, it all felt disconnected from the products I actually wanted to build. I could calculate gain, analyze filters, and solve network equations on paper, but I had no idea how any of it connected to the software powering the modern world.
            </p>

            <p>
              Meanwhile, software developers seemed to be building things that people actually used—web applications, mobile apps, dashboards, platforms. The two worlds appeared completely separate.
            </p>

            <p className="text-emerald-300 font-semibold border-l-2 border-emerald-400 pl-4 py-1">
              I eventually learned they weren&apos;t.
            </p>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                The Industry&apos;s Artificial Divide
              </h2>
              <p>
                Engineering education often creates a false distinction. ECE students learn how electrons move through circuits. Computer science students learn how data moves through software.
              </p>
              <p>
                Each group becomes highly specialized. And both groups miss half the picture.
              </p>
              <p>
                The products shaping the world today rarely live in a single domain:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-emerald-400">Industrial Monitoring</div>
                  <div className="text-zinc-400">Combines sensors, embedded microcontrollers, cloud infrastructure, databases, &amp; UIs.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-emerald-400">Medical Devices</div>
                  <div className="text-zinc-400">Combines electronics, real-time firmware, networking, &amp; clinical software.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-emerald-400">Autonomous Systems</div>
                  <div className="text-zinc-400">Combines hardware, control theory, machine learning, &amp; edge computing.</div>
                </div>
              </div>

              <p className="text-sm text-zinc-400 italic">
                The boundaries only exist in classrooms. The products themselves don&apos;t care.
              </p>
            </div>

            {/* Section 2 - Mental Model */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                The Mental Model That Changed Everything
              </h2>
              <p>
                The breakthrough happened when I stopped viewing hardware and software as different disciplines. Instead, I started viewing them as <strong>the same engineering problem expressed at different abstraction levels</strong>.
              </p>

              {/* Parallels Table */}
              <div className="my-6 p-5 rounded-2xl bg-zinc-900/80 border border-emerald-500/20 text-xs space-y-3">
                <div className="font-bold text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Electronics vs. Software Parallels
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-zinc-800 pt-3">
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Electronics:</span>
                    <span className="text-white">Noise corrupts signals</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Software:</span>
                    <span className="text-emerald-300">Unreliable networks corrupt data flow</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-zinc-800 pt-3">
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Electronics:</span>
                    <span className="text-white">Power budgets constrain system design</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Software:</span>
                    <span className="text-emerald-300">Compute &amp; memory budgets constrain architecture</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-zinc-800 pt-3">
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Electronics:</span>
                    <span className="text-white">Signal propagation introduces delays</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Software:</span>
                    <span className="text-emerald-300">Network latency introduces delays</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-zinc-800 pt-3">
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Electronics:</span>
                    <span className="text-white">Physical components fail</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-semibold">In Software:</span>
                    <span className="text-emerald-300">Distributed microservices fail</span>
                  </div>
                </div>
              </div>

              <p>
                The terminology changes. The underlying thinking doesn&apos;t. Both disciplines are ultimately about <strong>moving information reliably through imperfect systems</strong>.
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Bug className="w-5 h-5 text-emerald-400" />
                Debugging Taught Me More Than Theory
              </h2>
              <p>
                One of the most surprising discoveries was how transferable debugging skills became. Tracking voltage drops across a circuit board and tracing state transitions through a React application require identical reasoning.
              </p>
              <p>
                You form hypotheses. You isolate variables. You measure behavior. You identify where reality diverges from expectation.
              </p>
              <p className="text-emerald-300 font-semibold">
                Good engineers are rarely defined by the technologies they know. They&apos;re defined by how they investigate problems.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Why This Combination Is Rare
              </h2>
              <p>
                Most engineers spend their careers operating within a single layer. Some become experts in embedded systems. Others specialize in cloud infrastructure. Others focus entirely on frontend development.
              </p>
              <p>
                There&apos;s nothing wrong with specialization. But interesting opportunities often appear at the boundaries:
              </p>

              <ul className="text-xs text-zinc-300 space-y-2 list-disc pl-5">
                <li>The engineer who understands both hardware sensors and high-framerate web interfaces.</li>
                <li>The developer who can troubleshoot an MQTT packet communication failure and a React rendering issue on the same afternoon.</li>
                <li>The builder who understands both the physical world and the digital one.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-400" />
                Building Across the Entire Pipeline
              </h2>
              <p>
                This realization eventually shaped how we build products. We don&apos;t think in terms of hardware projects or software projects—we think in terms of <strong>systems</strong>.
              </p>
              <p>
                A sensor reading isn&apos;t useful until it reaches the right person. A dashboard isn&apos;t useful if the data feeding it is unreliable. An alert isn&apos;t useful if network delays make it arrive too late.
              </p>
              <p className="text-zinc-200 font-medium">
                The real challenge isn&apos;t building individual components. It&apos;s ensuring those components work together as a single system.
              </p>
            </div>

            {/* Section 6 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-400" />
                Advice for ECE Students
              </h2>
              <p>
                If you&apos;re studying electronics today, don&apos;t wait for the curriculum to connect the dots.
              </p>
              <div className="p-5 rounded-xl bg-zinc-900/60 border border-emerald-500/30 text-xs space-y-2">
                <div className="font-bold text-emerald-400 text-sm">The Hands-on Roadmap:</div>
                <p className="text-zinc-300">
                  Pick a sensor &rarr; Connect it to a microcontroller &rarr; Send data to the cloud &rarr; Create a dashboard &rarr; Deploy it.
                </p>
                <p className="text-zinc-400 italic">
                  Watch how concepts from communication systems, digital electronics, networking, databases, and frontend development suddenly start intersecting.
                </p>
              </div>
            </div>

            {/* Section 7 - Conclusion */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                The Bigger Lesson
              </h2>
              <p>
                The most valuable thing my electronics background gave me wasn&apos;t knowledge of circuits. It was <strong>systems thinking</strong>: the ability to view products as interconnected layers rather than isolated technologies.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/40 text-center font-bold text-lg text-white">
                &ldquo;Hardware and software are not opposing disciplines. They&apos;re simply different ways of solving the same problem.&rdquo;
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
