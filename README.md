# Yash Ghodele - Portfolio V3

<div align="center">
  <img src="public/logo.svg" alt="Yash Ghodele | Portfolio" width="200" />
</div>

> **Engineering meets Art.** A premium portfolio experience built to demonstrate full-stack mastery, creative design, and headless CMS architecture.

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Sanity.io](https://img.shields.io/badge/Sanity-3.0-red.svg)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan.svg)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed_on-Cloudflare-orange.svg)](https://pages.cloudflare.com/)

---

## 💎 The Concept: "Premium Dark"

This is not just a collection of links. It is a **Curated Digital Experience**.
The design philosophy centers on immersion:

*   **Atmospheric Depth**: Uses a hybrid system of **Network Mesh** (Hero) and **Floating Data Particles** (Global) to create a sense of depth and activity without distracting from the content.
*   **Physics-Based Interaction**: Magnetic buttons, elastic swipe gestures, and spring-based animations (`framer-motion`) make the UI feel alive.
*   **Dynamic Theming**: Event pages feature algorithmically generated color palettes based on brand identity, powered by **CSS Variables** and **Sanity CMS** data.

---

## 🚀 Key Features

### 1. Headless CMS Architecture (Sanity.io)
Content is no longer hardcoded. The portfolio is powered by **Sanity Studio**, allowing for real-time updates to:
*   **Projects**: Rich text descriptions, tech stacks, and stats.
*   **Community Events**: Dynamic cover images, roles, and attendance metrics.
*   **Live Preview**: Instant visual feedback during content editing.

### 2. Bespoke Case Studies
High-ticket projects retain their unique identity through custom layouts, while still consuming data from the CMS.
*   **Sanjivani V2**: AI Crop Doctor (Bespoke Layout)
*   **FuelShield**: IoT Fuel Monitoring (Bespoke Layout)
*   **Smart CRM**: Enterprise Automation Engine

### 3. Performance First
*   **Edge-Ready**: Deployed to **Cloudflare Pages** for sub-100ms globally distributed latency.
*   **Zero-Layout Shift**: Fonts (`Inter`) are subsetted and preloaded. Images use `unoptimized` output for crisp rendering on static hosts.
*   **SEO Optimized**: Dynamic `sitemap.xml`, `robots.txt` configuration, and comprehensive OpenGraph metadata for every page.

---

## 🏗️ Architecture & Engineering

### The "Hybrid" Content Strategy
We use a sophisticated mix of **Headless Data** and **React Server Components**:

*   **Data Layer (Sanity)**: All dynamic data (Project details, Event logs) lives in Sanity.
*   **Presentation Layer (`app/projects/*`)**: 
    - **Dynamic Routes** (`[slug]`) handle new projects automatically.
    - **Hardcoded Routes** (`sanjivani`, `fuelshield`) provide maximum design freedom for flagship case studies.

### Interactive UI Core
*   **Swipe Gestures**: Custom-engineered mobile touch handlers for project navigation.
*   **Glassmorphism**: Real-time background blur filters used on cards and navigation to maintain context.
*   **Type-Safe Content**: Fully typed GROQ queries ensure frontend stability.

---

## ⚡ Tech Stack

| Domain | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14** (App Router) | Server Components (RSC) & File-system routing |
| **CMS** | **Sanity.io** | Headless content management & real-time preview |
| **Styling** | **Tailwind CSS** + **Shadcn/ui** | Utility-first architecture with accessible primitives |
| **Motion** | **Framer Motion** | Complex orchestrations & layout transitions |
| **Deployment** | **Cloudflare Pages** | Edge network distribution & unlimited bandwidth |
| **Package Mgr** | **npm** | Standard dependency management |

---

## 📂 Project Structure

```bash
portfolio/
├── app/                  # Next.js App Router
│   ├── community/        # Community & Events Section (Dynamic)
│   ├── projects/         # Case Study Routes
│   │   ├── [slug]/       # Dynamic Template for standard projects
│   │   ├── sanjivani-v2/ # Custom Layout for Sanjivani V2
│   │   └── fuelshield/   # Custom Layout for FuelShield
│   ├── studio/           # Embedded Sanity Studio
│   ├── layout.tsx        # Global shell & SEO metadata
│   └── page.tsx          # Landing page composition
├── components/           # React Components
│   ├── ui/               # Shadcn/ui primitives & effects
│   └── active-project.tsx # Interactive components
├── sanity/               # CMS Configuration
│   ├── schemaTypes/      # Content Models (Project, Event)
│   └── structure.ts      # Studio Desk Structure
├── lib/                  # Utilities
│   └── sanity/           # GROQ Queries & Fetch Clients
└── public/               # Static Assets
```

---

## 🏁 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/yash-ghodele/portfolio.git
cd portfolio
npm install
```

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Development

Run the development server and the Sanity Studio concurrently:

```bash
npm run dev
# Website: http://localhost:3000
# Studio:  http://localhost:3000/studio
```

---

## 📄 License

MIT License © 2026 Yash Ghodele.
