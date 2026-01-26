"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Send, Loader2 } from "lucide-react"
import { sendEmail } from "@/actions/send-email"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("subject", formData.subject)
    formDataObj.append("message", formData.message)
    // subject is not in the server action schema currently, but we can send it or ignore it. 
    // The previous action didn't include subject validation, let's just stick to the main 3 for simplicity or update the action.
    // Proceeding with the 3 main fields.

    // Note: sendEmail expects prevState as first arg if used with useFormState, but here we can call it directly if we mock the state.
    // However, server actions are best used directly or via hooks. 
    // Adapting to direct call pattern suited for simple onSubmit:
    const result = await sendEmail({ message: "", success: false }, formDataObj)

    if (result.success) {
      toast({
        title: "Message transmission successful",
        description: result.message,
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      toast({
        title: "Transmission Error",
        description: result.message || "Something went wrong.",
        variant: "destructive"
      })
    }

    setIsSubmitting(false)
  }

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/yash-ghodele", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/yash-ghodele", label: "GitHub", color: "hover:text-white" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/why_be_yashhh/", label: "Instagram", color: "hover:text-pink-400" }
  ]

  return (
    <section id="contact" className="py-32 relative min-h-screen flex items-center justify-center">

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 py-1 px-3 border-white/10 bg-white/5 text-white/80 backdrop-blur-md">
              Contact
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Let&apos;s start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">conversation.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
              Interested in collaborating on a project or just want to say hi?
              My inbox is always open for new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Mail me at</p>
                  <p className="text-lg font-medium">yashghodele.work@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Call me at</p>
                  <p className="text-lg font-medium">+91 76661 68561</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 ${social.color}`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Glass Portal Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract Glow behind form */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-[2rem] blur-2xl transform rotate-3 scale-105 pointer-events-none"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden group">
              {/* Subtle Grid Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>

              {/* Hover Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-all duration-1000"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-400 text-xs uppercase tracking-wider pl-1">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 focus:bg-black/30 transition-all duration-300 h-12 rounded-xl"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400 text-xs uppercase tracking-wider pl-1">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 focus:bg-black/30 transition-all duration-300 h-12 rounded-xl"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-400 text-xs uppercase tracking-wider pl-1">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 focus:bg-black/30 transition-all duration-300 h-12 rounded-xl"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-400 text-xs uppercase tracking-wider pl-1">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50 focus:bg-black/30 transition-all duration-300 min-h-[150px] rounded-xl resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
