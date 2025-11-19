"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cpu, Smartphone, Wrench, Megaphone, Users } from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    technical: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Technical Skills",
      description: "Programming and embedded systems",
      skills: [
        { name: "Python", level: 85 },
        { name: "Arduino", level: 90 },
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "C/C++", level: 80 },
        { name: "IoT", level: 85 },
      ],
    },
    iot: {
      icon: <Cpu className="h-6 w-6" />,
      title: "IoT & Embedded",
      description: "Smart device development",
      skills: [
        { name: "Microcontrollers", level: 90 },
        { name: "Sensors & Actuators", level: 85 },
        { name: "Real-time Monitoring", level: 80 },
        { name: "Wireless Communication", level: 80 },
        { name: "System Integration", level: 85 },
      ],
    },
    frontend: {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Web and mobile interfaces",
      skills: [
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 85 },
        { name: "UI/UX", level: 80 },
      ],
    },
    soft: {
      icon: <Users className="h-6 w-6" />,
      title: "Soft Skills",
      description: "Leadership and communication",
      skills: [
        { name: "Event Management", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Project Coordination", level: 85 },
        { name: "Public Speaking", level: 80 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Platforms",
      description: "Development and collaboration",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Linux", level: 80 },
      ],
    },
    marketing: {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Marketing and promotion",
      skills: [
        { name: "Social Media", level: 85 },
        { name: "Content Creation", level: 80 },
        { name: "Campaign Management", level: 80 },
        { name: "Analytics", level: 75 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical & Soft Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} more</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            With a strong foundation in IoT, embedded systems, and full-stack development, combined with proven
            leadership and event management expertise, I bring a unique blend of technical and interpersonal skills to
            every project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
