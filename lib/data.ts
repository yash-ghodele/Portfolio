import { Terminal, Layout, Cpu, Shield, LucideIcon } from "lucide-react"
import React from "react"

export interface Project {
    id: number
    title: string
    subtitle: string
    slug: string // Added for dynamic routing
    image: string
    icon: React.ReactNode // We can store the component or use a string identifier map
    description: string
    stats: string
    tech: string[]
    links: { demo: string; code: string }
    color: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "FuelGuard",
        subtitle: "IoT Solution",
        slug: "fuelguard",
        image: "/fuel-monitoring-system.png",
        icon: React.createElement(Layout, { className: "w-8 h-8" }),
        description: "A comprehensive IoT solution for real-time fuel theft detection and monitoring. Integrates ultrasonic sensors, MQTT security, and a responsive Next.js dashboard.",
        stats: "Saved 20% fuel costs for 50+ fleets",
        tech: ["Next.js", "TypeScript", "Firebase", "MQTT", "ESP32", "+3"],
        links: { demo: "#", code: "#" },
        color: "from-purple-500 to-blue-600"
    },
    {
        id: 2,
        title: "Sanjivani",
        subtitle: "AI Diagnosis",
        slug: "sanjivani",
        image: "/agriculture-ai-crop-disease.jpg",
        icon: React.createElement(Cpu, { className: "w-8 h-8" }),
        description: "AI-powered crop disease detection system using CNNs (Convolutional Neural Networks). empowering farmers with instant diagnosis via mobile upload.",
        stats: "98% Accuracy across 15 crop types",
        tech: ["Python", "TensorFlow", "React", "OpenCV", "Flask", "+2"],
        links: { demo: "#", code: "#" },
        color: "from-green-500 to-emerald-600"
    },
    {
        id: 3,
        title: "Smart CRM",
        subtitle: "Business Automation",
        slug: "smart-crm",
        image: "/crm-business-management.jpg",
        icon: React.createElement(Terminal, { className: "w-8 h-8" }),
        description: "Automated B2B lead generation and verification system. Features a custom 5-step validation workflow and rich reporting engine.",
        stats: "Processed 10k+ leads with 99.9% validity",
        tech: ["VBA", "MS Access", "Automation", "Excel", "+1"],
        links: { demo: "#", code: "#" },
        color: "from-orange-500 to-red-600"
    },
    {
        id: 4,
        title: "IoT Security",
        subtitle: "Home Defense",
        slug: "iot-security",
        image: "/smart-lock-security-system.jpg",
        icon: React.createElement(Shield, { className: "w-8 h-8" }),
        description: "Intelligent multi-mode door lock system with remote surveillance. autonomous lockdown capabilities and real-time intrusion alerts.",
        stats: "0.5s Response time for localized threats",
        tech: ["ESP8266", "Blynk IoT", "C++", "Hardware", "+4"],
        links: { demo: "#", code: "#" },
        color: "from-blue-500 to-cyan-600"
    }
]
