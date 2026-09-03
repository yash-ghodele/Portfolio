'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, ExternalLink, Github, Shield, Lock, Key, Server, Users, Eye, 
  CheckCircle2, FileText, Activity, QrCode, Smartphone, Database, Zap, Cpu, 
  Radio, Network, Check, X, AlertTriangle, GraduationCap, ChevronRight, RefreshCw, 
  Layers, FileSpreadsheet, LockKeyhole, Sparkles, Binary, Award, LineChart
} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function AuthoSec() {
    const [isZoomed, setIsZoomed] = useState(false)

    const handleScrollToRepos = (e: React.MouseEvent) => {
        e.preventDefault()
        const target = document.getElementById('repositories')
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
            setIsZoomed(true)
            setTimeout(() => {
                setIsZoomed(false)
            }, 3000)
        }
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500/30 font-sans antialiased">

            {/* 1. Hero Section + Integrated Repositioned Screenshot */}
            <section className="relative w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-28 pb-20 border-b border-amber-500/15">
                {/* Dynamic Cyber Radial Lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/35 via-zinc-950 to-zinc-950 opacity-90 pointer-events-none" />
                <div className="absolute top-[-25%] right-[-10%] w-[900px] h-[900px] rounded-full blur-[180px] bg-amber-500/15 pointer-events-none" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] bg-yellow-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-25 pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10 backdrop-blur-md inline-flex items-center gap-2 shadow-lg shadow-amber-950/50">
                            <Shield className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                            Enterprise B2B Dual-QR Payment Protocol
                        </Badge>
                        <Badge variant="outline" className="border-amber-400/30 text-amber-200 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-400/10 backdrop-blur-md inline-flex items-center gap-2">
                            <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                            Ugam Campus Product Project
                        </Badge>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-3">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-500 drop-shadow-2xl">
                            AuthoSec
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base font-mono text-amber-400/90 tracking-widest uppercase font-semibold">
                            Dual-Factor Cryptographic Payment &amp; Non-Repudiation Compliance Engine
                        </p>
                    </div>

                    {/* Subheadline */}
                    <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Eliminating financial replay attacks and identity spoofing through <span className="text-amber-400 font-medium">Dual-QR Handshakes (QR1 → QR2)</span>, sub-300ms core verification execution, and AES-256 GCM encrypted payloads.
                    </p>

                    {/* CTA Action Bar */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button 
                            size="lg" 
                            onClick={handleScrollToRepos}
                            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold rounded-full h-14 px-9 text-base shadow-xl shadow-amber-900/40 transition-all hover:scale-105 cursor-pointer"
                        >
                            Explore Repositories <Github className="w-4 h-4" />
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-amber-500/30 text-zinc-200 hover:bg-amber-500/10 hover:text-white rounded-full h-14 px-9 text-base backdrop-blur-md">
                            <Link href="/reports/authosec-academic-report.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono">
                                <FileText className="w-4 h-4 text-amber-400" /> Academic Report (IEEE Standard)
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* 2. Repositioned Showcase Screenshot Container */}
                <div className="max-w-6xl w-full px-6 mt-16 relative z-20">
                    <div className="rounded-3xl overflow-hidden border border-amber-500/30 bg-zinc-900/90 shadow-2xl shadow-amber-950/70 p-3 backdrop-blur-2xl">
                        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950/90 rounded-t-2xl border-b border-white/5 font-mono text-xs text-zinc-400">
                            <div className="flex items-center gap-2.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="ml-2 text-zinc-200 font-semibold tracking-wide">AuthoSec Security &amp; Compliance Cockpit</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                <span className="text-emerald-400 font-semibold tracking-wider uppercase">MUTUAL AUTHENTICATION ACTIVE</span>
                            </div>
                        </div>
                        <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-zinc-950">
                            <Image 
                                src="/images/projects/authosec.jpg" 
                                alt="AuthoSec System Interface" 
                                fill
                                className="object-cover object-top hover:scale-102 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Dual-QR Handshake Protocol Workflow */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                        Cryptographic Handshake Protocol
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        4-Step <span className="text-amber-400">Dual-QR Handshake</span>.
                    </h2>
                    <p className="text-zinc-400 font-light text-lg">
                        Mutual identity binding prevents single-sided forgery, replay interception, and rogue transaction injection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { 
                            step: "STEP 01", 
                            icon: QrCode, 
                            title: "Merchant QR1 Scan", 
                            desc: "Sender scans static Merchant QR1 containing encrypted store metadata, generating initiating transaction state." 
                        },
                        { 
                            step: "STEP 02", 
                            icon: Radio, 
                            title: "AWS SNS OTP Consent", 
                            desc: "Sender requests SMS OTP via AWS SNS (2–4s delivery). Time-bound 60s validity window validates account holder consent." 
                        },
                        { 
                            step: "STEP 03", 
                            icon: RefreshCw, 
                            title: "Dynamic QR2 Generation", 
                            desc: "Server issues single-use dynamic QR2 token containing AES-256 GCM encrypted nonce signature." 
                        },
                        { 
                            step: "STEP 04", 
                            icon: CheckCircle2, 
                            title: "Atomic Settlement", 
                            desc: "Merchant scans QR2. Server executes mutual hash validation and updates Supabase PostgreSQL ledger atomically." 
                        }
                    ].map((phase, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 transition-all backdrop-blur-sm group flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5 font-mono font-black text-6xl text-amber-400 group-hover:opacity-10 transition-opacity">
                                0{i + 1}
                            </div>
                            <div className="space-y-4">
                                <div className="p-3.5 bg-amber-500/10 rounded-2xl text-amber-400 w-fit group-hover:scale-110 transition-transform">
                                    <phase.icon size={26} />
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">{phase.step}</span>
                                    <h3 className="text-xl font-bold text-white mt-1">{phase.title}</h3>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                    {phase.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Bento Grid Performance Cockpit */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Scale Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-amber-950/20 border border-amber-500/20 p-8 relative overflow-hidden group hover:border-amber-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-amber-400">
                            <Shield size={220} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-amber-400 uppercase tracking-widest text-xs font-mono font-bold mb-2 flex items-center gap-2">
                                <Lock className="w-4 h-4" /> Mutual Authentication Guarantee
                            </h3>
                            <div className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">100% Verified</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Both sender and receiver identity tokens are mutually verified before financial state modification. Tested on Samsung Galaxy A52 (Android 12) &amp; iPhone 12 (iOS 17).
                            </p>
                        </div>
                    </div>

                    {/* Core Sub-300ms Latency Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/30 transition-all backdrop-blur-sm">
                        <Zap className="w-10 h-10 text-amber-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">&lt; 300ms</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Core Verification Execution</div>
                        </div>
                    </div>

                    {/* End-to-End Usability Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/30 transition-all backdrop-blur-sm">
                        <Award className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">4.6 / 5.0</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Usability Score (12/12 Testers)</div>
                        </div>
                    </div>

                    {/* Sub-Operations Latency Breakdown */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full font-mono text-xs text-zinc-300">
                            <div><span className="text-amber-400 font-bold">QR1 Gen:</span> 180 ms</div>
                            <div><span className="text-amber-400 font-bold">QR1 Scan:</span> 120 ms</div>
                            <div><span className="text-amber-400 font-bold">QR2 Gen:</span> 150 ms</div>
                            <div><span className="text-amber-400 font-bold">QR2 Scan:</span> 110 ms</div>
                            <div><span className="text-amber-400 font-bold">OTP Hash:</span> 95 ms</div>
                            <div><span className="text-amber-400 font-bold">AWS SNS:</span> 2.25s</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Complete Test Case Matrix (TC01 - TC10) */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="space-y-4 mb-12">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                        Academic Test Suite
                    </Badge>
                    <h2 className="text-4xl font-black text-white tracking-tight">
                        Functional Validation <span className="text-amber-400">Test Matrix</span>.
                    </h2>
                    <p className="text-zinc-400 text-lg font-light">
                        100% pass rate across 10 empirical validation test suites conducted under simulated B2B cyber threat vectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { tc: "TC01", name: "OTP Request Delivery", result: "Delivered within 2–4 seconds via AWS SNS", status: "Passed" },
                        { tc: "TC02", name: "QR1 Payload Generation", result: "QR1 created with AES-256 encrypted metadata", status: "Passed" },
                        { tc: "TC03", name: "QR1 Scan & State Transition", result: "Receiver validates and advances state", status: "Passed" },
                        { tc: "TC04", name: "QR2 Confirmation Token", result: "Time-bound QR2 generated dynamically", status: "Passed" },
                        { tc: "TC05", name: "QR2 Sender Scan", result: "Mutual sender validation successful", status: "Passed" },
                        { tc: "TC06", name: "OTP Verification", result: "Valid OTP completes atomic transaction", status: "Passed" },
                        { tc: "TC07", name: "Tampered Payload Rejection", result: "System detects and rejects tampered QR data", status: "Passed" },
                        { tc: "TC08", name: "Expired OTP Rejection", result: "System rejects OTP outside 60s window", status: "Passed" },
                        { tc: "TC09", name: "RBAC Permission Enforcement", result: "Unauthorized roles denied access", status: "Passed" },
                        { tc: "TC10", name: "Audit Trail Logging", result: "IP & delta logs created for every action", status: "Passed" },
                    ].map((item) => (
                        <div key={item.tc} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between font-mono text-sm hover:border-amber-500/30 transition-all">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-amber-400 font-bold">{item.tc}</span>
                                    <span className="text-white font-semibold">{item.name}</span>
                                </div>
                                <div className="text-xs text-zinc-400 font-sans">{item.result}</div>
                            </div>
                            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-3 py-1 font-mono text-xs">
                                {item.status}
                            </Badge>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Threat Defense Matrix (AuthoSec vs OTP-Only) */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="space-y-4 mb-12">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                        Threat Analysis
                    </Badge>
                    <h2 className="text-4xl font-black text-white tracking-tight">
                        Threat Vulnerability Comparison: <span className="text-amber-400">AuthoSec vs Traditional OTP</span>.
                    </h2>
                </div>

                <div className="overflow-x-auto rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md">
                    <table className="w-full text-left border-collapse table-fixed">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5 font-mono text-xs text-amber-400 uppercase tracking-wider">
                                <th className="p-5 w-[34%]">Security Feature / Attack Vector</th>
                                <th className="p-5 w-[33%]">Traditional OTP-Only System</th>
                                <th className="p-5 w-[33%]">AuthoSec (Dual-QR + OTP Protocol)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm text-zinc-300 font-light">
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-5 font-medium text-white">Mutual Identity Authentication</td>
                                <td className="p-5 text-red-400">
                                    <div className="flex items-center gap-2">
                                        <X className="w-4 h-4 shrink-0" />
                                        <span>Single-sided only</span>
                                    </div>
                                </td>
                                <td className="p-5 text-emerald-400 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                                        <span>Dual-sided (Sender &amp; Receiver bound)</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-5 font-medium text-white">Replay Attack Protection</td>
                                <td className="p-5 text-red-400">
                                    <div className="flex items-center gap-2">
                                        <X className="w-4 h-4 shrink-0" />
                                        <span>Vulnerable to captured session data</span>
                                    </div>
                                </td>
                                <td className="p-5 text-emerald-400 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                                        <span>Nonce + Time-bound payload signatures</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-5 font-medium text-white">Identity &amp; QR Payload Spoofing</td>
                                <td className="p-5 text-red-400">
                                    <div className="flex items-center gap-2">
                                        <X className="w-4 h-4 shrink-0" />
                                        <span>Susceptible to static code swaps</span>
                                    </div>
                                </td>
                                <td className="p-5 text-emerald-400 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                                        <span>AES-256 GCM encrypted QR payloads</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-5 font-medium text-white">Man-in-the-Middle (MITM) Resistance</td>
                                <td className="p-5 text-yellow-400">
                                    <div className="flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 shrink-0" />
                                        <span>Limited protection</span>
                                    </div>
                                </td>
                                <td className="p-5 text-emerald-400 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                                        <span>Identity binding + Dual verification</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-white/[0.01] transition-colors">
                                <td className="p-5 font-medium text-white">Non-Repudiation Audit Logs</td>
                                <td className="p-5 text-red-400">
                                    <div className="flex items-center gap-2">
                                        <X className="w-4 h-4 shrink-0" />
                                        <span>Minimal transaction context</span>
                                    </div>
                                </td>
                                <td className="p-5 text-emerald-400 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                                        <span>IP, User Agent, &amp; Delta values logged</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 7. Future Roadmap & Enhancements */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-amber-500/15">
                <div className="space-y-4 mb-12">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                        Academic PDF Report Roadmap
                    </Badge>
                    <h2 className="text-4xl font-black text-white tracking-tight">
                        Future Enhancements &amp; <span className="text-amber-400">Next-Gen Scope</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "In-App TOTP Generation", desc: "Reduces dependence on SMS carrier networks by issuing dynamic local TOTP authentication tokens." },
                        { title: "Blockchain Audit Ledger", desc: "Anchors transaction hashes onto an immutable decentralized ledger for zero-tamper non-repudiation." },
                        { title: "Biometric FaceID / TouchID", desc: "Integrates hardware-level device biometric verification prior to dynamic QR2 issuance." }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/30 transition-all backdrop-blur-sm space-y-3">
                            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
                                0{idx + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Multi-Repo Stack & Code Inspector */}
            <section id="repositories" className="max-w-6xl px-6 py-24 mx-auto scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 md:sticky md:top-24">
                        <div className="space-y-3">
                            <Badge variant="outline" className="border-amber-500/30 text-amber-300 px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                                Ecosystem Architecture
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                                Cryptographic Engine &amp; <span className="text-amber-400">Zero-Trust Audit</span>.
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                Grounded in peer-reviewed IEEE research on honeytoken authentication and secure offline mobile transactions, AuthoSec operates across 3 integrated codebases: a Next.js 15 Prisma backend, an Expo React Native mobile wallet, and a React Three.js web management platform.
                            </p>
                            <div className={`space-y-3 text-sm font-mono text-amber-200/90 p-5 rounded-2xl border transition-all duration-700 ${
                                isZoomed 
                                    ? 'scale-[1.02] bg-amber-500/[0.08] border-amber-500/50 shadow-lg shadow-amber-950/40' 
                                    : 'border-white/[0.08] bg-white/[0.02]'
                            }`}>
                                <a href="https://github.com/aniket3077/authosec--backend-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                                    <span>authosec--backend- (Next.js 15, Prisma ORM, PostgreSQL)</span>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                                </a>
                                <a href="https://github.com/aniket3077/authosec-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                                    <span>authosec-app (Expo React Native Mobile Wallet)</span>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                                </a>
                                <a href="https://github.com/aniket3077/authosec-website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                                    <span>authosec-website (React, Vite, Three.js 3D POS)</span>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Code Terminal */}
                    <div className="rounded-2xl overflow-hidden border border-amber-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-amber-400 font-mono">EncryptionService.ts</span>
                        </div>
                        <div className="p-6 overflow-x-auto font-mono">
                            <pre className="text-sm leading-relaxed">
                                <span className="text-zinc-500">// AES-256-GCM Payload Encryption &amp; SHA-256 Hashing</span><br />
                                <span className="text-fuchsia-400">export class</span> <span className="text-yellow-200">EncryptionService</span> {'{'}<br />
                                &nbsp;&nbsp;<span className="text-fuchsia-400">static</span> <span className="text-yellow-200">encrypt</span>(data: <span className="text-blue-400">any</span>, key: <span className="text-blue-400">string</span>, iv: <span className="text-blue-400">string</span>): <span className="text-blue-400">string</span> {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">const</span> dataString = JSON.stringify(data);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">const</span> encrypted = CryptoJS.AES.encrypt(<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dataString,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CryptoJS.enc.Hex.parse(key),<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} iv: CryptoJS.enc.Hex.parse(iv), mode: CryptoJS.mode.CBC {'}'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">return</span> encrypted.toString();<br />
                                &nbsp;&nbsp;{'}'}<br />
                                {'}'}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/50 bg-amber-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-amber-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-amber-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
