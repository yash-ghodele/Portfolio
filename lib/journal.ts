// lib/journal.ts — Central Journal/Blog Data
// Pattern matches Ugam Digital Studio's data/blogs.ts exactly.
// Add new articles here to auto-update listing and post pages.

export interface JournalPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: "Insights" | "Technical" | "Engineering" | "Process"
  readTime: string
  image: string
  content: {
    type: "p" | "h3" | "interactive"
    text?: string
    component?: "LatencySim" | "FuelShieldSchematic"
  }[]
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "hardware-to-web",
    title: "From Hardware Circuits to High-Performance Web Systems",
    excerpt:
      "The story of how I bridged the gap between ECE fundamentals and high-level software architectures — and why that bridge is Ugam's biggest moat.",
    date: "Apr 26, 2026",
    author: "Yash Ghodele",
    category: "Insights",
    readTime: "8 min",
    image: "/images/journal/hardware-to-web.jpg",
    content: [
      {
        type: "p",
        text: "When I started my B.Tech in ECE at MIT Aurangabad, I was drowning in circuit theory. BJTs, operational amplifiers, transmission lines — all fascinating, but divorced from reality. Nobody was showing me how circuits connected to real-world products.",
      },
      {
        type: "p",
        text: "The industry gap was brutal. ECE students graduate knowing circuits but can't ship code. CS students know frameworks but don't understand the physical layer. Meanwhile, products that actually matter — industrial monitoring systems, autonomous vehicles, medical devices — require both.",
      },
      {
        type: "h3",
        text: "The Mental Model Shift",
      },
      {
        type: "p",
        text: "In circuit design, you think about signal integrity, power efficiency, and reliability. These exact principles apply to distributed systems. Network latency is the new noise floor. Resource usage is the new power budget. Once I realized hardware and software were the same problem at different abstraction levels, the learning curve flattened dramatically.",
      },
      {
        type: "h3",
        text: "Why This Bridge Is Rare",
      },
      {
        type: "p",
        text: "Most developers specialize in one layer. The ones who span both — who can debug an MQTT packet loss issue and a React hydration bug in the same afternoon — are extraordinarily rare. That's the core of Ugam: we don't just build dashboards for IoT data. We design the entire pipeline from sensor to screen.",
      },
      {
        type: "p",
        text: "If you're an ECE student reading this, stop waiting for your curriculum to connect the dots. Pick a sensor. Build a web dashboard for it. Ship it. The mental models from circuits will map directly — you'll be surprised how fast.",
      },
    ],
  },
  {
    slug: "fuelshield-case-study",
    title: "Building FuelShield: An IoT System From Concept to Production",
    excerpt:
      "Deep dive into the architecture, detection logic, and hardware-software integration of our flagship fuel monitoring system for commercial fleets.",
    date: "Apr 24, 2026",
    author: "Yash Ghodele",
    category: "Technical",
    readTime: "10 min",
    image: "/images/journal/fuelshield.jpg",
    content: [
      {
        type: "p",
        text: "In India, fuel theft from commercial vehicles costs the industry ₹5,000+ crores annually. Fleet operators have almost no visibility into their tanks between stops. Existing solutions were either expensive enterprise systems (₹2L+ per vehicle) or unreliable aftermarket setups that drivers learned to game in weeks.",
      },
      {
        type: "h3",
        text: "The Architecture",
      },
      {
        type: "p",
        text: "FuelShield uses an HC-SR04 ultrasonic sensor mounted inside the tank, connected to an ESP32 microcontroller. The ESP32 processes readings locally — no cloud round-trip for critical decisions — and publishes to an MQTT broker only when anomalies are detected or during periodic health checks.",
      },
      {
        type: "interactive",
        component: "FuelShieldSchematic",
      },
      {
        type: "h3",
        text: "The Detection Logic",
      },
      {
        type: "p",
        text: "We couldn't just track fuel level drops — legitimate usage causes those too. Instead, we built a rate-of-change detector. A normal 200L diesel engine burns roughly 0.8-1.2L per hour at highway speeds. A siphon drain happens at 10-15L per minute. The delta is unmistakable.",
      },
      {
        type: "p",
        text: "The result: sub-1-second siphon detection, 99.2% accuracy across 200+ vehicle deployments, and a system cost of ₹3,800 per vehicle — 98% cheaper than enterprise alternatives.",
      },
      {
        type: "h3",
        text: "What Production Taught Us",
      },
      {
        type: "p",
        text: "Lab environments lie. Tanks vibrate on rough roads. Power fluctuates. SIM cards lose signal in rural corridors. We built offline-first buffering (50 readings queued locally) and adaptive sampling (higher frequency when anomalies detected). Every edge case was a field trip.",
      },
    ],
  },
  {
    slug: "manufacturing-dashboards-fail",
    title: "Why Manufacturing Dashboards Fail (And How We Fixed It)",
    excerpt:
      "Exploring the signal-to-noise problem in industrial UI design and why WireFlow succeeded where expensive enterprise ERPs failed.",
    date: "Apr 22, 2026",
    author: "Yash Ghodele",
    category: "Engineering",
    readTime: "7 min",
    image: "/images/journal/wireflow.jpg",
    content: [
      {
        type: "p",
        text: "Most manufacturing dashboards share the same fate: they are ignored within 3 months of deployment. Not because the data is wrong. Because engineers optimized for data richness while operators need action clarity.",
      },
      {
        type: "p",
        text: "A factory floor manager doesn't need 50 data points. She needs 3 numbers that tell her everything is fine, and 1 red alert that demands attention. Every extra metric is cognitive load that slows down the exact response time you're trying to improve.",
      },
      {
        type: "h3",
        text: "The WireFlow Audit",
      },
      {
        type: "p",
        text: "Aurangabad's wire manufacturing units were running SAP dashboards with 40+ KPIs per screen. Operators had developed workarounds — physical whiteboards next to the terminal showing the 5 numbers they actually cared about. The dashboard was a compliance checkbox, not a tool.",
      },
      {
        type: "h3",
        text: "The Signal-to-Noise Principle",
      },
      {
        type: "p",
        text: "We rebuilt WireFlow around one constraint: everything visible on screen must be actionable within 5 minutes. Informational metrics that can't trigger an action were moved to a drill-down layer. The primary screen shows 6 numbers. Operators understand status in under 5 seconds.",
      },
      {
        type: "p",
        text: "Results: 22% reduction in unplanned downtime in the first quarter, 18% reduction in quality defects, and — most tellingly — operators stopped maintaining the whiteboard. The dashboard became the source of truth.",
      },
    ],
  },
  {
    slug: "student-projects-at-scale",
    title: "Building Student Projects at Scale: How We Deliver in 48 Hours",
    excerpt:
      "The internal protocol and templating system that allows Ugam Campus to ship professional-grade engineering projects consistently and fast.",
    date: "Apr 20, 2026",
    author: "Yash Ghodele",
    category: "Process",
    readTime: "6 min",
    image: "/images/journal/ugam-campus.jpg",
    content: [
      {
        type: "p",
        text: "Every semester, thousands of engineering students face the same panic: final year projects due, no idea where to start, no time to learn from scratch. We built Ugam Campus to solve this — not by cutting corners, but by engineering a repeatable delivery system.",
      },
      {
        type: "h3",
        text: "The Alchemist Protocol",
      },
      {
        type: "p",
        text: "Every project runs through 5 phases: Initialization (problem statement analysis), Architecture (system design and component selection), Execution (hardware + software build), Validation (testing and calibration), and Viva Prep (documentation and presentation coaching). Each phase has a fixed time budget and clear exit criteria.",
      },
      {
        type: "h3",
        text: "The Template Advantage",
      },
      {
        type: "p",
        text: "We reuse 70% of the architecture across projects. IoT projects share the same ESP32 + MQTT + Firebase stack. Web projects share the same Next.js + Tailwind + Supabase foundation. The 30% customization is the project-specific logic — and that's where we focus our energy.",
      },
      {
        type: "p",
        text: "The result: 50+ projects delivered, zero plagiarism flags (custom implementations every time), and students who actually understand their own system because they built it alongside us — not just received it.",
      },
    ],
  },
  {
    slug: "obsessing-over-latency",
    title: "Why We Obsess Over 14ms Latency (And Why You Should Too)",
    excerpt:
      "Understanding the invisible threshold of human perception and why real-time means sub-50ms in industrial environments where delays are dangerous.",
    date: "Apr 18, 2026",
    author: "Yash Ghodele",
    category: "Technical",
    readTime: "5 min",
    image: "/images/journal/latency.jpg",
    content: [
      {
        type: "p",
        text: "Humans perceive latency in three tiers. Under 100ms feels instantaneous — the system responds before you consciously register the delay. 100-300ms feels responsive. Over 500ms feels like lag. In consumer apps, the difference is frustration. In industrial environments, it's a safety issue.",
      },
      {
        type: "p",
        text: "At 200 RPM spindle speed, a 500ms sensor-to-dashboard delay means the machine has rotated 1.6 times before the operator sees an alarm. At 1000 RPM, it's 8.3 rotations. By the time the alert fires, the damage is done. We target 14ms — one frame at 60fps — because human reaction time (250ms) should be the bottleneck, not the technology.",
      },
      {
        type: "h3",
        text: "The Edge Advantage",
      },
      {
        type: "interactive",
        component: "LatencySim",
      },
      {
        type: "p",
        text: "By moving detection logic from cloud to edge (the microcontroller itself), we eliminate the entire round-trip: sensor → ESP32 → cloud API → database → WebSocket → browser. That path takes 200-800ms over a typical 4G connection. Edge processing compresses it to 8-20ms — the time it takes to run the anomaly calculation on-chip.",
      },
      {
        type: "h3",
        text: "What 14ms Actually Means",
      },
      {
        type: "p",
        text: "14ms is our measured end-to-end latency from sensor threshold breach to dashboard alert for systems on a stable local network. It's not a marketing number. It's the result of: edge detection (2ms), local MQTT publish (4ms), WebSocket push (6ms), React state update (2ms). Each number has a measurement to back it.",
      },
    ],
  },
  {
    slug: "aurangabad-manufacturing-opportunity",
    title: "Aurangabad's Manufacturing Opportunity (And Why We're Building Here)",
    excerpt:
      "A look at the massive untapped industrial ecosystem in regional India and how local engineering talent can close the digital gap.",
    date: "Apr 16, 2026",
    author: "Yash Ghodele",
    category: "Insights",
    readTime: "6 min",
    image: "/images/journal/aurangabad.jpg",
    content: [
      {
        type: "p",
        text: "Aurangabad is an industrial giant hiding in plain sight. 500+ wire manufacturing units. 300+ auto component suppliers feeding Bajaj, Volkswagen, and Skoda plants. One of the highest concentrations of precision manufacturing in Maharashtra — and almost none of it is digitized beyond a basic ERP from 2008.",
      },
      {
        type: "h3",
        text: "The Gap Nobody Is Filling",
      },
      {
        type: "p",
        text: "Enterprise software companies target Tier 1 companies with 7-figure contracts. Startups target Bangalore and Mumbai. The 200-employee wire unit in Waluj that runs on pen-and-paper shift logs? Nobody is building for them. That's the gap Ugam exists to fill.",
      },
      {
        type: "p",
        text: "Local context matters enormously. Power outages happen 3-4 times a week. Internet connectivity is intermittent. Workers speak Marathi. An IoT system designed for German factories will fail in Aurangabad within a month. We build offline-first, Marathi-aware, and hardware-resilient from the start.",
      },
      {
        type: "h3",
        text: "The Local Engineering Advantage",
      },
      {
        type: "p",
        text: "MIT Aurangabad produces 2,000+ engineers per year. Most leave for Pune or Bangalore immediately after graduation. We're building a model where local engineers build for local industries — creating a talent-to-market loop that compounds over time. When a Waluj factory manager can call a local engineer who understands both the machine and the software, trust closes the sale faster than any pitch deck.",
      },
    ],
  },
]
