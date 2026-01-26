"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, ArrowUp, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCallback, useMemo } from "react"

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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-zinc-950 py-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient Background Glow matching Contact section */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Brand Column (5 cols) */}
          <motion.div
            className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="Yash Ghodele Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(230,255,0,0.5)]"
                />
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">
                Yash Ghodele
              </p>
            </div>

            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Building the future with IoT, AI, and Innovation.
              Creating smart solutions for complex problems.
            </p>

            <div className="flex flex-col gap-3 text-sm text-gray-400 w-full items-center md:items-start">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Aurangabad, India</span>
              </div>
              <a href="mailto:yashghodele.work@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                <span>yashghodele.work@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Navigation Column (3 cols) */}
          <motion.div
            className="md:col-span-3 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-center md:items-start">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials & Copyright (4 cols) */}
          <motion.div
            className="md:col-span-4 flex flex-col items-center md:items-end justify-start h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col items-center md:items-end gap-6 mb-8">
              <h3 className="text-white font-semibold hidden md:block">Connect</h3>
              <div className="flex gap-3">
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
              </div>
            </div>

            <div className="text-center md:text-right mt-auto md:mt-0">
              <p className="text-gray-500 text-sm mb-4">© {currentYear} Yash Ghodele.<br />All rights reserved.</p>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 rounded-full hover:bg-white/5 text-gray-400 hover:text-white text-xs gap-2 group mx-auto md:ml-auto md:mr-0"
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
