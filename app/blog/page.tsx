import Link from 'next/link'
import { getBlogPosts } from '@/lib/mdx'
import { Badge } from '@/components/ui/badge'

export const metadata = {
    title: 'Blog | Yash Ghodele',
    description: 'Articles about IoT, Web Development, and Tech.',
}

export default function BlogPage() {
    const posts = getBlogPosts().sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
    })

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 bg-[#050505] text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 tracking-tight">Blog</h1>
                <p className="text-gray-400 mb-12 text-lg">
                    Insights on IoT protocols, full-stack architecture, and building digital products.
                </p>

                <div className="grid gap-6">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <article className="p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-primary/50 transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {post.metadata.title}
                                    </h2>
                                    <Badge variant="outline" className="text-xs text-gray-500 border-gray-800">
                                        {post.metadata.publishedAt}
                                    </Badge>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {post.metadata.summary}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
