# Event Detail Pages (`/events/[slug]`)

Sources: `app/events/[slug]/page.tsx`, `lib/events.ts`

Each event detail page renders a full-bleed hero + sidebar + article content layout.

---

## Page Structure (per event)

```
/events/[slug]
│
├── Ambient Background Blobs (accent-hue driven)
│
├── Hero Section (75-80vh fullscreen image)
│   ├── ← Community  (breadcrumb back button)
│   ├── ✅ Verified badge
│   ├── {attendees} Attendees badge
│   ├── H1 (event title)
│   ├── Subtitle (event tagline)
│   ├── 📅 Date
│   └── 📍 Location
│
├── Main Content (2-column layout)
│   │
│   ├── Sidebar (sticky, left)
│   │   ├── Role Card — "{role}"
│   │   ├── Summary Card — "{summary}"
│   │   ├── Impact Metrics — numbered list
│   │   └── Skills — badge cloud
│   │
│   └── Article Body (right, 8/12 cols)
│       ├── ContentRenderer (paragraphs, h3s, highlights, grids, blockquotes)
│       └── ← Return to Community & Events  (footer nav)
│
└── Footer nav back button
```

---

## Navigation UI Text

| Element | Text |
|---------|------|
| Breadcrumb back button | `← Community` |
| Verified badge | `✅ Verified` |
| Attendees badge | `✨ {attendees} Attendees` |
| Article footer back | `Return to / Community & Events ←` |

---

## Event 1 Detail: InnoHack (`/events/innohack`)

### Hero
- **Title:** InnoHack
- **Subtitle:** A Student-Led Hackathon for Emerging Technologies
- **Date:** 4th & 5th June 2025
- **Location:** Chhatrapati Sambhajinagar
- **Verified:** ✅
- **Attendees:** 200+ Participants
- **Accent Color:** Hue 270 (violet/purple)
- **Hero Image:** `/images/events/innohack.JPG`

### Sidebar
**Role:** Executive Head

**Summary:**
> Orchestrated Chhatrapati Sambhajinagar's largest student-led hackathon with 200+ participants, focusing on automation and innovation.

**Impact Metrics (numbered):**
1. 200+ participants
2. 50 teams
3. 10 industry mentors
4. 36-hour build sprint

**Skills (badge cloud):**
- Event Strategy
- Team Leadership
- Inter-College Coordination
- Logistics & Operations
- Technical Event Execution

### Article Body

**Para 1:**
> As the **Executive Head of BotBuddies**, I played a key role in organizing **InnoHack** in collaboration with the **AIDS Department of C.S.M.S.S. College of Engineering**, executing what became Chhatrapati Sambhajinagar's largest student-led hackathon. The event brought together students, mentors, and institutions to create a high-energy environment focused on innovation, collaboration, and hands-on problem solving.

**Highlight block:**
> Automate. Innovate. Dominate.

**H3: The Vision**

> The hackathon theme was designed to challenge students to think beyond theory and build practical solutions. Problem statements were centered around strict industry domains.

**Track Grid (3 cols):**

| Track | Description |
|-------|-------------|
| **Robotics** | Designing autonomous systems and hardware integration challenges for real-world scenarios. |
| **AI & ML** | Building predictive models and intelligent automation systems to solve complex datasets. |
| **Web Dev** | Creating scalable, user-centric web applications with modern tech stacks. |

> The goal was to encourage participants to design scalable, automation-driven solutions aligned with emerging industry needs.

**H3: Execution & Challenges**

> Organizing an event of this scale required hands-on coordination and rapid problem-solving across multiple teams. My responsibilities included:

**Responsibilities Grid (3 cols):**

| Area | Description |
|------|-------------|
| **Strategy & Planning** | Worked closely with the AIDS Department faculty and student coordinators to align schedules, evaluation flow, and execution timelines. |
| **Logistics & Ops** | Managed venue readiness, participant flow, food arrangements, and power backup to support uninterrupted overnight coding. |
| **Tech Execution** | Coordinated on-ground technical requirements (Wi-Fi, server access) to ensure smooth hackathon operations across 50 teams. |

**Blockquote:**
> "Leadership isn't about being in charge. It's about taking care of those in your charge."

**Closing Para:**
> Seeing students collaborate, debug, and build solutions under intense time pressure reinforced the impact of creating platforms that empower innovation.

### SEO
- **Title:** `InnoHack | Yash Ghodele`
- **Description:** Orchestrated Chhatrapati Sambhajinagar's largest student-led hackathon with 200+ participants, focusing on automation and innovation.
- **Canonical:** `https://yash-ghodele.pages.dev/events/innohack`
- **Keywords:** Event Strategy · Team Leadership · Inter-College Coordination · Logistics & Operations · Technical Event Execution

---

## Event 2 Detail: SPIC MACAY's Virasat'24 (`/events/spic-macay-virasat`)

### Hero
- **Title:** SPIC MACAY's Virasat'24
- **Subtitle:** Bridging the Gap Between Legend & Learner
- **Date:** February 2024
- **Location:** Maharashtra, India
- **Verified:** ✅
- **Attendees:** MIT College & Rural Schools
- **Accent Color:** Hue 10 (warm orange/amber)
- **Hero Image:** `/images/events/spic-macay.jpg`

### Sidebar
**Role:** Head of Hospitality

**Summary:**
> Managed high-stakes hospitality and logistics for Pandit Ronu Majumdar, ensuring a seamless cultural experience across urban and rural venues.

**Impact Metrics (numbered):**
1. Bansuri Concert
2. Rural Outreach
3. Artist Hospitality

**Skills (badge cloud):**
- Hospitality Management
- Logistics
- Audience Management
- Cultural Curation

### Article Body

**Para 1:**
> As **Cultural Secretary of the IETE Students' Forum**, I spearheaded the organization of **SPIC MACAY's Virasat'24** at our college — a landmark cultural event celebrating India's classical performing arts heritage. This was a significant endeavor in bringing a nationally recognized cultural initiative to our campus.

**Highlight block:**
> Preserving heritage through the universal language of art.

**H3: The Mission**

> SPIC MACAY (Society for the Promotion of Indian Classical Music And Culture Amongst Youth) brings world-class Indian classical artists to educational institutions. Hosting Virasat'24 meant delivering a professional-grade cultural experience for hundreds of students.

**Content Grid (3 cols):**

| Area | Description |
|------|-------------|
| **Classical Music** | Live performances by acclaimed classical musicians, exposing students to centuries-old Indian musical traditions. |
| **Classical Dance** | Traditional dance forms presented by skilled artists, showcasing the elegance and discipline of Indian performing arts. |
| **Cultural Heritage** | Interactive sessions connecting students with India's rich artistic legacy and inspiring cultural appreciation. |

> The event was designed to bridge the gap between students and India's classical heritage, creating an immersive cultural experience that went beyond passive observation.

**H3: Planning & Execution**

> Coordinating a SPIC MACAY event required meticulous planning across multiple domains — from securing artist bookings to venue acoustics, audience management, and institutional coordination.

**Planning Grid (3 cols):**

| Area | Description |
|------|-------------|
| **Artist Coordination** | Managed communication with SPIC MACAY's national team and coordinated arrival logistics, rehearsals, and performance schedules for visiting artists. |
| **Venue & Production** | Oversaw stage design, sound engineering, lighting setup, and seating arrangements to create an authentic concert-hall experience. |
| **Outreach & Engagement** | Drove campus-wide promotions, managed registrations, and ensured strong student turnout through strategic social media and on-ground campaigns. |

**Blockquote:**
> "Culture is the widening of the mind and of the spirit."

**Closing Para:**
> The event drew enthusiastic participation and created a lasting impression, demonstrating that classical arts have a powerful place in modern educational settings. It strengthened the college's cultural identity and opened doors for more such initiatives.

### SEO
- **Title:** `SPIC MACAY's Virasat'24 | Yash Ghodele`
- **Description:** Managed high-stakes hospitality and logistics for Pandit Ronu Majumdar, ensuring a seamless cultural experience across urban and rural venues.
- **Canonical:** `https://yash-ghodele.pages.dev/events/spic-macay-virasat`
- **Keywords:** Hospitality Management · Logistics · Audience Management · Cultural Curation
