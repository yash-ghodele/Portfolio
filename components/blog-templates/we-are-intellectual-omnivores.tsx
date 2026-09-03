"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Sparkles, BookOpen, Compass, Coffee } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function WeAreIntellectualOmnivores() {
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
                Sep 01, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-400">
              We Are All Intellectual Omnivores
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-amber-500/40 pl-4 italic">
              &ldquo;There&apos;s a particular kind of argument that only happens when nothing is at stake, and it&apos;s usually the best kind.&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-xs font-black text-amber-400">
                YG
              </div>
              <div>
                <span className="text-sm font-semibold text-white block">Yash Ghodele</span>
                <span className="text-xs text-muted-foreground">Embedded Systems &amp; Web Architect</span>
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
              src="/images/journal/intellectual-omnivore-main.jpg"
              alt="We Are Intellectual Omnivores — Main Cover Illustration"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Article Body Content */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            {/* Paragraph 1 */}
            <p>
              There&apos;s a particular kind of argument that only happens when nothing is at stake, and it&apos;s usually the best kind.
            </p>

            {/* Paragraph 2 */}
            <p>
              Vedant, Om, and I were three cups of chai into a Tuesday evening when Vedant mentioned something his senior had thrown at the team that morning: <em>is electric current a scalar quantity or a vector quantity?</em> He already knew the answer — this wasn&apos;t curiosity, this was a man setting a trap and watching two idiots walk into it. Om said scalar, with the confidence of someone who&apos;d once read a textbook. I said vector, with the confidence of someone who hadn&apos;t. Vedant didn&apos;t referee. He just watched, visibly delighted, trying to reverse-engineer how two grown adults had arrived at two different wrong answers using what appeared to be pure vibes.
            </p>

            {/* Highlight Box 1 - The Tensor Callout */}
            <div className="my-8 p-6 rounded-xl bg-amber-950/20 border border-amber-500/30 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <Coffee className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-bold text-amber-300 text-sm uppercase tracking-wider">The Uncomfortable Reality</h4>
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    It&apos;s a <strong>tensor</strong>, by the way. Neither of us was right. A tensor is the annoying answer that shows up when you&apos;ve built your whole argument on a binary and reality declines to cooperate — magnitude, direction, <em>and</em> the specific plane it acts on, all at once, refusing to pick a team.
                  </p>
                </div>
              </div>
            </div>

            {/* Paragraph 3 */}
            <p>
              Something about that felt appropriate. We&apos;d spent twenty minutes being confidently, symmetrically wrong, and the universe&apos;s response was to hand us a third option neither of us had the vocabulary for.
            </p>

            {/* Paragraph 4 */}
            <p>
              Here&apos;s what I keep coming back to, though — none of us had any business being in that conversation.
            </p>

            {/* Paragraph 5 */}
            <p>
              Vedant&apos;s a mechanical engineer. Om lives in code. I&apos;ve spent this year alone bouncing between IoT builds, event logistics, half-finished web projects, and blog posts about things I wasn&apos;t thinking about the day before. There&apos;s actually a word for people who wander this far outside their own lane for no reason — <strong>intellectual omnivores</strong>. Scavengers, not specialists. On paper, none of us should have cared whether current has a direction. It&apos;s not on anyone&apos;s syllabus this semester, it wasn&apos;t going to fix anyone&apos;s bug, and Vedant&apos;s senior definitely wasn&apos;t grading us. We just didn&apos;t want to be the one who didn&apos;t know.
            </p>

            {/* Middle Illustration Image */}
            <div className="my-10 rounded-xl overflow-hidden border border-zinc-800 shadow-xl relative aspect-[16/9]">
              <Image
                src="/images/journal/intellectual-omnivore-middle.png"
                alt="Intellectual Omnivore Thinking Process Illustration"
                fill
                className="object-cover"
              />
            </div>

            {/* Paragraph 6 */}
            <p className="text-lg font-medium text-white border-l-2 border-amber-400 pl-4 py-1">
              That&apos;s a strange thing to admit is a motivator. Not &ldquo;I need this.&rdquo; Just — <em>I don&apos;t want the gap. I want the sentence to finish in my head.</em>
            </p>

            {/* Paragraph 7 */}
            <p>
              I think that&apos;s most of what curiosity actually is, once you strip the poetry off it. Not some noble hunger for truth. Just a low-grade discomfort with unfinished thoughts. It&apos;s the same itch that makes you keep scrolling a Wikipedia page about a war you have no personal connection to, or watch a twelve-minute video on how they build tunnels, at 1 a.m., for reasons you couldn&apos;t defend to anyone. You&apos;re not going to use it. You just can&apos;t leave it half-known. It&apos;s a very budget version of Tony Stark casually announcing he mastered a new branch of physics overnight — ours just comes as a WhatsApp voice note about tensors instead of a suit that flies.
            </p>

            {/* Highlight Box 2 - Lane Staying Ends at 7 PM */}
            <div className="my-8 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>The Illusion of Specialization</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                What&apos;s a little funny is that we spend a lot of institutional energy trying to train this instinct out of people. Pick a major. Specialize. Stay in your lane, it&apos;s more efficient. And it <em>is</em> more efficient — you don&apos;t build a bridge by having the structural engineer also learn Ottoman history that week. But nobody actually manages to fully comply. The same engineer who stays rigorously in-lane at work will go home and fall into a three-hour hole about why the Roman army&apos;s supply lines actually decided most of its wars. The lane-staying is real. It just quietly ends around 7 p.m.
              </p>
            </div>

            {/* Paragraph 8 */}
            <p>
              I don&apos;t think this is some grand statement about the pursuit of knowledge. I think it&apos;s smaller and pettier than that, and that&apos;s what makes it funny. We didn&apos;t debate current because we were passionate about physics. We debated it because none of us wanted to be the one to say &ldquo;I don&apos;t know&rdquo; and mean it. And somewhere underneath that small, slightly competitive itch is the same mechanism that&apos;s apparently responsible for, over a few thousand years, all of science, most of religion, and every long Wikipedia rabbit hole anyone&apos;s ever fallen into on a Tuesday.
            </p>

            {/* Paragraph 9 */}
            <p className="text-amber-200 font-medium">
              We just call the big version &ldquo;civilization&rdquo; and the small version &ldquo;arguing about vectors over chai.&rdquo; Same itch. Different stakes.
            </p>

            {/* Conclusion */}
            <div className="pt-4 border-t border-zinc-800 text-sm text-zinc-400 italic">
              Anyway. It&apos;s a tensor. I looked it up twice to be sure, mostly so I wouldn&apos;t have to admit I still don&apos;t fully get it.
            </div>

          </article>

          {/* Footer Back Link */}
          <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Journal
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
