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
    "Yash Ghodele is a Full Stack Developer, IoT Engineer, and Founder of Ugam Digital Studio. Building real-world web platforms, embedded systems, and scalable student-led tech products from Aurangabad.",

  openGraph: {
    title: "Yash Ghodele | Portfolio",
    description:
      "Building production-grade web apps, IoT systems, and real-world student tech platforms. Full Stack Developer & IoT Engineer from MIT Aurangabad.",
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
      "Full Stack Developer & IoT Engineer building real-world systems, web platforms, and embedded products.",
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
