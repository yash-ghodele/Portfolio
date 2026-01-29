import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { getProjects } from "@/lib/mdx"
import BackgroundParticles from "@/components/ui/background-particles"

export const metadata: Metadata = {
  title: "Yash Ghodele | Portfolio",
  description:
    "Yash Ghodele is a Full Stack Developer and IoT Engineer building real-world web platforms, embedded systems, and scalable student-led tech products. B.Tech ECE at MIT Aurangabad. Organizer of large-scale hackathons and technical communities.",

  openGraph: {
    title: "Yash Ghodele | Portfolio",
    description:
      "Building production-grade web apps, IoT systems, and real-world student tech platforms. Full Stack Developer & IoT Engineer from MIT Aurangabad.",
    url: "https://yash-ghodele.pages.dev",
    siteName: "Yash Ghodele Portfolio",
    images: [
      {
        url: "/Yash-Ghodele.jpg",
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
    images: ["/Yash-Ghodele.jpg"],
    creator: "@why_be_yashhh",
  },

  alternates: {
    canonical: "https://yash-ghodele.pages.dev",
  },
}

export default function Home() {
  const projects = getProjects()
  console.log('SERVER PROJECTS:', projects)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />

        {/* Continuous Background Wrapper */}
        <div className="relative w-full bg-gradient-to-b from-black via-zinc-900/10 to-black">
          <BackgroundParticles />
          <About />
          <TechStack />
          <Projects projects={projects} />
          <Experience />
          {/* <Testimonials /> */}
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
