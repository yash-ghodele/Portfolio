"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
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

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              Analysis, Design, and Synthesis — Or: The Structured Side of &quot;Fuck Around and Find Out&quot;
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
              Let&apos;s be honest about how most great things actually get built. Not with a 47-slide roadmap and a perfectly color-coded Notion board. More like — someone stayed up until 2 AM, tried something stupid, accidentally discovered something brilliant, panicked, reverse-engineered why it worked, and then told everyone they &apos;had a vision.&apos;
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
              src="/images/journal/analysis-design-synthesis.jpg"
              alt="Analysis, Design, and Synthesis"
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
              Let&apos;s be honest about how most great things actually get built.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Not with a 47-slide roadmap and a perfectly color-coded Notion board.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              More like — someone stayed up until 2 AM, tried something stupid, accidentally discovered something brilliant, panicked, reverse-engineered why it worked, and then told everyone they &quot;had a vision.&quot;
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              That&apos;s the dirty little secret behind almost every startup, every viral content creator, and every app you&apos;ve used in the last ten years.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              But here&apos;s the thing nobody tells you:
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light font-medium text-white">
              There <em>is</em> a structure to all that beautiful chaos.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              It&apos;s called <strong className="text-white">Analysis, Design, and Synthesis.</strong> And it doesn&apos;t live in your textbook&apos;s chapter summaries. It lives in the messy, hilarious, slightly catastrophic way real people actually build things.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Let&apos;s get into it.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              Every Big Thing Starts With Curiosity (And Usually Confusion)
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Think about the apps sitting on your phone right now. Instagram. LinkedIn. YouTube. WhatsApp.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              None of them became what they are because someone had a perfect plan from day one. Instagram started as a location check-in app. YouTube had no clue people would upload everything from cooking videos to university lectures. LinkedIn was basically a digital résumé dump before someone figured out that &quot;storytelling&quot; was cringe but also impossible to stop scrolling through.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              What actually happened at every one of these companies was a cycle. Experiment. Observe. Break something. Fix it. Try a weird idea. Kill it. Try another one.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Sound familiar?
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              That cycle has three names: <strong className="text-white">Analysis, Design, and Synthesis.</strong> And a bonus, unofficial fourth step: <strong className="text-primary">&quot;Let&apos;s just see what happens.&quot;</strong>
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              Analysis — Observation Before Opinion
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Analysis is simply the act of understanding what&apos;s <em>actually</em> happening. Not what you assume is happening. Not what your gut says. Not &quot;bro trust me.&quot; Actually looking.
            </p>
            
            <div className="my-8 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-3">
              <p className="text-xs font-mono text-amber-400/80 uppercase tracking-widest">
                {"// Analysis vs Vibes"}
              </p>
              <p className="text-sm text-white/90">
                <strong className="text-amber-300">Scene:</strong> Your class attendance drops below 30%.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-red-400">Person A (Hot Take):</strong> &quot;Students are lazy.&quot;
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-emerald-400">Person B (Analysis):</strong> Notices lectures are at 8 AM. Realizes half the class commutes. Figures out nobody learns from slides anymore. Sees that recorded videos would triple engagement.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Person B is doing analysis. Person A is doing a hot take.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Same energy shows up on LinkedIn. Ever notice how the platform quietly shifted from stuffy &quot;I&apos;m pleased to announce&quot; posts to raw storytelling and personal narratives? That shift wasn&apos;t an accident. Creators started <em>observing</em> — what stops people from scrolling, why relatable content outperforms polished corporate-speak, what makes someone hit follow.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The best creators don&apos;t just create. They watch first.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              The &quot;Analysis After Chaos&quot; Speedrun
            </h3>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Here&apos;s the funny part though: analysis doesn&apos;t always come <em>before</em> the action. Sometimes it comes <em>after</em> the disaster.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Picture a student starting a project the night before the deadline. Panic. Bugs everywhere. Something breaks that was definitely &quot;not their fault.&quot; And then, at 3 AM with three Red Bulls in their system, they have a genuine revelation about why planning matters, why Git exists, and why &quot;I&apos;ll do it tomorrow&quot; is just a polite lie you tell yourself.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              That is also analysis. Just... acquired the expensive way.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Some people learn through observation. Others learn through consequences. Both are valid. One is just louder and significantly more humiliating.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              Design — Turning the Chaos Into a Direction
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Once you understand what&apos;s happening, the next question is: <em>&quot;Okay but... now what?&quot;</em>
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              That&apos;s design. Design is what happens when you take a pile of messy observations and half-baked ideas and try to make them point somewhere useful.
            </p>

            <blockquote className="my-6 pl-5 border-l-2 border-primary/50 text-base md:text-lg italic text-muted-foreground bg-white/[0.01] py-4 pr-4 rounded-r-xl leading-relaxed">
              <strong className="text-white not-italic block mb-1">College hackathon, day minus three:</strong>
              Someone starts making posters. Someone else creates a WhatsApp group. One person reaches out to sponsors. Another person starts talking about reels. And then there&apos;s <em>that one guy</em> who suggests drones, laser shows, and a live DJ — for a ₹500 budget.
            </blockquote>

            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              That whole magnificent disaster of a planning process? That&apos;s design. Not fancy UX wireframes. Not Figma prototypes. Just structured human beings trying to convert confusion into a direction.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Same thing for creators building an online presence. Choosing a content style, figuring out posting frequency, picking a visual identity, testing hook formats — all of it is design. Even memes are designed. Nothing on the internet is as spontaneous as it looks.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              Synthesis — Where Plans Meet the Real World (And Get Humbled)
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Synthesis is execution. The moment theory becomes reality. It is also the moment reality smacks theory across the face.
            </p>

            <div className="my-8 p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 space-y-4">
              <div>
                <strong className="text-purple-300 block mb-1">Fest day. Final preparations:</strong>
                <p className="text-sm text-muted-foreground">
                  The mic cuts out. Registration forms crash. Three volunteers have mysteriously vanished. Someone forgot extension boards. The design team is still exporting &quot;final_final_ACTUAL_final_v9.png.&quot; And somehow — <em>somehow</em> — everything still comes together. That messy, exhausting, slightly miraculous thing that just happened? That&apos;s synthesis.
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <strong className="text-purple-300 block mb-1">App launch day:</strong>
                <p className="text-sm text-muted-foreground">
                  Users complain about things you never imagined. A feature breaks in production but worked perfectly in testing. One tiny bug cascades into everything. A review calls your life&apos;s work &quot;confusing and slow.&quot;
                </p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              But this is also where real learning happens. Because execution reveals things that planning never could. You can&apos;t simulate how users actually behave. You can&apos;t predict every edge case. You can&apos;t fully understand a system until it&apos;s running.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Synthesis is where design goes to grow up.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              So Where Does &quot;Fuck Around and Find Out&quot; Fit?
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Right in the middle of everything. Always.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Because real growth is rarely a clean, linear path from idea to success. It looks more like:
            </p>

            <ul className="list-none my-6 pl-4 text-base text-muted-foreground leading-[1.85] font-light space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-black select-none mt-[3px]">↳</span>
                <span>Analyze first → then execute</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-black select-none mt-[3px]">↳</span>
                <span>Execute first → fail dramatically → then analyze afterward</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-black select-none mt-[3px]">↳</span>
                <span>Skip everything → get lucky → reverse-engineer why → tell everyone it was intentional</span>
              </li>
            </ul>

            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The best founders, creators, students, and builders usually live somewhere between two failure modes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
                <strong className="text-red-400 block mb-1 text-sm uppercase tracking-wider font-mono">Failure Mode 1</strong>
                <p className="text-sm text-muted-foreground">Too much analysis, not enough action. (Overthinking. Planning everything. Doing nothing.)</p>
              </div>
              <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
                <strong className="text-amber-400 block mb-1 text-sm uppercase tracking-wider font-mono">Failure Mode 2</strong>
                <p className="text-sm text-muted-foreground">Too much action, not enough direction. (Running fast in seventeen wrong directions simultaneously.)</p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The sweet spot? <strong className="text-white">Structured experimentation.</strong> Basically, intelligent &quot;fuck around and find out.&quot;
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Enough analysis to avoid stupid mistakes. Enough experimentation to avoid permanent paralysis.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              The Real Formula (No One Puts It on a Slide)
            </h2>

            <pre className="my-8 p-6 rounded-2xl bg-zinc-900/80 border border-white/10 font-mono text-sm text-primary overflow-x-auto leading-relaxed shadow-inner">
              <code>{`Analyze a little.
Try something.
Fail a bit.
Redesign.
Improve.
Repeat.`}</code>
            </pre>

            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              That&apos;s how startups evolve. How creators grow. How students somehow survive engineering. How apps become the kind of thing people can&apos;t put down. How people slowly, stubbornly figure life out.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Not through perfection. Through iteration.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4 pt-6 border-t border-white/5">
              Final Thought
            </h2>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              Analysis, Design, and Synthesis aren&apos;t rigid textbook concepts reserved for exams and forgotten immediately after. They&apos;re the underlying logic of how anything real gets built — by students, by founders, by creators, by anyone who&apos;s ever tried to make something from nothing.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The cycle isn&apos;t always graceful. Sometimes it&apos;s three bug fixes at midnight and a presentation held together by pure confidence and a prayer. Sometimes it&apos;s a feature that breaks everything and teaches you more in one hour than six months of planning ever could.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              But that&apos;s kind of the point.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              The best things don&apos;t come from perfect plans executed flawlessly.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light">
              They come from people who tried something, learned something, improved something — and had just enough structure to keep going when the chaos got loud.
            </p>
            <p className="text-base text-muted-foreground leading-[1.85] font-light text-white font-medium">
              A little analysis. A little design. A little synthesis.
            </p>
            <p className="text-lg text-primary font-bold mt-4">
              And always, always — a willingness to fuck around and find out.
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
