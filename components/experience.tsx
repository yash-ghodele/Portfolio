"use client"

import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Zap, Calendar, ChevronRight, Trophy, Star, Target, Shield } from "lucide-react"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Transform scroll progress into beam height (Clamped to avoid over-extension)
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const experiences = useMemo(() => [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Executive Head",
      organization: "BotBuddies (Nextechminds Pvt. Ltd & S2P Robotics Pvt. Ltd.)",
      period: "2024 - Present",
      description: "Leading robotics initiatives and managing team operations for innovative IoT and robotics projects.",
      highlights: ["Team Leadership", "Project Management", "Innovation Strategy"],
      side: "left"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Event Head",
      organization: "ECESA (Electronics & Communication Engineering Students Association)",
      period: "2023 - 2024",
      description: "Organized and managed technical events, workshops, and seminars for the engineering community.",
      highlights: ["Event Organization", "Community Engagement", "Technical Workshops"],
      side: "right"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cultural Secretary",
      organization: "IETE Students Forum",
      period: "2023 - 2024",
      description: "Coordinated cultural and technical events, fostering community engagement and collaboration.",
      highlights: ["Event Coordination", "Team Collaboration", "Community Building"],
      side: "left"
    },
  ], [])

  const achievements = useMemo(() => [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "InnoHack 2025 & 2.0",
      description: "Organized and directed major hackathon events with 200+ participants"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Digital Marketing",
      description: "Completed comprehensive digital marketing course with a focus on social media and content strategy"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Robotics & IoT Projects",
      description: "Led development of multiple award-winning IoT and robotics projects"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Community Leadership",
      description: "Mentored 50+ students in IoT, embedded systems, and event management"
    },
  ], [])

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-32 relative" ref={containerRef}>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          style={{ opacity }}
          className="text-center mb-24"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium border-primary/50 text-foreground py-1 px-3 backdrop-blur-md">
            Journey
          </Badge>
          <h2 id="experience-heading" className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional roles and operational leadership positions.
          </p>
        </motion.div>

        <div className="relative mb-32">
          {/* Central Laser Beam */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 md:translate-x-[-1px]">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-purple-400 to-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                aria-label={`${exp.title} at ${exp.organization}`}
                initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50, rotateX: 20 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${exp.side === "left" ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Node & Connector */}
                <div className="absolute left-[20px] md:left-1/2 top-12 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_rgba(168,85,247,0.8)] relative z-10"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                  </motion.div>
                  {/* Horizontal Connector Line (Desktop) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-primary/60 to-transparent w-24 ${exp.side === "right" ? "-right-4 flex-row-reverse origin-right" : "-left-4 origin-left"}`}></div>

                  {/* Mobile Connector */}
                  <div className="md:hidden absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className="hidden md:block flex-1"></div>

                {/* Card Content */}
                <div className={`w-full flex-1 pl-12 md:pl-0 ${exp.side === "left" ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="relative group perspective-1000">
                    {/* Animated Border Gradient */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-10 group-hover:opacity-50 blur transition duration-500"></div>

                    <div className="relative bg-zinc-950 border border-white/10 p-6 rounded-2xl group-hover:bg-zinc-900 group-hover:border-white/20 transition-all duration-300">
                      {/* Decorative Corner Accents */}
                      <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 border-t-2 border-r-2 border-primary"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 border-b-2 border-l-2 border-primary"></div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                          {exp.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors">{exp.title}</h3>
                          <p className="text-sm text-gray-400">{exp.organization}</p>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4 border-l-2 border-white/5 pl-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((tag, i) => (
                          <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-300 group-hover:text-white group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Valid Semantic Link (Optional Future Expansion) */}
                      {/* 
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                        <ChevronRight className="w-5 h-5 text-primary" />
                      </div> 
                      */}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500" /> Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <div key={i} className="relative group">
                {/* Gradient Blur Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-10 group-hover:opacity-50 blur transition duration-500"></div>

                <div className="relative h-full p-6 rounded-2xl bg-zinc-950 border border-white/10 group-hover:bg-zinc-900 group-hover:border-white/20 transition-all duration-300 flex items-start gap-4">

                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-primary"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 border-b-2 border-l-2 border-primary"></div>
                  </div>

                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
