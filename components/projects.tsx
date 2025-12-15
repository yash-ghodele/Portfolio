"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react"
import { projects as localProjects } from "@/lib/data"
import { getProjects } from "@/lib/sanity"
import type { Project } from "@/lib/data"

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(localProjects)
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Fetch from Sanity
    async function fetchSanityProjects() {
      try {
        const sanityProjects = await getProjects()
        if (sanityProjects && sanityProjects.length > 0) {
          console.log("Using Sanity Data", sanityProjects)
          setProjects(sanityProjects)
        } else {
          console.log("No Sanity data found, using local fallback.")
        }
      } catch (error) {
        console.error("Failed to fetch from Sanity:", error)
      }
    }
    fetchSanityProjects()
  }, [])

  // Auto-play timer
  useEffect(() => {
    if (isHovered || !mounted) return // Pause on hover

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [current, isHovered, projects.length, mounted])

  const next = () => setCurrent((curr) => (curr + 1) % projects.length)
  const prev = () => setCurrent((curr) => (curr - 1 + projects.length) % projects.length)

  if (!mounted) return <div className="py-24 bg-[#050505] text-center text-white">Loading Projects...</div>

  return (
    <section id="projects" className="py-24 relative min-h-[90vh] flex flex-col justify-center bg-[#050505] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
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
            className="absolute -left-4 md:-20 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-primary hover:border-primary hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group hidden md:flex items-center justify-center"
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
          <div className="bg-[#111111] rounded-[2.5rem] border border-white/5 p-0 relative overflow-hidden h-[600px] shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 h-full"
              >
                {/* Visual Side (Image) */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${projects[current]?.color || "from-purple-500"} opacity-20 mix-blend-overlay z-10`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111111] z-20"></div>

                  <Image
                    src={projects[current]?.image || "/placeholder.jpg"}
                    alt={projects[current]?.title || "Project"}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Floating Icon */}
                  {projects[current]?.icon && (
                    <div className="absolute top-8 left-8 z-30 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-lg">
                      {projects[current].icon}
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-30">
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${projects[current]?.color || "from-blue-500"} opacity-10 blur-[100px] pointer-events-none rounded-full`}></div>

                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="outline" className={`px-3 py-1 rounded-full border-white/10 bg-white/5 text-xs font-medium text-white/80`}>
                      {projects[current]?.subtitle}
                    </Badge>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>

                  <Link href={`/projects/${projects[current]?.slug}`}>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight hover:text-primary transition-colors cursor-pointer">
                      {projects[current]?.title}
                    </h3>
                  </Link>

                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {projects[current]?.description}
                  </p>

                  <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <p className="text-sm text-gray-400 mb-1">Key Impact</p>
                    <p className="text-lg font-semibold text-primary">
                      {projects[current]?.stats}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {projects[current]?.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button className="flex-1 bg-white text-black hover:bg-gray-200" onClick={() => window.open(projects[current]?.links.demo)}>
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10" onClick={() => window.open(projects[current]?.links.code)}>
                      <Github className="w-4 h-4 mr-2" /> Source
                    </Button>
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
                animate={{ width: isHovered ? `${((current + 1) / projects.length) * 100}%` : "100%" }} // Visual logic: if paused, maybe hold? No, just keep simple for now. Current logic resets on current change.
                // Actually, if paused, the timer interval stops, but the animation continues if not halted.
                // For a perfect 'pause' visual, we'd need more complex state. 
                // For now, let's keep the timer functionality pure and the visual simple.
                // If paused, the interval stops. The bar will finish its 5s run then wait?
                // No, Framer Motion 'animate' triggers once. 
                // Let's stick to the 5s fill. If the user hovers, it effectively pauses the SLIDE change, not necessarily the bar visuals unless we tie them strictly.
                // I'll stick to standard behavior: Bar fills, if hover -> wait -> then snap to next.
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
