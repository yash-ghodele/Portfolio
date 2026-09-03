import type React from "react"
import type { Metadata, Viewport } from "next"

import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://yash-ghodele.pages.dev"),

  title: {
    default: "Yash Ghodele | Full Stack Developer & IoT Engineer",
    template: "%s | Yash Ghodele",
  },

  description:
    "Yash Ghodele is a Full Stack Developer & IoT Engineer specializing in React, Next.js, Python, Arduino, and Embedded Systems. B.Tech ECE student at MIT College of Engineering, Aurangabad. Executive Head at BotBuddies, organizing hackathons with 200+ participants.",

  applicationName: "Yash Ghodele Portfolio",
  category: "Technology, Engineering, Portfolio",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  keywords: [
    "Yash Ghodele",
    "AuthoSec",
    "Dual-QR Protocol",
    "Fintech Security",
    "Ugam Campus",
    "Full Stack Developer",
    "IoT Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python Developer",
    "Arduino",
    "Embedded Systems",
    "FuelShield",
    "Sanjivani",
    "Smart Garbage",
    "ESP Car",
    "Robotics",
    "Web Development",
    "Flutter Developer",
    "Hackathon Organizer",
    "Event Manager",
    "BotBuddies",
    "InnoHack",
    "MIT College of Engineering",
    "Aurangabad",
    "Chhatrapati Sambhajinagar",
    "India",
    "Portfolio",
    "ECESA",
    "IETE",
  ],

  authors: [{ name: "Yash Ghodele", url: "https://yash-ghodele.pages.dev" }],
  creator: "Yash Ghodele",
  publisher: "Yash Ghodele",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon-192x192.png",
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yash-ghodele.pages.dev",
    siteName: "Yash Ghodele Portfolio",
    title: "Yash Ghodele | Full Stack Developer & IoT Engineer",
    description:
      "Full Stack Developer & IoT Engineer building real-world systems, scalable web applications, and innovative IoT platforms. Organizing hackathons with 200+ participants.",
    images: [
      {
        url: "/images/hero/yash-ghodele.jpg",
        width: 600,
        height: 800,
        alt: "Yash Ghodele - Full Stack Developer & IoT Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yash Ghodele | Full Stack Developer & IoT Engineer",
    description:
      "Building real-world systems with Next.js, React, IoT, and Embedded Engineering. Organizing hackathons with 200+ participants.",
    images: ["/images/hero/yash-ghodele.jpg"],
    creator: "@why_be_yashhh",
  },

  alternates: {
    canonical: "https://yash-ghodele.pages.dev",
  },

  verification: {
    google: "tj2Zot6aCoCAHmYE1sfIDUsdS6ZqNAW3MlswpsRhK1A",
  },
}

import Navbar from "@/components/navbar"
import SmoothScroll from "@/components/ui/smooth-scroll"
import PageTransition from "@/components/ui/page-transition"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://yash-ghodele.pages.dev/#person",
        name: "Yash Ghodele",
        alternateName: ["why_be_yashhh", "Yash Ghodele Portfolio"],
        url: "https://yash-ghodele.pages.dev",
        image: "https://yash-ghodele.pages.dev/images/hero/yash-ghodele.jpg",
        description:
          "Full Stack Developer & IoT Engineer building scalable web platforms and real-world embedded systems. Founder of Ugam Digital Studio.",
        email: "yashghodele.work@gmail.com",
        telephone: "+917666168561",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aurangabad",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        sameAs: [
          "https://linkedin.com/in/yash-ghodele",
          "https://github.com/yash-ghodele",
          "https://instagram.com/why_be_yashhh",
        ],
        jobTitle: "Founder at Ugam Digital Studio & Full Stack Developer",
        hasOccupation: {
          "@type": "Occupation",
          name: "Founder & IoT Engineer",
          occupationLocation: {
            "@type": "Country",
            name: "India",
          },
          skills: [
            "Full Stack Development",
            "IoT Engineering",
            "React",
            "Next.js",
            "Python",
            "Arduino",
            "Embedded Systems",
            "TypeScript",
          ],
        },
        worksFor: [
          {
            "@type": "Organization",
            name: "Ugam Digital Studio",
            url: "https://ugamdigitalstudio.tech"
          },
          {
            "@type": "Organization",
            name: "BotBuddies"
          }
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "MIT College of Engineering, Aurangabad",
        },
        knowsAbout: [
          "Full Stack Development",
          "IoT Engineering",
          "React",
          "Next.js",
          "Python",
          "Arduino",
          "Embedded Systems",
          "Web Development",
          "Robotics",
          "Event Management",
          "Team Leadership",
          "TypeScript",
          "Flutter",
        ],
        award: [
          "InnoHack 2025 Organizer (200+ participants)",
          "InnoHack 2.0 Organizer",
          "Executive Head at BotBuddies",
          "Event Head at ECESA",
          "SPIC MACAY Virasat 2024 Coordinator"
        ],
        creator: [
          { "@type": "SoftwareApplication", name: "FuelShield", url: "https://yash-ghodele.pages.dev/work/fuelshield" },
          { "@type": "SoftwareApplication", name: "Sanjivani", url: "https://yash-ghodele.pages.dev/work/sanjivani" },
          { "@type": "SoftwareApplication", name: "WireFlow", url: "https://yash-ghodele.pages.dev/work/wireflow" },
          { "@type": "SoftwareApplication", name: "LocalMD", url: "https://yash-ghodele.pages.dev/work/localmd" },
          { "@type": "SoftwareApplication", name: "Smart CRM", url: "https://yash-ghodele.pages.dev/work/smart-crm" },
          { "@type": "SoftwareApplication", name: "Ugam Campus Projects", url: "https://yash-ghodele.pages.dev/work/ugam-campus" }
        ],
        publishingPrinciples: "https://yash-ghodele.pages.dev/journal"
      },
      {
        "@type": "WebSite",
        "@id": "https://yash-ghodele.pages.dev/#website",
        url: "https://yash-ghodele.pages.dev",
        name: "Yash Ghodele Portfolio",
        description: "Official portfolio of Yash Ghodele — Full Stack Developer & IoT Engineer.",
        publisher: { "@id": "https://yash-ghodele.pages.dev/#person" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://yash-ghodele.pages.dev/journal?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        name: "Projects & Work Portfolio",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FuelShield - IoT Fuel Theft Detection", url: "https://yash-ghodele.pages.dev/work/fuelshield" },
          { "@type": "ListItem", position: 2, name: "Sanjivani - AI Plant Disease Detection", url: "https://yash-ghodele.pages.dev/work/sanjivani" },
          { "@type": "ListItem", position: 3, name: "WireFlow - Industrial Manufacturing Dashboard", url: "https://yash-ghodele.pages.dev/work/wireflow" },
          { "@type": "ListItem", position: 4, name: "LocalMD - Offline Medical Assistant", url: "https://yash-ghodele.pages.dev/work/localmd" },
          { "@type": "ListItem", position: 5, name: "Smart CRM & Fleet Platform", url: "https://yash-ghodele.pages.dev/work/smart-crm" }
        ]
      },
      {
        "@type": "ItemList",
        name: "Engineering Journal & Articles",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "We Are All Intellectual Omnivores", url: "https://yash-ghodele.pages.dev/journal/we-are-all-intellectual-omnivores" },
          { "@type": "ListItem", position: 2, name: "From WhatsApp to Dashboard: The Architecture Behind CampusCast", url: "https://yash-ghodele.pages.dev/journal/whatsapp-pipelines-research" },
          { "@type": "ListItem", position: 3, name: "Every Event Fails the Same Way", url: "https://yash-ghodele.pages.dev/journal/event-failure-patterns" },
          { "@type": "ListItem", position: 4, name: "Analysis, Design, and Synthesis", url: "https://yash-ghodele.pages.dev/journal/analysis-design-synthesis" },
          { "@type": "ListItem", position: 5, name: "The Day I Realized Hardware and Software Are the Same Problem", url: "https://yash-ghodele.pages.dev/journal/hardware-and-software-are-the-same-problem" },
          { "@type": "ListItem", position: 6, name: "Building FuelShield Case Study", url: "https://yash-ghodele.pages.dev/journal/fuelshield-case-study" },
          { "@type": "ListItem", position: 7, name: "Why Manufacturing Dashboards Fail", url: "https://yash-ghodele.pages.dev/journal/manufacturing-dashboards-fail" },
          { "@type": "ListItem", position: 8, name: "Building Student Projects at Scale", url: "https://yash-ghodele.pages.dev/journal/student-projects-at-scale" },
          { "@type": "ListItem", position: 9, name: "Why We Obsess Over 14ms Latency", url: "https://yash-ghodele.pages.dev/journal/obsessing-over-latency" },
          { "@type": "ListItem", position: 10, name: "Aurangabad's Manufacturing Opportunity", url: "https://yash-ghodele.pages.dev/journal/aurangabad-manufacturing-opportunity" }
        ]
      },
      {
        "@type": "ItemList",
        name: "Events & Community Leadership",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "InnoHack 2025 - Executive Head", url: "https://yash-ghodele.pages.dev/events/innohack" },
          { "@type": "ListItem", position: 2, name: "SPIC MACAY Virasat 2024 - Head of Hospitality", url: "https://yash-ghodele.pages.dev/events/spic-macay-virasat" }
        ]
      }
    ]
  }

  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
