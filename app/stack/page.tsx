import type { Metadata } from "next"
import Footer from "@/components/footer"
import StackClient from "@/components/stack-client"

export const metadata: Metadata = {
  title: "Stack — Yash Ghodele",
  description:
    "Tools, hardware arsenal, and engineering philosophy. ESP32, MQTT, LoRaWAN, Next.js, Firebase, Flutter — the full picture from sensor to screen.",
  alternates: { canonical: "https://yash-ghodele.pages.dev/stack" },
  openGraph: {
    title: "Stack | Yash Ghodele",
    description: "Hardware arsenal and full-stack engineering toolkit — from ESP32 and MQTT to Next.js and Firebase.",
    url: "https://yash-ghodele.pages.dev/stack",
    siteName: "Yash Ghodele Portfolio",
    images: [{ url: "/images/hero/yash-ghodele.jpg", width: 1200, height: 630, alt: "Tech Stack" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack | Yash Ghodele",
    description: "Tools, hardware arsenal, and engineering philosophy.",
    images: ["/images/hero/yash-ghodele.jpg"],
  },
}

export default function StackPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <StackClient />
      </main>
      <Footer />
    </div>
  )
}
