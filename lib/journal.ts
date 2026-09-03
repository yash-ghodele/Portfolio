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
    type: "p" | "h3" | "interactive" | "code" | "ul" | "blockquote"
    text?: string
    items?: string[]
    component?: "LatencySim" | "FuelShieldSchematic"
  }[]
}

const ALL_JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "whatsapp-pipelines-research",
    title: "From WhatsApp to Dashboard: The Architecture Behind CampusCast",
    excerpt:
      "Every practical way to turn a WhatsApp message into a live department display, and the trade-offs that decided CampusCast's architecture.",
    date: "Sep 15, 2026",
    author: "Yash Ghodele",
    category: "Technical",
    readTime: "9 min",
    image: "/images/journal/whatsapp-pipelines.jpg",
    content: [
      {
        type: "p",
        text: "Every practical way to get 'WhatsApp message in → stored in a database → Next.js fetches and displays it,' compared on cost, effort, reliability, and risk."
      }
    ]
  },
  {
    slug: "we-are-all-intellectual-omnivores",
    title: "We Are All Intellectual Omnivores",
    excerpt:
      "On paper, none of us had any business being in that conversation. But there's a word for people who wander this far outside their own lane for no reason: intellectual omnivores. Scavengers, not specialists.",
    date: "Sep 01, 2026",
    author: "Yash Ghodele",
    category: "Insights",
    readTime: "5 min",
    image: "/images/journal/intellectual-omnivore-main.jpg",
    content: [
      {
        type: "p",
        text: "There's a particular kind of argument that only happens when nothing is at stake, and it's usually the best kind."
      }
    ]
  },
  {
    slug: "event-failure-patterns",
    title: "Every Event Fails the Same Way. We Just Keep Giving It New Excuses.",
    excerpt:
      "Something breaks at 11 PM the night before. Here's why college fests, hackathons, and community meetups fail the exact same way — and how to build the loop that breaks the cycle.",
    date: "Jul 25, 2026",
    author: "Yash Ghodele",
    category: "Process",
    readTime: "6 min",
    image: "/images/journal/event-failure-patterns.png",
    content: [
      {
        type: "p",
        text: "If you've ever been on an event team — college fest, hackathon, community meetup, doesn't matter which — you already know the ending before it happens."
      }
    ]
  },
  {
    slug: "analysis-design-synthesis",
    title: "Analysis, Design, and Synthesis — Or: The Structured Side of \"Fuck Around and Find Out\"",
    excerpt:
      "Let's be honest about how most great things actually get built. Not with a 47-slide roadmap and a perfectly color-coded Notion board. More like — someone stayed up until 2 AM, tried something stupid, accidentally discovered something brilliant, panicked, reverse-engineered why it worked, and then told everyone they 'had a vision.'",
    date: "May 26, 2026",
    author: "Yash Ghodele",
    category: "Insights",
    readTime: "5 min",
    image: "/images/journal/analysis-design-synthesis.jpg",
    content: [
      {
        type: "p",
        text: "Let's be honest about how most great things actually get built.",
      },
      {
        type: "p",
        text: "Not with a 47-slide roadmap and a perfectly color-coded Notion board.",
      },
      {
        type: "p",
        text: "More like — someone stayed up until 2 AM, tried something stupid, accidentally discovered something brilliant, panicked, reverse-engineered why it worked, and then told everyone they \"had a vision.\"",
      },
      {
        type: "p",
        text: "That's the dirty little secret behind almost every startup, every viral content creator, and every app you've used in the last ten years.",
      },
      {
        type: "p",
        text: "But here's the thing nobody tells you: there is a structure to all that beautiful chaos.",
      },
      {
        type: "p",
        text: "It's called Analysis, Design, and Synthesis. And it doesn't live in your textbook's chapter summaries. It lives in the messy, hilarious, slightly catastrophic way real people actually build things.",
      },
      {
        type: "p",
        text: "Let's get into it.",
      },
      {
        type: "h3",
        text: "Every Big Thing Starts With Curiosity (And Usually Confusion)",
      },
      {
        type: "p",
        text: "Think about the apps sitting on your phone right now: Instagram, LinkedIn, YouTube, WhatsApp.",
      },
      {
        type: "p",
        text: "None of them became what they are because someone had a perfect plan from day one. Instagram started as a location check-in app. YouTube had no clue people would upload everything from cooking videos to university lectures. LinkedIn was basically a digital résumé dump before someone figured out that \"storytelling\" was cringe but also impossible to stop scrolling through.",
      },
      {
        type: "p",
        text: "What actually happened at every one of these companies was a cycle. Experiment. Observe. Break something. Fix it. Try a weird idea. Kill it. Try another one.",
      },
      {
        type: "p",
        text: "Sound familiar?",
      },
      {
        type: "p",
        text: "That cycle has three names: Analysis, Design, and Synthesis.",
      },
      {
        type: "blockquote",
        text: "And a bonus, unofficial fourth step: \"Let's just see what happens.\"",
      },
      {
        type: "h3",
        text: "Analysis — Observation Before Opinion",
      },
      {
        type: "p",
        text: "Analysis is simply the act of understanding what's actually happening. Not what you assume is happening. Not what your gut says. Not \"bro trust me.\" Actually looking.",
      },
      {
        type: "p",
        text: "Here's the difference between analysis and vibes:",
      },
      {
        type: "blockquote",
        text: "Scene: Your class attendance drops below 30%.\n\nPerson A: \"Students are lazy.\"\n\nPerson B: Notices lectures are at 8 AM. Realizes half the class commutes. Figures out nobody learns from slides anymore. Sees that recorded videos would triple engagement.\n\nPerson B is doing analysis. Person A is doing a hot take.",
      },
      {
        type: "p",
        text: "Same energy shows up on LinkedIn. Ever notice how the platform quietly shifted from stuffy \"I'm pleased to announce\" posts to raw storytelling and personal narratives? That shift wasn't an accident. Creators started observing — what stops people from scrolling, why relatable content outperforms polished corporate-speak, what makes someone hit follow.",
      },
      {
        type: "p",
        text: "The best creators don't just create. They watch first.",
      },
      {
        type: "h3",
        text: "The \"Analysis After Chaos\" Speedrun",
      },
      {
        type: "p",
        text: "Here's the funny part though: analysis doesn't always come before the action. Sometimes it comes after the disaster.",
      },
      {
        type: "p",
        text: "Picture a student starting a project the night before the deadline. Panic. Bugs everywhere. Something breaks that was definitely \"not their fault.\" And then, at 3 AM with three Red Bulls in their system, they have a genuine revelation about why planning matters, why Git exists, and why \"I'll do it tomorrow\" is just a polite lie you tell yourself.",
      },
      {
        type: "blockquote",
        text: "That is also analysis. Just... acquired the expensive way.",
      },
      {
        type: "p",
        text: "Some people learn through observation. Others learn through consequences. Both are valid. One is just louder and significantly more humiliating.",
      },
      {
        type: "h3",
        text: "Design — Turning the Chaos Into a Direction",
      },
      {
        type: "p",
        text: "Once you understand what's happening, the next question is: \"Okay but... now what?\" That's design.",
      },
      {
        type: "p",
        text: "Design is what happens when you take a pile of messy observations and half-baked ideas and try to make them point somewhere useful.",
      },
      {
        type: "blockquote",
        text: "College hackathon, day minus three:\n\nSomeone starts making posters. Someone else creates a WhatsApp group. One person reaches out to sponsors. Another person starts talking about reels. And then there's that one guy who suggests drones, laser shows, and a live DJ — for a ₹500 budget.",
      },
      {
        type: "p",
        text: "That whole magnificent disaster of a planning process? That's design. Not fancy UX wireframes. Not Figma prototypes. Just structured human beings trying to convert confusion into a direction.",
      },
      {
        type: "p",
        text: "Same thing for creators building an online presence. Choosing a content style, figuring out posting frequency, picking a visual identity, testing hook formats — all of it is design. Even memes are designed. Nothing on the internet is as spontaneous as it looks.",
      },
      {
        type: "h3",
        text: "Synthesis — Where Plans Meet the Real World (And Get Humbled)",
      },
      {
        type: "p",
        text: "Synthesis is execution. The moment theory becomes reality. It is also the moment reality smacks theory across the face.",
      },
      {
        type: "blockquote",
        text: "Fest day. Final preparations.\n\nThe mic cuts out. Registration forms crash. Three volunteers have mysteriously vanished. Someone forgot extension boards. The design team is still exporting \"final_final_ACTUAL_final_v9.png.\"\n\nAnd somehow — everything still comes together.",
      },
      {
        type: "p",
        text: "That messy, exhausting, slightly miraculous thing that just happened? That's synthesis.",
      },
      {
        type: "blockquote",
        text: "App launch day:\n\nUsers complain about things you never imagined. A feature breaks in production but somehow worked perfectly in testing. One tiny bug cascades into everything. A review calls your life's work \"confusing and slow.\"",
      },
      {
        type: "p",
        text: "But this is also where real learning happens. Because execution reveals things that planning never could. You can't simulate how users actually behave. You can't predict every edge case. You can't fully understand a system until it's running. Synthesis is where design goes to grow up.",
      },
      {
        type: "h3",
        text: "So Where Does \"Fuck Around and Find Out\" Fit?",
      },
      {
        type: "p",
        text: "Right in the middle of everything. Always. Because real growth is rarely a clean, linear path from idea to success. It looks more like:",
      },
      {
        type: "ul",
        items: [
          "Analyze first → then execute",
          "Execute first → fail dramatically → then analyze afterward",
          "Skip everything → get lucky → reverse-engineer why → tell everyone it was intentional"
        ],
      },
      {
        type: "p",
        text: "The best founders, creators, students, and builders usually live somewhere between two failure modes:",
      },
      {
        type: "p",
        text: "Failure Mode 1: Too much analysis, not enough action. (Overthinking. Planning everything. Doing nothing.)",
      },
      {
        type: "p",
        text: "Failure Mode 2: Too much action, not enough direction. (Running fast in seventeen wrong directions simultaneously.)",
      },
      {
        type: "p",
        text: "The sweet spot? Structured experimentation. Basically, intelligent \"fuck around and find out.\"",
      },
      {
        type: "p",
        text: "Enough analysis to avoid stupid mistakes. Enough experimentation to avoid permanent paralysis.",
      },
      {
        type: "h3",
        text: "The Real Formula (No One Puts It on a Slide)",
      },
      {
        type: "code",
        text: "Analyze a little.\nTry something.\nFail a bit.\nRedesign.\nImprove.\nRepeat.",
      },
      {
        type: "p",
        text: "That's how startups evolve. How creators grow. How students somehow survive engineering. How apps become the kind of thing people can't put down. How people slowly, stubbornly figure life out.",
      },
      {
        type: "p",
        text: "Not through perfection. Through iteration.",
      },
      {
        type: "h3",
        text: "Final Thought",
      },
      {
        type: "p",
        text: "Analysis, Design, and Synthesis aren't rigid textbook concepts reserved for exams and forgotten immediately after. They're the underlying logic of how anything real gets built — by students, by founders, by creators, by anyone who's ever tried to make something from nothing.",
      },
      {
        type: "p",
        text: "The cycle isn't always graceful. Sometimes it's three bug fixes at midnight and a presentation held together by pure confidence and a prayer. Sometimes it's a feature that breaks everything and teaches you more in one hour than six months of planning ever could.",
      },
      {
        type: "p",
        text: "But that's kind of the point.",
      },
      {
        type: "p",
        text: "The best things don't come from perfect plans executed flawlessly.",
      },
      {
        type: "p",
        text: "They come from people who tried something, learned something, improved something — and had just enough structure to keep going when the chaos got loud.",
      },
      {
        type: "p",
        text: "A little analysis. A little design. A little synthesis.",
      },
      {
        type: "blockquote",
        text: "And always, always — a willingness to fuck around and find out.",
      },
    ],
  },
  {
    slug: "hardware-and-software-are-the-same-problem",
    title: "The Day I Realized Hardware and Software Are the Same Problem",
    excerpt:
      "What electrical engineering taught me about distributed systems, frontend development, and why abstraction layers matter less than most people think.",
    date: "May 12, 2026",
    author: "Yash Ghodele",
    category: "Insights",
    readTime: "7 min",
    image: "/images/journal/hardware-and-software-are-the-same-problem.jpg",
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
    title: "Building FuelShield: Lessons from 100+ Hours in Truck Yards",
    excerpt:
      "Real-world IoT is 10% code and 90% dealing with vibration, diesel fumes, power fluctuations, lost GSM signals, and humans determined to bypass your system.",
    date: "May 02, 2026",
    author: "Yash Ghodele",
    category: "Engineering",
    readTime: "8 min",
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
    title: "Why Manufacturing Dashboards Fail (And How WireFlow Solves It)",
    excerpt:
      "Most factory software is built by people who have never spent a day on a plant floor. The result is dashboards full of information—and empty of action.",
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
      "The systems, templates, and internal workflows that allow Ugam Campus to consistently deliver professional-grade engineering projects in days instead of weeks.",
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
      "Within a 50-kilometer radius, hundreds of manufacturers quietly power global supply chains. Here's why local context matters and how we're building the digital infrastructure for regional manufacturing.",
    date: "Apr 16, 2026",
    author: "Yash Ghodele",
    category: "Insights",
    readTime: "6 min",
    image: "/images/journal/aurangabad.jpg",
    content: [
      {
        type: "p",
        text: "Aurangabad is one of India's most overlooked industrial ecosystems. Within a 50-kilometer radius, hundreds of wire manufacturers, auto-component suppliers, fabrication units, and precision engineering companies quietly power supply chains for some of the country's largest brands.",
      },
      {
        type: "h3",
        text: "An Industrial Hub Hidden in Plain Sight",
      },
      {
        type: "p",
        text: "Aurangabad is home to more than 500 wire manufacturing units and hundreds of auto-component suppliers serving companies such as Bajaj Auto, Volkswagen, and Škoda Auto.",
      },
      {
        type: "h3",
        text: "The Gap Nobody Is Building For",
      },
      {
        type: "p",
        text: "That leaves an entire segment underserved: the regional manufacturer with 100–500 employees. What they don't need is enterprise complexity or enterprise pricing. That's the gap we're building for.",
      },
      {
        type: "h3",
        text: "The Local Engineering Advantage",
      },
      {
        type: "p",
        text: "When local engineers build products for local industries, something powerful happens. They understand the machines, the workflows, the people, and the language.",
      },
    ],
  },
]

// Date-based publishing gate: Only posts with date <= current_time are visible on webpage
export const JOURNAL_POSTS: JournalPost[] = ALL_JOURNAL_POSTS
  .filter((post) => {
    const postTime = new Date(post.date).getTime()
    const nowTime = new Date().getTime()
    return postTime <= nowTime
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const ALL_POSTS = ALL_JOURNAL_POSTS
export const STATIC_POSTS = JOURNAL_POSTS
