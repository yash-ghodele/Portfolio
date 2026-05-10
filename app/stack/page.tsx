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
    description: "Full-stack tools and hardware arsenal — IoT to cloud to UI.",
    url: "https://yash-ghodele.pages.dev/stack",
    siteName: "Yash Ghodele Portfolio",
    type: "website",
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
