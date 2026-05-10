"use client"

import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"

export function EventClientFeatures({ accentHue }: { accentHue: number }) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = y / height

      setScrollY(y)
      setScrollProgress(progress)
      setShowBackToTop(y > 400)

      // Also update CSS variables for parallax and progress
      document.documentElement.style.setProperty("--scroll-y", `${y}`)
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left transition-transform duration-100 ease-out"
        style={{
          background: `linear-gradient(to right, hsl(${accentHue}, 60%, 50%), hsl(${accentHue + 40}, 60%, 50%))`,
          transform: `scaleX(${scrollProgress})`,
        }}
      />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-10 right-10 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center group hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        style={{ color: `hsl(${accentHue}, 60%, 70%)` }}
        aria-label="Back to top"
      >
        <ArrowLeft className="w-5 h-5 rotate-90 group-hover:-translate-y-1 transition-transform" />
      </button>
    </>
  )
}
