"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Smartphone, Wrench, Megaphone, Users } from "lucide-react"

export default function TechStack() {

  // Define strict types for categories
  type TechCategory = 'technical' | 'iot' | 'frontend' | 'soft' | 'tools' | 'marketing'

  const [selectedCategory, setSelectedCategory] = useState<TechCategory | null>(null)

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
        { name: "Python", level: 90 }, // Rounded up
        { name: "Arduino", level: 90 },
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 }, // Rounded to 5
        { name: "C/C++", level: 80 },
        { name: "IoT", level: 90 }, // Strong suit
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
        { name: "Microcontrollers", level: 90 },
        { name: "Sensors & Actuators", level: 85 },
        { name: "Real-time Monitoring", level: 80 },
        { name: "Wireless Comm.", level: 80 },
        { name: "System Integration", level: 85 },
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
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 85 },
        { name: "UI/UX", level: 80 },
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
        { name: "Event Management", level: 90 },
        { name: "Team Leadership", level: 90 }, // Strong leadership
        { name: "Communication", level: 90 },
        { name: "Project Coordination", level: 85 },
        { name: "Public Speaking", level: 80 },
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
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Linux", level: 80 },
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
        { name: "Social Media", level: 85 },
        { name: "Content Creation", level: 80 },
        { name: "Campaign Mgmt", level: 80 },
        { name: "Analytics", level: 75 },
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

  // Helper to handle category toggle
  const toggleCategory = (key: TechCategory) => {
    setSelectedCategory(current => current === key ? null : key)
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

          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-white">
            Technical Skills
          </h2>

          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light tracking-wide">
            A comprehensive overview of my technical proficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
          {(Object.entries(technologies) as [TechCategory, typeof technologies[TechCategory]][]).map(([key, category], index) => {
            const isSelected = selectedCategory === key;

            return (
              <motion.div
                key={key}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                aria-label={`Show ${category.title} details`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCategory(key);
                  }
                }}
                onClick={() => toggleCategory(key)}
                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
                className={`group relative min-h-[300px] perspective-1000 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl`}
              >
                <div
                  className={`relative h-full transition-all duration-500 ease-out transform-style-3d 
                    ${isSelected
                      ? 'scale-105 z-20'
                      : 'group-hover:translate-z-10 group-hover:rotate-x-2'
                    }`}
                >
                  {/* Glass Panel */}
                  <div className={`absolute inset-0 rounded-3xl backdrop-blur-xl border transition-all duration-500
                    ${isSelected
                      ? `bg-background/90 border-primary/50 ${category.glow}`
                      : 'bg-background/20 border-white/10 group-hover:bg-background/30'
                    } ${category.border}`}
                  ></div>

                  {/* Scanning Line Effect (Reduced motion preference should hide this ideally, but keeping as CSS animation) */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className={`absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-0 animate-[scan_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 ${isSelected ? 'opacity-0' : ''}`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-4 rounded-xl bg-gradient-to-br border transition-all duration-300
                        ${isSelected
                          ? `from-primary/20 to-purple-500/20 border-primary/50`
                          : 'from-white/5 to-transparent border-white/10 group-hover:bg-white/10'}
                      `}>
                        <div className="text-white h-8 w-8">
                          {category.icon}
                        </div>
                      </div>
                      {/* HUD Corner Accents */}
                      <div className="flex gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-primary' : 'bg-white/20'}`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-primary' : 'bg-white/20'}`}></div>
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 tracking-wide text-white transition-colors ${isSelected ? 'text-primary' : 'group-hover:text-primary'}`}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 font-mono opacity-80">
                      {`// ${category.description}`}
                    </p>

                    <div className="mt-auto">
                      <AnimatePresence mode="wait">
                        {isSelected ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4"
                          >
                            {category.skills.map((skill, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full bg-primary ${category.glow}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.05 }}
                                  />
                                </div>
                                <span className="text-xs font-mono text-primary/80 w-8 text-right">{skill.level}%</span>
                                <span className="text-xs font-medium text-white/90 min-w-[60px]">{skill.name}</span>
                              </div>
                            ))}
                          </motion.div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {category.skills.slice(0, 3).map((skill, i) => (
                              <div key={i} className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-muted-foreground">
                                {skill.name}
                              </div>
                            ))}
                            <div className="px-2 py-1 text-xs text-muted-foreground/50">...</div>
                          </div>
                        )}
                      </AnimatePresence>
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
