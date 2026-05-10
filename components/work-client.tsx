"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Cpu, Globe, Shield, Terminal, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ProjectMetadata } from "@/lib/types"

const FILTER_TABS = ["All", "IoT / Embedded", "Web / Full-Stack", "Industrial"] as const
type FilterTab = typeof FILTER_TABS[number]

interface WorkClientProps {
  projects: { slug: string; metadata: ProjectMetadata }[]
}

const categoryMap: Record<string, FilterTab> = {
  IoT: "IoT / Embedded",
  Embedded: "IoT / Embedded",
  "Web App": "Web / Full-Stack",
  "Full Stack": "Web / Full-Stack",
  Industrial: "Industrial",
  Dashboard: "Industrial",
}

function getCategory(metadata: ProjectMetadata): FilterTab {
  if (metadata.subtitle) {
    for (const [key, val] of Object.entries(categoryMap)) {
      if (metadata.subtitle.includes(key)) return val
    }
  }
  return "Web / Full-Stack"
}

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Globe,
  Shield,
  Terminal,
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" },
  }),
}

export default function WorkClient({ projects }: WorkClientProps) {
  const [active, setActive] = useState<FilterTab>("All")

  const filtered =
    active === "All" ? projects : projects.filter((p) => getCategory(p.metadata) === active)

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">
              {"// Work"}
            </span>
            <div className="h-px w-16 bg-white/10" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-5 leading-none">
            Projects &amp;{" "}
            <span className="text-primary">Case Studies</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            IoT fleet systems, manufacturing dashboards, full-stack platforms, and embedded
            engineering — shipped in production across Aurangabad&apos;s industrial ecosystem.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === tab
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-white bg-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => {
              const Icon = iconMap[project.metadata.iconName] || Terminal
              return (
                <motion.div
                  key={project.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="group relative rounded-2xl border border-white/5 bg-[#111111] overflow-hidden
                             hover:border-primary/25 transition-all duration-500
                             hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        project.metadata.color || "from-primary/30 to-purple-800/30"
                      } opacity-30 z-10`}
                    />
                    <Image
                      src={project.metadata.image || "/placeholder.jpg"}
                      alt={project.metadata.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    {/* Top-right icon */}
                    <div className="absolute top-4 left-4 z-20 p-2.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    {/* Category badge */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge className="text-xs border border-white/10 bg-black/60 backdrop-blur-md text-white/80 font-medium">
                        {project.metadata.subtitle}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-200">
                      {project.metadata.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.metadata.description}
                    </p>

                    {/* Impact stat */}
                    {project.metadata.stats && (
                      <div className="mb-5 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                        <p className="text-xs text-muted-foreground mb-0.5">Key Impact</p>
                        <p className="text-sm font-semibold text-primary truncate">
                          {project.metadata.stats}
                        </p>
                      </div>
                    )}

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.metadata.tech?.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full text-xs border border-white/8 bg-white/4 text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group/link"
                    >
                      View case study
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No projects in this category yet.
          </div>
        )}

        {/* Ugam CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-mono tracking-widest text-primary/70 uppercase mb-2">
              Looking to build something?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              We build at{" "}
              <a
                href="https://ugamstudio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ugam Digital Studio
              </a>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              IoT systems, manufacturing dashboards, full-stack platforms. From sensor to screen.
            </p>
          </div>
          <a
            href="https://ugamstudio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 bg-primary/10 text-primary font-semibold hover:bg-primary/20 hover:border-primary/60 transition-all duration-300"
          >
            Initialize a Project
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </div>
  )
}
