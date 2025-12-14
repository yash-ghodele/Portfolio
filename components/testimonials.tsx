"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, StarHalf, Quote, Terminal, Hash } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    },
  }

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Professor, MIT College of Engg.",
      content:
        "Yash has demonstrated exceptional leadership skills. His ability to organize large-scale technical events like InnoHack hackathons with 200+ participants showcases his project management abilities.",
      rating: 5,
      role: "MENTOR"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Team Member, BotBuddies",
      content:
        "Working under Yash's leadership was an incredible learning experience. His expertise in IoT and ability to mentor the team helped us deliver outstanding projects.",
      rating: 5,
      role: "COLLEAGUE"
    },
    {
      id: 3,
      name: "Amit Deshmukh",
      position: "Participant, InnoHack 2025",
      content:
        "One of the most well-organized events I've attended. The platform was seamless and the judging process was fair. His attention to detail is remarkable.",
      rating: 5,
      role: "PARTICIPANT"
    },
    {
      id: 4,
      name: "Sneha Patil",
      position: "IETE Students Forum",
      content:
        "Yash brought fresh ideas and energy. His ability to coordinate between different teams made him an invaluable member of our organization.",
      rating: 4.5,
      role: "PEER"
    },
    {
      id: 5,
      name: "Rohit Mehta",
      position: "Mentee, IoT Workshop",
      content:
        "His mentorship in IoT has been instrumental. He explains complex concepts clearly and generous shares his practical expertise with others.",
      rating: 5,
      role: "STUDENT"
    },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-3 w-3 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-3 w-3 fill-primary text-primary" />)
    }

    return <div className="flex gap-0.5">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-32 relative bg-black overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-primary font-mono text-sm tracking-wider">SYSTEM_LOGS // FEEDBACK</span>
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            DATA TRANSMISSIONS
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full pt-1">
                    <div className="group h-full cursor-pointer relative">
                      {/* Tech Borders */}
                      <div className="absolute top-0 left-0 w-8 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
                      <div className="absolute top-0 left-0 w-[2px] h-8 bg-primary transition-all duration-300 group-hover:h-full"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></div>
                      <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-primary transition-all duration-300 group-hover:h-full"></div>

                      {/* Card Body */}
                      <div className="h-full bg-zinc-950 p-6 border border-zinc-800 transition-all duration-300 group-hover:border-primary/50 relative overflow-hidden">
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300"></div>

                        <div className="flex justify-between items-start mb-6">
                          <div className="flex flex-col">
                            <span className="text-xs font-mono text-primary/70 mb-1">ID: USER_0{testimonial.id}</span>
                            <h4 className="font-bold text-white text-lg font-mono tracking-tight group-hover:text-primary transition-colors">{testimonial.name}</h4>
                            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{testimonial.role}</span>
                          </div>
                          <Quote className="w-8 h-8 text-zinc-800 group-hover:text-primary/20 transition-colors" />
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed font-mono border-l-2 border-zinc-800 pl-4 mb-6 group-hover:border-primary/50 transition-colors">
                          {testimonial.content}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed border-zinc-800">
                          <span className="text-xs text-zinc-600 font-mono flex items-center gap-1">
                            <Hash className="w-3 h-3" /> {testimonial.rating.toFixed(1)}
                          </span>
                          <div className="bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-12 gap-4">
              <CarouselPrevious className="relative static translate-y-0 h-10 w-10 border border-zinc-800 bg-black hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 rounded-none" />
              <CarouselNext className="relative static translate-y-0 h-10 w-10 border border-zinc-800 bg-black hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 rounded-none" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
