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
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background pointer-events-none"></div>

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
            About Me
          </Badge>
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-primary to-blue-500 bg-clip-text text-transparent">
              Beyond the Code
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I'm a <span className="text-foreground font-semibold">B.Tech ECE Student</span> blending hardware logic with software creativity to build connected ecosystems.
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
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
              The intersection of <br /> IoT & Leadership
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At MIT College of Engineering, I don't just study machines; I bring them to life. My journey is fueled by a curiosity for how
                <span className="text-primary font-medium"> Embedded Systems</span> interact with the human world.
              </p>
              <p>
                But technology doesn't live in a vacuum. As a <span className="text-purple-500 font-medium">Community Leader</span>,
                I organize hackathons and tech events, proving that the best circuits we build are the connections between people.
              </p>
              <p>
                Whether I'm soldering a PCB or managing a 50-person volunteer team, my goal remains the same:
                <span className="text-foreground font-medium decoration-primary decoration-2 underline-offset-4 underline"> Create impact through innovation.</span>
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
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">IoT Architect</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Designing smart, connected solutions using Arduino & modern sensors.
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
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-purple-500 transition-colors">Community Lead</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Orchestrating large-scale tech events and fostering peer mentorship.
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
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-500 transition-colors">Problem Solver</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Turning abstract challenges into tangible, efficient systems.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
