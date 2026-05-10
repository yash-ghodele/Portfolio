"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"
import { JOURNAL_POSTS, JournalPost } from "@/lib/journal"

const CATEGORIES = ["All", "Insights", "Technical", "Engineering", "Process"] as const
type Category = typeof CATEGORIES[number]

const CATEGORY_COLORS: Record<JournalPost["category"], string> = {
  Insights: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  Technical: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  Engineering: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  Process: "text-purple-400 border-purple-500/30 bg-purple-500/5",
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" },
  }),
}

export default function JournalClient() {
  const [active, setActive] = useState<Category>("All")

  const filtered =
    active === "All"
      ? JOURNAL_POSTS
      : JOURNAL_POSTS.filter((p) => p.category === active)

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">
              {"// Journal"}
            </span>
            <div className="h-px w-16 bg-white/10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-5">
            Engineering <span className="text-primary">Deep Dives.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Technical writing on IoT architecture, manufacturing software, latency obsession,
            and building in Aurangabad&apos;s industrial corridor.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Articles List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <Link
                  href={`/journal/${post.slug}`}
                  className="group flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]
                             hover:border-primary/25 hover:bg-primary/[0.03] transition-all duration-300"
                >
                  {/* Category + date */}
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-36 md:flex-shrink-0">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs border font-medium ${CATEGORY_COLORS[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground/60">{post.date}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read time + arrow */}
                  <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2 flex-shrink-0">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground/50">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
