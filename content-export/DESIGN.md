# Design System — Yash Ghodele Portfolio

Sources: `app/globals.css` · `tailwind.config.ts` · `app/layout.tsx` · all page components

---

## 1. Design Philosophy & Aesthetic

The portfolio uses a **dark, premium, hardware-aesthetic** design language inspired by:

- **IoT/Embedded Systems** — monospace type, circuit-board grid overlays, pulsing connection nodes
- **Glassmorphism** — frosted glass cards, backdrop blur layers
- **Depth + Aurora** — radial blob gradients, blur halos, layered z-index composition
- **Editorial Typography** — ultra-heavy `font-black` headings, light body weight contrast
- **Signal over Noise** — every visible element earns its place. UI mirrors Yash's engineering philosophy

**Color mood:** Deep zinc-950 blacks → violet/purple primaries → emerald/blue accent pops

---

## 2. Color System

### CSS Custom Properties (HSL Tokens)

#### Light Mode (`:root`) — *not used (site forces dark)*
| Token | HSL Value | Description |
|-------|-----------|-------------|
| `--background` | `0 0% 100%` | Pure white |
| `--foreground` | `222 47% 11%` | Dark navy text |
| `--primary` | `220 90% 56%` | Professional blue |
| `--primary-rgb` | `28, 100, 242` | RGB fallback |
| `--primary-foreground` | `0 0% 100%` | White on primary |
| `--secondary` | `220 14% 96%` | Light gray |
| `--muted` | `220 14% 96%` | Muted background |
| `--muted-foreground` | `220 9% 46%` | Gray body text |
| `--border` | `220 13% 91%` | Subtle border |
| `--ring` | `220 90% 56%` | Focus ring = primary |
| `--radius` | `0.5rem` | Base border radius |

#### Dark Mode (`.dark`) — **Active Site Mode**
| Token | HSL Value | Hex Approx | Description |
|-------|-----------|------------|-------------|
| `--background` | `240 10% 3.9%` | `#090a0f` | Near-black base |
| `--foreground` | `0 0% 98%` | `#fafafa` | Off-white text |
| `--card` | `240 10% 3.9%` | `#090a0f` | Same as background |
| `--primary` | `263.4 70% 50.4%` | `#7c3aed` | **Violet/Purple** — brand color |
| `--primary-rgb` | `124, 58, 237` | `#7c3aed` | RGB for opacity tricks |
| `--primary-foreground` | `210 20% 98%` | `#f8fafc` | Near-white on primary |
| `--secondary` | `240 3.7% 15.9%` | `#27272a` | Dark gray surfaces |
| `--muted` | `240 3.7% 15.9%` | `#27272a` | Muted backgrounds |
| `--muted-foreground` | `240 5% 64.9%` | `#a1a1aa` | Gray body text |
| `--accent` | `240 3.7% 15.9%` | `#27272a` | Same as secondary |
| `--border` | `240 3.7% 15.9%` | `#27272a` | Subtle dark borders |
| `--input` | `240 3.7% 15.9%` | `#27272a` | Input backgrounds |
| `--ring` | `263.4 70% 50.4%` | `#7c3aed` | Focus ring = primary |
| `--destructive` | `0 62.8% 30.6%` | `#7f1d1d` | Dark red errors |

### Named Tailwind Colors Used in Components

| Color | Usage |
|-------|-------|
| `zinc-950` | Main page background (`#09090b`) |
| `zinc-900` | Card backgrounds, code blocks |
| `white/5` | Subtle borders (`rgba(255,255,255,0.05)`) |
| `white/10` | Soft borders |
| `white/[0.02]` | Almost-invisible card fills |
| `primary` | CTA buttons, active states, highlights, links |
| `primary/5` | Very light primary tint fills |
| `primary/10` | Light primary fills |
| `primary/20` | Medium primary borders |
| `purple-400` | Gradient accents (hero name, contact heading) |
| `purple-500` | Team orchestration feature color |
| `blue-500` | Tradeoff analysis feature color |
| `emerald-400` | ESP32, Hardware/IoT tech pills |
| `amber-400` | Firebase, Insights category |
| `sky-400` | Flutter tech pill |
| `yellow-400` | Python tech pill |

### Per-Event Accent Colors (CSS Custom Properties)

Each event detail page generates HSL-based accent variables from a `accentHue` value:

| Event | Hue | Mood |
|-------|-----|------|
| InnoHack | 270 | Violet/Purple |
| SPIC MACAY Virasat'24 | 10 | Warm orange/amber |

Generated tokens: `--a-blob1/2/3`, `--a-border`, `--a-fill`, `--a-text`, `--a-glow`, `--a-edge`, `--a-blockquote-border`

---

## 3. Typography

### Font Families

| Variable | Font | Usage |
|----------|------|-------|
| `--font-inter` | Inter (Google Fonts) | Primary sans-serif — all body, UI |
| `--font-playfair` | Playfair Display (Google Fonts) | Serif — event card titles, editorial |

```css
font-family: sans → var(--font-inter), sans-serif
font-family: serif → var(--font-playfair), serif
```

### Type Scale

| Class | Usage | Size |
|-------|-------|------|
| `text-4xl` + `font-black` | Section headings (mobile) | 2.25rem |
| `text-5xl` + `font-black` | About, Stack, Events H1 | 3rem |
| `text-6xl` + `font-black` | Work H1 (desktop) | 3.75rem |
| `text-7xl` + `font-black` | About, Stack H1 (desktop) | 4.5rem |
| `text-8xl` + `font-black` | Work H1 (xl), Hero | 6rem |
| `text-9xl` + `font-black` | Project detail hero | 8rem+ |
| `text-2xl` + `font-bold` | Section sub-headings (Journey, Arsenal) | 1.5rem |
| `text-xl` + `font-bold` | Card titles, project names | 1.25rem |
| `text-lg` | Subtitle / description paragraphs | 1.125rem |
| `text-base` | Body text in journals | 1rem |
| `text-sm` | Secondary descriptions, captions | 0.875rem |
| `text-xs` | Labels, tags, mono section labels | 0.75rem |
| `text-[10px]` | Tiny meta (event dates, skill badges) | 0.625rem |

### Type Treatments

| Treatment | CSS |
|-----------|-----|
| **Section label (monospace)** | `text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground` |
| **Hero H1** | `text-4xl/6xl/8xl font-black leading-[1.1] tracking-tight` |
| **Gradient name text** | `bg-gradient-to-r from-purple-400 via-primary to-blue-500 bg-clip-text text-transparent animate-gradient` |
| **Body text** | `text-muted-foreground leading-relaxed` |
| **Bold inline** | `text-foreground font-semibold` |
| **Feature card title** | `font-bold text-white` |
| **Stat number** | `text-3xl/4xl font-black text-white` |

---

## 4. Spacing & Layout

### Container

```css
.container {
  max-width: 1400px; /* 2xl breakpoint */
  margin: 0 auto;
  padding: 2rem;
}
```

### Page Padding Pattern
| Context | Class |
|---------|-------|
| Page top (below navbar) | `pt-28` (7rem) |
| Page bottom | `pb-32` (8rem) |
| Section y-padding | `py-20` to `py-32` |
| Max content width (narrow) | `max-w-3xl` |
| Max content width (mid) | `max-w-5xl` |
| Max content width (wide) | `max-w-6xl` |
| Max content width (full) | `max-w-7xl` |
| Side padding | `px-6 md:px-10` |

### Grid Layouts

| Usage | Grid Class |
|-------|-----------|
| Hero (2-col) | `grid-cols-1 md:grid-cols-2 gap-8 md:gap-16` |
| Bento grid | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` |
| Projects grid | `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6` |
| Stack grid | `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5` |
| Events 2-up | `grid-cols-1 md:grid-cols-2 gap-8` |
| Event detail 2-col | `grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20` (sidebar: 4, content: 8) |
| About how-I-work | `grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16` (left: 7, right: 5) |
| Contact | `grid-cols-1 lg:grid-cols-2 gap-12` |
| Stats | `grid-cols-2 md:grid-cols-4 gap-5` |
| Footer | `grid-cols-1 md:grid-cols-12 gap-8 md:gap-12` (5/3/4 split) |

---

## 5. Border Radius System

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.5rem` | Base (shadcn) |
| `rounded-xl` | `0.75rem` | Input fields, metric cards |
| `rounded-2xl` | `1rem` | Main cards (Stack, Bento, project cards) |
| `rounded-3xl` | `1.5rem` | CTA strips (Work bottom) |
| `rounded-full` | `9999px` | Pills, badges, buttons, social icons |
| `rounded-[2rem]` | `2rem` | Contact form glass panel |

---

## 6. Shadow & Glow System

| Class | Effect |
|-------|--------|
| `.shadow-glow` | `box-shadow: 0 0 20px hsl(primary / 0.3)` |
| `.shadow-glow-hover:hover` | `box-shadow: 0 0 30px hsl(primary / 0.5)` |
| `shadow-primary/20` | Tailwind shadow with primary tint |
| `shadow-primary/30` | Stronger primary glow |
| `shadow-2xl` | Heavy depth shadow on glass panels |
| `drop-shadow-[0_0_8px_rgba(230,255,0,0.5)]` | Yellow logo glow in footer |

---

## 7. Glassmorphism System

### `.glass` Utility Class

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.dark .glass {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Inline Glass Patterns (used in components)

| Pattern | Usage |
|---------|-------|
| `bg-white/5 backdrop-blur-2xl border border-white/10` | Contact form container |
| `backdrop-blur-xl bg-background/80 border border-white/10` | Navbar pill |
| `bg-white/[0.025] backdrop-blur-sm border border-white/[0.06]` | Event sidebar cards |
| `bg-background/50 backdrop-blur-sm border-primary/30` | Hero status badge |

---

## 8. Animation System

### CSS Keyframe Animations

| Name | Class | Duration | Effect |
|------|-------|----------|--------|
| Blink cursor | `.animate-blink` | 1s step-end ∞ | Opacity 1→0→1 |
| Fade in | `animate-in fade-in` | — | Opacity 0→1 |
| Float | `.animate-float` | 3s ease-in-out ∞ | translateY 0 → -20px → 0 |
| Shimmer | `.shimmer` | 2s ∞ | Sweep light across element |
| Pulse glow | `.animate-pulse-glow` | 2s ease-in-out ∞ | Box-shadow breathes |
| Gradient text | `.animate-gradient` | 3s linear ∞ | background-position 0%→100% |
| Gradient bg | `.gradient-animated` | 15s ease ∞ | Diagonal background shift |
| Marquee | `.animate-marquee` | 25s linear ∞ | translateX scroll |
| Scan line | `@keyframes scan` | — | Top-to-bottom sweep, IoT HUD |
| Slide top | `slide-in-from-top` | — | translateY(-100%) → 0 |
| Slide bottom | `slide-in-from-bottom` | — | translateY(100%) → 0 |
| Slide left | `slide-in-left` | — | translateX(-50px) + fade |
| Slide right | `slide-in-right` | — | translateX(50px) + fade |

### Framer Motion Patterns (across components)

| Pattern | Trigger | Effect |
|---------|---------|--------|
| `fadeUp` variant | `whileInView` | `opacity: 0, y: 24` → `opacity: 1, y: 0` at 0.5s + stagger delay `i * 0.08–0.1` |
| Hero entry | `animate` on mount | `opacity: 0, y: 20` → visible, duration 0.6s, ease easeOut |
| Hero image | spring animation | `opacity: 0, scale: 0.9` → `opacity: 1, scale: 1`, stiffness 100, damping 15 |
| Scroll indicator | `animate` loop | `y: [0, 10, 0]`, duration 2s, repeat ∞ |
| Pulse ring | `animate` loop | `scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5]`, duration 2s repeat ∞ |
| Navbar entry | `initial` | `y: -100` → `y: 0`, 0.5s easeOut |
| Navbar scroll | `animate` | `scale: 0.95, y: -4` on scroll |
| Mobile menu | `AnimatePresence` | Fade overlay + slide items staggered `index * 0.1` |
| Timeline cards | `whileInView` | `x: ±50` → `x: 0`, duration 0.7s easeOut |
| Work cards | `whileInView` | `fadeUp` with `i * 0.07` stagger |
| Event detail hero | `whileInView` | `x: ±50` → `x: 0`, 0.7s easeOut |
| Card `whileHover` | Hover | `scale: 1.02` with primary box-shadow increase |
| Social icons | `whileHover` | `y: -5` lift |
| Social icons | `whileTap` | `scale: 0.95` |

---

## 9. Background FX System

### Hero Network (`HeroNetwork` component)
- **Canvas-based** animated particle network
- Connected node graph simulating IoT mesh topology
- Used as background on: Home hero, About, Stack, Events, Journal pages
- `showParticles={false}` variant used for inner pages (grid lines only)

### Aurora / Blob Gradients

| Location | Gradient |
|----------|----------|
| Hero photo container | `bg-zinc-950` + three `bg-purple-900/30`, `bg-blue-900/20`, `bg-primary/20` blurred circles (`blur-[100–120px]`) |
| Home hero section | `bg-zinc-950` base |
| Footer | `radial-gradient(circle_at_bottom, rgba(168,85,247,0.1), transparent 70%)` |
| Work detail hero | `radial-gradient(circle_at_bottom_left, ...)` from project `color` token |
| Event page fixed bg | 3 positioned blobs driven by `--accent-hue` HSL variable |
| Contact form | `bg-gradient-to-tr from-purple-500/10 to-blue-500/10` blurred backdrop |

### Grid Overlays
- `/grid.svg` — fine dot/line grid used in contact form and project detail heroes
- CSS `[mask-image: linear-gradient(180deg,white,rgba(255,255,255,0))]` fades grids out

---

## 10. Component Design Patterns

### Cards

| Type | Border | Background | Hover |
|------|--------|-----------|-------|
| Bento card | `border-white/5` | `bg-zinc-950` | `border-primary/20` + glow |
| Stack category card | `border-emerald/blue/purple/amber/slate/rose-500/25` | `bg-{color}-500/5` | `border-{color}-500/40` |
| Work project card | `border-white/5` | `bg-[#111111]` | `border-primary/25` + shadow |
| Journal row | `border-white/5` | `bg-white/[0.02]` | `border-primary/25 bg-primary/[0.03]` |
| Timeline event card | `border-white/10` | `bg-[#0a0a0a]` | `border-violet-500/30` + glow shadow |
| Principle / Feature card | `border-white/5` | `bg-white/[0.02]` | `border-primary/20` |
| Event sidebar card | `border-white/[0.06]` | `bg-white/[0.025]` | Glow overlay (top-to-bottom gradient) |

### Buttons

| Variant | Style | Usage |
|---------|-------|-------|
| **Primary (white)** | `bg-white text-black hover:bg-gray-200` | Hero "View Projects", submit |
| **Outline (primary)** | `border-2 border-primary/30 bg-background/50 hover:bg-primary/10 hover:border-primary hover:scale-105` | Hero "Events", "Contact Me" |
| **Round CTA** | `px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20` | About CTAs |
| **Round Outline** | `border border-white/10 rounded-full hover:border-white/20 hover:bg-white/5` | About "See My Work" |
| **Ghost** | `hover:bg-white/5 text-gray-400 hover:text-white` | Footer "Back to Top" |
| **Social icon** | `rounded-full bg-white/5 border border-white/10 hover:scale-110 hover:bg-white/10` | Social icon buttons |
| **Filter tab** | `px-4 py-2 rounded-full border border-white/10 hover:border-white/20` (active: `bg-primary border-primary`) | Work/Journal filters |

### Badges / Pills

| Type | Style |
|------|-------|
| Category badge | `px-2.5 py-0.5 rounded-full text-xs border font-medium` + category color |
| Tech pill | `px-2.5 py-1 rounded-full text-xs border border-white/8 bg-white/4 text-white/80` |
| Event skill | `.skill-badge` — HSL-driven accent bg + border |
| Verified | `bg-emerald-500/[0.08] border border-emerald-500/15 text-emerald-400` |
| Attendees | HSL accent-hue driven badge |
| Founder badge | `border-primary/30 bg-primary/10 text-primary rounded-full text-xs` |

---

## 11. Interactive Diagram Components (inline in articles)

### Latency Simulator (in `/journal/obsessing-over-latency`)

```
// Interactive: Latency Simulator

Edge path:  sensor (2ms) → ESP32 (4ms) → MQTT (4ms) → WebSocket (4ms) → React (2ms) = 14ms total
Cloud path: sensor → 4G → API → DB → WebSocket → browser = 200–800ms
```

Styled with `border-blue-500/20 bg-blue-500/5 font-mono`

### FuelShield Architecture (in `/journal/fuelshield-case-study`)

```
// FuelShield Architecture

HC-SR04 → ESP32 → (local detection) → MQTT → Firebase → Next.js Dashboard
```

Footer note: `Detection runs on-chip. Only alerts reach the cloud. Offline buffer: 50 readings.`

Styled with `border-emerald-500/20 bg-emerald-500/5 font-mono`

---

## 12. Scrollbar Styling

```css
/* Track */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: hsl(var(--background)); }

/* Thumb */
::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 9999px;
  border: 2px solid hsl(var(--background));
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary)); /* Violet on hover */
}

/* Hidden scrollbar utility */
.no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
```

---

## 13. 3D / HUD Utilities

```css
.perspective-1000  { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
.translate-z-10    { transform: translateZ(10px); }
.rotate-x-2        { transform: rotateX(2deg); }
```

Used for IoT-themed HUD-style card effects.

---

## 14. Category Color Map

### Journal Categories
| Category | Badge Style |
|----------|-------------|
| Insights | `text-amber-400 border-amber-500/30 bg-amber-500/5` |
| Technical | `text-blue-400 border-blue-500/30 bg-blue-500/5` |
| Engineering | `text-emerald-400 border-emerald-500/30 bg-emerald-500/5` |
| Process | `text-purple-400 border-purple-500/30 bg-purple-500/5` |

### Project Gradient Colors (hero bg)
| Project | Gradient Token |
|---------|---------------|
| FuelShield | `from-purple-900/40` |
| Sanjivani | `from-emerald-900/40` |
| Sanjivani 2.0 | `from-teal-900/40` |
| IoT Security | `from-cyan-900/40` |
| Smart CRM | `from-orange-900/40` |
| WireFlow | `from-blue-900/40` |
| Ugam Campus | `from-orange-900/40` |

---

## 15. Responsive Breakpoints (Tailwind defaults)

| Prefix | Min-width | Usage |
|--------|-----------|-------|
| `sm` | 640px | Button layout (column → row) |
| `md` | 768px | 2-col grids, show desktop nav |
| `lg` | 1024px | 3-col grids, event sidebar layout |
| `xl` | 1280px | 3-col project/stack grid |
| `2xl` | 1400px | Container max-width |

---

## 16. Tech Stack (Frontend Build)

| Technology | Version | Role |
|------------|---------|------|
| Next.js | 14 (App Router) | Framework |
| React | 18 | UI library |
| TypeScript | — | Type safety |
| Tailwind CSS | — | Utility CSS |
| Framer Motion | — | All animations |
| shadcn/ui | — | Base UI components (Badge, Button, Input, etc.) |
| Sanity CMS | — | Backend CMS (optional) |
| `tailwindcss-animate` | — | Tailwind animation plugin |
| Google Fonts | Inter + Playfair Display | Typography |
| Vercel Analytics | — | Traffic analytics |
| Cloudflare Pages | — | Hosting |

---

## 17. File Structure Quick Reference

```
app/
  globals.css          ← All CSS tokens, keyframes, utilities
  layout.tsx           ← Root layout, metadata, fonts, JSON-LD
  page.tsx             ← Home page (Hero + BentoGateway + Contact)
  about/page.tsx       ← About route
  work/page.tsx        ← Work listing route
  work/[slug]/page.tsx ← Project detail route
  stack/page.tsx       ← Stack route
  events/page.tsx      ← Events listing route
  events/[slug]/page.tsx ← Event detail route
  journal/page.tsx     ← Journal listing route
  journal/[slug]/page.tsx ← Post detail route

components/
  hero.tsx             ← Home hero section
  bento-gateway.tsx    ← Home bento grid
  about-client.tsx     ← About page content
  work-client.tsx      ← Work page + filter
  stack-client.tsx     ← Stack page + categories
  events-timeline.tsx  ← Chronology timeline
  contact.tsx          ← Contact section + form
  navbar.tsx           ← Floating pill navbar
  footer.tsx           ← Site footer
  ui/                  ← shadcn components + custom UI

lib/
  projects.ts          ← Projects data (7 projects)
  events.ts            ← Events data (2 events)
  journal.ts           ← Journal posts data (7 articles)
  types.ts             ← TypeScript interfaces
  fetch.ts             ← Data fetching helpers
  utils.ts             ← cn() utility

tailwind.config.ts     ← Theme extension, fonts, colors, radii
```
