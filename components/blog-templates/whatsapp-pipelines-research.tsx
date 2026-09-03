"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, MessageSquare, Server, Database, ShieldAlert, Cpu, CheckCircle2, AlertTriangle, Table, HelpCircle, Layers, Check } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function WhatsappPipelinesResearch() {
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
                Technical
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                Sep 15, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                9 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-400">
              From WhatsApp to Dashboard: The Architecture Behind CampusCast
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-emerald-500/40 pl-4 italic">
              Every practical way to turn a WhatsApp message into a live department display, and the trade-offs that decided CampusCast&apos;s architecture.
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
              src="/images/journal/whatsapp-pipelines.jpg"
              alt="From WhatsApp to Dashboard: CampusCast Architecture"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Article Content */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              CampusCast started as one of those ideas that sounds finished the moment you say it out loud.
            </p>

            <p className="italic text-emerald-300 font-medium">
              &ldquo;What if anyone in a department could send a WhatsApp message and have it show up on a digital display screen in real time?&rdquo;
            </p>

            <p>
              A message goes in. A screen lights up. Done. Ship it, right?
            </p>

            <p>
              Then we actually sat down to build it, and the simple idea turned into a genuinely interesting design problem. How does the message reach our application in the first place? Who&apos;s on the other end catching it? Where does it live once it&apos;s caught? How does the display know to go fetch it? And underneath all of that — which combination of these choices can survive being deployed in an actual institution, not just a demo in front of a professor?
            </p>

            <p>
              That last question is the one that mattered. CampusCast is a final-year engineering project, but the goal was never &ldquo;does this technically work once.&rdquo; It was: <strong>is this reliable, maintainable, affordable, and realistic enough that a college department could actually run it.</strong> Those four words disqualify more clever solutions than they permit.
            </p>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                The Shape That Never Changes
              </h2>
              <p>
                Here&apos;s the thing that took embarrassingly long to notice: no matter which technology you throw at this problem, the skeleton underneath is identical.
              </p>

              {/* Architecture Diagram Box */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-emerald-500/20 font-mono text-sm space-y-3 shadow-inner">
                <div className="flex items-center gap-3 text-emerald-400 font-semibold">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>[SENDER] WhatsApp message arrives</span>
                </div>
                <div className="text-zinc-600 pl-6">&darr;</div>
                <div className="flex items-center gap-3 text-cyan-400 font-semibold">
                  <Server className="w-4 h-4 shrink-0" />
                  <span>[RECEIVER] Catches it, authenticates/parses it, writes to DB</span>
                </div>
                <div className="text-zinc-600 pl-6">&darr;</div>
                <div className="flex items-center gap-3 text-purple-400 font-semibold">
                  <Database className="w-4 h-4 shrink-0" />
                  <span>[DISPLAY] Next.js reads the database and renders to screen</span>
                </div>
              </div>

              <p>
                Whether the message comes through Meta&apos;s official Cloud API, a self-hosted automation workflow, or an unofficial WhatsApp Web session — the pattern is <strong>Sender &rarr; Receiver &rarr; Display</strong>, every time. The database layer doesn&apos;t care where the message came from. Next.js doesn&apos;t care either. It just wants data to render.
              </p>
              <p>
                What actually changes between architectures is narrower than it looks: <strong>who plays the receiver</strong>, and <strong>how the sender connects to it</strong>. That&apos;s the entire decision space.
              </p>
            </div>

            {/* Section 2 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-400" />
                Choice One: How Does WhatsApp Even Talk to You?
              </h2>
              <p>
                There are two fundamentally different ways to get messages out of WhatsApp and into your system:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-400 text-sm">Meta&apos;s Cloud API</span>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Official</span>
                  </div>
                  <p className="text-zinc-300">
                    Register a WhatsApp Business number with Meta. Inbound messages arrive as signed HTTPS POST requests to a webhook URL. Free tier (1,000 monthly conversations) + 99.9%+ SLA. Fully sanctioned.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-red-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-400 text-sm">Baileys / Web Session</span>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-red-500/10 text-red-300 border border-red-500/30">Unofficial</span>
                  </div>
                  <p className="text-zinc-300">
                    Authenticates as a WhatsApp Web QR-code client over WebSockets. Free and instant setup, but fragile: protocol changes break it, sessions log out, and Meta bans numbers that violate ToS.
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 border-l-2 border-emerald-400 pl-4 py-1">
                The honest one-line version: the official API is slower to set up but sanctioned and reliable long-term; the unofficial session is instant and free, but not something you&apos;d want to put an institution&apos;s name behind. For CampusCast, a notice board that silently dies because a session logged out is a liability with a nice UI.
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Table className="w-5 h-5 text-emerald-400" />
                Choice Two: Who Catches the Message?
              </h2>
              <p>
                Once you&apos;ve decided how messages arrive, something still has to receive that webhook, make sense of it, and write it to a database.
              </p>

              {/* Comparison Table */}
              <div className="my-6 overflow-x-auto rounded-xl border border-zinc-800">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-300">
                      <th className="p-3 font-semibold">Receiver</th>
                      <th className="p-3 font-semibold">Cost</th>
                      <th className="p-3 font-semibold">Effort</th>
                      <th className="p-3 font-semibold">Best used for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-zinc-300">
                    <tr className="bg-emerald-950/20">
                      <td className="p-3 font-bold text-emerald-400">Serverless Function (Edge/Worker)</td>
                      <td className="p-3">Free tier generous</td>
                      <td className="p-3">Medium — code &amp; deploy</td>
                      <td className="p-3 font-semibold text-white">Production builds &amp; institutional apps (CampusCast)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-cyan-400">n8n (self-hosted)</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">Low — visual workflow</td>
                      <td className="p-3">Fast prototyping, non-dev pipeline extensions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-purple-400">Google Apps Script Web App</td>
                      <td className="p-3">Free</td>
                      <td className="p-3">Very low</td>
                      <td className="p-3">Quick internal tools writing straight to Sheets</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-400">Zapier / Make.com</td>
                      <td className="p-3">Stingy free tier</td>
                      <td className="p-3">Minimal</td>
                      <td className="p-3">One-off demos, nothing more</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                A serverless function is more work upfront than dragging boxes in n8n, but it&apos;s the only option that doesn&apos;t quietly start costing money or hitting rate limits when real usage arrives.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                Choice Three: How Fast Does the Screen Need to Know?
              </h2>
              <p>
                The last variable is how the display finds out something new has arrived, and this one is really a question about how urgent &ldquo;real time&rdquo; actually needs to be.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-emerald-400 text-sm">Supabase Realtime (WebSockets)</div>
                  <div className="text-zinc-300">Sub-second updates. Right call when the screen is meant to feel alive (live audience signage).</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-cyan-400 text-sm">Polling (setInterval 5–10s)</div>
                  <div className="text-zinc-300">Dramatically simpler to build, debug, and reason about. In hallway displays, 5-second polling is visually indistinguishable from instant.</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="font-bold text-zinc-400 text-sm">ISR / Revalidation (Minutes)</div>
                  <div className="text-zinc-300">Best for static daily digests where nobody is staring continuously at the screen.</div>
                </div>
              </div>
            </div>

            {/* Section 5 - Playbook */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                Putting It Together: The Decision Guide
              </h2>
              <p>
                Stack these three choices on top of each other and a decision matrix falls out:
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950 border border-emerald-500/40 space-y-3 text-xs">
                <div className="font-bold text-emerald-300 text-sm uppercase tracking-wider">CampusCast Selected Stack:</div>
                <div className="text-white space-y-1">
                  <p>&bull; <strong>Sender:</strong> Official Meta Cloud API (Sanctioned &amp; compliant)</p>
                  <p>&bull; <strong>Receiver:</strong> Serverless Edge Function (Zero infra maintenance)</p>
                  <p>&bull; <strong>Database:</strong> Supabase Postgres</p>
                  <p>&bull; <strong>Display:</strong> Next.js App Router</p>
                </div>
              </div>
            </div>

            {/* Section 6 - Conclusion */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-emerald-400" />
                The Lesson Underneath the Architecture
              </h2>
              <p>
                The most interesting thing that came out of this research wasn&apos;t any single technology choice. It was noticing how little the overall architecture actually changes across options.
              </p>
              <p>
                Good systems are rarely the result of reaching for the most powerful technology available. They&apos;re the result of understanding the trade-off space clearly enough to choose the most <em>appropriate</em> one — and being honest about which corners you can&apos;t afford to cut when the thing you&apos;re building has to survive contact with an actual department.
              </p>
              <div className="p-6 rounded-2xl bg-zinc-900 border border-emerald-500/40 text-center font-bold text-lg text-white">
                &ldquo;The technology choices are easy once you actually understand what you&apos;re choosing between.&rdquo;
              </div>
            </div>

          </article>

          {/* Footer Back link */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <Link
              href="/journal"
              className="group inline-flex items-center gap-3 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-300">
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
