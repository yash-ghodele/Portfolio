import type { Metadata } from "next"
import Hero from "@/components/hero"
import BentoGateway from "@/components/bento-gateway"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: {
    absolute: "Yash Ghodele | Portfolio",
  },
  description:
    "Electronics & Computer Engineering undergraduate from Chhatrapati Sambhajinagar specializing in IoT telemetry, embedded firmware, and modern full-stack web platforms. Coordinated national hackathons with 1,000+ participants.",

  keywords: [
    "Yash Ghodele",
    "Electronics & Computer Engineering",
    "Full Stack Developer",
    "IoT Systems Engineer",
    "Project Management",
    "Embedded Systems",
    "ESP32",
    "Next.js",
    "React",
    "Firebase",
    "MQTT",
    "CampusCast",
    "FuelShield",
    "MIT College of Engineering",
    "Chhatrapati Sambhajinagar",
    "Chh. Sambhajinagar",
    "InnoHack",
    "BotBuddies",
  ],

  openGraph: {
    title: "Yash Ghodele | Full Stack Developer & IoT Engineer",
    description:
      "Electronics & Computer Engineering developer and project lead from Chhatrapati Sambhajinagar. Bridging hardware, IoT telemetry, and modern full-stack web applications.",
    url: "https://yash-ghodele.pages.dev",
    siteName: "Yash Ghodele Portfolio",
    images: [
      {
        url: "/images/hero/yash-ghodele.jpg",
        width: 600,
        height: 800,
        alt: "Yash Ghodele – Full Stack Developer & IoT Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yash Ghodele | Portfolio",
    description:
      "Electronics & Computer Engineering developer and project lead from Chhatrapati Sambhajinagar. Bridging hardware sensors and cloud platforms.",
    images: ["/images/hero/yash-ghodele.jpg"],
    creator: "@why_be_yashhh",
  },

  alternates: {
    canonical: "https://yash-ghodele.pages.dev",
  },
}

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <BentoGateway />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
