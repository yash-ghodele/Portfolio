"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      
      // Update active section based on scroll position
      const sections = ["home", "about", "tech-stack", "projects", "experience", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const handleResumeDownload = () => {
    // Open resume in new tab or download if file exists
    const resumeUrl = "/resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Tech Stack", href: "tech-stack" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="text-2xl font-bold text-primary">
            Yash<span className="text-destructive">Ghodele</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  activeSection === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
            <Button onClick={handleResumeDownload} size="sm" className="ml-2">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full" onClick={handleResumeDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
