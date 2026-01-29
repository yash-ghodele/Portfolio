"use client"

import { useEffect, useRef } from "react"

export default function BackgroundParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight
        let animationFrameId: number

        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        // Particle Config - Enhanced Coverage
        const particleCount = 80 // Increased for fuller coverage
        const particles: { x: number; y: number; speed: number; size: number; opacity: number }[] = []

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: Math.random() * 0.2 + 0.05, // Very slow drift
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.3 + 0.1 // Low opacity
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            particles.forEach(p => {
                p.y -= p.speed // Float upwards

                // Reset if off screen
                if (p.y < -10) {
                    p.y = height + 10
                    p.x = Math.random() * width
                }

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
                ctx.fill()
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
            {/* Layer 1: Subtle Noise Texture (CSS Radial Gradient for depth) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_100%)]"></div>

            {/* Layer 2: Floating Motes */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-50"
            />
        </div>
    )
}
