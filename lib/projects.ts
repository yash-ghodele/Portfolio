import { ProjectMetadata } from "./types"

export const STATIC_PROJECTS: { slug: string; metadata: ProjectMetadata }[] = [
  {
    slug: "fuelshield",
    metadata: {
      title: "FuelShield - IoT Fuel Theft Detection",
      subtitle: "IoT Solution",
      image: "/images/projects/fuel-monitoring-system.png",
      iconName: "Cpu",
      description: "Real-time fuel theft detection and fleet analytics platform. Reduces fuel losses by 20% using ESP32 sensors and MQTT telemetry.",
      stats: "20% Reduction in fuel expenses",
      tech: ["Next.js", "Firebase", "MQTT", "ESP32", "GSM", "Recharts"],
      color: "from-purple-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-01-01"
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
      publishedAt: "2024-02-01"
    }
  },
  {
    slug: "sanjivani-v2",
    metadata: {
      title: "Sanjivani 2.0 - AI Crop Doctor",
      subtitle: "Production-Grade AI",
      image: "/images/projects/sanjivani-v2.jpg",
      iconName: "Globe",
      description: "Production-grade AI agriculture platform. Hybrid CNN+LLM architecture with edge optimization, multilingual support, and comprehensive testing.",
      stats: "< 100ms Inference Latency",
      tech: ["Next.js 14", "FastAPI", "TensorFlow", "Firebase", "Gemini 1.5"],
      color: "from-teal-900/40",
      demoLink: "https://sanjivani-1ai.pages.dev/",
      codeLink: "https://github.com/yash-ghodele/Sanjivani.git",
      publishedAt: "2024-03-01"
    }
  },
  {
    slug: "iot-security",
    metadata: {
      title: "IoT Security - Smart Lock System",
      subtitle: "Embedded Systems",
      image: "/images/projects/smart-lock-security-system.jpg",
      iconName: "Shield",
      description: "3-Layer Auth Smart Lock with autonomous lockdown and sub-300ms cloud latency. Event-driven architecture for real-time defense.",
      stats: "300ms Cloud Latency",
      tech: ["ESP8266 (NodeMCU)", "C++", "Blynk IoT", "WebSockets", "Hardware Design"],
      color: "from-cyan-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-04-01"
    }
  },
  {
    slug: "smart-crm",
    metadata: {
      title: "Smart CRM - Business Automation",
      subtitle: "Business Automation",
      image: "/images/projects/crm-business-management.jpg",
      iconName: "Terminal",
      description: "High-throughput VBA automation engine handling 100k+ B2B leads with 99.9% validation accuracy. Replaces manual workflows with RAM-based processing.",
      stats: "100k+ Throughput",
      tech: ["VBA", "MS Access", "Excel Automation", "WinAPI", "SQL", "Regex"],
      color: "from-orange-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-05-01"
    }
  },
  {
    slug: "wireflow",
    metadata: {
      title: "WireFlow - Industrial Operations Dashboard",
      subtitle: "Industrial Dashboard",
      image: "/images/projects/wireflow-dashboard.jpg",
      iconName: "Layout",
      description: "Smart manufacturing system with sub-14ms latency goals and offline-first SSR architecture. Replaces SAP for Aurangabad's wire units.",
      stats: "22% Reduction in Downtime",
      tech: ["Next.js", "FastAPI", "MQTT", "SQLite", "Redis", "Framer Motion"],
      color: "from-blue-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-06-01"
    }
  },
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
      color: "from-orange-900/40",
      demoLink: "#",
      codeLink: "#",
      publishedAt: "2024-07-01"
    }
  }
]
