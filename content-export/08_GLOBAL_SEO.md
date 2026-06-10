# Global: SEO, Metadata, Navbar & Footer

Sources: `app/layout.tsx`, `components/navbar.tsx`, `components/footer.tsx`

---

## Global SEO Metadata

### Site Title
```
Default: Yash Ghodele | Full Stack Developer & IoT Engineer
Template: {Page Title} | Yash Ghodele
```

### Meta Description
> Yash Ghodele is a Full Stack Developer & IoT Engineer specializing in React, Next.js, Python, Arduino, and Embedded Systems. B.Tech ECE student at MIT College of Engineering, Aurangabad. Executive Head at BotBuddies, organizing hackathons with 200+ participants.

### Application Name
```
Yash Ghodele Portfolio
```

### Category
```
Technology, Engineering, Portfolio
```

### Keywords (full list)
- Yash Ghodele
- Full Stack Developer
- IoT Engineer
- Next.js Developer
- React Developer
- TypeScript
- Python Developer
- Arduino
- Embedded Systems
- Robotics
- Web Development
- Flutter Developer
- Hackathon Organizer
- Event Manager
- BotBuddies
- InnoHack
- MIT College of Engineering
- Aurangabad
- Chhatrapati Sambhajinagar
- India
- Portfolio
- ECESA
- IETE

### Author / Creator / Publisher
```
Yash Ghodele
```

### Canonical URL
```
https://yash-ghodele.pages.dev
```

### Robots
```
index: true, follow: true
googleBot: max-video-preview -1, max-image-preview large, max-snippet -1
```

### Open Graph
| Field | Value |
|-------|-------|
| type | website |
| locale | en_US |
| url | https://yash-ghodele.pages.dev |
| siteName | Yash Ghodele Portfolio |
| title | Yash Ghodele \| Full Stack Developer & IoT Engineer |
| description | Full Stack Developer & IoT Engineer building real-world systems, scalable web applications, and innovative IoT platforms. Organizing hackathons with 200+ participants. |
| image | /images/hero/yash-ghodele.jpg (600×800) |
| image alt | Yash Ghodele - Full Stack Developer & IoT Engineer |

### Twitter Card
| Field | Value |
|-------|-------|
| card | summary_large_image |
| title | Yash Ghodele \| Full Stack Developer & IoT Engineer |
| description | Building real-world systems with Next.js, React, IoT, and Embedded Engineering. Organizing hackathons with 200+ participants. |
| image | /images/hero/yash-ghodele.jpg |
| creator | @why_be_yashhh |

### Theme Color
```
#000000
```

---

## JSON-LD Structured Data (Schema.org Person)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://yash-ghodele.pages.dev/#person",
  "name": "Yash Ghodele",
  "alternateName": "why_be_yashhh",
  "url": "https://yash-ghodele.pages.dev",
  "image": "https://yash-ghodele.pages.dev/images/hero/yash-ghodele.jpg",
  "description": "Full Stack Developer & IoT Engineer building scalable web platforms and real-world embedded systems. Founder of Ugam Digital Studio.",
  "email": "yashghodele.work@gmail.com",
  "telephone": "+917666168561",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Aurangabad",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://linkedin.com/in/yash-ghodele",
    "https://github.com/yash-ghodele",
    "https://instagram.com/why_be_yashhh"
  ],
  "jobTitle": "Founder at Ugam Digital Studio & Full Stack Developer",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Founder & IoT Engineer",
    "occupationLocation": { "@type": "Country", "name": "India" },
    "skills": [
      "Full Stack Development", "IoT Engineering", "React", "Next.js",
      "Python", "Arduino", "Embedded Systems", "TypeScript"
    ]
  },
  "worksFor": [
    { "@type": "Organization", "name": "Ugam Digital Studio", "url": "https://ugamdigitalstudio.tech" },
    { "@type": "Organization", "name": "BotBuddies" }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "MIT College of Engineering, Aurangabad"
  },
  "knowsAbout": [
    "Full Stack Development", "IoT Engineering", "React", "Next.js", "Python",
    "Arduino", "Embedded Systems", "Web Development", "Robotics",
    "Event Management", "Team Leadership", "TypeScript", "Flutter"
  ],
  "award": [
    "InnoHack 2025 Organizer (200+ participants)",
    "InnoHack 2.0 Organizer",
    "Executive Head at BotBuddies",
    "Event Head at ECESA",
    "SPIC MACAY Virasat 2024 Coordinator"
  ]
}
```

---

## Navbar

### Navigation Links (in order)

| Label | Route |
|-------|-------|
| Home | / |
| Work | /work |
| About | /about |
| Stack | /stack |
| Events | /events |
| Journal | /journal |
| Contact | /#contact |

### Behavior
- Floating pill navbar, fixed top-4
- Scales slightly (0.95) on scroll
- Active page gets highlighted pill (primary color)
- Mobile: full-screen overlay with large menu buttons

---

## Footer

### Brand Column
- **Logo:** /logo.svg (with yellow glow effect)
- **Name:** Yash Ghodele
- **Tagline:**
  > Building the future with IoT, AI, and Innovation.
  > Creating smart solutions for complex problems.
- **Location:** 📍 Aurangabad, India
- **Email:** yashghodele.work@gmail.com

### Quick Links Column
| Label | Anchor |
|-------|--------|
| Home | #home |
| Projects | #projects |
| About | #about |
| Contact | #contact |

### Connect Column (Social Icons)
| Platform | URL |
|----------|-----|
| LinkedIn | https://linkedin.com/in/yash-ghodele |
| GitHub | https://github.com/yash-ghodele |
| Instagram | https://www.instagram.com/why_be_yashhh/ |
| Email | mailto:yashghodele.work@gmail.com |

### Copyright
```
© {currentYear} Yash Ghodele. All rights reserved.
```

### Back to Top Button
```
Back to Top ↑
```
