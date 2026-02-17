"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroNetwork({ showParticles = true }: { showParticles?: boolean }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!showParticles) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let width = window.innerWidth
        let height = window.innerHeight

        // Configuration
        const particleCount = 50 // Not too crowded
        const connectionDistance = 150
        const moveSpeed = 0.5

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        window.addEventListener("resize", handleResize)
        handleResize()

        // Particle Class
        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number

            constructor() {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.vx = (Math.random() - 0.5) * moveSpeed
                this.vy = (Math.random() - 0.5) * moveSpeed
                this.size = Math.random() * 2 + 1
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1
                if (this.y < 0 || this.y > height) this.vy *= -1
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
                ctx.fill()
            }
        }

        // Initialize Particles
        const particles: Particle[] = []
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Update and Draw Particles
            particles.forEach((p, index) => {
                p.update()
                p.draw()

                // Draw Connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(168, 85, 247, ${1 - distance / connectionDistance})` // Purple fade
                        ctx.lineWidth = 1
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Layer 1: The Aurora (CSS Gradients) */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
            </div>

            {/* Layer 2: The Network Mesh (Canvas) */}
            {showParticles && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full opacity-60"
                />
            )}

            {/* Layer 3: Unifying Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>
    )
}
