"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Zap } from "lucide-react"

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const experiences = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Executive Head",
      organization: "BotBuddies (S2P Robotics Pvt. Ltd.)",
      period: "2024 - Present",
      description:
        "Leading robotics initiatives and managing team operations for innovative IoT and robotics projects.",
      highlights: ["Team Leadership", "Project Management", "Innovation Strategy"],
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Event Head",
      organization: "ECESA (Electronics & Communication Engineering Students Association)",
      period: "2023 - 2024",
      description: "Organized and managed technical events, workshops, and seminars for the engineering community.",
      highlights: ["Event Organization", "Community Engagement", "Technical Workshops"],
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Cultural Secretary",
      organization: "IETE Students Forum",
      period: "2023 - 2024",
      description: "Coordinated cultural and technical events, fostering community engagement and collaboration.",
      highlights: ["Event Coordination", "Team Collaboration", "Community Building"],
    },
  ]

  const achievements = [
    {
      title: "InnoHack 2025 & 2.0",
      description: "Organized and directed major hackathon events with 200+ participants",
    },
    {
      title: "Digital Marketing Certification",
      description: "Completed comprehensive digital marketing course with a focus on social media and content strategy",
    },
    {
      title: "Robotics & IoT Projects",
      description: "Led development of multiple award-winning IoT and robotics projects",
    },
    {
      title: "Community Leadership",
      description: "Mentored 50+ students in IoT, embedded systems, and event management",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{exp.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
