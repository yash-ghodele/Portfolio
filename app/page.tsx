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
    "Yash Ghodele is a Full Stack Developer and IoT Systems Engineer. Creator of CampusCast (WhatsApp Digital Signage OS), FuelShield (IoT Fuel Theft Detection), Sanjivani, and WireFlow — building scalable systems from Aurangabad.",

  keywords: [
    "Yash Ghodele",
    "CampusCast",
    "WhatsApp Digital Notice Board",
    "FuelShield",
    "IoT Fuel Theft Detection",
    "Sanjivani",
    "WireFlow",
    "Full Stack Developer",
    "IoT Systems Engineer",
    "MIT Aurangabad",
    "Portfolio",
  ],

  openGraph: {
    title: "Yash Ghodele | Portfolio",
    description:
      "Full Stack Developer & IoT Systems Engineer. Creator of CampusCast, FuelShield, Sanjivani, and WireFlow. Production web platforms and embedded hardware from MIT Aurangabad.",
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
      "Creator of CampusCast, FuelShield, Sanjivani, and WireFlow. Full Stack Developer & IoT Systems Engineer building production platforms.",
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
