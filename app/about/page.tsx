import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutClient from "@/components/about-client"

export const metadata: Metadata = {
  title: "About — Yash Ghodele",
  description:
    "From ECE circuits to cloud systems. The hardware-to-software bridge. Founder of Ugam Digital Studio, building IoT and full-stack solutions from Aurangabad for the world.",
  alternates: { canonical: "https://yash-ghodele.pages.dev/about" },
  openGraph: {
    title: "About | Yash Ghodele",
    description:
      "From ECE circuits to cloud systems. Founder of Ugam Digital Studio.",
    url: "https://yash-ghodele.pages.dev/about",
    siteName: "Yash Ghodele Portfolio",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutClient />
      </main>
      <Footer />
    </div>
  )
}
