import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutClient from "@/components/about-client"

export const metadata: Metadata = {
  title: "About — Yash Ghodele",
  description:
    "Electronics & Computer Engineering student at MIT College of Engineering, Chhatrapati Sambhajinagar. Hands-on experience in project planning, IoT architectures, and large-scale technical operations.",
  alternates: { canonical: "https://yash-ghodele.pages.dev/about" },
  openGraph: {
    title: "About | Yash Ghodele",
    description:
      "Bridging ECE circuits, embedded systems, and modern web platforms. Engineering undergraduate and technical lead based in Chhatrapati Sambhajinagar.",
    url: "https://yash-ghodele.pages.dev/about",
    siteName: "Yash Ghodele Portfolio",
    images: [{ url: "/images/hero/yash-ghodele.jpg", width: 1200, height: 630, alt: "Yash Ghodele" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Yash Ghodele",
    description:
      "The hardware-to-software bridge: ECE circuits, embedded telemetry, and production web applications from Chhatrapati Sambhajinagar.",
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
