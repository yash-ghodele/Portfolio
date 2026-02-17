# Project Features & Capabilities

This portfolio is a high-performance, full-stack application built to showcase technical proficiency, design excellence, and real-world impact.

## 🚀 Core Technology
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router) for server-side rendering and static generation.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety and developer experience.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom design system and [Radix UI](https://www.radix-ui.com/) primitives.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, hardware-accelerated interactions.

## ⚡ Content Management (CMS)
Integrated with **Sanity.io** as a headless CMS for dynamic content updates without code changes.
- **Sanity Studio**: Embedded admin dashboard at `/studio` with a custom dark/purple theme.
- **Dynamic Routing**:
  - **Projects**: Automatically generates pages at `/projects/[slug]` with rich text and media.
  - **Events**: Manages community engagements at `/community/[slug]` with structured data.
- **Portable Text**: Rich text rendering for complex content layouts (headers, lists, images, code blocks).
- **Real-time Updates**: Instant content propagation via Next.js revalidation.

## 🎨 UI/UX Design
A "Dark Mode First" aesthetic focused on depth, lighting, and interactivity.
- **Hero Section**: Interactive network background with mouse-tracking particles and a glowing beam effect.
- **Glassmorphism**: Advanced backdrop filters and translucent layers for a modern, depth-rich feel.
- **Scroll Animations**: Elements fade, slide, and scale into view as the user scrolls.
- **Responsive Layouts**: Fully adaptive designs for Mobile, Tablet, and Desktop viewports.
- **Custom Components**:
  - `BentoGrid`: Modern grid layout for highlighting key skills and stats.
  - `ProjectCard`: Interactive 3D-tilt cards with hover states.
  - `Timeline`: Vertical timeline for experience and education tracking.

## 🛠️ Technical Features
- **SEO Optimized**: Dynamic metadata generation for every page and project.
- **Performance**:
  - Automatic image optimization with `next/image`.
  - Font optimization with `next/font`.
  - Code splitting and lazy loading.
- **Type Safety**: End-to-end type safety from the CMS content (GROQ queries) to the React components.
- **Forms**: Contact form with client-side validation using **Zod** and **React Hook Form**.

## 📂 Project Structure
- `app/`: Next.js App Router structure.
- `components/`: Reusable UI components (buttons, cards, layout).
- `lib/`: Utility functions, CMS fetch logic, and type definitions.
- `sanity/`: CMS configuration, schemas (project, event), and structure builder.
- `public/`: Static assets (images, fonts, resume).

## 🔒 Security & Quality
- **Sanitization**: All user-generated content from the CMS is sanitized via Portable Text.
- **Linting**: ESLint and Prettier configuration for consistent code style.
- **Environment Variables**: Secure management of API keys and dataset IDs.
