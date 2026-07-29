import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import { JOURNAL_POSTS } from "@/lib/journal"
import React from "react"

// Import custom templates — one file per post slug
import EventFailurePatterns from "@/components/blog-templates/event-failure-patterns"
import AnalysisDesignSynthesis from "@/components/blog-templates/analysis-design-synthesis"
import HardwareToWeb from "@/components/blog-templates/hardware-to-web"
import FuelShieldCaseStudy from "@/components/blog-templates/fuelshield-case-study"
import ManufacturingDashboardsFail from "@/components/blog-templates/manufacturing-dashboards-fail"
import StudentProjectsAtScale from "@/components/blog-templates/student-projects-at-scale"
import ObsessingOverLatency from "@/components/blog-templates/obsessing-over-latency"
import AurangabadManufacturingOpportunity from "@/components/blog-templates/aurangabad-manufacturing-opportunity"

const templates: Record<string, React.ComponentType> = {
  "event-failure-patterns": EventFailurePatterns,
  "analysis-design-synthesis": AnalysisDesignSynthesis,
  "hardware-to-web": HardwareToWeb,
  "fuelshield-case-study": FuelShieldCaseStudy,
  "manufacturing-dashboards-fail": ManufacturingDashboardsFail,
  "student-projects-at-scale": StudentProjectsAtScale,
  "obsessing-over-latency": ObsessingOverLatency,
  "aurangabad-manufacturing-opportunity": AurangabadManufacturingOpportunity,
}

export async function generateStaticParams() {
  return JOURNAL_POSTS.map((post) => ({
    slug: post.slug,
  }))
}
import PostClient from "./PostClient"



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = JOURNAL_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — Yash Ghodele`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://yash-ghodele.pages.dev/journal/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yash-ghodele.pages.dev/journal/${post.slug}`,
      siteName: "Yash Ghodele Portfolio",
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: "@why_be_yashhh",
    },
  }
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = JOURNAL_POSTS.find((p) => p.slug === slug)
  if (!post) {
    notFound()
    return null
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://yash-ghodele.pages.dev${post.image}`,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": "https://yash-ghodele.pages.dev"
        },
        "publisher": {
          "@type": "Person",
          "name": "Yash Ghodele",
          "url": "https://yash-ghodele.pages.dev"
        },
        "mainEntityOfPage": `https://yash-ghodele.pages.dev/journal/${post.slug}`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yash-ghodele.pages.dev" },
          { "@type": "ListItem", "position": 2, "name": "Journal", "item": "https://yash-ghodele.pages.dev/journal" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://yash-ghodele.pages.dev/journal/${post.slug}` }
        ]
      }
    ]
  }

  // Render custom template if available
  const Template = templates[slug]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {Template ? (
        <Template />
      ) : (
        <div className="min-h-screen bg-background">
          <main>
            <PostClient post={post} />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
