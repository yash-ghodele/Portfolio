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
    <section id="about" className="py-20 bg-muted/30">
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
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={slideInLeft}
          >
            <h3 className="text-2xl font-bold mb-4">Passionate About Innovation</h3>
            <p className="text-muted-foreground mb-6">
              I'm a B.Tech ECE student at MIT College of Engineering, Aurangabad (Class of 2026), with a passion for
              IoT, event management, and community leadership. I blend technical expertise with creative problem-solving
              to build impactful solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey combines hands-on experience in IoT projects, robotics, and digital marketing with strong
              leadership skills developed through managing events and leading teams. I believe in turning ideas into
              reality through collaboration and innovation.
            </p>
            <p className="text-muted-foreground">
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
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Zap className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">IoT Enthusiast</h4>
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
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Users className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Community Leader</h4>
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
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Creative Problem Solver</h4>
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
