import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPosts } from '@/lib/mdx'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }
    return {
        title: `${post.metadata.title} | Yash Ghodele`,
        description: post.metadata.summary,
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getBlogPosts().find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 bg-[#050505] text-white">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Link>

                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                        {post.metadata.title}
                    </h1>
                    <time className="text-gray-500 font-mono text-sm">
                        {post.metadata.publishedAt}
                    </time>
                </header>

                <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded">
                    <MDXRemote source={post.content} />
                </article>
            </div>
        </div>
    )
}
