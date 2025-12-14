"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, ArrowUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/yash-ghodele", label: "LinkedIn" },
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/yash-ghodele", label: "GitHub" },
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/why_be_yashhh/", label: "Instagram" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:yashghodele.work@gmail.com", label: "Email" }
  ]

  return (
    <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient Background Glow matching Contact section */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand / Name */}
          <motion.div
            className="mb-4 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-bold text-white mb-2 tracking-tight">
              Yash Ghodele
            </p>
            <p className="text-sm text-gray-400">
              Building the future with IoT, AI, and Innovation.
            </p>
          </motion.div>

          {/* Social Links (Matching Contact Section Style) */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 hover:text-white"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Copyright & Action */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-500 text-sm">© {currentYear} Yash Ghodele. All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 rounded-full hover:bg-white/5 text-gray-400 hover:text-white text-xs gap-2 group"
                onClick={scrollToTop}
              >
                Back to Top <ArrowUp className="h-3 w-3 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
