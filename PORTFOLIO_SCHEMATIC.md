# Portfolio Schematic (Production V3.1)

This document outlines the architecture and routing logic for the Yash Ghodele Portfolio.

## 1. Production URL Architecture

The site uses a streamlined, professional routing hierarchy optimized for SEO and technical clarity.

| Path | Type | Purpose |
| :--- | :--- | :--- |
| `/` | Static | Landing Page (Bento Gateway). Teasers for all sections. |
| `/work` | Dynamic | Unified project hub (IoT, Web, Embedded). |
| `/work/[slug]` | Dynamic | Individual project case studies fetched from Sanity. |
| `/events` | Dynamic | Chronicle of community leadership and event execution. |
| `/events/[slug]` | Dynamic | Deep-dives into specific events (recap, metrics, role). |
| `/stack` | Static | Hardware arsenal and engineering tech stack. |
| `/about` | Static | Interactive bio and founder journey. |
| `/journal` | Dynamic | Engineering insights and technical writing. |
| `/studio` | Dynamic | Sanity CMS configuration panel. |

---

## 2. Technical Stack (Finalized)

*   **Framework**: Next.js 15.0+ (App Router)
*   **CMS**: Sanity.io (Headless)
*   **Styling**: Tailwind CSS (Minimalist Authority System)
*   **Motion**: Framer Motion (Scroll Orchestration)
*   **Deployment**: Cloudflare Pages

---

## 3. Core Structural Principles

1.  **Unified Routing**: Legacy `/community` paths are redirected to `/events`. All projects are centralized under `/work`.
2.  **Deterministic Hydration**: Components use the `isMounted` pattern to prevent SSR mismatches, ensuring a stable "Dark Mode" first render.
3.  **Next.js 15 Readiness**: All dynamic segments properly `await params` in both `Metadata` and `Page` components.
4.  **Minimalist Authority**: High-contrast headers (`font-black`), mono labels, and consistent spacing define the visual language.

---

## 4. Directory Map

```text
portfolio/
├── app/                  # Route Definitions
│   ├── events/           # /events routes
│   ├── work/             # /work routes
│   ├── stack/            # /stack route
│   ├── about/            # /about route
│   ├── journal/          # /journal routes
│   └── layout.tsx        # Root shell & Navbar/Footer
├── components/           # UI Components
│   ├── ui/               # Design system primitives
│   ├── contact.tsx       # Hardened contact form
│   └── navbar.tsx        # Route-based navigation
├── lib/                  # Logic & Types
│   ├── sanity/           # GROQ Fetch Clients
│   └── types.ts          # Shared TS interfaces
└── sanity/               # Headless CMS Config
```

---

## 5. Completed Implementation Log (V3.1)

1.  **[✓] Route Consolidation**: Merged `/community` into `/events`. Consolidated projects under `/work`.
2.  **[✓] Next.js 15 Migration**: Fixed all async parameter errors in dynamic routes.
3.  **[✓] Visual Overhaul**: Applied "Minimalist Authority" design across all core pages.
4.  **[✓] Technical Hardening**: Removed 10+ legacy/redundant files. Rewrote `contact.tsx` for stability.
5.  **[✓] SEO Optimization**: Standardized metadata and sitemap logic.
6.  **[✓] Build Verification**: Production build verified with `npm run build`.
