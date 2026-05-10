import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Footer from "@/components/footer"
export const runtime = 'edge'
import { JOURNAL_POSTS } from "@/lib/journal"
import PostClient from "./PostClient"



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = JOURNAL_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — Yash Ghodele`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://yash-ghodele.pages.dev/journal/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yash-ghodele.pages.dev/journal/${post.slug}`,
      siteName: "Yash Ghodele Portfolio",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = JOURNAL_POSTS.find((p) => p.slug === slug)
  if (!post) {
    notFound()
    return null
  }
  return (
    <div className="min-h-screen bg-background">
      <main>
        <PostClient post={post} />
      </main>
      <Footer />
    </div>
  )
}
