"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, MessageSquare, Paintbrush, FileText, UserX, RotateCcw, Repeat, ShieldCheck } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function EventFailurePatterns() {
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
                Jul 25, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                6 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-purple-400">
              Every Event Fails the Same Way. We Just Keep Giving It New Excuses.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-purple-500/40 pl-4 italic">
              If you&apos;ve ever been on an event team — college fest, hackathon, community meetup — you already know the ending before it happens. Here is the 5-pattern autopsy.
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
              src="/images/journal/event-failure-patterns.png"
              alt="Backstage Event Operations & Control Booth"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              If you&apos;ve ever been on an event team — college fest, hackathon, community meetup, doesn&apos;t matter which — you already know the ending before it happens.
            </p>

            <p>
              Something breaks at 11 PM the night before. Someone says &ldquo;how did we not see this coming.&rdquo; Everyone agrees to &ldquo;plan better next time.&rdquo; Next time arrives. Same ending, new cast, same amount of shock as if this had never happened before in the history of events.
            </p>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-purple-500/30 text-sm font-medium text-purple-300 space-y-1">
              <p className="font-bold text-white">Here&apos;s the part nobody wants to admit:</p>
              <p>It&apos;s not five different disasters. It&apos;s <strong>one disaster, wearing five different costumes</strong>, doing a very convincing job of looking new each time.</p>
            </div>

            {/* Pattern 1 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-amber-500/20 bg-amber-950/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono font-bold text-base shadow-sm">
                  01
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-400 shrink-0" />
                  The Group Chat That Thought It Was a Plan
                </h2>
              </div>
              <p>
                Every event starts the same way. Five people, one shared burst of energy, ideas flying faster than anyone can catch them. Genuinely a great vibe. Ten out of ten opening scene.
              </p>
              <p>
                The problem is it never leaves that scene. It just sort of… stays in idea-mode forever, suspended somewhere between message 340 and 341 of a WhatsApp thread three people have already muted. A venue gets picked because someone felt strongly about it at 1 AM, not because anyone asked &ldquo;and if the generator doesn&apos;t show up?&rdquo;
              </p>
              <blockquote className="pl-4 border-l-2 border-amber-400 text-amber-300 text-sm md:text-base italic py-1">
                Enthusiasm was never the issue. Enthusiasm with nowhere to land, on the other hand, is basically a WhatsApp group with extra steps.
              </blockquote>
            </div>

            {/* Pattern 2 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-purple-500/20 bg-purple-950/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-mono font-bold text-base shadow-sm">
                  02
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Paintbrush className="w-5 h-5 text-purple-400 shrink-0" />
                  The Poster Is a Masterpiece. The Backstage Is Improv Theatre.
                </h2>
              </div>
              <p>
                This one&apos;s the sneaky one, because it doesn&apos;t announce itself as a failure. It shows up dressed as competence.
              </p>
              <p>
                The reel drops three days early. Someone spent six hours perfecting a gradient nobody will remember by lunch. The stage has a whole mood board. From the outside, this team has it <em>together</em>.
              </p>
              <p>
                Meanwhile, exactly nobody has checked whether there&apos;s a backup mic, extension boards are assumed to exist, and the budget quietly funneled itself into things that photograph well—leaving sound, seating, and crowd flow to whoever happens to be standing nearby looking mildly concerned.
              </p>
              <blockquote className="pl-4 border-l-2 border-purple-400 text-purple-300 text-sm md:text-base italic py-1">
                The visible ten percent got a design process. The invisible ninety percent got vibes and a prayer.
              </blockquote>
            </div>

            {/* Pattern 3 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-blue-500/20 bg-blue-950/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono font-bold text-base shadow-sm">
                  03
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400 shrink-0" />
                  Four Docs, Two Groups, One Verbal Instruction, Zero Consensus
                </h2>
              </div>
              <p>
                This is the version that&apos;s almost impressive in how organized it looks while functioning exactly like chaos.
              </p>
              <p>
                There&apos;s a doc. There&apos;s a group. Meetings happened, minutes were taken, someone even made a Gantt chart nobody has opened since. Good so far.
              </p>
              <p>
                Except there are also three <em>other</em> docs. And two other groups. And one verbal instruction, delivered in a hallway with total confidence, to exactly one person who assumes everyone else got the memo too. People guess, confidently, and those guesses stack on top of each other until the &ldquo;plan&rdquo; is less a document and more a rumor with a deadline attached.
              </p>
            </div>

            {/* Pattern 4 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-red-500/20 bg-red-950/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-mono font-bold text-base shadow-sm">
                  04
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <UserX className="w-5 h-5 text-red-400 shrink-0" />
                  &ldquo;Just Handle It&rdquo; Is Not a Training Program
                </h2>
              </div>
              <p>
                Volunteers are usually the largest group at any event and the one handed the least context. They get a task, a location, and a &ldquo;just handle it,&rdquo; which sounds like trust but is actually the polite absence of an answer to what happens when things go wrong.
              </p>
              <p>
                So when a form won&apos;t load or a schedule slips 15 minutes, it breaks in parallel across stations as fifty volunteers independently invent their own solutions on the spot.
              </p>
              <blockquote className="pl-4 border-l-2 border-red-400 text-red-300 text-sm md:text-base italic py-1">
                A system built for a room of six, deployed on a crowd of sixty, and never once asked whether it would survive the jump.
              </blockquote>
            </div>

            {/* Pattern 5 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-base shadow-sm">
                  05
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-emerald-400 shrink-0" />
                  Everyone Goes Home. The Learning Doesn&apos;t Even Get Invited.
                </h2>
              </div>
              <p>
                The event ends. Everyone&apos;s relieved it&apos;s over. The instinct is to close the laptop and never speak of the extension board incident again.
              </p>
              <p>
                So nobody writes it down. All of it leaves the building in people&apos;s heads and evaporates. Which means the next event restarts from zero. Same missing direction, same competing docs, same volunteers left to guess.
              </p>
              <blockquote className="pl-4 border-l-2 border-emerald-400 text-emerald-300 text-sm md:text-base italic py-1">
                This isn&apos;t a sixth failure. It&apos;s the reason the first five get a sequel every single time.
              </blockquote>
            </div>

            {/* The Loop Section */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Repeat className="w-5 h-5 text-purple-400" />
                The Loop, Not the List
              </h2>
              <p>
                Line these five up and they stop looking like five unrelated disasters. They start looking like the same gap, showing up at five different points on the same timeline.
              </p>

              <div className="my-6 p-6 rounded-2xl bg-zinc-900/90 border border-purple-500/30 font-mono text-sm text-purple-300 leading-relaxed space-y-2 shadow-inner">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{"// The Event Operations Loop"}</div>
                <div className="text-white font-bold">Chaos &rarr; Direction</div>
                <div className="text-purple-300 pl-4">&rarr; Direction &rarr; Resilient Execution</div>
                <div className="text-emerald-400 pl-8">&rarr; Execution Mess &rarr; Next Time&apos;s Head Start</div>
              </div>

              <p className="text-purple-200 font-semibold">
                Build that loop, and these five stop being fate. They turn into a checklist.
              </p>
            </div>

            {/* Section Conclusion */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                The Takeaway
              </h2>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-950 border border-purple-500/40 text-center font-bold text-lg text-white">
                &ldquo;Skip the loop, and save the date — you&apos;ll be back in this same fluorescent-lit room next year, acting shocked all over again.&rdquo;
              </div>
            </div>

          </article>

          {/* Footer Back link */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-3 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-purple-500/5 transition-all duration-300">
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
