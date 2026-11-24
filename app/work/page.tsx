import type { Metadata } from "next"
import Footer from "@/components/footer"
import WorkClient from "@/components/work-client"
import { getProjects } from "@/lib/fetch"

export const metadata: Metadata = {
  title: "Work — Yash Ghodele",
  description:
    "Technical portfolio of Yash Ghodele: Production IoT telemetry, embedded firmware, automated campus communications, and full-stack web platforms built from Chhatrapati Sambhajinagar.",
  alternates: { canonical: "https://yash-ghodele.pages.dev/work" },
  openGraph: {
    title: "Work | Yash Ghodele",
    description:
      "Engineering real-world systems: WhatsApp-driven digital signage, ultrasonic fuel telemetry, AI plant disease diagnostics, and industrial dashboards.",
    url: "https://yash-ghodele.pages.dev/work",
    siteName: "Yash Ghodele Portfolio",
    images: [{ url: "/images/hero/yash-ghodele.jpg", width: 1200, height: 630, alt: "Portfolio Work" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Yash Ghodele",
    description:
      "Real-world IoT systems, embedded telemetry, and production web architectures built by Yash Ghodele.",
    images: ["/images/hero/yash-ghodele.jpg"],
  },
}

export default async function WorkPage() {
  const projects = await getProjects()
  return (
    <div className="min-h-screen bg-background">
      <main>
        <WorkClient projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
