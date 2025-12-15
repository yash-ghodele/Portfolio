import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Yash Ghodele | Portfolio",
  description:
    "Portfolio of Yash Ghodele - B.Tech ECE Student, Event Manager, IoT Enthusiast, and Community Leader at MIT College of Engineering, Aurangabad",
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "verification_token_placeholder", // User can replace this later
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yash Ghodele",
    url: "https://yash-ghodele.netlify.app",
    sameAs: [
      "https://linkedin.com/in/yash-ghodele",
      "https://github.com/yash-ghodele",
      "https://instagram.com/why_be_yashhh"
    ],
    jobTitle: "IoT Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
