import { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
    types: {
        // ─── Highlight Quote ─── Cinematic pull-quote with animated gradient border
        highlight: ({ value }: { value: { text: string } }) => (
            <div className="relative my-16 group">
                {/* Animated glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-500/20 via-indigo-500/20 to-purple-500/20 blur-sm group-hover:blur-md transition-all duration-700" />
                <div className="relative p-10 md:p-12 rounded-2xl bg-[#0a0a0f]/90 border border-violet-500/15 backdrop-blur-xl">
                    <div className="absolute top-6 left-8 text-6xl font-serif text-violet-500/20 leading-none select-none">&ldquo;</div>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-violet-100/90 text-center italic leading-relaxed px-4">
                        {value.text}
                    </p>
                    <div className="absolute bottom-6 right-8 text-6xl font-serif text-violet-500/20 leading-none select-none">&rdquo;</div>
                </div>
            </div>
        ),

        // ─── Grid Cards ─── Premium cards with number indicator and hover glow
        gridConfig: ({ value }: { value: { cols: number; items: Array<{ title: string; description: string }> } }) => (
            <div
                className="grid gap-4 my-12 not-prose"
                style={{ gridTemplateColumns: `repeat(${Math.min(value.cols || 3, 3)}, minmax(0, 1fr))` }}
            >
                {value.items?.map((item, i) => (
                    <div
                        key={i}
                        className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/25 transition-all duration-500 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-violet-500/5"
                    >
                        {/* Number indicator */}
                        <span className="absolute top-4 right-4 text-xs font-mono text-violet-500/30 tracking-wider">
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        {/* Accent line */}
                        <div className="w-8 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent rounded-full mb-4 group-hover:w-12 transition-all duration-500" />
                        <h4 className="text-base font-semibold text-white mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-sm text-stone-400/90 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        ),
    },

    // ─── Block-level overrides ───
    block: {
        blockquote: ({ children }) => (
            <blockquote className="relative my-16 pl-8 md:pl-10 py-6 border-l-2 border-violet-500/40 not-prose">
                {/* Decorative dot */}
                <div className="absolute -left-[5px] top-8 w-2 h-2 rounded-full bg-violet-500/60" />
                <p className="text-xl md:text-2xl font-serif text-stone-200/90 italic leading-relaxed">
                    {children}
                </p>
            </blockquote>
        ),
    },
}

// Preprocess Portable Text blocks to strip leftover MDX tags from text spans
function cleanMdxTags(text: string): string {
    return text
        .replace(/<[A-Z][a-zA-Z]*\s*\/>/g, '')
        .replace(/<[A-Z][a-zA-Z]*[^>]*>/g, '')
        .replace(/<\/[A-Z][a-zA-Z]*>/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim()
}

export function preprocessPortableText(blocks: any[]): any[] {
    if (!blocks || !Array.isArray(blocks)) return blocks

    return blocks.map(block => {
        if (block._type === 'block' && block.children) {
            return {
                ...block,
                children: block.children.map((child: any) => {
                    if (child._type === 'span' && typeof child.text === 'string') {
                        return { ...child, text: cleanMdxTags(child.text) }
                    }
                    return child
                })
            }
        }
        return block
    })
}
