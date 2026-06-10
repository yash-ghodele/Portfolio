# Blog / Journal Listing Page (`/journal`)

Source: `app/journal/JournalClient.tsx`

---

## Page Header

Section label (mono): `// Journal`

### H1
```
Engineering Deep Dives.
```
("Deep Dives." in primary color)

### Sub-description
> Technical writing on IoT architecture, manufacturing software, latency obsession, and building in Aurangabad's industrial corridor.

---

## Filter Tabs

```
All  |  Insights  |  Technical  |  Engineering  |  Process
```

### Category Color Map
| Category | Badge Style |
|----------|-------------|
| Insights | Amber — `text-amber-400 border-amber-500/30 bg-amber-500/5` |
| Technical | Blue — `text-blue-400 border-blue-500/30 bg-blue-500/5` |
| Engineering | Emerald — `text-emerald-400 border-emerald-500/30 bg-emerald-500/5` |
| Process | Purple — `text-purple-400 border-purple-500/30 bg-purple-500/5` |

---

## Article List (all 7, in order)

Each row displays: **Category badge · Date · Title · Excerpt (2 lines) · Read time · ↗ arrow**

| # | Title | Category | Date | Read Time |
|---|-------|----------|------|-----------|
| 1 | Analysis, Design, and Synthesis — Or: The Structured Side of "Fuck Around and Find Out" | Insights | May 26, 2026 | 5 min |
| 2 | From Hardware Circuits to High-Performance Web Systems | Insights | Apr 26, 2026 | 8 min |
| 3 | Building FuelShield: An IoT System From Concept to Production | Technical | Apr 24, 2026 | 10 min |
| 4 | Why Manufacturing Dashboards Fail (And How We Fixed It) | Engineering | Apr 22, 2026 | 7 min |
| 5 | Building Student Projects at Scale: How We Deliver in 48 Hours | Process | Apr 20, 2026 | 6 min |
| 6 | Why We Obsess Over 14ms Latency (And Why You Should Too) | Technical | Apr 18, 2026 | 5 min |
| 7 | Aurangabad's Manufacturing Opportunity (And Why We're Building Here) | Insights | Apr 16, 2026 | 6 min |

---

## Blog Post Detail Page (`/journal/[slug]`)

Source: `app/journal/[slug]/PostClient.tsx`

### Navigation
- **Back link:** `← Back to Journal` (links to /journal)
- **Footer nav:** `Return to / Engineering Journal ←`

### Article Header (per post)
- Category badge (colored)
- 📅 Date
- 🕐 {readTime} read
- **H1:** Article title (extra-large, `font-black`)
- **Excerpt** (left-bordered with `border-primary/40`)
- **Author byline:** YG avatar + "Yash Ghodele" · "Founder, Ugam Digital Studio"
- Divider `h-px bg-white/5`

### Content Block Types

| Block Type | Rendered As |
|------------|-------------|
| `p` | Paragraph — `text-base text-muted-foreground leading-[1.85] font-light` |
| `h3` | H2 heading — `text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5` |
| `blockquote` | Blockquote — `pl-5 border-l-2 border-primary/50 italic bg-white/[0.01] py-4 rounded-r-xl whitespace-pre-line` |
| `ul` | Bullet list with `↳` arrow prefix in primary color |
| `code` | Code block — `bg-zinc-900/60 border border-white/5 font-mono text-sm text-zinc-300` |
| `interactive` (LatencySim) | Latency comparison panel — blue border/bg |
| `interactive` (FuelShieldSchematic) | Architecture diagram — emerald border/bg |

### Interactive Component: Latency Simulator

```
// Interactive: Latency Simulator

Edge processing path:
  sensor (2ms) → ESP32 (4ms) → MQTT (4ms) → WebSocket (4ms) → React (2ms) = 14ms total

Cloud round-trip path:
  sensor → 4G → API → DB → WebSocket → browser = 200–800ms
```

### Interactive Component: FuelShield Schematic

```
// FuelShield Architecture

HC-SR04 → ESP32 → (local detection) → MQTT → Firebase → Next.js Dashboard

Detection runs on-chip. Only alerts reach the cloud. Offline buffer: 50 readings.
```

---

## SEO per Journal Post

| Field | Value |
|-------|-------|
| **Title** | `{post.title} \| Yash Ghodele` |
| **Description** | `{post.excerpt}` |
| **Author** | Yash Ghodele |
| **OG type** | article |
| **Canonical** | `https://yash-ghodele.pages.dev/journal/{slug}` |
| **Twitter creator** | @why_be_yashhh |
