"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "RadCollect - ROV Robot",
      shortDescription: "Remotely Operated Vehicle for sample collection in nuclear plants",
      description: "An advanced ROV system designed for exploration in hazardous environments",
      image: "/robot-rov-underwater.jpg",
      tags: ["Arduino", "IoT", "Robotics", "C++"],
      features: [
        "Wireless remote operation",
        "Live video streaming",
        "Automated sample collection",
        "Depth and pressure sensors",
        "Durable waterproof design",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "RadCollect is a sophisticated Remotely Operated Vehicle designed for collecting samples in nuclear plants and hazardous environments. Built with Arduino microcontrollers and IoT sensors, it features live monitoring, wireless control, and automated sample collection mechanisms. The system includes multiple sensors for environmental monitoring and a robust design for extreme conditions.",
    },
    {
      id: 2,
      title: "FuelGuard",
      shortDescription: "Real-time fuel monitoring and theft detection system",
      description: "IoT-based system for fuel tank monitoring and security",
      image: "/fuel-monitoring-system.jpg",
      tags: ["IoT", "Arduino", "Firebase", "React"],
      features: [
        "Live fuel level monitoring",
        "Theft detection alerts",
        "GPS tracking",
        "Mobile app dashboard",
        "Historical data analytics",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "FuelGuard is an intelligent IoT solution for monitoring fuel tanks and detecting unauthorized access or theft. The system uses Arduino-based sensors to track fuel levels continuously, with data synced to Firebase. Users can monitor their fuel inventory through a React-based mobile app with alerts for anomalies and theft attempts.",
    },
    {
      id: 3,
      title: "AI Crop Disease Prediction",
      shortDescription: "Machine learning model for predicting crop diseases",
      description: "AI-powered system for early crop disease detection",
      image: "/agriculture-ai-crop-disease.jpg",
      tags: ["Python", "Machine Learning", "React", "Firebase"],
      features: [
        "Image recognition for disease detection",
        "Early warning system",
        "Treatment recommendations",
        "Farmer dashboard",
        "Historical trend analysis",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This AI-powered system uses machine learning to predict and identify crop diseases from images. Farmers can upload photos of their crops, and the system analyzes them to detect diseases early. It provides treatment recommendations and tracks disease patterns over time, helping farmers make informed decisions.",
    },
    {
      id: 4,
      title: "Smart CRM System",
      shortDescription: "Customer Relationship Management platform for businesses",
      description: "Full-featured CRM solution with analytics and automation",
      image: "/crm-business-management.jpg",
      tags: ["React", "Node.js", "MongoDB", "Firebase"],
      features: [
        "Customer database management",
        "Sales pipeline tracking",
        "Automated follow-ups",
        "Analytics dashboard",
        "Integration capabilities",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A comprehensive CRM system designed to help businesses manage customer relationships effectively. Features include customer database management, sales pipeline tracking, automated follow-ups, and detailed analytics. Built with React and Node.js, it provides a scalable solution for growing businesses.",
    },
    {
      id: 5,
      title: "IoT-Based Door Locking System",
      shortDescription: "Smart door lock with remote access and biometric authentication",
      description: "Intelligent security system with multiple authentication methods",
      image: "/smart-lock-security-system.jpg",
      tags: ["Arduino", "IoT", "Biometrics", "Mobile App"],
      features: [
        "Biometric authentication",
        "Remote unlock capability",
        "Access logs and history",
        "Mobile app control",
        "Emergency override",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "An advanced IoT-based door locking system that combines multiple authentication methods including biometrics, PIN codes, and remote access. Built with Arduino and IoT sensors, it provides secure access control with detailed logging. Users can manage access remotely through a mobile app.",
    },
    {
      id: 6,
      title: "InnoHack Hackathon Platform",
      shortDescription: "Event management platform for organizing hackathons",
      description: "Complete platform for hackathon registration and management",
      image: "/hackathon-event-platform.jpg",
      tags: ["React", "Firebase", "Tailwind CSS", "Node.js"],
      features: [
        "Team registration system",
        "Live leaderboard",
        "Project submission portal",
        "Judge dashboard",
        "Event analytics",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "A comprehensive platform built for organizing InnoHack hackathons. Features include team registration, live leaderboards, project submission portals, and judge dashboards. Built with React and Firebase, it streamlines the entire hackathon management process.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
