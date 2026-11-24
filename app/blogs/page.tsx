import type { Metadata } from "next"
import Footer from "@/components/footer"
import JournalClient from "./JournalClient"

export const metadata: Metadata = {
  title: "Blogs — Yash Ghodele",
  description:
    "Technical deep dives on IoT architecture, manufacturing dashboards, real-time latency engineering, and building in regional India.",
  alternates: { canonical: "https://yash-ghodele.pages.dev/blogs" },
  openGraph: {
    title: "Blogs | Yash Ghodele",
    description:
      "Technical deep dives on IoT, manufacturing, latency engineering, and building in Chhatrapati Sambhajinagar.",
    url: "https://yash-ghodele.pages.dev/blogs",
    siteName: "Yash Ghodele Portfolio",
    type: "website",
  },
}

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <JournalClient />
      </main>
      <Footer />
    </div>
  )
}
