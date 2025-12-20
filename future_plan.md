# 🔮 Future Plans & Roadmap

This document tracks ideas for **future versions (V4.0+)** while keeping the main `README.md` focused on the **current stable production release**.

---

## 🗺️ Roadmap (V4.0 Ideas)

### Phase 11: User Experience Enhancements
- [ ] **Command Menu (`cmd + k`)**  
  Global search for Projects, Blog Posts, and site navigation.

- [ ] **Sound Design (Opt-in)**  
  Subtle UI sounds for interactions with a user-controlled toggle (default OFF) to respect accessibility and user preference.

- [ ] **Page Transitions**  
  Further refine page transitions using the View Transitions API for native browser support (improving v3.0 behavior).

---

### Phase 12: Reliability, Scale & Security
- [ ] **Runtime Monitoring**
  - [ ] **Error Tracking:** Integrate Sentry to capture production errors and improve debugging.

- [ ] **Security & Protection**
  - [ ] **Rate Limiting:** Protect the contact form and APIs using Upstash or Edge Middleware.
  - [ ] **Security Headers:** Add CSP, HSTS, and X-Frame-Options for better security.

- [ ] **Testing Suite**
  - [ ] **Unit Tests:** Jest or Vitest for utility and helper functions.
  - [ ] **E2E Tests:** Playwright for critical user flows (Contact Form, Project Navigation).

---

### Phase 13: Pending UI Components (Tech Debt)
- [ ] **Mobile Navigation**  
  Implement a `Sheet / Drawer` component for a clean and usable mobile menu.

- [ ] **Loading States**  
  Add `Skeleton` components for better loading feedback.

- [ ] **Interactivity Enhancements**
  - [ ] **Tooltip:** Tooltips for social icons and tech stack items.
  - [ ] **Dialog:** Image previews and detailed project modals.

- [ ] **Dynamic OG Images**  
  Create `opengraph-image.tsx` to auto-generate social preview cards per route.

- [ ] **Accessibility (A11y)**  
  Full WCAG 2.1 audit (contrast, keyboard navigation, screen readers, ARIA labels).

---

### Phase 14: Engagement & Content Expansion
- [ ] **Content Backlog (High Priority)**
  - [ ] **Expand Existing Stubs:**  
    Rewrite `sanjivani.mdx`, `smart-crm.mdx`, and `iot-security.mdx` with technical depth (architecture, challenges, decisions).
  - [ ] **Add Missing Projects:**  
    Create MDX files for **Hackathon Platform** and **Underwater ROV** (assets already exist in `/public`).
  - [ ] **First Blog Post:**  
    Replace `hello-world.mdx` with a real technical article.

- [ ] **Deep-Dive Case Studies**  
  Expand `/projects/[slug]` pages using:  
  **Problem → Constraints → Architecture → Trade-offs → Outcome**

- [ ] **Guestbook (Moderated)**
  - [ ] Spam protection and rate limiting.
  - [ ] Optional GitHub sign-in for authenticity.

- [ ] **Newsletter**  
  Integrate ConvertKit or Resend Audiences for email subscriptions.

- [ ] **RSS Feed**  
  Auto-generate `feed.xml` for blog updates.

- [ ] **"Uses" Page**  
  A `/uses` page listing hardware, software, and workspace setup.

- [ ] **"Now" Page**  
  A `/now` page showing current focus and priorities.

---

### Phase 15: Developer Experience (DX) & DevOps
- [ ] **CI Pipeline (GitHub Actions)**
  - [ ] Automated linting (`eslint`)
  - [ ] Automated type checks (`tsc`)
  - [ ] Build verification (`next build`)

- [ ] **Link Health**  
  Script to detect broken internal and external links in MDX files.

- [ ] **Pre-commit Hooks**  
  Configure Husky + lint-staged to prevent bad commits.

- [ ] **Bundle Analysis**  
  Integrate `@next/bundle-analyzer` to monitor JavaScript bundle size.

---

### Phase 16: Advanced Analytics
- [ ] **User Behavior Tracking**  
  Integrate PostHog or Umami for privacy-friendly analytics (clicks, scroll depth).

- [ ] **Speed Insights**  
  Track real-world Core Web Vitals.

- [ ] **Privacy Notice**  
  Short analytics disclosure page to maintain transparency and trust.

---

## 💡 Recommended UI Libraries

These libraries match the **Premium Dark / Zinc** design style:

1. **Aceternity UI** – Hero sections, glowing cards, animated grids  
   https://ui.aceternity.com/

2. **Magic UI** – Micro-interactions, text animations, marquees  
   https://magicui.design/

3. **Vaul** – Native-feeling mobile drawers and modals  
   https://vaul.emilkowal.ski/

4. **Recharts** – Charts and data visuals for case studies  
   https://recharts.org/

---

## 🏗️ Architecture Scalability (Post-V3.0)

Since **V3.0 enforced strict routing**, this section defines the long-term scaling strategy.

---

### Phase 17: Hybrid Routing Strategy
- **Problem:**  
  Managing many projects with fully custom routes becomes time-consuming.

- **Solution:**  
  Re-introduce `app/projects/[slug]` as a fallback route only.

- **Routing Logic:**  
  - If a custom project folder exists → Next.js uses it  
  - If not → fallback MDX layout is used

- **When Needed:**  
  For archived or smaller projects that do not require custom layouts.

---

### Phase 18: Content Management System (CMS)
- **Trigger:**  
  When managing many MDX files directly in VS Code becomes difficult.

- **Plan:**  
  Integrate a Headless CMS (Sanity.io or KeystoneJS) for content management.

- **Note:**  
  This will require re-enabling dynamic routes for CMS-driven pages.

---

### ✅ Final Note
This roadmap focuses on **quality, performance, and maintainability**.  
Features will be added only when they provide real value.
