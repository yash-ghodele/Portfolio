"use client"

import { ContentSection } from "@/lib/types"

export function ContentRenderer({ content, hue = 270 }: { content: ContentSection[], hue?: number }) {
    if (!content) return null;

    const renderText = (text: string) => {
        if (!text) return null;
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <div className="space-y-6">
            {content.map((block: any, i) => {
                if (block.type === "h3") {
                    return (
                        <h2
                            key={i}
                            className="text-2xl font-bold text-white mt-10 mb-4 pt-6 border-t border-white/5"
                        >
                            {renderText(block.text)}
                        </h2>
                    )
                }
                if (block.type === "p") {
                    return (
                        <p
                            key={i}
                            className="text-base text-muted-foreground leading-[1.85] font-light"
                        >
                            {renderText(block.text)}
                        </p>
                    )
                }
                if (block.type === "blockquote") {
                    return (
                        <blockquote
                            key={i}
                            className="relative my-16 pl-8 md:pl-10 py-6 border-l-2 not-prose"
                            style={{ borderColor: `hsla(${hue}, 50%, 55%, 0.4)` }}
                        >
                            <div
                                className="absolute -left-[5px] top-8 w-2 h-2 rounded-full"
                                style={{ backgroundColor: `hsla(${hue}, 60%, 65%, 0.6)` }}
                            />
                            <p
                                className="text-xl md:text-2xl font-serif italic leading-relaxed"
                                style={{ color: `hsl(${hue}, 20%, 85%)` }}
                            >
                                {renderText(block.text)}
                            </p>
                        </blockquote>
                    )
                }
                if (block.type === "highlight") {
                    return (
                        <div key={i} className="relative my-16 group not-prose">
                            <div
                                className="absolute -inset-px rounded-2xl blur-sm"
                                style={{ background: `linear-gradient(135deg, hsla(${hue}, 60%, 50%, 0.20), hsla(${hue + 40}, 50%, 50%, 0.15), hsla(${hue}, 60%, 50%, 0.20))` }}
                            />
                            <div
                                className="relative p-10 md:p-12 rounded-2xl bg-[#0a0a0f]/90 backdrop-blur-xl"
                                style={{ border: `1px solid hsla(${hue}, 60%, 60%, 0.15)` }}
                            >
                                <div
                                    className="absolute top-6 left-8 text-6xl font-serif leading-none select-none"
                                    style={{ color: `hsla(${hue}, 50%, 60%, 0.2)` }}
                                >
                                    &ldquo;
                                </div>
                                <p
                                    className="text-2xl md:text-3xl lg:text-4xl font-serif text-center italic leading-relaxed px-4"
                                    style={{ color: `hsl(${hue}, 40%, 90%)` }}
                                >
                                    {renderText(block.text)}
                                </p>
                                <div
                                    className="absolute bottom-6 right-8 text-6xl font-serif leading-none select-none"
                                    style={{ color: `hsla(${hue}, 50%, 60%, 0.2)` }}
                                >
                                    &rdquo;
                                </div>
                            </div>
                        </div>
                    )
                }
                if (block.type === "gridConfig") {
                    return (
                        <div
                            key={i}
                            className="grid gap-4 my-12 not-prose"
                            style={{ gridTemplateColumns: `repeat(${Math.min(block.cols || 3, 3)}, minmax(0, 1fr))` }}
                        >
                            {block.items?.map((item: any, j: number) => (
                                <div
                                    key={j}
                                    className="relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-500 group"
                                    style={{ ['--hover-border' as string]: `hsla(${hue}, 60%, 60%, 0.25)` } as any}
                                >
                                    <span
                                        className="absolute top-4 right-4 text-xs font-mono tracking-wider"
                                        style={{ color: `hsla(${hue}, 40%, 55%, 0.3)` }}
                                    >
                                        {String(j + 1).padStart(2, '0')}
                                    </span>
                                    <div
                                        className="w-8 h-0.5 rounded-full mb-4 group-hover:w-12 transition-all duration-500"
                                        style={{ background: `linear-gradient(to right, hsla(${hue}, 60%, 65%, 0.6), transparent)` }}
                                    />
                                    <h4 className="text-base font-semibold text-white mb-2 tracking-tight">{renderText(item.title)}</h4>
                                    <p className="text-sm text-stone-400/90 leading-relaxed">{renderText(item.description)}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
                if (block.type === "interactive" && block.component === "LatencySim") {
                    return (
                        <div
                            key={i}
                            className="my-8 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5"
                        >
                            <p className="text-xs font-mono text-blue-400/70 uppercase tracking-widest mb-3">
                                {"// Interactive: Latency Simulator"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Edge processing path:{" "}
                                <span className="text-white font-mono">sensor (2ms) → ESP32 (4ms) → MQTT (4ms) → WebSocket (4ms) → React (2ms) = </span>
                                <span className="text-primary font-bold font-mono">14ms total</span>
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Cloud round-trip path:{" "}
                                <span className="text-white font-mono">sensor → 4G → API → DB → WebSocket → browser = </span>
                                <span className="text-amber-400 font-mono">200–800ms</span>
                            </p>
                        </div>
                    )
                }
                if (block.type === "interactive" && block.component === "FuelShieldSchematic") {
                    return (
                        <div
                            key={i}
                            className="my-8 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 font-mono text-sm"
                        >
                            <p className="text-xs text-emerald-400/70 uppercase tracking-widest mb-4">
                                {"// FuelShield Architecture"}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 text-white/80">
                                {[
                                    { label: "HC-SR04", color: "text-emerald-400" },
                                    { label: "→", color: "text-muted-foreground/40" },
                                    { label: "ESP32", color: "text-emerald-400" },
                                    { label: "→ (local detection) →", color: "text-muted-foreground/40" },
                                    { label: "MQTT", color: "text-blue-400" },
                                    { label: "→", color: "text-muted-foreground/40" },
                                    { label: "Firebase", color: "text-amber-400" },
                                    { label: "→", color: "text-muted-foreground/40" },
                                    { label: "Next.js Dashboard", color: "text-purple-400" },
                                ].map((step, j) => (
                                    <span key={j} className={step.color}>{step.label}</span>
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-3">
                                Detection runs on-chip. Only alerts reach the cloud. Offline buffer: 50 readings.
                            </p>
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}
