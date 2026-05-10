'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
    "> initializing system core...",
    "> loading layout modules...",
    "> calculating viewport matrix...",
    "> mounting react components...",
    "> connecting to sensory inputs...",
    "> optimizing render cycles...",
    "> injecting aesthetic drivers...",
    "> system ready."
];

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [logIndex, setLogIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let logInterval: NodeJS.Timeout;

        // Small delay to ensure browser painting is ready (Auto-Start Fix)
        const startTimer = setTimeout(() => {
            // Counter Logic
            interval = setInterval(() => {
                setCount(prev => {
                    const next = prev + 1;
                    if (next >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setIsVisible(false), 800);
                        return 100;
                    }
                    return next;
                });
            }, 20);

            // Log Logic
            logInterval = setInterval(() => {
                setLogIndex(prev => {
                    if (prev < bootLogs.length - 1) return prev + 1;
                    clearInterval(logInterval);
                    return prev;
                });
            }, 250);
        }, 200);

        return () => {
            clearTimeout(startTimer);
            if (interval) clearInterval(interval);
            if (logInterval) clearInterval(logInterval);
        };
    }, []);

    return (
        <AnimatePresence mode='wait'>
            {isVisible && (
                <motion.div
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white font-mono overflow-hidden"
                >
                    {/* Main Counter */}
                    <div className="relative">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-8xl md:text-[12rem] font-bold tracking-tighter"
                        >
                            {count}%
                        </motion.h1>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-64 md:w-96 h-1 bg-gray-800 mt-8 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${count}%` }}
                            transition={{ ease: "linear", duration: 0.02 }} // visual sync
                        />
                    </div>

                    {/* Terminal Logs */}
                    <div className="absolute bottom-12 left-8 md:left-12 text-sm md:text-base text-gray-400 font-mono">
                        {bootLogs.slice(0, logIndex + 1).map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="mb-1"
                            >
                                <span className="text-green-500 mr-2">➜</span>
                                {log}
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative Corner info */}
                    <div className="absolute top-8 right-8 text-xs text-gray-600 text-right">
                        <p>SYSTEM.BIO_KERNEL</p>
                        <p>V 2.0.4</p>
                    </div>

                    {/* Hardware Stats */}
                    <div className="absolute top-8 left-8 text-xs text-gray-500 font-mono space-y-1">
                        <p>CPU: <span className="text-white">12%</span></p>
                        <p>MEM: <span className="text-white">4.2GB</span></p>
                        <p>NET: <span className="text-green-500">CONNECTED</span></p>
                    </div>

                    {/* Encrypted Data Stream */}
                    <div className="absolute bottom-8 right-8 text-[10px] text-gray-800 font-mono text-right hidden md:block">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <p key={i}>0x{(Math.random() * 1000000).toString(16).slice(0, 8).toUpperCase()}</p>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
