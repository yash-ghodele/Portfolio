"use client"

import { motion, Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Lightbulb } from "lucide-react"

export default function About() {
  const fadeIn: Variants = {
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

  const slideInLeft: Variants = {
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

  const slideInRight: Variants = {
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
    <section id="about" className="py-32 relative">

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/30 py-1.5 px-4 backdrop-blur-sm">
            Overview
          </Badge>
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="text-white">
              Professional Profile
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            B.Tech ECE Student specializing in <span className="text-foreground font-semibold">Embedded Systems</span> and <span className="text-foreground font-semibold">Full Stack Development</span>.
          </motion.p>
        </motion.div>

        {/* Main Content - Deconstructed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">

          {/* Left Col: Main Bio */}
          <motion.div
            className="md:col-span-7 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <h3 className="text-3xl font-bold text-white">
              Engineering & Leadership
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing my degree at MIT College of Engineering, I have developed a strong foundation in both hardware and software domains. My focus is on creating integrated systems that solve real-world problems.
              </p>
              <p>
                In addition to my technical work, I serve as a leader in various student organizations, organizing technical events and fostering a culture of innovation among peers.
              </p>
              <p>
                <b>Key Focus Areas:</b> IoT Architecture, Web Development, and Event Management.
              </p>
            </div>
          </motion.div>

          {/* Right Col: Floating Features */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-10">

            {/* Feature 1 */}
            <motion.div
              className="group flex items-start gap-6 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 10 }}
            >
              {/* Glow behind icon */}
              <div className="absolute left-0 top-0 w-16 h-16 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors"></div>

              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">IoT Development</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Designing smart, connected solutions using ESP32, Arduino & Sensors.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="group flex items-start gap-6 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 10 }}
            >
              <div className="absolute left-0 top-0 w-16 h-16 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/30 transition-colors"></div>

              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm group-hover:border-purple-500/50 transition-colors">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-purple-500 transition-colors">Team Leadership</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Managing technical teams and organizing large-scale events.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="group flex items-start gap-6 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ x: 10 }}
            >
              <div className="absolute left-0 top-0 w-16 h-16 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-colors"></div>

              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 backdrop-blur-sm group-hover:border-blue-500/50 transition-colors">
                <Lightbulb className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-500 transition-colors">Strategic Planning</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Executing projects with a focus on efficiency and scalability.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
