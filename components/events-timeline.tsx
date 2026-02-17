"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, User, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type EventItem = {
    slug: string
    metadata: {
        title: string
        role: string
        date: string
        attendees?: string
        summary: string
        image?: string
    }
}

export default function EventsTimeline({ events }: { events: EventItem[] }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-black">
                    Chronicle of Execution
                </h2>
                <p className="text-neutral-400 text-sm md:text-base max-w-sm">
                    A timeline of diverse roles, from technical leadership to large-scale event orchestration.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto pb-20">
                {/* Central Line */}
                <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-b from-violet-500 via-purple-400 to-transparent shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                    />
                </div>

                {events.map((event, index) => (
                    <TimelineCard key={event.slug} event={event} index={index} />
                ))}
            </div>
        </div>
    )
}

function TimelineCard({ event, index }: { event: EventItem; index: number }) {
    const isEven = index % 2 === 0

    return (
        <div className={cn(
            "relative flex flex-col md:flex-row gap-10 md:gap-20 mb-24 md:mb-32 items-center",
            !isEven && "md:flex-row-reverse"
        )}>
            {/* Timeline Node */}
            <div className="absolute left-9 md:left-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border border-violet-500/50 md:-translate-x-1/2 z-10 translate-y-1.5 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <div className="absolute inset-0 bg-violet-400/20 rounded-full animate-pulse"></div>
            </div>

            {/* Date Side */}
            <div className={cn(
                "hidden md:flex w-1/2 justify-end pl-0",
                !isEven && "justify-start pl-0"
            )}>
                <div className={cn(
                    "text-6xl font-serif font-bold text-white/5 select-none",
                    !isEven && "text-right"
                )}>
                    {event.metadata.date.split(" ").pop() || event.metadata.date}
                </div>
            </div>

            {/* Content Card Side */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-20 w-full md:w-1/2 pl-20 md:pl-0"
            >
                <Link href={`/community/${event.slug}`} className="block group">
                    <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/10 transition-all duration-500 hover:border-violet-500/30 group-hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)]">

                        {/* Image Section */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-violet-900/15 mix-blend-overlay z-10"></div>
                            <Image
                                src={event.metadata.image || "/placeholder.jpg"}
                                alt={event.metadata.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="p-6 md:p-8 relative">
                            {/* Interactive Shine */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                            {/* Top Meta */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <Badge variant="outline" className="bg-violet-500/10 text-violet-300 border-violet-500/20 px-2 py-0.5 text-[10px] tracking-wider uppercase font-medium">
                                    {event.metadata.role}
                                </Badge>
                                <span className="text-stone-500 text-[10px] tracking-widest uppercase font-medium flex items-center gap-2">
                                    <Calendar className="w-3 h-3" />
                                    {event.metadata.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-violet-200 transition-colors leading-tight">
                                {event.metadata.title}
                            </h3>

                            {/* Brief Summary (Truncated) */}
                            <p className="text-stone-400 text-sm leading-relaxed mb-6 font-light line-clamp-2">
                                {event.metadata.summary}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex items-center gap-4">
                                    {event.metadata.attendees && (
                                        <div className="flex items-center gap-2 text-[10px] text-stone-500 uppercase tracking-wider font-medium">
                                            <Users className="w-3 h-3" />
                                            <span>{event.metadata.attendees}</span>
                                        </div>
                                    )}
                                </div>
                                <span className="flex items-center text-[10px] font-medium text-violet-300/80 uppercase tracking-widest group-hover:text-violet-300">
                                    View <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div>
    )
}
