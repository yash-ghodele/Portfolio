import type { Metadata } from "next"
import Footer from "@/components/footer"
import WorkClient from "@/components/work-client"
import { getProjects } from "@/lib/fetch"

export const metadata: Metadata = {
  title: "Work — Yash Ghodele",
  description:
    "Explore engineering projects by Yash Ghodele: CampusCast (WhatsApp Digital Signage OS), FuelShield (IoT Fuel Theft Detection), Sanjivani, WireFlow, and production-grade embedded systems.",
  alternates: { canonical: "https://yash-ghodele.pages.dev/work" },
  openGraph: {
    title: "Work | Yash Ghodele",
    description:
      "Engineering real-world systems: CampusCast WhatsApp digital signage, FuelShield IoT fuel monitoring, Sanjivani AI agri-tech, and WireFlow industrial dashboards.",
    url: "https://yash-ghodele.pages.dev/work",
    siteName: "Yash Ghodele Portfolio",
    images: [{ url: "/images/hero/yash-ghodele.jpg", width: 1200, height: 630, alt: "Portfolio Work" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Yash Ghodele",
    description:
      "CampusCast, FuelShield, Sanjivani, WireFlow, and production IoT platforms built by Yash Ghodele.",
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
