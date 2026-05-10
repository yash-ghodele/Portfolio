import type { Metadata } from "next"
import Footer from "@/components/footer"
import WorkClient from "@/components/work-client"
import { getProjects } from "@/lib/sanity/fetch"

export const metadata: Metadata = {
  title: "Work — Yash Ghodele",
  description:
    "IoT fleet systems, industrial dashboards, full-stack apps, and engineering projects by Yash Ghodele — Founder of Ugam Digital Studio.",
  alternates: { canonical: "https://yash-ghodele.pages.dev/work" },
  openGraph: {
    title: "Work | Yash Ghodele",
    description:
      "IoT fleet systems, industrial dashboards, full-stack apps, and engineering projects.",
    url: "https://yash-ghodele.pages.dev/work",
    siteName: "Yash Ghodele Portfolio",
    type: "website",
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
