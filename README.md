# Yash Ghodele - Portfolio V3

<div align="center">
  <img src="public/logo.svg" alt="Yash Ghodele Portfolio" width="120" />
</div>

> **Engineering meets Art.** A premium portfolio experience built to demonstrate full-stack mastery, creative design, and performance optimization.

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan.svg)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed_on-Cloudflare-orange.svg)](https://pages.cloudflare.com/)

---

## 💎 The Concept: "Premium Dark"

This is not just a collection of links. It is a **Curated Digital Experience**.
The design philosophy centers on immersion:

*   **Atmospheric Depth**: Uses a hybrid system of **Network Mesh** (Hero) and **Floating Data Particles** (Global) to create a sense of depth and activity without distracting from the content.
*   **Physics-Based Interaction**: Magnetic buttons, elastic swipe gestures, and spring-based animations (`framer-motion`) make the UI feel alive.
*   **Bespoke Layouts**: Unlike standard template portfolios, every major project (`Sanjivani`, `FuelShield`) gets a **dedicated architectural route**, allowing for unique presentation styles tailored to the project's brand.

---

## 🏗️ Architecture & Engineering

### 1. The "Hybrid" Content Strategy
We use a sophisticated mix of **Static Markdown** and **React Server Components**:

*   **Data Layer (`content/projects/*.mdx`)**: Project metadata (titles, stacks, stats) is stored in MDX for easy portability and SSG injection.
*   **Presentation Layer (`app/projects/*`)**: Instead of a generic `[slug]` route, high-ticket projects have **hardcoded routes**. This allows for "Bespoke Case Studies"—unique layouts, specific animations, and custom assets for each flagship project.

### 2. Performance First
*   **Edge-Ready**: Deployed to Cloudflare Pages for sub-100ms globally distributed latency.
*   **Zero-Layout Shift**: Fonts (`Inter`) are subsetted and preloaded. Images use `unoptimized` output for crisp rendering on static hosts.
*   **Strict Type Safety**: The entire codebase, from MDX parsers (`lib/mdx.ts`) to UI primitives, is strictly typed in TypeScript.

### 3. Interactive UI Core
*   **Swipe Gestures**: Custom-engineered mobile touch handlers for the project carousel.
*   **Glassmorphism**: Real-time background blur filters used on cards and navigation to maintain context.
*   **React Context Free**: We removed heavy global providers (like `ThemeProvider`) to strip bundle size, baking the "Dark Mode" directly into CSS variables for maximum performance.

---

## ⚡ Tech Stack

| Domain | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14** (App Router) | Server Components (RSC) & File-system routing |
| **Styling** | **Tailwind CSS** + **Shadcn/ui** | Utility-first architecture with accessible primitives |
| **Motion** | **Framer Motion** | Complex orchestrations & layout transitions |
| **Content** | **MDX** + **Gray-matter** | Developer-friendly content management |
| **Email** | **Resend** | Reliable delivery for the contact form |
| **Deployment** | **Cloudflare Pages** | Edge network distribution & unlimited bandwidth |
| **Package Mgr** | **npm** | Standard dependency management |

---

## 📂 Project Structure

```bash
portfolio/
├── app/                  # Next.js App Router
│   ├── projects/         # Bespoke Case Study Routes
│   │   ├── sanjivani-v2/ # Custom Layout for Sanjivani
│   │   └── fuelshield/   # Custom Layout for FuelShield
│   ├── layout.tsx        # Global shell & SEO metadata
│   └── page.tsx          # Landing page composition
├── components/           # React Components
│   ├── ui/               # Shadcn/ui primitives & effects
│   │   ├── background-particles.tsx # Custom Canvas effect
│   │   └── hero-network.tsx         # Interactive mesh
│   └── active-project.tsx # Interactive components
├── content/              # MDX Data Source
│   └── projects/         # Raw project data files
└── lib/                  # Utilities (MDX parsers, cn helper)
```

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/yash-ghodele/portfolio.git
cd portfolio
npm install
```

Run the development server:

```bash
npm run dev
# Open http://localhost:3000
```

Build for production (Cloudflare Pages):

```bash
npm run pages:build
# Output will be in .vercel/output/static or .next/
```

---

## 🔮 Roadmap

*   [x] **v3.0 Transition**: Complete move from generic routing to bespoke layouts.
*   [x] **Swipe Navigation**: Mobile gesture support.

See [future_plan.md](./future_plan.md) for the detailed vision.

---

## 📄 License

MIT License © 2026 Yash Ghodele.
