import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const demoPosts = [
  {
    slug: '2026-real-estate-market-outlook',
    title: '2026 Real Estate Market Outlook: What Buyers Need to Know',
    excerpt: 'Interest rates are stabilizing and inventory is slowly improving. Here\'s what the data tells us about the year ahead.',
    date: 'June 20, 2026',
    readTime: '8 min',
    category: 'Market Analysis',
  },
  {
    slug: 'how-ai-is-transforming-home-buying',
    title: 'How AI is Transforming the Way We Buy Homes',
    excerpt: 'From instant valuations to personalized recommendations, artificial intelligence is making the home buying process faster and smarter.',
    date: 'June 15, 2026',
    readTime: '6 min',
    category: 'Technology',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold tracking-tight">Lumina Insights</h1>
        <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400">Expert analysis, market trends, and home buying guides</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {demoPosts.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <CardContent className="p-8">
                <div className="text-xs uppercase tracking-widest text-blue-600 mb-3">{post.category}</div>
                <h2 className="text-2xl font-semibold tracking-tight mb-4 leading-tight">{post.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{post.excerpt}</p>
                <div className="text-sm text-zinc-500 flex items-center gap-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} read</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
