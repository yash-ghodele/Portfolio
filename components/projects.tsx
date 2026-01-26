"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronRight, ChevronLeft, Layout, Cpu, Terminal, Shield, LucideIcon } from "lucide-react"
import { ProjectMetadata } from "@/lib/mdx"

// Icon Mapping
const iconMap: Record<string, LucideIcon> = {
  "Layout": Layout,
  "Cpu": Cpu,
  "Terminal": Terminal,
  "Shield": Shield
}

interface ProjectsProps {
  projects: {
    slug: string
    metadata: ProjectMetadata
  }[]
}

export default function Projects({ projects }: ProjectsProps) {
  // Sort by ID or publishedAt if needed. For now, assuming array order.
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-play timer
  useEffect(() => {
    if (isHovered || !mounted || projects.length === 0) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [current, isHovered, projects.length, mounted])

  const next = () => setCurrent((curr) => (curr + 1) % projects.length)
  const prev = () => setCurrent((curr) => (curr - 1 + projects.length) % projects.length)

  // if (!mounted) return <div className="py-24 text-center text-white">Loading Projects...</div>
  if (projects.length === 0) return null

  const currentProject = projects[current]
  const IconComponent = iconMap[currentProject.metadata.iconName] || Terminal

  return (
    <section id="projects" className="py-24 relative min-h-[90vh] flex flex-col justify-center">

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
        </motion.div>

        {/* Main Card Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Custom Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-primary hover:border-primary hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group hidden md:flex items-center justify-center"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-primary hover:border-primary hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group hidden md:flex items-center justify-center"
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Tap Areas (Invisible) */}
          <div className="md:hidden absolute inset-y-0 left-0 w-12 z-20" onClick={prev}></div>
          <div className="md:hidden absolute inset-y-0 right-0 w-12 z-20" onClick={next}></div>

          {/* Card Content */}
          <div className="bg-[#111111] rounded-[2.5rem] border border-white/5 p-0 relative overflow-hidden h-auto min-h-[600px] lg:h-[600px] shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 h-full"
              >
                {/* Visual Side (Image) - Unchanged */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.metadata.color || "from-purple-500"} opacity-20 mix-blend-overlay z-10`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111111] z-20"></div>

                  <Image
                    src={currentProject.metadata.image || "/placeholder.jpg"}
                    alt={currentProject.metadata.title || "Project"}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Floating Icon */}
                  <div className="absolute top-8 left-8 z-30 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-12 lg:p-12 flex flex-col justify-center relative z-30 h-full">
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${currentProject.metadata.color || "from-blue-500"} opacity-10 blur-[100px] pointer-events-none rounded-full`}></div>

                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="outline" className={`px-3 py-1 rounded-full border-white/10 bg-white/5 text-xs font-medium text-white/80`}>
                      {currentProject.metadata.subtitle}
                    </Badge>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
                    {currentProject.metadata.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-6 line-clamp-3">
                    {currentProject.metadata.description}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <p className="text-sm text-gray-400 mb-1">Key Impact</p>
                    <p className="text-lg font-semibold text-primary truncate">
                      {currentProject.metadata.stats}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {currentProject.metadata.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                      <Link href={`/projects/${currentProject.slug}`}>
                        View Case Study <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>

                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10" onClick={() => window.open(currentProject.metadata.demoLink)}>
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </Button>
                      <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10" onClick={() => window.open(currentProject.metadata.codeLink)}>
                        <Github className="w-4 h-4 mr-2" /> Source
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="mt-16 max-w-2xl mx-auto px-4">
          {/* Dots */}
          <div className="flex justify-center gap-3 mb-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current
                  ? "bg-white w-8"
                  : "bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress Timer Line */}
          <div className="flex items-center gap-6">
            <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                key={current} // Reset animation on slide change
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? `${((current + 1) / projects.length) * 100}%` : "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
