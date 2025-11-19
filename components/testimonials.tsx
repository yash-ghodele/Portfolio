"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
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
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
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
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 group">
                      <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
