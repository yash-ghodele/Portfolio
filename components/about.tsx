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
            className="text-4xl md:text-6xl font-black mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <span className="text-white">
              Systems, Technology & Execution
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Designing and operating real-world systems — from embedded devices and software platforms to large-scale technical events.
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
            <h3 className="text-2xl font-semibold text-white">
              How I work
            </h3>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I design systems that have to work in the real world — not just demos. My work lives where embedded hardware, software platforms, and execution collide.
              </p>

              <p>
                I&apos;m pursuing a B.Tech in Electronics and Communication Engineering, but most of my learning comes from shipping real systems — from IoT security platforms to large-scale hackathons with hundreds of participants.
              </p>

              <p>
                Leading teams and events taught me what textbooks don&apos;t: assumptions fail, coordination breaks, and clarity beats speed when pressure hits.
              </p>

              <p className="pt-3 text-base text-foreground font-semibold">
                My work converges around three areas:
              </p>

              <ul className="space-y-2 pl-5 text-base">
                <li>
                  <span className="text-foreground font-semibold">IoT & Embedded Systems</span> — devices built for unpredictable environments
                </li>
                <li>
                  <span className="text-foreground font-semibold">Full Stack Platforms</span> — software that makes hardware usable
                </li>
                <li>
                  <span className="text-foreground font-semibold">Execution & Systems</span> — people, processes, and timelines that actually ship
                </li>
              </ul>
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
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">Embedded Systems & Devices</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building IoT solutions with ESP32, Arduino, and sensors that operate in unpredictable real-world conditions.
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
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-purple-500 transition-colors">Team & System Leadership</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading teams through execution pressure — InnoHack (200+ participants), BotBuddies, and ECESA technical communities.
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
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-500 transition-colors">Execution & Tradeoffs</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Making systems ship under real constraints — balancing scope, timelines, and team coordination when assumptions break.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
