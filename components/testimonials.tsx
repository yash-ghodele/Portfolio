"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf, Quote } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
      position: "Professor, MIT College of Engineering",
      content:
        "Yash has demonstrated exceptional leadership skills as Event Head of ECESA. His ability to organize large-scale technical events like InnoHack hackathons with 200+ participants showcases his project management and coordination abilities. He's a natural leader who brings innovation to every initiative.",
      rating: 5,
      image: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Team Member, BotBuddies",
      content:
        "Working under Yash's leadership at BotBuddies has been an incredible learning experience. His expertise in IoT and robotics, combined with his ability to mentor and guide the team, has helped us deliver outstanding projects. He's both technically skilled and an excellent team leader.",
      rating: 5,
      image: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Amit Deshmukh",
      position: "Participant, InnoHack 2025",
      content:
        "The InnoHack hackathon organized by Yash was one of the most well-organized events I've attended. The platform was seamless, the judging process was fair, and the overall experience was exceptional. His attention to detail and commitment to creating an outstanding participant experience is remarkable.",
      rating: 5,
      image: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Sneha Patil",
      position: "IETE Students Forum Member",
      content:
        "As Cultural Secretary, Yash brought fresh ideas and energy to our events. His ability to coordinate between different teams and ensure smooth execution of cultural and technical events made him an invaluable member of our organization. He's a great collaborator and problem-solver.",
      rating: 4.5,
      image: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Rohit Mehta",
      position: "Mentee, IoT Workshop",
      content:
        "Yash's mentorship in IoT and embedded systems has been instrumental in my learning journey. He explains complex concepts clearly and is always willing to help. His projects like FuelGuard and the ROV Robot demonstrate his practical expertise, which he generously shares with others.",
      rating: 5,
      image: "/placeholder-user.jpg",
    },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-primary text-primary" />)
    }

    return <div className="flex gap-0.5">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Testimonials
          </Badge>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            What People Say
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues, mentors, and event participants
          </p>
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
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full border-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 flex flex-col h-full relative">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                          <Quote className="h-10 w-10 fill-current" />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                            <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground flex-grow mb-6 text-sm leading-relaxed italic relative z-10">
                          "{testimonial.content}"
                        </p>

                        <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                          <div className="bg-primary/5 px-3 py-1 rounded-full">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Verified
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="relative static translate-y-0 h-10 w-10 border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
              <CarouselNext className="relative static translate-y-0 h-10 w-10 border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
