export default function Loading() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans animate-pulse">
            {/* Hero Skeleton */}
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 pt-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        {/* Back button skeleton */}
                        <div className="w-40 h-8 bg-white/5 rounded-full mb-8" />

                        <div className="max-w-4xl space-y-4">
                            {/* Title skeleton */}
                            <div className="h-16 md:h-20 bg-white/5 rounded-xl w-3/4" />
                            <div className="h-8 bg-white/5 rounded-lg w-1/2" />
                            {/* Meta skeleton */}
                            <div className="flex gap-6 pt-4">
                                <div className="h-5 w-32 bg-white/5 rounded" />
                                <div className="h-5 w-40 bg-white/5 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <div className="h-3 w-16 bg-white/5 rounded mb-3" />
                            <div className="h-8 w-40 bg-white/5 rounded" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-3 w-24 bg-white/5 rounded mb-4" />
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-14 bg-white/[0.02] border border-white/5 rounded-lg" />
                            ))}
                        </div>
                        <div className="space-y-2">
                            <div className="h-3 w-24 bg-white/5 rounded mb-4" />
                            <div className="flex flex-wrap gap-2">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="h-8 w-20 bg-white/5 rounded-md" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                            <div className="h-5 w-40 bg-white/5 rounded mb-4" />
                            <div className="space-y-3">
                                <div className="h-4 bg-white/5 rounded w-full" />
                                <div className="h-4 bg-white/5 rounded w-5/6" />
                                <div className="h-4 bg-white/5 rounded w-4/6" />
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="h-4 bg-white/5 rounded" style={{ width: `${90 - i * 8}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
