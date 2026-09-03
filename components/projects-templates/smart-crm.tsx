import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Database, FileSpreadsheet, ShieldCheck, Zap, Server, AlertTriangle, Activity, Code, Layers, FileCheck, Repeat, Users, Filter, CheckCircle2, Calendar, Building2, UserCheck, Search } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function SmartCRM() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-orange-500/30 font-sans antialiased">

            {/* 1. Hero Section */}
            <section className="relative min-h-[88vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden pt-20 border-b border-orange-500/15">
                {/* Background FX - Orange/Amber Theme */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-zinc-950 to-zinc-950 opacity-80 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[850px] h-[850px] rounded-full blur-[160px] bg-orange-600/15 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] bg-amber-600/10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-1000 my-auto py-12">
                    <div>
                        <Badge variant="outline" className="border-orange-500/30 text-orange-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-orange-500/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                            Enterprise B2B Lead Generation &amp; CRM Engine
                        </Badge>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400 drop-shadow-sm">
                            Smart CRM
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Enterprise B2B lead generation, contact verification &amp; data management system. <br className="hidden md:block" />
                        <span className="text-orange-400 font-medium">100k+ verified leads</span> processed per session with ADODB OLEDB database synchronization.
                    </p>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-orange-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Scale Card */}
                    <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-orange-950/20 border border-orange-500/20 p-8 relative overflow-hidden group hover:border-orange-500/40 transition-all backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-orange-400">
                            <Database size={200} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <h3 className="text-orange-400 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> B2B Contact Throughput
                            </h3>
                            <div className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">100k+</div>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                Verified B2B contacts processed per session. Replaced manual spreadsheets capped at ~500 leads/day with 100% verified key decision-maker titles (CEOs, HRs, Founders, Owners).
                            </p>
                        </div>
                    </div>

                    {/* Speed Optimization Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-orange-500/30 transition-all backdrop-blur-sm">
                        <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">45s</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Batch Time (vs 40m)</div>
                        </div>
                    </div>

                    {/* Deliverability Accuracy Card */}
                    <div className="col-span-1 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-orange-500/30 transition-all backdrop-blur-sm">
                        <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">100%</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Verified Lead Accuracy</div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/[0.025] border border-white/[0.08] p-8 flex items-center justify-between backdrop-blur-sm">
                        <div className="flex gap-3 flex-wrap">
                            {["VBA UserForms", "MS Access Engine", "OLEDB 12.0", "ADODB Recordsets", "SQL Engine", "Excel Binary (.xlsb)", "Waterfall & V-Model"].map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-200 border-orange-500/20 px-4 py-2 text-xs font-mono">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Problem & Solution */}
            <section className="max-w-5xl px-6 py-24 mx-auto border-b border-orange-500/15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-red-500/[0.03] border border-red-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2.5">
                            <AlertTriangle className="w-6 h-6" /> The B2B Prospecting Crisis
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            Sales teams waste up to 90% of outreach efforts on outdated purchased lists containing dead emails and wrong titles. Traditional Excel workflows crash beyond a few thousand rows during manual filtering.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-orange-500/[0.03] border border-orange-500/15 space-y-4 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-orange-400 flex items-center gap-2.5">
                            <Activity className="w-6 h-6" /> The Smart CRM Solution
                        </h3>
                        <p className="text-zinc-300 leading-relaxed font-light text-[16px]">
                            Smart CRM pairs an MS Access OLEDB database backend with an optimized VBA memory engine. It loads entire lead tables into RAM, filters duplicates, validates social profiles, and exports clean data instantly.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Enriched B2B Contact Demographics Schema */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-orange-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-orange-500/10">
                        Data Schema
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        B2B Contact Discovery Schema
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        Capturing 12+ demographic attributes per account to ensure zero sales friction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Company Profile Schema */}
                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] space-y-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Company Demographics</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300 text-sm font-light">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Company Name &amp; Corporate Domain</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Official Website URL</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Total Employee Size &amp; Bracket Range</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Industry Vertical &amp; Sector Classification</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Corporate Headquarters Address &amp; Landline</li>
                        </ul>
                    </div>

                    {/* Decision-Maker Prospect Schema */}
                    <div className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] space-y-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                                <UserCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Decision-Maker Profile</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300 text-sm font-light">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Prospect First &amp; Last Name</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Job Title (CEO, HR, Founder, Owner)</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Business Email ID (MX Validated)</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Social Profile URLs (LinkedIn, ZoomInfo, Web)</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Interaction &amp; Follow-up Timestamp</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. 4-Stage Discovery & Verification Pipeline */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-orange-500/15">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="border-orange-500/30 text-orange-300 px-4 py-1.5 text-xs uppercase tracking-widest bg-orange-500/10">
                        Operational Workflow
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        B2B Contact Verification Workflow
                    </h2>
                    <p className="text-zinc-400 font-light text-base">
                        How Smart CRM gathers, validates, stores, and exports qualified prospect lists.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            icon: Filter,
                            title: "Criteria & Role Specification",
                            desc: "User sets target criteria (industry, geography, employee size, and decision-maker roles like CEO or HR)."
                        },
                        {
                            step: "02",
                            icon: Search,
                            title: "Social & Domain Validation",
                            desc: "Cross-checks prospect attributes via LinkedIn, Facebook, and domain MX records to verify active roles."
                        },
                        {
                            step: "03",
                            icon: Database,
                            title: "ADODB MS Access Engine",
                            desc: "OLEDB 12.0 connects MS Access database for ACID-style CRUD transactions, updates, and deletes."
                        },
                        {
                            step: "04",
                            icon: FileSpreadsheet,
                            title: "Bulk Stream Export",
                            desc: "CopyFromRecordset stream dumps verified lead data directly into formatted Excel sheets in seconds."
                        }
                    ].map((pipeline, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-orange-500/30 transition-all backdrop-blur-sm relative group">
                            <div className="text-orange-400 font-mono text-xs uppercase tracking-widest font-bold mb-4">{pipeline.step} // PHASE</div>
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <pipeline.icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{pipeline.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{pipeline.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Key Features Grid */}
            <section className="max-w-7xl px-6 py-24 mx-auto border-b border-orange-500/15">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-white">
                    System Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Database, title: "High-Throughput Storage", desc: "MS Access backend engine (crm_database.accdb) stores 100k+ records, bypassing Excel row limits." },
                        { icon: Zap, title: "In-Memory Array Processing", desc: "Loads datasets into 2D RAM Variant arrays, eliminating slow cell-by-cell write bottlenecks." },
                        { icon: ShieldCheck, title: "Multi-Attribute Validation", desc: "Performs deep email MX syntax checks, domain status validation, and regex sanitization." },
                        { icon: Repeat, title: "Smart Duplicate Merging", desc: "Identifies duplicate companies or contacts across datasets and merges updated attributes." },
                        { icon: Calendar, title: "Interactive Calendar Scheduler", desc: "Integrated Calendar control (Calendar.SelectedDate) for scheduling client follow-ups." },
                        { icon: FileCheck, title: "Waterfall & V-Model Rigor", desc: "Engineered under Waterfall & V-Model (Verification & Validation) methodologies for zero data corruption." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.025] border border-white/[0.08] hover:border-orange-500/30 transition-all group backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Deep Dive & Real ADODB VBA Code Window */}
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    <div className="space-y-8 md:sticky md:top-24">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            Brute Force <span className="text-orange-400">Efficiency</span>.
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                            <p>
                                The core bottleneck in traditional CRM spreadsheets was the <strong className="text-white font-medium">Cell Access Barrier</strong>. Smart CRM connects to <strong className="text-white font-medium">crm_database.accdb</strong> via OLEDB 12.0 ADODB recordsets.
                            </p>
                            <p>
                                When exporting or updating 100k+ records, the VBA engine streams data directly into Excel worksheets via `CopyFromRecordset` in a single operation, transforming Excel into a memory-driven CRM interface.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-orange-500/[0.03] border border-orange-500/15">
                                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 mt-1">
                                    <FileSpreadsheet size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Interface Layer</h4>
                                    <p className="text-zinc-400 text-sm font-light">Custom VBA UserForms + Calendar Picker Controls.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-orange-500/[0.03] border border-orange-500/15">
                                <div className="p-3 bg-red-500/10 rounded-xl text-red-400 mt-1">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Data Access Layer</h4>
                                    <p className="text-zinc-400 text-sm font-light">ADODB.Connection (Microsoft.ACE.OLEDB.12.0).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-2xl bg-orange-500/[0.03] border border-orange-500/15">
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 mt-1">
                                    <Server size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Backend Storage</h4>
                                    <p className="text-zinc-400 text-sm font-light">MS Access Relational Database Engine.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Window */}
                    <div className="rounded-2xl overflow-hidden border border-orange-500/20 bg-zinc-950 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-orange-400 font-mono">smart_crm_engine.bas</span>
                        </div>
                        <div className="p-6 overflow-x-auto font-mono">
                            <pre className="text-sm leading-relaxed">
                                <span className="text-zinc-500">&apos; 1. ADODB OLEDB Connection to MS Access Database</span><br />
                                <span className="text-blue-400">Dim</span> conn <span className="text-blue-400">As New</span> ADODB.Connection<br />
                                <span className="text-blue-400">Dim</span> rs <span className="text-blue-400">As New</span> ADODB.Recordset<br />
                                conn.Open <span className="text-orange-300">&quot;Provider=Microsoft.ACE.OLEDB.12.0;Data Source=&quot;</span> &amp; DB_PATH<br />
                                <br />
                                <span className="text-zinc-500">&apos; 2. Update Existing Lead Record with Timestamp</span><br />
                                <span className="text-fuchsia-400">Private Sub</span> <span className="text-yellow-200">btn_Update_existing_Click</span>()<br />
                                &nbsp;&nbsp;sql = <span className="text-orange-300">&quot;UPDATE TBL_Customer SET Status=&apos;Verified&apos;, UpdateTimestamp=Now() WHERE ID=&quot;</span> &amp; Me.txtID<br />
                                &nbsp;&nbsp;conn.Execute sql<br />
                                &nbsp;&nbsp;MsgBox <span className="text-orange-300">&quot;Updated Successfully&quot;</span>, vbInformation<br />
                                <span className="text-fuchsia-400">End Sub</span><br />
                                <br />
                                <span className="text-zinc-500">&apos; 3. Bulk CopyFromRecordset Export to Worksheet</span><br />
                                <span className="text-fuchsia-400">Private Sub</span> <span className="text-yellow-200">btn_Export_to_Excel_Click</span>()<br />
                                &nbsp;&nbsp;rs.Open <span className="text-orange-300">&quot;SELECT * FROM TBL_Customer WHERE Title IN (&apos;CEO&apos;,&apos;HR&apos;,&apos;Founder&apos;)&quot;</span>, conn<br />
                                &nbsp;&nbsp;Sheets(<span className="text-orange-300">&quot;Leads&quot;</span>).Range(<span className="text-orange-300">&quot;A2&quot;</span>).<span className="text-yellow-200">CopyFromRecordset</span> rs<br />
                                <span className="text-fuchsia-400">End Sub</span>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Return Bar */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <Link href="/work" scroll={true} className="group inline-flex items-center gap-5 text-stone-400 hover:text-white transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-orange-500/20 flex items-center justify-center group-hover:border-orange-500/50 bg-orange-500/5">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300 text-orange-400" />
                    </div>
                    <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-orange-400/70 mb-1 font-medium">Return to</div>
                        <div className="text-lg font-semibold tracking-tight text-white">Selected Work</div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    )
}
