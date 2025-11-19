import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Yash Ghodele</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Engineer • Leader • Innovator
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            B.Tech Electronics & Computer Engineering student at MIT Chh. Sambhajinagar (Class of 2026)
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center text-muted-foreground">
            <p className="text-lg mb-4">
              I'm passionate about IoT systems, embedded hardware prototyping, and front-end integration.
            </p>
            <p className="text-lg">
              Experienced in leading 200+ member communities and organizing events with 1,000+ participants.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Next.js", "TypeScript", "React", "Tailwind CSS", "IoT", "Embedded Systems", "Hardware Prototyping", "Frontend Integration"].map((tech) => (
              <div key={tech} className="p-4 bg-background rounded-lg text-center border">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground">
              Projects coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground">
              Experience details coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="text-lg mb-4">
              Get in touch with me through the links below.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/yash-ghodele" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yash-ghodele" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


