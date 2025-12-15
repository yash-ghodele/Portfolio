"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import BackgroundParticles from "@/components/ui/background-particles"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Professor, MIT College of Engg.",
      content:
        "Yash has demonstrated exceptional leadership skills. His ability to organize large-scale technical events like InnoHack hackathons with 200+ participants showcases his project management abilities.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Team Member, BotBuddies",
      content:
        "Working under Yash's leadership was an incredible learning experience. His expertise in IoT and ability to mentor the team helped us deliver outstanding projects.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Deshmukh",
      position: "Participant, InnoHack 2025",
      content:
        "One of the most well-organized events I've attended. The platform was seamless and the judging process was fair. His attention to detail is remarkable.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Patil",
      position: "IETE Students Forum",
      content:
        "Yash brought fresh ideas and energy. His ability to coordinate between different teams made him an invaluable member of our organization.",
      rating: 5,
    },
    {
      id: 5,
      name: "Rohan Verma",
      position: "Tech Lead, CodeCrafters",
      content:
        "A highly skilled developer with a keen eye for design. His portfolio alone demonstrates his attention to detail and technical prowess.",
      rating: 5,
    }
  ]

  const next = () => setCurrent((curr) => (curr + 1) % testimonials.length)
  const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length)

  // Get 3 visible items with wrap-around
  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(current + i) % testimonials.length])
    }
    return items
  }

  const visibleItems = getVisibleTestimonials()

  if (!mounted) return null

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <BackgroundParticles />
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 mb-12">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 py-1.5 px-4 border-white/10 bg-white/5 text-white/80 backdrop-blur-md">
            Endorsements
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            What People Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Navigation Buttons (Absolute - Outside container) */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300 hidden md:flex items-center justify-center group"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300 hidden md:flex items-center justify-center group"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`} // Composite key to force re-render on position change if needed, or simple ID if we want layout animation
                  // Actually, strictly using ID allows Framer to animate positions.
                  // But since we are cycling content slots, let's use a stable index layout? 
                  // No, simple fade/slide is safer for "Show 3".
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }} // This might get chaotic with 3.
                  // Simpler: Just fade in/out the new set? 
                  // Or just animate the properties.
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="h-full min-h-[400px] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col relative group hover:bg-white/10 transition-colors">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-primary/20 transition-colors" />

                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-white/80 mb-8 leading-relaxed italic font-light text-sm md:text-base">
                      &quot;{item.content}&quot;
                    </p>

                    <div className="mt-auto flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-white">
                        {item.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{item.name}</h4>
                        <p className="text-white/50 text-xs">{item.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                  ? "bg-white w-6"
                  : "bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to testimonial group starting at ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
