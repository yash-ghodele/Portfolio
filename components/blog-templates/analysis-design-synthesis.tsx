"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Sparkles, Search, Compass, Cpu, AlertTriangle, Code2, HeartHandshake } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AnalysisDesignSynthesis() {
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
              <span className="px-2.5 py-0.5 rounded-full text-xs border font-medium text-amber-400 border-amber-500/30 bg-amber-500/5">
                Insights
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                May 26, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-400">
              Analysis, Design, and Synthesis — Or: The Structured Side of &quot;Fuck Around and Find Out&quot;
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-amber-500/40 pl-4 italic">
              Let&apos;s be honest about how most great things actually get built. Not with a 47-slide roadmap and a perfectly color-coded Notion board—more like someone stayed up until 2 AM, tried something stupid, accidentally discovered something brilliant, and reverse-engineered why it worked.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-xs font-black text-amber-400">
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
            className="mb-14 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl relative aspect-[16/9]"
          >
            <Image
              src="/images/journal/analysis-design-synthesis.jpg"
              alt="Analysis, Design, and Synthesis 3D Visualization"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              Let&apos;s be honest about how most great things actually get built.
            </p>

            <p>
              Not with a 47-slide roadmap and a perfectly color-coded Notion board. More like—someone stayed up until 2 AM, tried something stupid, accidentally discovered something brilliant, panicked, reverse-engineered why it worked, and then told everyone they &ldquo;had a vision.&rdquo;
            </p>

            <p>
              That&apos;s the dirty little secret behind almost every startup, every viral content creator, and every app you&apos;ve used in the last ten years.
            </p>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-amber-500/30 text-sm font-medium text-amber-300 space-y-1">
              <p className="font-bold text-white">But here&apos;s the thing nobody tells you:</p>
              <p>There <em>is</em> a structure to all that beautiful chaos. It&apos;s called <strong>Analysis, Design, and Synthesis.</strong></p>
            </div>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Every Big Thing Starts With Curiosity (And Usually Confusion)
              </h2>
              <p>
                Think about the apps sitting on your phone right now. Instagram. LinkedIn. YouTube. WhatsApp.
              </p>
              <p>
                None of them became what they are because someone had a perfect plan from day one. Instagram started as a location check-in app (Burbn). YouTube had no clue people would upload everything from cooking videos to university lectures. LinkedIn was basically a digital résumé dump before storytelling took over.
              </p>
              <p>
                What actually happened at every one of these companies was a continuous cycle: <strong>Experiment &rarr; Observe &rarr; Break something &rarr; Fix it &rarr; Try a weird idea &rarr; Repeat.</strong>
              </p>
            </div>

            {/* Section 2 - Analysis */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-400" />
                Analysis — Observation Before Opinion
              </h2>
              <p>
                Analysis is simply the act of understanding what&apos;s <em>actually</em> happening. Not what you assume is happening. Not what your gut says. Not &ldquo;bro trust me.&rdquo; Actually looking.
              </p>

              {/* Analysis vs Vibes Box */}
              <div className="my-6 p-5 rounded-2xl bg-zinc-900/80 border border-amber-500/20 text-xs space-y-3">
                <div className="font-bold text-amber-400 text-sm uppercase tracking-wider">
                  Analysis vs. Hot Takes
                </div>
                <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-zinc-300">
                  <strong className="text-red-400 block mb-0.5">Person A (Hot Take):</strong>
                  &ldquo;Students are lazy and don&apos;t care about attendance.&rdquo;
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-zinc-300">
                  <strong className="text-emerald-400 block mb-0.5">Person B (Analysis):</strong>
                  &ldquo;Notices lectures are at 8 AM, half the class commutes 15km, slides aren&apos;t interactive, and recorded video recaps triple engagement.&rdquo;
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                The &ldquo;Analysis After Chaos&rdquo; Speedrun
              </h3>
              <p>
                Here&apos;s the funny part: analysis doesn&apos;t always come <em>before</em> action. Sometimes it comes at 3 AM the night before a deadline after three Red Bulls when a build breaks that was definitely &ldquo;not your fault.&rdquo;
              </p>
              <p className="text-amber-300 font-medium">
                Some people learn through observation. Others learn through consequences. Both are valid. One is just significantly louder.
              </p>
            </div>

            {/* Section 3 - Design */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-400" />
                Design — Turning Chaos Into Direction
              </h2>
              <p>
                Once you understand what&apos;s happening, the next question is: <em>&ldquo;Okay but... now what?&rdquo;</em> That&apos;s design.
              </p>

              <blockquote className="my-6 pl-5 border-l-2 border-amber-500/50 text-sm md:text-base italic text-zinc-300 bg-zinc-900/40 py-4 pr-4 rounded-r-xl">
                <strong className="text-white not-italic block mb-1">College Hackathon (T-minus 3 days):</strong>
                Someone starts making posters. Someone else creates a WhatsApp group. One person reaches out to sponsors. Another talks about reels. And <em>that one guy</em> suggests laser shows and a live DJ for a &sharp;500 budget.
              </blockquote>

              <p>
                That magnificent disaster of a planning process? That&apos;s design. Not fancy Figma wireframes—just structured human beings trying to convert confusion into a direction.
              </p>
            </div>

            {/* Section 4 - Synthesis */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-400" />
                Synthesis — Where Plans Meet the Real World
              </h2>
              <p>
                Synthesis is execution. The moment theory becomes reality. It is also the moment reality smacks theory across the face.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-amber-400">Fest Day Synthesis</div>
                  <div className="text-zinc-400">Mic cuts out, forms crash, 3 volunteers vanish, extension boards missing—yet somehow everything succeeds.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-amber-400">App Launch Synthesis</div>
                  <div className="text-zinc-400">Users complain about unexpected edge cases, production APIs hiccup, yet true learning begins.</div>
                </div>
              </div>

              <p>
                Synthesis is where design goes to grow up. You can&apos;t simulate how users actually behave until the system is live.
              </p>
            </div>

            {/* Section 5 - Failure Modes */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                The Two Failure Modes &amp; The Sweet Spot
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs">
                <div className="p-5 rounded-xl border border-red-500/30 bg-red-950/20 space-y-1">
                  <strong className="text-red-400 block text-sm font-bold uppercase tracking-wider">Failure Mode 1: Overthinking</strong>
                  <p className="text-zinc-300">Too much analysis, not enough action. Planning everything, shipping nothing.</p>
                </div>
                <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-1">
                  <strong className="text-amber-400 block text-sm font-bold uppercase tracking-wider">Failure Mode 2: Directionless Sprint</strong>
                  <p className="text-zinc-300">Too much action, not enough direction. Running fast in seventeen wrong directions.</p>
                </div>
              </div>

              <p className="text-amber-300 font-semibold">
                The sweet spot? Structured experimentation — intelligent &ldquo;fuck around and find out.&rdquo;
              </p>
            </div>

            {/* Section 6 - Formula */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-amber-400" />
                The Real Formula
              </h2>

              <div className="p-6 rounded-2xl bg-zinc-900/90 border border-amber-500/30 font-mono text-sm text-amber-300 leading-relaxed space-y-1 shadow-inner">
                <div>Analyze a little.</div>
                <div>Try something.</div>
                <div>Fail a bit.</div>
                <div>Redesign.</div>
                <div>Improve.</div>
                <div className="text-white font-bold">Repeat.</div>
              </div>
            </div>

            {/* Section 7 - Conclusion */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-amber-400" />
                Final Thought
              </h2>
              <p>
                Analysis, Design, and Synthesis aren&apos;t rigid textbook concepts reserved for exams. They&apos;re the underlying logic of how anything real gets built.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-zinc-900 to-zinc-950 border border-amber-500/40 text-center font-bold text-lg text-white space-y-2">
                <p>&ldquo;A little analysis. A little design. A little synthesis.&rdquo;</p>
                <p className="text-amber-400 text-xl font-black">&ldquo;And always, always — a willingness to fuck around and find out.&rdquo;</p>
              </div>
            </div>

          </article>

          {/* Footer Back link */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-3 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500/30 group-hover:bg-amber-500/5 transition-all duration-300">
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
