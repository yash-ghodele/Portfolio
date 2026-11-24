"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tv,
  ShieldCheck,
  Zap,
  Terminal,
  Activity,
  FileText,
  ExternalLink,
  CheckCircle2,
  BookOpen,
} from "lucide-react"
import Footer from "@/components/footer"

export default function ShippingCampusCastInProduction() {
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
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Blogs
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
                Oct 29, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-400">
              Shipping CampusCast: Zero-Hardware Smart TVs, Deterministic Parsing, and 1.25s Latency
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-emerald-500/40 pl-4 italic">
              What actually changed when we moved CampusCast from an architecture comparison on paper to a 6-department, 20-point security-hardened campus communication OS.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xs font-black text-emerald-400">
                YG
              </div>
              <div>
                <span className="text-sm font-semibold text-white block">Yash Ghodele</span>
                {/* <span className="text-xs text-muted-foreground">Founder, Ugam Digital Studio</span> */}
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
              src="/images/journal/shipping-campuscast.jpg"
              alt="CampusCast Telemetry & Smart TV Corridor Notice Board Architecture"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Content */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg text-zinc-200">
              In{" "}
              <Link href="/blogs/whatsapp-pipelines-research" className="text-emerald-400 hover:underline">
                From WhatsApp to Dashboard
              </Link>
              , we mapped out the theoretical design space for turning a WhatsApp message into a live hallway notice board. Then came the harder half: building the actual system for MIT College of Engineering across six departments (ECE, CSE, AIML, MECH, CIVIL, and EEE) and benchmarking every millisecond of it.
            </p>

            <p>
              Three constraints shaped every engineering decision we made after that initial research: <strong>zero dedicated player hardware</strong>, <strong>zero tolerance for spoofed hallway screens</strong>, and a strict <strong>under-5-second publish-to-display SLA</strong>.
            </p>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Tv className="w-5 h-5 text-blue-400" />
                1. Killing the Raspberry Pi: Zero-Hardware Smart TV Kiosks
              </h2>
              <p>
                Most campus digital signage projects fail before semester two because they depend on a Raspberry Pi, Mini-PC, or HDMI dongle taped behind every television. SD cards corrupt, SSH tunnels drop, and someone has to carry a ladder down a corridor just to restart a crashed browser.
              </p>
              <p>
                Instead, CampusCast treats the Smart TV itself as a pure browser thin client. Any Android TV, LG webOS, Samsung Tizen, or Fire TV on campus Wi-Fi simply opens its department URL (such as <code className="text-blue-300">/display/ece</code>) and stays synced via Cloud Firestore <code className="text-emerald-300">onSnapshot</code> WebSocket listeners.
              </p>
              <div className="p-5 rounded-xl bg-zinc-900/70 border border-blue-500/20 text-sm space-y-2">
                <div className="font-semibold text-blue-300">Offline &amp; Heartbeat Resilience</div>
                <p className="text-zinc-300">
                  Hallway Wi-Fi drops occasionally. Each display caches its latest snapshot in <code className="text-zinc-200">localStorage</code> so notices keep rotating during brief disconnects, while a 30-second telemetry heartbeat reports screen uptime (<code className="text-zinc-200">HH:MM:SS</code>) back to the Admin Screen Wall.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                2. Deterministic Lexical Parsing Over LLMs
              </h2>
              <p>
                When faculty type a WhatsApp message like <code className="text-emerald-300">#urgent #ece ECE: DSP Lab suspended</code>, it is tempting to pass that string to an LLM to extract JSON fields. We deliberately rejected LLM parsing for production ingestion.
              </p>
              <p>
                Why? Three reasons: an extra 600–1,500ms external API hop, non-deterministic edge cases on short abbreviations, and prompt-injection exposure on a public hallway display. Instead, <code className="text-zinc-200">@campuscast/shared/parsing</code> runs a deterministic lexical parser in under a millisecond—resolving <code className="text-rose-300">#urgent</code> overrides, category tags (<code className="text-zinc-200">#exam</code>, <code className="text-zinc-200">#event</code>, <code className="text-zinc-200">#placement</code>), <code className="text-zinc-200">#schedule</code> timestamps, and department scopes with zero ambiguity.
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                3. Defending a Public Corridor Screen (20-Point Audit)
              </h2>
              <p>
                A digital notice board mounted in an academic corridor is a high-visibility surface. Spoofing one message is enough to disrupt an exam schedule. We hardened the ingestion and database tiers across a 20-point cybersecurity matrix:
              </p>
              <ul className="space-y-2 text-sm text-zinc-300 list-none pl-0">
                {[
                  "Timing-safe HMAC-SHA1 (X-Twilio-Signature) and HMAC-SHA256 (X-Hub-Signature-256) verification using crypto.timingSafeEqual.",
                  "Sender phone whitelist lookup against the Firestore users roster, silently dropping unregistered numbers to prevent probing.",
                  "Token-bucket burst rate limiting capped at 10 messages per minute per sender.",
                  "Strict URI sanitization via getSafeUrl() stripping javascript:, data:, and vbscript: payloads before rendering media or QR codes.",
                  "Append-only immutable audit_log rules (allow update, delete: if false) with masked phone PII (+91 ••••• ••210).",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" />
                4. Empirical Benchmarks: Beating the 5-Second SLA
              </h2>
              <p>
                To avoid measuring optimistic local cache writes, our dual-client benchmark spun up two completely independent Cloud Firestore connections in <code className="text-zinc-200">asia-south1</code> (Mumbai), filtering out <code className="text-zinc-200">hasPendingWrites</code> and <code className="text-zinc-200">fromCache</code> events so the timer stopped only when the server pushed a real snapshot over the network.
              </p>

              <div className="my-6 overflow-x-auto rounded-xl border border-zinc-800">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-300">
                      <th className="p-3 font-semibold">Pipeline Stage</th>
                      <th className="p-3 font-semibold">Trials</th>
                      <th className="p-3 font-semibold">Mean</th>
                      <th className="p-3 font-semibold">Median</th>
                      <th className="p-3 font-semibold">P95</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-zinc-300">
                    <tr>
                      <td className="p-3 font-semibold text-white">Firestore Write Ack</td>
                      <td className="p-3">N = 20</td>
                      <td className="p-3">225.6 ms</td>
                      <td className="p-3">160.8 ms</td>
                      <td className="p-3">527.7 ms</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-emerald-400">Independent Listener Push</td>
                      <td className="p-3">N = 20</td>
                      <td className="p-3">235.9 ms</td>
                      <td className="p-3">163.1 ms</td>
                      <td className="p-3">530.2 ms</td>
                    </tr>
                    <tr className="bg-blue-950/20">
                      <td className="p-3 font-bold text-blue-300">Deployed Webhook E2E</td>
                      <td className="p-3">N = 10</td>
                      <td className="p-3 font-bold text-white">1,252.7 ms</td>
                      <td className="p-3">1,287.3 ms</td>
                      <td className="p-3 font-bold text-emerald-400">1,402.8 ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                At <strong>1.40 seconds</strong> (P95) across the live Vercel webhook and Cloud Firestore cluster, the software pipeline consumes roughly 28% of the 5-second SLA budget—leaving over 3.5 seconds of headroom for mobile carrier transit. Alongside latency trials, 14/14 functional test cases (12 automated component tests and 2 code inspections) and 36/36 HTTP endpoints passed with zero failures.
              </p>
            </div>

            {/* Section 5 - Credits & Links */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                Final Reflections &amp; Acknowledgments
              </h2>
              <p>
                CampusCast was developed as my B.Tech Major Project-II in Electronics and Computer Engineering at MIT College of Engineering, Chhatrapati Sambhajinagar, under the guidance of{" "}
                <a
                  href="https://www.linkedin.com/in/roopali-palwe-a79b6659/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-blue-400 underline decoration-blue-500/40 underline-offset-4 transition-colors"
                >
                  Prof. Roopali Palwe
                </a>{" "}
                (Project Guide).
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/work/campuscast"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono hover:bg-blue-500/20 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Explore CampusCast Case Study
                </Link>
                <Link
                  href="/reports/campuscast-major-project-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono hover:bg-emerald-500/20 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Read Final Report (PDF)
                </Link>
                <Link
                  href="/blogs/whatsapp-pipelines-research"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono hover:bg-white/10 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Part 1: Pipeline Research
                </Link>
              </div>
            </div>

          </article>

          {/* Footer Back link */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-3 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground/50 mb-0.5">Return to</div>
                <div className="font-semibold text-white">Engineering Blogs</div>
              </div>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

