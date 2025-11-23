"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted/30 py-12 border-t relative overflow-hidden">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="mb-4 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-2">
              Yash Ghodele
            </p>
            <p className="text-sm text-muted-foreground">
              Building the future with IoT, AI, and Innovation.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/yash-ghodele", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/yash-ghodele", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/why_be_yashhh/", label: "Instagram" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground">© {currentYear} Yash Ghodele. All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
              <p className="text-sm text-muted-foreground">Engineer • Leader • Innovator</p>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full hover:bg-primary/10 hover:text-primary ml-2"
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-3 w-3" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
