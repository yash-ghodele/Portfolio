"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Zap, Calendar, Briefcase } from "lucide-react"

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
    scale: 1.02,
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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
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
            className="w-20 h-1 bg-primary mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key roles in technical organizations
          </p>
        </motion.div>

        {/* Timeline Visualization for Desktop */}
        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeIn}
                whileHover={cardHover}
                className="relative"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] border-4 border-background box-content"></div>

                {/* Card */}
                <Card className="h-full border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <CardContent className="p-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-6">
                      <motion.div
                        className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      >
                        {exp.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Briefcase className="w-3 h-3" />
                        <span>{exp.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-3">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-center text-sm">{exp.description}</p>

                    <div className="flex flex-wrap justify-center gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-300">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              <Card className="h-full border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <CardContent className="p-6 relative z-10 flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{achievement.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
