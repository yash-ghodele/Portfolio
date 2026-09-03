import { ProjectMetadata } from "./types"

export const STATIC_PROJECTS: { slug: string; metadata: ProjectMetadata }[] = [
  {
    slug: "fuelshield",
    metadata: {
      title: "FuelShield - IoT Fuel Theft Detection",
      subtitle: "IoT Solution",
      image: "/images/projects/fuelshield.png",
      iconName: "Cpu",
      description: "Real-time fuel theft detection and fleet analytics platform. Reduces fuel losses by 20% using ESP32 sensors and MQTT telemetry.",
      stats: "20% Reduction in fuel expenses",
      tech: ["Next.js", "Firebase", "MQTT", "ESP32", "GSM", "Recharts"],
      color: "from-purple-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-01-01",
      content: [
        {
          type: "h3",
          text: "The Challenge"
        },
        {
          type: "p",
          text: "In India, fuel theft from commercial vehicles costs the industry **₹5,000+ crores annually**. Fleet operators have almost no visibility into their tanks between stops. Existing solutions were either expensive enterprise systems (₹2L+ per vehicle) or unreliable aftermarket setups that drivers learned to game in weeks."
        },
        {
          type: "h3",
          text: "The Architecture"
        },
        {
          type: "p",
          text: "FuelShield uses an **HC-SR04 ultrasonic sensor** mounted inside the tank, connected to an **ESP32 microcontroller**. The ESP32 processes readings locally — no cloud round-trip for critical decisions — and publishes to an MQTT broker only when anomalies are detected or during periodic health checks."
        },
        {
          type: "interactive",
          component: "FuelShieldSchematic"
        },
        {
          type: "h3",
          text: "The Detection Logic"
        },
        {
          type: "p",
          text: "We couldn't just track fuel level drops — legitimate usage causes those too. Instead, we built a rate-of-change detector. A normal 200L diesel engine burns roughly **0.8-1.2L per hour** at highway speeds. A siphon drain happens at **10-15L per minute**. The delta is unmistakable."
        },
        {
          type: "highlight",
          text: "Sub-1-second siphon detection, 99.2% accuracy across 200+ vehicle deployments, and a system cost of ₹3,800 per vehicle — 98% cheaper than enterprise alternatives."
        },
        {
          type: "h3",
          text: "What Production Taught Us"
        },
        {
          type: "p",
          text: "Lab environments lie. Tanks vibrate on rough roads. Power fluctuates. SIM cards lose signal in rural corridors. We built **offline-first buffering (50 readings queued locally)** and adaptive sampling (higher frequency when anomalies detected). Every edge case was a field trip."
        }
      ]
    }
  },
  {
    slug: "sanjivani",
    metadata: {
      title: "Sanjivani - AI Crop Disease Detection",
      subtitle: "AI for Agriculture",
      image: "/images/projects/agriculture-ai-crop-disease.jpg",
      iconName: "Globe",
      description: "An offline-capable PWA using Deep Learning (MobileNetV2) to detect crop diseases in under 2 seconds. Built for the 2G world.",
      stats: "98.2% Model Accuracy",
      tech: ["PyTorch", "Flask", "React", "MobileNetV2", "PWA", "IndexedDB"],
      color: "from-emerald-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-02-01",
      content: [
        {
          type: "h3",
          text: "The Challenge"
        },
        {
          type: "p",
          text: "Smallholder farmers lose significant percentages of their harvest to diseases that could easily be treated if diagnosed early. However, these farmers operate in remote areas with extremely poor connectivity (typically 2G/3G) and cannot afford expensive cloud-dependent AI processing."
        },
        {
          type: "h3",
          text: "Deep Learning on the Edge"
        },
        {
          type: "p",
          text: "Sanjivani addresses this by running an optimized **MobileNetV2** model directly within an offline-capable Progressive Web App (PWA). By compiling the model to run client-side using JavaScript, crop disease detection takes **under 2 seconds** with **98.2% model accuracy** — all without sending a single byte of image data to a server."
        },
        {
          type: "h3",
          text: "Offline-First Design"
        },
        {
          type: "p",
          text: "We utilized **IndexedDB** for local data persistence and service workers for caching application assets. When a farmer takes a picture in the field, the app detects the disease offline, saves the log, and syncs the records back to the database once a stable network connection is established."
        }
      ]
    }
  },
  {
    slug: "sanjivani-v2",
    metadata: {
      title: "Sanjivani 2.0 - AI Crop Doctor",
      subtitle: "Production-Grade AI",
      image: "/images/projects/sanjivani.png",
      iconName: "Globe",
      description: "Production-grade AI agriculture platform. Hybrid CNN+LLM architecture with edge optimization, multilingual support, and comprehensive testing built for real farmers and technical interviews.",
      stats: "< 100ms Inference Latency",
      tech: ["Next.js 14", "FastAPI", "TensorFlow", "Firebase", "Gemini 1.5"],
      color: "from-teal-900/40",
      demoLink: "https://sanjivani-1ai.pages.dev/",
      codeLink: "https://github.com/yash-ghodele/Sanjivani.git",
      publishedAt: "2024-03-01",
      content: [
        {
          type: "h3",
          text: "The Hybrid Architecture"
        },
        {
          type: "p",
          text: "Sanjivani 2.0 elevates edge diagnosis to a production-grade AI platform. It utilizes a **hybrid CNN + LLM architecture**: a local CNN model classifies the crop disease instantly on-device, and a remote **Gemini 1.5 LLM** generates specialized, multilingual treatment plans and actionable insights for the farmer."
        },
        {
          type: "blockquote",
          text: "Achieved sub-100ms inference latency for on-device classifications, supporting real-time feedback even in poor connectivity regions."
        },
        {
          type: "h3",
          text: "System Architecture & Specs"
        },
        {
          type: "gridConfig",
          cols: 3,
          items: [
            {
              title: "FastAPI Backend",
              description: "High-throughput asynchronous endpoints handling local CNN inference queries and managing external API pipelines."
            },
            {
              title: "Gemini 1.5 Engine",
              description: "Orchestrates complex context retrieval to return structured remedy recommendations in English, Hindi, and Marathi."
            },
            {
              title: "Next.js Frontend",
              description: "Responsive dashboard featuring real-time diagnostic reporting, disease map visualization, and offline state recovery."
            }
          ]
        },
        {
          type: "h3",
          text: "Testing & Hardening"
        },
        {
          type: "p",
          text: "To prepare for real-world field conditions and rigorous technical interviews, we established a **comprehensive testing pipeline** featuring end-to-end integration tests, model accuracy validation, and automated edge-case scenarios."
        }
      ]
    }
  },
  {
    slug: "iot-security",
    metadata: {
      title: "IoT Security - Smart Lock System",
      subtitle: "Embedded Systems",
      image: "/images/projects/securelock.png",
      iconName: "Shield",
      description: "3-Layer Auth Smart Lock with autonomous lockdown and sub-300ms cloud latency. Event-driven architecture for real-time defense.",
      stats: "300ms Cloud Latency",
      tech: ["ESP8266 (NodeMCU)", "C++", "Blynk IoT", "WebSockets", "Hardware Design"],
      color: "from-cyan-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-04-01",
      content: [
        {
          type: "h3",
          text: "The Security Challenge"
        },
        {
          type: "p",
          text: "Standard smart locks rely on simple wireless connections that are vulnerable to replay attacks, brute force, or physical tampering. We designed a high-security lock system focusing on **real-time event logging** and autonomous defense mechanisms."
        },
        {
          type: "h3",
          text: "3-Layer Authentication"
        },
        {
          type: "p",
          text: "The lock requires three distinct authentication factors to grant entry: an **RFID card**, a **numeric PIN**, and a confirmation from the **Blynk IoT companion app**. If any layer fails or detects unauthorized tampering, the node initiates an **autonomous lockdown mode**."
        },
        {
          type: "h3",
          text: "Hardware Design & Real-Time Alerts"
        },
        {
          type: "p",
          text: "Built on the **ESP8266 (NodeMCU)** using C++, the system utilizes event-driven **WebSockets** to communicate with the central server. Tampering attempts or successful entries trigger real-time push alerts to the administrator within **300ms cloud latency**."
        }
      ]
    }
  },
  {
    slug: "smart-crm",
    metadata: {
      title: "Smart CRM - Business Automation",
      subtitle: "Business Automation",
      image: "/images/projects/smartcrm.png",
      iconName: "Terminal",
      description: "High-throughput automation engine handling 100k+ B2B leads with 100% validation accuracy. Replaces manual workflows with RAM-based ADODB processing.",
      stats: "100k+ Throughput",
      tech: ["VBA", "MS Access", "Excel Automation", "WinAPI", "SQL", "Regex"],
      color: "from-orange-900/40",
      demoLink: "",
      codeLink: "",
      publishedAt: "2024-05-01",
      content: [
        {
          type: "h3",
          text: "The Lead Validation Bottleneck"
        },
        {
          type: "p",
          text: "The client was manually validating and filtering over **100k+ B2B leads** through Excel sheets, a process plagued by disk I/O bottlenecks and frequent application crashes due to massive data volume."
        },
        {
          type: "h3",
          text: "The VBA RAM-Based Engine"
        },
        {
          type: "p",
          text: "We designed a high-throughput **VBA automation engine** that loads entire tables into memory (RAM arrays) to bypass Excel's disk write operations. It processes records using native **WinAPI** functions for lightning-fast memory access."
        },
        {
          type: "blockquote",
          text: "Replaced manual spreadsheet validation workflows, achieving a 100% validation accuracy and reducing processing time from hours to seconds."
        },
        {
          type: "h3",
          text: "Regex & Database Integration"
        },
        {
          type: "p",
          text: "By integrating optimized **regular expressions (Regex)** for email, phone, and domain validation, the system filters bad records dynamically before archiving them into an **MS Access** database via structured SQL transactions."
        }
      ]
    }
  },
  {
    slug: "localmd",
    metadata: {
      title: "LocalMD - Local-First Markdown Suite",
      subtitle: "Local-First Editor",
      image: "/images/projects/localmd.png",
      iconName: "Terminal",
      description: "State-of-the-art, privacy-focused local-first Markdown editor and document transformation engine.",
      stats: "100% Client-Side Processing",
      tech: ["Next.js 16", "React 19", "Tailwind 4", "Mammoth.js", "KaTeX", "PWA"],
      color: "from-indigo-900/40",
      demoLink: "https://localmd.vercel.app/",
      codeLink: "#",
      publishedAt: "2024-08-01",
      content: []
    }
  },
  /*
  {
    slug: "wireflow",
    metadata: {
      title: "WireFlow - Industrial Operations Dashboard",
      subtitle: "Industrial Dashboard",
      image: "/images/projects/wireflow.png",
      iconName: "Layout",
      description: "Smart manufacturing system with sub-14ms latency goals and offline-first SSR architecture. Replaces SAP for Aurangabad's wire units.",
      stats: "22% Reduction in Downtime",
      tech: ["Next.js", "FastAPI", "MQTT", "SQLite", "Redis", "Framer Motion"],
      color: "from-rose-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-06-01",
      content: [
        {
          type: "h3",
          text: "The Problem"
        },
        {
          type: "p",
          text: "Aurangabad's wire manufacturing units were running standard SAP dashboards displaying over 40+ KPIs. Because of the cognitive overload, operators ignored the screen and instead maintained physical whiteboards next to the terminal with the 5 numbers they actually cared about. The dashboards were a checkbox, not a tool."
        },
        {
          type: "h3",
          text: "The Signal-to-Noise Principle"
        },
        {
          type: "p",
          text: "We designed WireFlow around a single constraint: **everything visible on screen must be actionable within 5 minutes**. Informational metrics that could not trigger an immediate action were pushed to a secondary drill-down layer. The primary screen shows just 6 essential numbers."
        },
        {
          type: "interactive",
          component: "LatencySim"
        },
        {
          type: "h3",
          text: "Results in Production"
        },
        {
          type: "p",
          text: "Within the first quarter of deployment, the new dashboard led to a **22% reduction in unplanned downtime** and an **18% reduction in quality defects**. Most importantly, operators completely stopped maintaining the whiteboard workaround, making WireFlow the actual source of truth on the shop floor."
        }
      ]
    }
  },
  */
  {
    slug: "ugam-campus",
    metadata: {
      title: "Ugam Campus - Project-as-a-Service",
      subtitle: "Engineering Education",
      image: "/images/projects/ugam-campus-projects.jpg",
      iconName: "Cpu",
      description: "A professional-grade delivery protocol for student engineering projects. 50+ projects shipped with zero plagiarism and deep technical coaching.",
      stats: "50+ Projects Shipped",
      tech: ["React", "Node.js", "Firebase", "Arduino", "Python", "PCB Design"],
      color: "from-amber-900/40",
      demoLink: "https://www.ugamdigitalstudio.tech/",
      codeLink: "#",
      publishedAt: "2024-07-01",
      content: [
        {
          type: "h3",
          text: "The Delivery Crisis"
        },
        {
          type: "p",
          text: "Every semester, engineering students face massive panic over final year projects due to a lack of guidance and structured implementation paths. Many turn to copy-pasting code or buying generic projects, which leads to plagiarism flags and failures during vivas."
        },
        {
          type: "h3",
          text: "The Alchemist Protocol"
        },
        {
          type: "p",
          text: "We engineered a repeatable delivery system called the **Alchemist Protocol** which divides the project lifecycle into 5 clear phases: **Initialization** (problem statement analysis), **Architecture** (component selection), **Execution** (code & hardware build), **Validation** (testing & calibration), and **Viva Prep** (coaching)."
        },
        {
          type: "h3",
          text: "Efficiency & Customization"
        },
        {
          type: "gridConfig",
          cols: 2,
          items: [
            {
              title: "70% Template Reuse",
              description: "Standardized boilerplate stacks: ESP32 + MQTT + Firebase for IoT nodes, and Next.js + Tailwind + Supabase for web apps."
            },
            {
              title: "30% Custom Logic",
              description: "Unique logic and features built per project to ensure zero plagiarism flags across 50+ completed systems."
            }
          ]
        },
        {
          type: "h3",
          text: "The Learning Outcome"
        },
        {
          type: "p",
          text: "Crucially, projects are built **alongside the students** rather than handed over. This ensures they deeply understand their system architectures and can confidently explain them during oral examinations."
        }
      ]
    }
  },
  {
    slug: "smart-garbage",
    metadata: {
      title: "Smart Garbage - Waste Classification System",
      subtitle: "Ugam Campus Product Project",
      image: "/images/projects/smart-garbage.jpg",
      iconName: "Cpu",
      description: "Automated wet and dry waste segregation engine built under Ugam Campus using IR proximity detection, analog moisture thresholding, and SG90 servo chute routing.",
      stats: "< 50ms Classification Latency",
      tech: ["Ugam Campus Product", "Arduino C++", "IR Sensor", "Moisture Sensor", "SG90 Servo"],
      color: "from-emerald-900/40",
      demoLink: "",
      codeLink: "",
      publishedAt: "2024-09-01",
      content: []
    }
  },
  {
    slug: "esp-car",
    metadata: {
      title: "ESP Car - Wi-Fi Robotics & Remote Telemetry",
      subtitle: "Ugam Campus Product Project",
      image: "/images/projects/esp-car.jpg",
      iconName: "Cpu",
      description: "Smart Wi-Fi robotic vehicle developed under Ugam Campus powered by ESP8266 NodeMCU, L293D motor IC, and low-latency Blynk IoT Virtual Pin stream controls.",
      stats: "< 20ms Remote Latency",
      tech: ["Ugam Campus Product", "ESP8266 (NodeMCU)", "C++", "L293D H-Bridge", "Blynk IoT"],
      color: "from-cyan-900/40",
      demoLink: "",
      codeLink: "",
      publishedAt: "2024-10-01",
      content: []
    }
  },
  /*
  {
    slug: "backstage",
    metadata: {
      title: "Backstage - Event Production Cockpit",
      subtitle: "Event & Logistics OS",
      image: "/images/projects/backstage.jpg",
      iconName: "Layout",
      description: "Modern event coordination cockpit for runsheets, 4-stage logistics pipelines, Cloudflare R2 file storage, and role-isolated team dashboards.",
      stats: "Zero-Egress File Storage",
      tech: ["Next.js 14", "TypeScript", "Firebase Auth", "Firestore", "Cloudflare R2"],
      color: "from-rose-900/40",
      demoLink: "https://github.com/yash-ghodele/Backstage",
      codeLink: "https://github.com/yash-ghodele/Backstage",
      publishedAt: "2024-11-01",
      content: []
    }
  },
  */
  {
    slug: "authosec",
    metadata: {
      title: "AuthoSec - Fintech Security & Dual QR Protocol",
      subtitle: "Ugam Campus Product Project",
      image: "/images/projects/authosec.jpg",
      iconName: "Shield",
      description: "Dual-Factor cryptographic payment protocol engineered under Ugam Campus featuring Dual-QR handshakes (QR1→QR2), AWS SNS OTP delivery (2-4s), and AES-256 GCM encryption.",
      stats: "2-4s OTP Delivery | TC01-TC05 Passed",
      tech: ["Ugam Campus Product", "Next.js 15", "Prisma ORM", "Supabase PostgreSQL", "AWS SNS", "AES-256 GCM", "Expo Mobile"],
      color: "from-amber-900/40",
      demoLink: "https://github.com/aniket3077/authosec--backend-",
      codeLink: "https://github.com/aniket3077/authosec--backend-",
      publishedAt: "2024-12-01",
      content: []
    }
  }
]
