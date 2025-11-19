"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Zap } from "lucide-react"

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    },
  }

  const cardHover = {
    scale: 1.03,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
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
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Leadership & Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeIn}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {exp.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors">
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
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Key Achievements
          </motion.h3>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeIn}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{achievement.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
