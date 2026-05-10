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
      "Bridging the gap between ECE circuits and cloud systems. Founder of Ugam Digital Studio and student leader building production-grade IoT and full-stack solutions.",
    url: "https://yash-ghodele.pages.dev/about",
    siteName: "Yash Ghodele Portfolio",
    images: [{ url: "/images/hero/yash-ghodele.jpg", width: 1200, height: 630, alt: "Yash Ghodele" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Yash Ghodele",
    description: "The hardware-to-software bridge. Founder of Ugam Digital Studio.",
    images: ["/images/hero/yash-ghodele.jpg"],
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
