# Project Detail Pages (`/work/[slug]`)

Source: `app/work/[slug]/page.tsx`, `lib/projects.ts`

These are the individual case study pages for each project. Each page has:
- **Hero section** — large title, badge, description, CTA buttons
- **Stats & Tech section** — key impact metric + full tech stack
- **Main content** — case study body (rendered from `content` field in data)
- **Footer nav** — back to Work link

---

## Project 1: FuelShield — IoT Fuel Theft Detection

**URL:** `/work/fuelshield`

### Hero Section
- **Badge:** IoT Solution
- **H1:** FuelShield - IoT Fuel Theft Detection
- **Description:** Real-time fuel theft detection and fleet analytics platform. Reduces fuel losses by 20% using ESP32 sensors and MQTT telemetry.
- **Buttons:** View Live | Source Code (both currently `#`)
- **Gradient theme:** `from-purple-900/40`

### Stats & Tech
| Field | Value |
|-------|-------|
| **Key Impact** | 20% Reduction in fuel expenses |
| **Technologies** | Next.js · Firebase · MQTT · ESP32 · GSM · Recharts |

### Case Study Body
*(Content rendered via ContentRenderer — detailed narrative about how FuelShield was built. Main journal article `fuelshield-case-study` covers this in depth — see `06_JOURNAL.md` Article 3.)*

**Key content points:**
- India loses ₹5,000+ crores/year to fuel theft
- HC-SR04 ultrasonic sensor inside tank + ESP32 microcontroller
- Edge-first: local anomaly detection, MQTT publishes only on alert
- Rate-of-change detection: siphon = 10-15L/min vs. normal burn 0.8-1.2L/hr
- 99.2% accuracy, 200+ vehicle deployments, ₹3,800/vehicle (98% cheaper than enterprise)
- Offline buffering: 50 readings queued locally

---

## Project 2: Sanjivani — AI Crop Disease Detection

**URL:** `/work/sanjivani`

### Hero Section
- **Badge:** AI for Agriculture
- **H1:** Sanjivani - AI Crop Disease Detection
- **Description:** An offline-capable PWA using Deep Learning (MobileNetV2) to detect crop diseases in under 2 seconds. Built for the 2G world.
- **Buttons:** View Live | Source Code (both `#`)
- **Gradient theme:** `from-emerald-900/40`

### Stats & Tech
| Field | Value |
|-------|-------|
| **Key Impact** | 98.2% Model Accuracy |
| **Technologies** | PyTorch · Flask · React · MobileNetV2 · PWA · IndexedDB |

### Case Study Body
*(MobileNetV2-based crop disease detection, offline-first PWA, 2G/3G support, agricultural context.)*

---

## Project 3: Sanjivani 2.0 — AI Crop Doctor

**URL:** `/work/sanjivani-v2`

### Hero Section
- **Badge:** Production-Grade AI
- **H1:** Sanjivani 2.0 - AI Crop Doctor
- **Description:** Production-grade AI agriculture platform. Hybrid CNN+LLM architecture with edge optimization, multilingual support, and comprehensive testing built for real farmers and technical interviews.
- **Buttons:**
  - View Live → https://sanjivani-1ai.pages.dev/
  - Source Code → https://github.com/yash-ghodele/Sanjivani.git
- **Gradient theme:** `from-teal-900/40`

### Stats & Tech
| Field | Value |
|-------|-------|
| **Key Impact** | < 100ms Inference Latency |
| **Technologies** | Next.js 14 · FastAPI · TensorFlow · Firebase · Gemini 1.5 |

### Case Study Body
*(Production AI platform, CNN + Gemini 1.5 LLM hybrid, multilingual, edge-optimized, testing pipeline.)*

---

## Project 4: IoT Security — Smart Lock System

**URL:** `/work/iot-security`

### Hero Section
- **Badge:** Embedded Systems
- **H1:** IoT Security - Smart Lock System
- **Description:** 3-Layer Auth Smart Lock with autonomous lockdown and sub-300ms cloud latency. Event-driven architecture for real-time defense.
- **Buttons:** View Live | Source Code (both `#`)
- **Gradient theme:** `from-cyan-900/40`

### Stats & Tech
| Field | Value |
|-------|-------|
| **Key Impact** | 300ms Cloud Latency |
| **Technologies** | ESP8266 (NodeMCU) · C++ · Blynk IoT · WebSockets · Hardware Design |

### Case Study Body
*(3-layer authentication system: RFID + PIN + app. Autonomous lockdown mode. WebSocket event-driven real-time alerts. Hardware design for NodeMCU.)*

---

## Project 5: Smart CRM — Business Automation

**URL:** `/work/smart-crm`

### Hero Section
- **Badge:** Business Automation
- **H1:** Smart CRM - Business Automation
- **Description:** High-throughput VBA automation engine handling 100k+ B2B leads with 99.9% validation accuracy. Replaces manual workflows with RAM-based processing.
- **Buttons:** View Live | Source Code (both `#`)
- **Gradient theme:** `from-orange-900/40`

### Stats & Tech
| Field | Value |
|-------|-------|
| **Key Impact** | 100k+ Throughput |
| **Technologies** | VBA · MS Access · Excel Automation · WinAPI · SQL · Regex |

### Case Study Body
*(VBA engine for B2B lead management, RAM-based processing to bypass disk I/O limits, regex validation for 100k+ records at 99.9% accuracy, replaces manual Excel workflows.)*

---

## Project 6: WireFlow — Industrial Operations Dashboard

**URL:** `/work/wireflow`

### Hero Section
- **Badge:** Industrial Dashboard
- **H1:** WireFlow - Industrial Operations Dashboard
- **Description:** Smart manufacturing system with sub-14ms latency goals and offline-first SSR architecture. Replaces SAP for Aurangabad's wire units.
- **Buttons:** View Live | Source Code (both `#`)
- **Gradient theme:** `from-blue-900/40`

### Stats & Tech
| Field | Value |
|-------|-------|
| **Key Impact** | 22% Reduction in Downtime |
| **Technologies** | Next.js · FastAPI · MQTT · SQLite · Redis · Framer Motion |

### Case Study Body
*(Detailed in journal article `manufacturing-dashboards-fail` — see `06_JOURNAL.md` Article 4.)*

**Key content points:**
- Replaced SAP dashboards with 40+ KPIs that nobody used
- Signal-to-noise principle: only 6 numbers on primary screen
- Everything visible must be actionable within 5 minutes
- 22% reduction in unplanned downtime Q1
- 18% reduction in quality defects
- Operators stopped maintaining the whiteboard workaround

---

## Project 7: Ugam Campus — Project-as-a-Service

**URL:** `/work/ugam-campus`

### Hero Section
- **Badge:** Engineering Education
- **H1:** Ugam Campus - Project-as-a-Service
- **Description:** A professional-grade delivery protocol for student engineering projects. 50+ projects shipped with zero plagiarism and deep technical coaching.
- **Buttons:** View Live | Source Code (both `#`)
- **Gradient theme:** `from-orange-900/40`

### Stats & Tech
| Field | Value |
|-------|-------|
| **Key Impact** | 50+ Projects Shipped |
| **Technologies** | React · Node.js · Firebase · Arduino · Python · PCB Design |

### Case Study Body
*(Detailed in journal article `student-projects-at-scale` — see `06_JOURNAL.md` Article 5.)*

**Key content points:**
- The Alchemist Protocol: 5-phase delivery (Initialization → Architecture → Execution → Validation → Viva Prep)
- 70% template reuse (ESP32+MQTT+Firebase for IoT; Next.js+Tailwind+Supabase for web)
- 30% custom logic per project
- 50+ projects, zero plagiarism flags
- Students understand their own system — built alongside, not handed over

---

## Project Detail Page — UI Structure

```
/work/[slug]
│
├── Hero (85vh fullscreen)
│   ├── Gradient background (project-specific color)
│   ├── Grid overlay
│   ├── Badge (subtitle/category)
│   ├── H1 (title)
│   ├── Description paragraph
│   └── CTA buttons: View Live | Source Code
│
├── Stats & Tech Section
│   ├── Left card: KEY IMPACT → {stats}
│   └── Right card: TECHNOLOGIES → {tech pills}
│
├── Main Content (prose)
│   └── ContentRenderer (renders case study body blocks)
│
└── Footer Nav
    └── ← Back to Work
```

---

## SEO per Project Page

| Field | Value |
|-------|-------|
| **Title** | `{project.title} \| Yash Ghodele` |
| **Description** | `{project.description}` |
| **Keywords** | `{project.tech}` array |
| **OG image** | `{project.image}` |
| **OG type** | article |
| **Canonical** | `https://yash-ghodele.pages.dev/work/{slug}` |
| **Twitter creator** | @why_be_yashhh |
