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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  }

  const cardHover = {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }

  const projects = [
    // {
    //   id: 1,
    //   title: "RadCollect - ROV Robot",
    //   shortDescription: "Remotely Operated Vehicle for sample collection in nuclear plants",
    //   description: "An advanced ROV system designed for exploration in hazardous environments",
    //   image: "/robot-rov-underwater.jpg",
    //   tags: ["Arduino", "IoT", "Robotics", "C++"],
    //   features: [
    //     "Wireless remote operation",
    //     "Live video streaming",
    //     "Automated sample collection",
    //     "Depth and pressure sensors",
    //     "Durable waterproof design",
    //   ],
    //   demoLink: "#", // TODO: Update with actual demo link
    //   githubLink: "#", // TODO: Update with actual GitHub repository link
    //   fullDescription:
    //     "RadCollect is a sophisticated Remotely Operated Vehicle designed for collecting samples in nuclear plants and hazardous environments. Built with Arduino microcontrollers and IoT sensors, it features live monitoring, wireless control, and automated sample collection mechanisms. The system includes multiple sensors for environmental monitoring and a robust design for extreme conditions.",
    // },
    {
      id: 1,
      title: "FuelGuard",
      shortDescription: "Real-time fuel monitoring and theft detection system",
      description: "IoT-based system for fuel tank monitoring and security",
      image: "/fuel-monitoring-system.jpg",
      tags: ["Next.js 14", "ESP32", "Firebase", "MQTT", "TypeScript"],
      features: [
        "Live fuel level monitoring with ultrasonic & float sensors",
        "Theft & tamper detection with instant alerts",
        "GPS tracking with NEO-6M module",
        "Real-time dashboard with Recharts analytics",
        "Multi-channel notifications (FCM, SMS, Email)",
        "Historical data analytics & consumption trends",
        "Fuel shutoff control via relay module",
        "MQTT bridge with TLS security",
      ],
      demoLink: "#", // TODO: Update with actual demo link
      githubLink: "#", // TODO: Update with actual GitHub repository link
      fullDescription:
        "FuelGuard is a comprehensive full-stack IoT solution for intelligent fuel monitoring, theft detection, and remote oversight of fuel tanks. Built with ESP32 microcontroller and professional-grade sensors (JSN-SR04T ultrasonic, float sensor, NEO-6M GPS), the system provides real-time fuel level measurement with high accuracy. Data flows through a secure MQTT bridge (with TLS encryption) to Firebase Firestore, triggering Cloud Functions for multi-channel notifications via FCM, Twilio SMS, and SendGrid email. The Next.js 14 frontend features a React 18 dashboard with TypeScript, Tailwind CSS, Radix UI components, and Recharts for comprehensive analytics. Hardware includes tamper detection via reed switch and emergency fuel shutoff control through relay modules. The architecture ensures real-time monitoring, instant theft alerts, GPS tracking, and historical consumption analytics with trends and leak detection. Complete DevOps pipeline with GitHub Actions CI/CD, Docker containerization for MQTT broker, and PM2 process management ensures production-ready reliability.",
    },
    {
      id: 2,
      title: "Sanjivani – AI Crop Disease Prediction",
      shortDescription: "CNN-based agricultural health monitoring system",
      description: "AI-powered disease detection with instant diagnosis & treatment",
      image: "/agriculture-ai-crop-disease.jpg",
      tags: ["Python", "CNN", "TensorFlow", "React", "Vite", "Firebase", "OpenCV"],
      features: [
        "AI-based disease detection with CNN model (disease name, crop type, confidence score)",
        "Early warning system to prevent large-scale disease spread",
        "Treatment recommendations (organic remedies, chemical options, preventive measures)",
        "React-based farmer dashboard with real-time predictions & crop health status",
        "Historical trend analysis to identify recurring disease patterns",
        "OpenCV image preprocessing for accurate predictions",
        "Firebase integration for image storage & prediction history",
        "Accessible smart farming solution for rural communities",
      ],
      demoLink: "#", // TODO: Update with actual demo link
      githubLink: "#", // TODO: Update with actual GitHub repository link
      fullDescription:
        "Sanjivani is an AI-powered agricultural health monitoring system that predicts and identifies crop diseases from leaf images using machine learning and deep learning. Farmers upload photos of crop leaves through a React + Vite frontend, and the system instantly analyzes them using a trained CNN (Convolutional Neural Network) model built with TensorFlow/PyTorch. The architecture flows: Farmer Uploads Image → React Frontend (Vite) → Backend API (Flask/FastAPI) → AI Model (CNN) → Prediction + Treatment Advice → Firebase (Storage + Database). The CNN model predicts disease name, crop type, and confidence score with high accuracy using OpenCV for image preprocessing. For each detected disease, the system provides comprehensive treatment recommendations including organic remedies, chemical treatment options, and preventive measures. The React-based farmer dashboard displays real-time disease predictions, treatment steps, previously analyzed images, and overall crop health status. Historical trend analysis tracks disease occurrences over time, helping identify recurring patterns and supporting farm-level decision-making. Built with Python backend (NumPy, Pandas, Scikit-learn), Firebase Authentication for optional login, Firebase Storage for image uploads, and Firestore to store prediction history. Sanjivani increases efficiency, reduces crop loss through early disease identification, saves time and cost for farmers, increases agricultural productivity, and makes smart farming accessible to rural communities with data-driven insights.",
    },
    {
      id: 3,
      title: "Smart CRM System – B2B Contact Discovery & Lead Management",
      shortDescription: "Excel VBA + Access-based B2B lead generation & verification system",
      description: "Automated contact discovery with 5-step verification workflow",
      image: "/crm-business-management.jpg",
      tags: ["Excel VBA", "Microsoft Access", "B2B", "Data Verification", "Automation"],
      features: [
        "B2B contact discovery: Identify key decision-makers (managers, directors) within organizations",
        "Intelligent data entry software: Custom Excel VBA UI with textboxes, combo boxes, macro automation",
        "5-step verification workflow: Prospect ID → Data Accumulation → Screening → Telephonic Validation → QA",
        "Microsoft Access database integration: Indexed storage with querying, record-locking, multi-user access",
        "Automated data entry, validation, filtering (search, order by), and export to Excel",
        "Telephonic validation: Manual verification of prospect data for accuracy",
        "Data export & report generation: Clean B2B lead lists with company/prospect details",
        "Targeted list building: Filter by roles, designations, geography, industry, company size",
      ],
      demoLink: "#", // TODO: Update with actual demo link
      githubLink: "#", // TODO: Update with actual GitHub repository link
      fullDescription:
        "Smart CRM System is a B2B Contact Discovery and Lead Management System designed to help organizations identify key decision-makers, build quality lead lists, and maintain accurate customer databases. The system helps businesses save time, reduce resource wastage, and increase sales efficiency by providing verified, structured, and industry-relevant contact data. Built using Microsoft Excel VBA and Microsoft Access, it forms a complete CRM-style data entry, verification, and management solution. The system features B2B contact discovery to identify key contacts within organizations (decision-makers, managers, directors), collect and verify accurate prospect data manually and telephonically, and build targeted lists based on roles, designations, geography, industry, and company size. The intelligent data entry software uses a custom CRM-like UI built with Excel Developer Tools, featuring input forms with textboxes, labels, combo boxes, and buttons. Macro-enabled automation handles data entry, data validation, filtering (search, order by), and exporting to Excel. The 5-step data verification workflow includes: (1) Prospect Identification, (2) Data Accumulation, (3) Data Screening, (4) Telephonic Validation, and (5) Quality Assurance. Microsoft Access database integration stores processed and verified contact data with support for indexing, querying, record-locking, and multi-user access. The system provides data export & report generation, exporting clean B2B lead lists into Excel sheets with automated formatting and structuring. Output format includes company name, website, employee size, industry, address, contact number, prospect name, title, email, and phone. The architecture consists of Excel Frontend UI (VBA-driven) → Data verification workflow → Access database backend → Tele-calling validation step. Technologies used include Microsoft Excel (Developer mode, VBA macros, Form Controls/ActiveX Controls), Microsoft Access (database storage, queries, forms, reports), and data collection tools (LinkedIn, Facebook, web research, tele-calling verification). Applications include B2B lead generation, customer and prospect profiling, sales acceleration, contact discovery for marketing campaigns, and outsourcing lead management services. The system automates data entry, filtering, export, and verification workflows, resulting in high-quality contact lists for sales and marketing operations.",
    },
    {
      id: 4,
      title: "IoT Smart Door Lock & Home Security System",
      shortDescription: "Multi-mode intelligent locking with ESP8266 & Blynk IoT",
      description: "Hardware-driven smart home security with 4 operating modes",
      image: "/smart-lock-security-system.jpg",
      tags: ["ESP8266", "Blynk IoT", "Arduino", "IR Sensor", "PIR Sensor", "WiFi"],
      features: [
        "Auto Mode: IR sensor detects presence & auto-opens door with hands-free entry",
        "Manual Mode: User-controlled operation via Blynk app (sensors disabled)",
        "Full Lockdown Mode: Maximum security, all automation disabled, PIR alerts active",
        "Security Mode: PIR motion detection triggers Blynk notifications & buzzer alarm",
        "Real-time Blynk app control (lock/unlock, mode switching, door status)",
        "Indoor motion detection with PIR sensor for intrusion alerts",
        "Event & access logs with timestamps (mode changes, unlock events, intrusions)",
        "Remote monitoring & control from anywhere via Blynk Cloud",
      ],
      demoLink: "#", // TODO: Update with actual demo link
      githubLink: "#", // TODO: Update with actual GitHub repository link
      fullDescription:
        "This IoT-Based Smart Door Locking & Home Security System is a fully hardware-driven smart home project built using ESP8266 NodeMCU, IR sensors, PIR motion sensor, and Blynk IoT Cloud. The system supports four intelligent modes: (1) Auto Mode - IR proximity sensor detects person at door, automatically unlocks and opens, then auto-closes after delay (perfect for hands-free entry); (2) Manual Mode - door opens/closes only via Blynk app controls with sensors disabled for complete user control; (3) Full Lockdown Mode - all automatic functions disabled, door cannot be opened by IR detection, only admin can unlock via Blynk, PIR motion sensor remains active for intrusion alerts (ideal for night-time or when leaving house); (4) Security Mode - PIR motion sensor inside house becomes active, any movement triggers Blynk push notifications and optional buzzer alarm with IR sensor disabled (used when house is empty or during travel). The architecture flows: IR Sensor (Door) → Auto Mode Trigger → ESP8266 ← Blynk Cloud ← User App, with PIR Motion Sensor → Intrusion Alerts. Hardware components include ESP8266 NodeMCU (main controller), IR proximity sensor (detects person at door), PIR motion sensor (indoor movement detection), servo motor/solenoid lock (locking mechanism), relay module (drives lock), buzzer (security alarm), reed switch (door open/close feedback), and power supply (5V/12V). Software built with Arduino IDE firmware and Blynk IoT App for mode switching, remote control, dashboard, alerts, and logs. ESP8266 WiFi enables cloud communication with custom logic for mode switching, sensor control, and alerts. The system provides real-time notifications for door opened automatically, door unlocked manually, motion detected inside house, and forced entry or suspicious activity. Event & access logs track timestamps of mode changes, unlock events, motion/intrusion events, and auto-mode triggers. This project stands out by combining automation + remote control + security in a multi-mode intelligent locking system with real-time home security monitoring, low-cost and highly reliable, fully hardware + IoT integrated solution.",
    },
    // {
    //   id: 6,
    //   title: "InnoHack Hackathon Platform",
    //   shortDescription: "Event management platform for organizing hackathons",
    //   description: "Complete platform for hackathon registration and management",
    //   image: "/hackathon-event-platform.jpg",
    //   tags: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    //   features: [
    //     "Team registration system",
    //     "Live leaderboard",
    //     "Project submission portal",
    //     "Judge dashboard",
    //     "Event analytics",
    //   ],
    //   demoLink: "#", // TODO: Update with actual demo link
    //   githubLink: "#", // TODO: Update with actual GitHub repository link
    //   fullDescription:
    //     "A comprehensive platform built for organizing InnoHack hackathons. Features include team registration, live leaderboards, project submission portals, and judge dashboards. Built with React and Firebase, it streamlines the entire hackathon management process.",
    // },
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
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Portfolio
          </Badge>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of innovative IoT, AI/ML, and automation projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className={`group h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-2 ${expandedProject === project.id
                  ? "ring-2 ring-primary shadow-glow border-primary/50"
                  : "border-border hover:border-primary/30"
                  }`}
              >
                <CardContent className="p-0">
                  {/* Image Section with Enhanced Overlay */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Dual gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-2 text-foreground drop-shadow-lg group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Content Section with Better Spacing */}
                  <div className="p-6 space-y-4 bg-gradient-to-b from-background to-muted/10">
                    {/* Tech Stack Tags with Hover Effects */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs font-medium px-3 py-1 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs font-medium px-3 py-1 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                        >
                          +{project.tags.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Action Buttons - Enhanced Design */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1 min-w-[100px] bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                        }}
                      >
                        <span className="mr-2">📖</span>
                        Learn More
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.githubLink, "_blank")
                        }}
                        aria-label="View GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.demoLink, "_blank")
                        }}
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Expandable Features Section - Enhanced */}
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 pt-3 pb-1 border-t mt-2 rounded-b-lg group/toggle"
                    >
                      <span className="font-medium">
                        {expandedProject === project.id ? "Hide" : "View"} Key Features
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${expandedProject === project.id ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 pt-2"
                        >
                          <ul className="space-y-2">
                            {project.features.slice(0, 5).map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-primary mt-1">✓</span>
                                <span className="flex-1">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                          {project.features.length > 5 && (
                            <p className="text-xs text-muted-foreground italic">
                              +{project.features.length - 5} more features in details
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {
        selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
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
              <div className="space-y-4 overflow-y-auto pr-2 max-h-[60vh]">
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
                <div className="flex justify-end gap-4 mt-4 pb-2">
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
        )
      }
    </section >
  )
}
