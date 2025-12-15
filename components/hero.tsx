"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import HeroNetwork from "@/components/ui/hero-network"

export default function Hero() {
  const words = ["Engineer", "•", "Leader", "•", "Innovator"]
  const [displayedWords, setDisplayedWords] = useState<string[]>([])

  useEffect(() => {
    // Reset displayed words on mount
    setDisplayedWords([])

    const timeouts: NodeJS.Timeout[] = []

    words.forEach((word, index) => {
      const timeout = setTimeout(() => {
        setDisplayedWords((prev) => {
          // Only add if we haven't reached this index yet
          if (prev.length <= index) {
            return [...prev, word]
          }
          return prev
        })
      }, index * 400) // 400ms delay between each word
      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
      setDisplayedWords([])
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Hybrid Network/Aurora Background */}
      <div className="absolute inset-0 z-0">
        <HeroNetwork />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Yash <br />
                <span className="bg-gradient-to-r from-purple-400 via-primary to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Ghodele
                </span>
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full Stack Developer & IoT Engineer
              </motion.h2>
            </div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Building scalable web applications and intelligent connected systems. I bridge the gap between hardware logic and software user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white text-black hover:bg-gray-200 transition-all duration-300 border-0"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center font-semibold">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 backdrop-blur-sm bg-background/50 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              {[
                { icon: Github, href: "https://github.com/yash-ghodele", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/yash-ghodele", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/why_be_yashhh/", label: "Instagram" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-2 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="h-5 w-5 hover:text-primary transition-colors" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative w-auto max-w-full mx-auto inline-block"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl -z-10"></div>

            {/* Main image container */}
            <motion.div
              className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl overflow-hidden shadow-2xl group inline-block"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(var(--primary-rgb), 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Yash-Ghodele.png"
                alt="Yash - Engineer, Leader, Innovator"
                width={600}
                height={800}
                className="block h-auto object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
                style={{
                  maxWidth: '100%',
                  maxHeight: 'min(600px, 80vh)',
                  width: 'auto',
                  height: 'auto'
                }}
                priority
              />

              {/* Simple overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div >

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}

          className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 relative group"
          aria-label="Scroll to about section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight className="h-6 w-6 transform rotate-90 text-primary relative z-10" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>
    </section >
  )
}
