"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Smartphone, Wrench, Megaphone, Users } from "lucide-react"
import BackgroundParticles from "@/components/ui/background-particles"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    technical: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Technical Skills",
      description: "Programming and embedded systems",
      skills: [
        { name: "Python", level: 85 },
        { name: "Arduino", level: 90 },
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "C/C++", level: 80 },
        { name: "IoT", level: 85 },
      ],
    },
    iot: {
      icon: <Cpu className="h-6 w-6" />,
      title: "IoT & Embedded",
      description: "Smart device development",
      skills: [
        { name: "Microcontrollers", level: 90 },
        { name: "Sensors & Actuators", level: 85 },
        { name: "Real-time Monitoring", level: 80 },
        { name: "Wireless Communication", level: 80 },
        { name: "System Integration", level: 85 },
      ],
    },
    frontend: {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Web and mobile interfaces",
      skills: [
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 85 },
        { name: "UI/UX", level: 80 },
      ],
    },
    soft: {
      icon: <Users className="h-6 w-6" />,
      title: "Soft Skills",
      description: "Leadership and communication",
      skills: [
        { name: "Event Management", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Project Coordination", level: 85 },
        { name: "Public Speaking", level: 80 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Platforms",
      description: "Development and collaboration",
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
      skills: [
        { name: "Social Media", level: 85 },
        { name: "Content Creation", level: 80 },
        { name: "Campaign Management", level: 80 },
        { name: "Analytics", level: 75 },
      ],
    },
  }

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
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      <BackgroundParticles />
      {/* HUD Background Grid - Isometric/Cyberpunk feel (Restoring subtly or just keeping clean?) 
          User said "constant background for all pages except hero". 
          So I will leave it CLEAN (transparent to global bg). 
      */}

      {/* Ambient Glows (Retained for subtle depth) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

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
          {Object.entries(technologies).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
              className={`group relative min-h-[300px] perspective-1000 cursor-pointer`}
              onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
            >
              <div
                className={`relative h-full transition-all duration-500 ease-out transform-style-3d 
                  ${selectedCategory === key
                    ? 'scale-105 z-20'
                    : 'group-hover:translate-z-10 group-hover:rotate-x-2'
                  }`}
              >
                {/* Glass Panel */}
                <div className={`absolute inset-0 rounded-3xl backdrop-blur-xl border transition-all duration-500
                  ${selectedCategory === key
                    ? 'bg-background/80 border-primary/50 shadow-[0_0_50px_rgba(168,85,247,0.2)]'
                    : 'bg-background/20 border-white/10 group-hover:border-primary/30 group-hover:bg-background/30'
                  }`}
                ></div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-0 animate-[scan_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 transition-all duration-300
                      ${selectedCategory === key ? 'bg-primary/20 border-primary/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'group-hover:bg-white/10'}
                    `}>
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

                  <h3 className="text-2xl font-bold mb-2 tracking-wide text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 font-mono opacity-80">
                    {`// ${category.description}`}
                  </p>

                  <div className="mt-auto">
                    <AnimatePresence mode="wait">
                      {selectedCategory === key ? (
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
                                  className="h-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)]"
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
          ))}
        </div>
      </div>
    </section>
  )
}
