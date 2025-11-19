"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const words = ["Engineer", "•", "Leader", "•", "Innovator"]
  const [displayedWords, setDisplayedWords] = useState<string[]>([])

  useEffect(() => {
    words.forEach((word, index) => {
      setTimeout(() => {
        setDisplayedWords((prev) => [...prev, word])
      }, index * 400) // 400ms delay between each word
    })
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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Yash</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              <div className="flex flex-wrap gap-2 items-center">
                {displayedWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={word === "•" ? "text-muted-foreground" : "text-foreground"}
                  >
                    {word}
                  </motion.span>
                ))}
                {displayedWords.length < words.length && <span className="animate-blink">|</span>}
              </div>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I am a dedicated Electronics and Computer Engineering student with proven leadership and event management skills. My experience organizing large-scale gatherings, coupled with my technical expertise in IoT and project management, equips me to create engaging cultural experiences. I am passionate about fostering community spirit and inclusivity through well-executed initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("projects")}>
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[3/4] max-w-md mx-auto w-full"
          >
            {/* Decorative border frame */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/20"></div>

            {/* Main image container with rectangular styling */}
            <div className="absolute inset-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/Yash-Ghodele.png"
                alt="Yash - Engineer, Leader, Innovator"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}
