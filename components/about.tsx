"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Lightbulb } from "lucide-react"

export default function About() {
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
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
            About Me
          </Badge>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Who I Am
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, leadership, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={slideInLeft}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Passionate About Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a B.Tech ECE student at MIT College of Engineering, Aurangabad (Class of 2026), with a passion for
              IoT, event management, and community leadership. I blend technical expertise with creative problem-solving
              to build impactful solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My journey combines hands-on experience in IoT projects, robotics, and digital marketing with strong
              leadership skills developed through managing events and leading teams. I believe in turning ideas into
              reality through collaboration and innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I'm not coding or managing events, you can find me exploring emerging technologies, mentoring peers,
              or organizing community initiatives like InnoHack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full border-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/50 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Zap className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">IoT Enthusiast</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Building smart solutions with Arduino, sensors, and embedded systems for real-world problems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full border-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/50 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Users className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Community Leader</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Leading teams, organizing events, and fostering innovation through collaboration and mentorship.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full border-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/50 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Creative Problem Solver</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Combining technical skills with creative thinking to develop innovative solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
