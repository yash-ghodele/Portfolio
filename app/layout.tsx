import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yash Ghodele | Portfolio - Engineer • Leader • Innovator",
  description: "Portfolio of Yash Ghodele - B.Tech Electronics & Computer Engineering student (MIT Chh. Sambhajinagar, Class of 2026) with expertise in IoT systems, embedded hardware prototyping, and front-end integration. Experienced in leading 200+ member communities and organizing events with 1,000+ participants.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
