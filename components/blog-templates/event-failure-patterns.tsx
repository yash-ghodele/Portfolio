"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
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

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              Every Event Fails the Same Way. We Just Keep Giving It New Excuses.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              If you&apos;ve ever been on an event team — college fest, hackathon, community meetup, doesn&apos;t matter which — you already know the ending before it happens.
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
              src="/images/journal/event-failure-patterns.png"
              alt="Every Event Fails the Same Way"
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
              If you&apos;ve ever been on an event team — college fest, hackathon, community meetup, doesn&apos;t matter which — you already know the ending before it happens.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Something breaks at 11 PM the night before. Someone says &quot;how did we not see this coming.&quot; Everyone agrees to &quot;plan better next time.&quot; Next time arrives. Same ending, new cast, same amount of shock as if this had never happened before in the history of events.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light font-medium text-white">
              Here&apos;s the part nobody wants to admit: it&apos;s not five different disasters. It&apos;s one disaster, wearing five different costumes, doing a very convincing job of looking new each time.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Let&apos;s meet the costumes.
            </p>

            {/* Pattern 1 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
                  01
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  The Group Chat That Thought It Was a Plan
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                Every event starts the same way. Five people, one shared burst of energy, ideas flying faster than anyone can catch them. Genuinely a great vibe. Ten out of ten opening scene.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                The problem is it never leaves that scene. It just sort of… stays in idea-mode forever, suspended somewhere between message 340 and 341 of a WhatsApp thread three people have already muted. A venue gets picked because someone felt strongly about it at 1 AM, not because anyone asked &quot;and if the generator doesn&apos;t show up?&quot; The budget disagreement everyone quietly avoided in week one doesn&apos;t get resolved — it goes underground and resurfaces exactly seven days before the event, in the worst possible meeting, with the worst possible timing, like it&apos;s been saving itself for a season finale.
              </p>
              <blockquote className="pl-4 border-l-2 border-amber-500/40 text-amber-300/90 text-sm md:text-base italic py-1">
                Enthusiasm was never the issue. Enthusiasm with nowhere to land, on the other hand, is basically a WhatsApp group with extra steps.
              </blockquote>
            </div>

            {/* Pattern 2 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold text-sm">
                  02
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  The Poster Is a Masterpiece. The Backstage Is Improv Theatre.
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                This one&apos;s the sneaky one, because it doesn&apos;t announce itself as a failure. It shows up dressed as competence.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                The reel drops three days early. Someone spent six hours perfecting a gradient nobody will remember by lunch. The stage has a whole mood board. From the outside, this team has it <em>together</em>.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                Meanwhile, exactly nobody has checked whether there&apos;s a backup mic, which is the event-planning equivalent of not checking if the parachute has a second parachute. Extension boards: assumed to exist, somewhere, by someone. The budget quietly funneled itself into things that photograph well, leaving the stuff that actually decides whether the event <em>works</em> — sound, seating, crowd flow — to be handled by whoever happens to be standing nearby that morning, looking mildly concerned.
              </p>
              <blockquote className="pl-4 border-l-2 border-purple-500/40 text-purple-300/90 text-sm md:text-base italic py-1">
                The visible ten percent got a design process. The invisible ninety percent got vibes and a prayer.
              </blockquote>
            </div>

            {/* Pattern 3 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-sm">
                  03
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Four Docs, Two Groups, One Verbal Instruction, Zero Consensus
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                This is the version that&apos;s almost impressive in how organized it looks while functioning exactly like chaos.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                There&apos;s a doc. There&apos;s a group. Meetings happened, minutes were taken, someone even made a Gantt chart nobody has opened since. Good so far.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                Except there are also three <em>other</em> docs. And two other groups. And one verbal instruction, delivered in a hallway with total confidence, to exactly one person who now assumes everyone else got the memo too. Nobody&apos;s quite sure which version is current, so everyone works off whichever one they saw last, and when a gap shows up, asking feels slower than guessing — so people guess, confidently, and those guesses stack on top of each other until the &quot;plan&quot; is less a document and more a rumor with a deadline attached.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                And when it collapses, the blame lands on &quot;the team&quot; or &quot;our process,&quot; as if there was ever exactly one process to blame. There were four, quietly competing this whole time, and nobody noticed until they all showed up to the same argument on the same day.
              </p>
            </div>

            {/* Pattern 4 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-mono font-bold text-sm">
                  04
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  &quot;Just Handle It&quot; Is Not a Training Program
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                Volunteers are usually the largest group at any event and the one handed the least — not the least effort, the least <em>context</em>. They get a task, a location, and a &quot;just handle it,&quot; which sounds like trust but is actually the polite absence of an answer to the only question that matters: what do you do when this specific thing goes wrong?
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                Nobody said. So when the first small thing breaks — a form that won&apos;t load, a guest at the wrong gate, a schedule slipping by fifteen minutes — it doesn&apos;t break once. It breaks in parallel, at every station, with every volunteer independently inventing their own solution on the spot, like fifty improv actors who never rehearsed together but are all somehow in the same play. A core team of six absorbs that fine. A team of sixty doesn&apos;t — the math stops being forgiving exactly at the size where you needed it to hold.
              </p>
              <blockquote className="pl-4 border-l-2 border-red-500/40 text-red-300/90 text-sm md:text-base italic py-1">
                This isn&apos;t a planning failure. The plan existed. It&apos;s a control failure: a system built for a room of six, deployed on a crowd of sixty, and never once asked whether it would survive the jump.
              </blockquote>
            </div>

            {/* Pattern 5 */}
            <div className="my-10 p-6 md:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                  05
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Everyone Goes Home. The Learning Doesn&apos;t Even Get Invited.
                </h2>
              </div>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                The event ends. Everyone&apos;s relieved it&apos;s over, which — fair. The instinct is to close the laptop and never speak of the extension board incident again.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                So nobody writes it down. Not the near-miss, not the fifty small decisions made on the fly that quietly saved the day, not the one thing that would take five minutes to fix for next time. All of it leaves the building in people&apos;s heads and evaporates roughly on schedule with everyone&apos;s memory of the week.
              </p>
              <p className="text-base text-muted-foreground leading-[1.85] font-light">
                Which means the next event restarts from zero. Same burst of energy, same missing direction, same four competing docs, same volunteers left to guess — not because the team is bad at this, but because nobody ever gave the team a chance to get <em>better</em> at this. There&apos;s nothing to build on. Just vibes, reloaded.
              </p>
              <blockquote className="pl-4 border-l-2 border-emerald-500/40 text-emerald-300/90 text-sm md:text-base italic py-1">
                This isn&apos;t a sixth failure. It&apos;s the reason the first five get a sequel every single time.
              </blockquote>
            </div>

            {/* The Loop Section */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              The Loop, Not the List
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Line these five up and they stop looking like five unrelated disasters. They start looking like exactly what they are — the same gap, showing up at five different points on the same timeline.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Chaos was never optional. Ideas, pressure, short timelines — that combination guarantees it, every time, for every team, forever. Nobody plans that away. What actually decides the outcome is what happens to the chaos next: whether it gets pointed somewhere, whether the invisible work gets taken as seriously as the visible work, whether there&apos;s one version of the truth instead of four, whether the people executing the plan were let in on why it exists, and whether anyone bothers to remember any of it once the lights go off.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Most teams end up with exactly one of those and mistake it for the whole picture. All chaos, and they call it energy. All process, and they call it a plan, even though nobody downstream can actually follow it. The teams that stop having this exact conversation every single time are the ones who build the loop — chaos into direction, direction into something that survives the actual day, and the day&apos;s mess turned into next time&apos;s head start.
            </p>

            <div className="my-8 p-6 rounded-2xl bg-zinc-900/80 border border-primary/30 font-mono text-sm text-primary space-y-2 shadow-inner">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">{"// The Event Operations Loop"}</p>
              <p className="text-white">Chaos → Direction</p>
              <p className="text-primary">↳ Direction → Resilient Execution</p>
              <p className="text-purple-400">  ↳ Execution Mess → Next Time&apos;s Head Start</p>
            </div>

            <p className="text-base text-muted-foreground leading-[1.85] font-light text-white font-medium">
              Build that loop, and these five stop being fate. They turn into a checklist.
            </p>
            <p className="text-lg text-amber-400 font-bold mt-4">
              Skip it, and save the date — you&apos;ll be back in this same fluorescent-lit room next year, acting shocked all over again.
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
