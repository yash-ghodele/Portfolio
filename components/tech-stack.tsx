"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Smartphone, Wrench, Megaphone, Users } from "lucide-react"

export default function TechStack() {

  // Define strict types for categories
  type TechCategory = 'technical' | 'iot' | 'frontend' | 'soft' | 'tools' | 'marketing'

  // Memoize the data object to prevent re-creation on every render
  const technologies = useMemo(() => ({
    technical: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Technical Skills",
      description: "Programming and embedded systems",
      color: "from-blue-500/20 to-cyan-500/20",
      glow: "shadow-blue-500/20",
      border: "group-hover:border-blue-500/50",
      skills: [
        { name: "Python" },
        { name: "TypeScript" },
        { name: "Arduino" },
        { name: "React" },
        { name: "C/C++" },
        { name: "IoT" },
      ],
    },
    iot: {
      icon: <Cpu className="h-6 w-6" />,
      title: "IoT & Embedded",
      description: "Smart device development",
      color: "from-emerald-500/20 to-green-500/20",
      glow: "shadow-emerald-500/20",
      border: "group-hover:border-emerald-500/50",
      skills: [
        { name: "Microcontrollers" },
        { name: "Sensors & Actuators" },
        { name: "Real-time Monitoring" },
        { name: "System Integration" },
      ],
    },
    frontend: {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Web and mobile interfaces",
      color: "from-purple-500/20 to-pink-500/20",
      glow: "shadow-purple-500/20",
      border: "group-hover:border-purple-500/50",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Responsive Design" },
        { name: "UI/UX" },
      ],
    },
    soft: {
      icon: <Users className="h-6 w-6" />,
      title: "Soft Skills",
      description: "Leadership and communication",
      color: "from-amber-500/20 to-orange-500/20",
      glow: "shadow-amber-500/20",
      border: "group-hover:border-amber-500/50",
      skills: [
        { name: "Event Management" },
        { name: "Team Leadership" },
        { name: "Communication" },
        { name: "Project Coordination" },
        { name: "Public Speaking" },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Platforms",
      description: "Development and collaboration",
      color: "from-indigo-500/20 to-slate-500/20",
      glow: "shadow-indigo-500/20",
      border: "group-hover:border-indigo-500/50",
      skills: [
        { name: "Git/GitHub" },
        { name: "VS Code" },
        { name: "Figma" },
        { name: "Firebase" },
        { name: "FastAPI" },
      ],
    },
    marketing: {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Marketing and promotion",
      color: "from-rose-500/20 to-red-500/20",
      glow: "shadow-rose-500/20",
      border: "group-hover:border-rose-500/50",
      skills: [
        { name: "Social Media" },
        { name: "Content Creation" },
        { name: "Campaign Mgmt" },
        { name: "Analytics" },
      ],
    },
  }), [])

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  }

  return (
    <section id="tech-stack" className="py-32 relative">

      <div className="container mx-auto px-4 relative z-10 perspective-1000">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-24 relative"
        >
          <div className="inline-block relative">
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/50 text-white py-1.5 px-6 backdrop-blur-md bg-transparent">
              Domain Expertise
            </Badge>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white">
            Technical Skills
          </h2>

          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light tracking-wide">
            A comprehensive overview of my technical proficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
          {(Object.entries(technologies) as [TechCategory, typeof technologies[TechCategory]][]).map(([key, category], index) => {
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
                className="group relative min-h-[300px] perspective-1000"
              >
                <div className="relative h-full transition-all duration-500 ease-out transform-style-3d group-hover:translate-z-10 group-hover:rotate-x-2">
                  {/* Glass Panel */}
                  <div className={`absolute inset-0 rounded-3xl backdrop-blur-xl border transition-all duration-500 bg-background/20 border-white/10 group-hover:bg-background/30 ${category.border}`}>
                  </div>

                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-0 animate-[scan_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-4 rounded-xl bg-gradient-to-br border transition-all duration-300 from-white/5 to-transparent border-white/10 group-hover:bg-white/10">
                        <div className="text-white h-8 w-8">
                          {category.icon}
                        </div>
                      </div>
                      {/* HUD Corner Accents */}
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 tracking-wide text-white transition-colors group-hover:text-primary">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 font-mono opacity-80">
                      {`// ${category.description}`}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
                          >
                            {skill.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
