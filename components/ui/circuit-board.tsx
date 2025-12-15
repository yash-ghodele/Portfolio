"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function CircuitBoard() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Paths designed to originate from left-center (approx Y=50%) and branch out
    // Using percentages effectively or large viewports.
    // We'll use a fixed SVG viewBox and let it scale.

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 800"
                preserveAspectRatio="xMinYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-primary/60"
            >
                <defs>
                    <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(var(--primary-rgb), 0.2)" />
                        <stop offset="50%" stopColor="rgba(var(--primary-rgb), 0.8)" />
                        <stop offset="100%" stopColor="rgba(var(--primary-rgb), 0)" />
                    </linearGradient>
                </defs>

                {/* Main Trunk Line */}
                <CircuitPath
                    d="M -50 400 L 200 400 L 250 350 L 400 350 L 450 400 L 800 400"
                    delay={0}
                />

                {/* Branch Up 1 */}
                <CircuitPath
                    d="M 150 400 L 200 350 L 200 200 L 250 150 L 400 150"
                    delay={0.5}
                />

                {/* Branch Down 1 */}
                <CircuitPath
                    d="M 300 350 L 350 400 L 350 550 L 400 600 L 550 600"
                    delay={0.8}
                />

                {/* Branch Up 2 (Complex) */}
                <CircuitPath
                    d="M 220 350 L 270 300 L 270 100 L 320 50 L 500 50"
                    delay={1.2}
                />

                {/* Branch Down 2 */}
                <CircuitPath
                    d="M 100 400 L 150 450 L 150 650 L 200 700 L 400 700"
                    delay={1.5}
                />

                {/* Connecting Nodes */}
                <CircuitNode cx="200" cy="400" delay={0.5} />
                <CircuitNode cx="250" cy="350" delay={0.7} />
                <CircuitNode cx="450" cy="400" delay={0.9} />
                <CircuitNode cx="200" cy="200" delay={1.0} />
                <CircuitNode cx="350" cy="550" delay={1.3} />

            </svg>

            {/* Overlay Gradients to fade edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950/80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
    )
}

function CircuitPath({ d, delay }: { d: string, delay: number }) {
    return (
        <>
            {/* Glow Path with Breathing Animation */}
            <motion.path
                d={d}
                fill="none"
                strokeWidth="3"
                stroke="url(#trace-gradient)"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: 1,
                    opacity: [0.4, 1, 0.4] // Breathing effect
                }}
                transition={{
                    pathLength: { duration: 2, delay: delay, ease: "easeInOut" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay }
                }}
            />

            {/* Pulse Packet 1 */}
            <motion.circle
                r="2"
                fill="white"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 0] }}
                style={{ offsetPath: `path("${d}")` }}
                transition={{
                    duration: 2, // Faster
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay,
                    repeatDelay: 1
                }}
            />

            {/* Pulse Packet 2 (Offset for continuous flow) */}
            <motion.circle
                r="2"
                fill="#a855f7" // Purple tint for variety
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 0] }}
                style={{ offsetPath: `path("${d}")` }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay + 1.5, // Staggered
                    repeatDelay: 0.5
                }}
            />
        </>
    )
}

function CircuitNode({ cx, cy, delay }: { cx: string, cy: string, delay: number }) {
    return (
        <motion.circle
            cx={cx}
            cy={cy}
            r="4"
            className="fill-primary"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: 1 }} // Pulse scale
            transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: delay }
            }}
        >
            {/* Pulsing Aura - Continuous Ripple */}
            <motion.circle
                cx={cx}
                cy={cy}
                r="10"
                className="stroke-primary/50"
                fill="none"
                strokeWidth="1"
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: delay
                }}
            />
        </motion.circle>
    )
}
