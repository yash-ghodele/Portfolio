"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-background to-blue-900/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

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
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-purple-400 via-primary to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Yash
                </span>
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground min-h-[3rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 items-center">
                  {displayedWords.map((word, index) => (
                    <motion.span
                      key={`${word}-${index}`}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className={`inline-block ${word === "•" ? "text-primary/50" : "text-foreground font-semibold"
                        }`}
                    >
                      {word}
                    </motion.span>
                  ))}
                  {displayedWords.length < words.length && (
                    <motion.span
                      className="animate-blink text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      |
                    </motion.span>
                  )}
                </div>
              </motion.h2>
            </div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Building the future of connected systems. I blend IoT expertise with leadership skills to create impactful solutions that bridge hardware and software.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border-0"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
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
              <img
                src="/Yash-Ghodele.png"
                alt="Yash - Engineer, Leader, Innovator"
                className="block h-auto object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
                style={{
                  maxWidth: '100%',
                  maxHeight: 'min(600px, 80vh)',
                  width: 'auto',
                  height: 'auto'
                }}
                loading="eager"
              />

              {/* Simple overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
    </section>
  )
}
