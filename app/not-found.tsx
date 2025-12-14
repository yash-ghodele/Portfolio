"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Unplug, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#050505] text-white relative overflow-hidden p-4">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>

            {/* Warning/Hazard Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                className="relative z-10 flex flex-col items-center text-center max-w-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* The Graphic: Disconnected Plug */}
                <div className="relative mb-8">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex items-center justify-center"
                    >
                        {/* Abstract Wire */}
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent to-yellow-500/50 rounded-full mr-1"></div>
                        <Unplug className="w-24 h-24 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                        <div className="w-16 h-1 bg-gradient-to-l from-transparent to-yellow-500/50 rounded-full ml-1"></div>
                    </motion.div>
                </div>

                {/* Typography: "404 oops!" */}
                <div className="flex items-baseline gap-4 mb-4 font-mono">
                    <motion.h1
                        className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        404
                    </motion.h1>
                    <motion.span
                        className="text-2xl md:text-4xl font-bold text-yellow-500 rotate-[-10deg]"
                        initial={{ opacity: 0, rotate: -20 }}
                        animate={{ opacity: 1, rotate: -10 }}
                        transition={{ delay: 0.4, type: "spring" }}
                    >
                        oops!
                    </motion.span>
                </div>

                {/* Message */}
                <motion.p
                    className="text-xl text-gray-400 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    System Disconnected. The signal you are looking for is lost in the void.
                </motion.p>

                {/* Action */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link href="/">
                        <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold px-8 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300 group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Reconnect
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Decorative Scanline */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[100] bg-[length:100%_2px,3px_100%] opacity-20"></div>
        </div>
    )
}
