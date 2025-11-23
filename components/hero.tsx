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
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 gradient-animated opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hi, I'm <span className="text-primary gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">Yash</span>
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 min-h-[3rem]"
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
                      className={`inline-block ${word === "•" ? "text-muted-foreground" : "text-foreground font-semibold"
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
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I am a dedicated Electronics and Computer Engineering student with proven leadership and event management skills. My experience organizing large-scale gatherings, coupled with my technical expertise in IoT and project management, equips me to create engaging cultural experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center">
                  View My Projects
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
                className="border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
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
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
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
