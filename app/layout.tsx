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
    "Full Stack Developer",
    "IoT Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python Developer",
    "Arduino",
    "Embedded Systems",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://yash-ghodele.pages.dev/#person",
    name: "Yash Ghodele",
    alternateName: "why_be_yashhh",
    url: "https://yash-ghodele.pages.dev",
    image: "https://yash-ghodele.pages.dev/images/hero/yash-ghodele.jpg",
    description:
      "Full Stack Developer & IoT Engineer building scalable web platforms and real-world embedded systems. Organizing hackathons with 200+ participants.",
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
    jobTitle: "Full Stack Developer & IoT Engineer",
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer & IoT Engineer",
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
    worksFor: {
      "@type": "Organization",
      name: "BotBuddies (Nextechminds Pvt. Ltd & S2P Robotics Pvt. Ltd.)",
      url: "https://www.botbuddies.in/"
    },
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
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
