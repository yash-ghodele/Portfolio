"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [isMounted, setIsMounted] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Extract number from target string like "500+" or "₹50k+"
    const numericPart = parseInt(target.replace(/[^0-9]/g, ""))
    const prefix = target.match(/^[^0-9]*/)?.[0] || ""
    const suffixPart = target.match(/[^0-9]*$/)?.[0] || ""

    useEffect(() => {
        if (!isInView || !isMounted) return

        let start = 0
        const duration = 2000
        const increment = numericPart / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= numericPart) {
                setCount(numericPart)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [isInView, isMounted, numericPart])

    return (
        <span ref={ref}>
            {prefix}{isMounted && isInView ? count : 0}{suffixPart}
        </span>
    )
}
