"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    const navLinks = useMemo(() => [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        // { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
    ], [])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1))
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [navLinks])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <>
            {/* Floating Pill Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-4 left-0 right-0 z-50 px-4"
            >
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        animate={{
                            scale: isScrolled ? 0.95 : 1,
                            y: isScrolled ? -4 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`
              relative backdrop-blur-xl bg-background/80 
              border border-white/10 rounded-full
              shadow-lg shadow-primary/10
              ${isScrolled ? 'shadow-2xl shadow-primary/20' : ''}
            `}
                    >
                        {/* Gradient border effect */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-full opacity-50 blur-sm -z-10" />

                        <div className="flex items-center justify-center py-1.5">

                            {/* Navigation Links */}
                            <div className="hidden md:flex items-center">
                                {navLinks.map((link) => (
                                    <motion.button
                                        key={link.name}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`
                      relative px-2.5 py-1.5 text-xs font-medium rounded-full
                      transition-colors duration-300
                      ${activeSection === link.href.substring(1)
                                                ? 'text-primary'
                                                : 'text-muted-foreground hover:text-foreground'
                                            }
                    `}
                                    >
                                        {link.name}
                                        {activeSection === link.href.substring(1) && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="relative mt-24 px-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="max-w-4xl mx-auto space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`
                      w-full text-left px-6 py-4 rounded-2xl
                      font-medium text-lg
                      transition-all duration-300
                      ${activeSection === link.href.substring(1)
                                                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                                : 'bg-muted/50 hover:bg-muted text-foreground'
                                            }
                    `}
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
