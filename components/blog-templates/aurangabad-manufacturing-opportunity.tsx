"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Factory, Building2, MapPin, Wrench, ShieldCheck, Users, TrendingUp } from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AurangabadManufacturingOpportunity() {
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
                Apr 16, 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                6 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-amber-400">
              Aurangabad&apos;s Manufacturing Opportunity (And Why We&apos;re Building Here)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-amber-500/40 pl-4 italic">
              Aurangabad is one of India&apos;s most overlooked industrial ecosystems — home to hundreds of manufacturing units feeding global supply chains, operating with paper and spreadsheets.
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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl relative aspect-[16/9]"
          >
            <Image
              src="/images/journal/aurangabad.jpg"
              alt="Aurangabad's Industrial Manufacturing Hub"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Article Body */}
          <article className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 leading-relaxed text-base">

            <p className="text-lg font-medium text-white border-l-2 border-amber-400 pl-4 py-1">
              Aurangabad is one of India&apos;s most overlooked industrial ecosystems.
            </p>

            <p>
              Within a 50-kilometer radius, hundreds of wire manufacturers, auto-component suppliers, fabrication units, and precision engineering companies quietly power supply chains for some of the country&apos;s largest brands. These factories produce millions of components every month, employ thousands of workers, and generate enormous economic value.
            </p>

            <p className="text-zinc-400">
              Yet many of them still operate with systems that haven&apos;t fundamentally changed in decades.
            </p>

            {/* Section 1 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Factory className="w-5 h-5 text-amber-400" />
                An Industrial Hub Hidden in Plain Sight
              </h2>
              <p>
                Aurangabad is home to more than 500 wire manufacturing units and hundreds of auto-component suppliers serving companies such as Bajaj Auto, Volkswagen, and &Scaron;koda Auto.
              </p>
              <p>
                Despite this industrial density, digital adoption remains surprisingly low. Production records are often maintained on paper. Shift reports travel through WhatsApp groups. Machine utilization data is manually collected at the end of the day. Many factories rely on ERP systems implemented more than a decade ago, with little visibility into what is happening on the shop floor in real time.
              </p>

              {/* Callout Box */}
              <div className="my-6 p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-200">
                <strong className="text-amber-400">The Resulting Paradox:</strong> A massive gap between world-class manufacturing capability and real-time operational visibility.
              </div>
            </div>

            {/* Section 2 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                The Gap Nobody Is Building For
              </h2>
              <p>
                Most enterprise software companies pursue large corporations with multi-crore budgets and long procurement cycles. Most startups focus on technology hubs like Bangalore, Pune, Mumbai, and Hyderabad.
              </p>
              <p>
                That leaves an entire segment underserved: <strong>the regional manufacturer with 100–500 employees</strong>.
              </p>
              <p>
                The wire manufacturing unit in Waluj tracking maintenance schedules on spreadsheets. The fabrication shop struggling to monitor machine downtime. The factory manager who knows production targets are slipping but has no live data to identify why.
              </p>

              <div className="p-6 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2 text-sm">
                <h4 className="font-bold text-amber-300 uppercase tracking-wider">What They Actually Need</h4>
                <p className="text-zinc-200">
                  These businesses need technology just as much as large enterprises. What they don&apos;t need is enterprise complexity or enterprise pricing. That&apos;s the gap we&apos;re building for.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                Why Local Context Matters
              </h2>
              <p>
                Industrial software built for Germany, Silicon Valley, or even Mumbai often fails when deployed in regional manufacturing clusters.
              </p>
              <p>
                Aurangabad has its own realities:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="p-3.5 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span><strong>Power Outages:</strong> Occur multiple times a week.</span>
                </div>
                <div className="p-3.5 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span><strong>Connectivity:</strong> Internet is not always reliable.</span>
                </div>
                <div className="p-3.5 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span><strong>Language:</strong> Shop-floor workers communicate in Marathi.</span>
                </div>
                <div className="p-3.5 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span><strong>Durability:</strong> Hardware must survive harsh heat &amp; dust.</span>
                </div>
              </div>

              <p>
                Technology designed without these constraints quickly becomes shelfware. The solution is not simply translating software into Marathi. It is designing systems that are offline-first, resilient, simple to operate, and aligned with how factories actually work.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                The Local Engineering Advantage
              </h2>
              <p>
                Every year, engineering colleges across Aurangabad produce thousands of graduates. Most leave immediately for Pune, Bangalore, or other metropolitan cities in search of opportunities.
              </p>
              <p className="text-amber-300 font-medium">
                We believe there is another path.
              </p>
              <p>
                When local engineers build products for local industries, something powerful happens. They understand the machines, the workflows, the people, and the language. Problems are identified faster. Solutions are adopted more easily. Trust is built naturally.
              </p>
              <p>
                A factory manager is far more likely to adopt a new system when support comes from someone who understands both software architecture and shop-floor operations. That creates a talent-to-market loop that strengthens over time.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                Building the Digital Infrastructure of Regional Manufacturing
              </h2>
              <p>
                The future of Indian manufacturing will not be defined only by mega-factories and industrial parks. It will also be shaped by thousands of regional manufacturers that form the backbone of the country&apos;s supply chain.
              </p>
              <p>
                Their challenge is not a lack of capability. It is a lack of accessible, practical, and context-aware technology. The opportunity is enormous.
              </p>
              <p className="text-amber-200 font-semibold">
                By helping these businesses digitize operations, improve visibility, and make better decisions, we are not just building software. We are helping create the digital infrastructure that regional manufacturing needs for the next decade of growth.
              </p>
              <p className="text-amber-400 font-bold text-lg">
                And Aurangabad is the perfect place to start.
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
