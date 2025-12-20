# 🔮 Future Plans & Roadmap

This document allows us to track ideas for future versions (V4.0+) and keep the main `README.md` focused on the current stable production version.

## 🗺️ Roadmap (V4.0 Ideas)

### Phase 11: User Experience Enhancements
*   [ ] **Command Menu (`cmd+k`):** Global search for Projects, Blog Posts, and Navigation.
*   [ ] **Sound Design (Opt-in):** Subtle UI sounds for interactions, with a user-controlled toggle (default OFF) to respect accessibility preferences.
*   [ ] **Page Transitions:** Explore View Transitions API for native browser support (refining v3.0 implementation).

### Phase 12: Reliability, Scale & Security
*   [ ] **Runtime Monitoring:**
    *   [ ] **Error Tracking:** Integrate **Sentry** for production error monitoring and alert triage.
*   [ ] **Security & Protection:**
    *   [ ] **Rate Limiting:** Protect contact form & APIs using Upstash/Edge Middleware.
    *   [ ] **Security Headers:** Implement CSP, HSTS, and X-Frame-Options.
*   [ ] **Testing Suite:**
    *   [ ] Unit Tests (Jest/Vitest) for utility functions.
    *   [ ] E2E Tests (Playwright) for critical flows (Contact Form, Project Navigation).

### Phase 13: Pending UI Components (Tech Debt)
*   [ ] **Mobile Navigation:** Implement `Sheet / Drawer` component for a proper mobile menu.
*   [ ] **Loading States:** Implement `Skeleton` component for content loading placeholders.
*   [ ] **Interactivity:**
    *   [ ] `Tooltip`: Add tooltips to social icons and tech stack items.
    *   [ ] `Dialog`: For image previews or detailed project modals.
*   [ ] **Dynamic OG Images:** Create `opengraph-image.tsx` for auto-generating social cards for every route.
*   [ ] **Accessibility (A11y):** Full WCAG 2.1 Audit (Contrast, Screen Readers, Aria-labels).

### Phase 14: Engagement & Content Expansion
*   [ ] **Content Backlog (Immediate):**
    *   [ ] **Expand Stubs:** Rewrite `sanjivani.mdx`, `smart-crm.mdx`, and `iot-security.mdx` with deep technical details (Architecture, Challenges).
    *   [ ] **Missing Projects:** Create MDX for "Hackathon Platform" and "Underwater ROV" (images exist in `/public`).
    *   [ ] **First Blog Post:** Replace `hello-world.mdx` with a real technical article.
*   [ ] **Deep-Dive Case Studies:** Expand `/projects/[slug]` with Problem → Constraints → Architecture → Trade-offs structure.
*   [ ] **Guestbook (Moderated):**
    *   [ ] Spam protection & Rate limits.
    *   [ ] Optional GitHub sign-in for verification.
*   [ ] **Newsletter:** Integrate ConvertKit or Resend Audiences for email capture.
*   [ ] **RSS Feed:** Auto-generate `feed.xml` for blog syndication.
*   [ ] **"Uses" Page:** Detailed `/uses` page listing hardware, software, and desk setup.
*   [ ] **"Now" Page:** A `/now` page updating current focus.

### Phase 15: Developer Experience (DX) & DevOps
*   [ ] **CI Pipeline (GitHub Actions):**
    *   [ ] Automate Linting (`eslint`).
    *   [ ] Automate Type Checking (`tsc`).
    *   [ ] Automate Build Verification (`next build`).
*   [ ] **Link Health:** Script to check for broken links in MDX files.
*   [ ] **Pre-commit Hooks:** Set up `Husky` + `lint-staged`.
*   [ ] **Bundle Analysis:** Integrate `@next/bundle-analyzer` to monitor JS payload size.

### Phase 16: Advanced Analytics
*   [ ] **Detailed Tracking:** Integrate PostHog or Umami for privacy-friendly behavior tracking.
*   [ ] **Speed Insights:** Real-world Core Web Vitals monitoring.
*   [ ] **Privacy Notice:** Concise analytics disclosure page to build trust.

## 💡 Recommended UI Libraries for Updates

If you want to extend the UI further, these libraries match the current "Premium Dark/Zinc" aesthetic:

1.  **[Aceternity UI](https://ui.aceternity.com/):**
    *   *Best for:* High-impact hero sections, glowing cards, and complex grid backgrounds.
2.  **[Magic UI](https://magicui.design/):**
    *   *Best for:* Trendy micro-interactions like "Meteor Showers", "Typing Animation", or "Marquee".
3.  **[Vaul](https://vaul.emilkowal.ski/):**
    *   *Best for:* Native-feeling mobile drawers/modals (perfect for the Mobile Menu).
4.  **[Recharts](https://recharts.org/):**
    *   *Best for:* Adding data visualization charts to deep-dive case study pages.
