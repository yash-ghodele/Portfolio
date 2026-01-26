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
    "Portfolio of Yash - B.Tech ECE Student, Event Manager, IoT Enthusiast, and Community Leader at MIT College of Engineering, Aurangabad",
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
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
