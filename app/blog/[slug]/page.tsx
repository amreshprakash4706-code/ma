import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-blue-600 hover:underline">← Back to Insights</Link>

      <article className="prose prose-zinc dark:prose-invert mt-8 max-w-none">
        <h1 className="text-5xl font-semibold tracking-tight">2026 Real Estate Market Outlook</h1>
        <div className="flex items-center gap-4 text-sm text-zinc-500 mt-4 mb-10">
          <span>June 20, 2026</span>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span>By Lumina Research Team</span>
        </div>

        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          After two years of elevated interest rates, the real estate market is showing clear signs of stabilization heading into the second half of 2026.
        </p>

        <h2>Key Trends We're Watching</h2>
        <ul>
          <li>Inventory levels have increased 14% year-over-year in major metros</li>
          <li>Buyer demand remains resilient in the $800K–$1.5M segment</li>
          <li>AI-powered valuations are becoming standard in the transaction process</li>
          <li>Suburban markets continue to outperform urban cores in many regions</li>
        </ul>

        <p>
          Our AI models predict moderate price appreciation of 4–7% nationally through the end of the year, with stronger growth in Sun Belt and Mountain West markets.
        </p>

        <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-3xl my-10">
          <strong>Bottom line:</strong> This is one of the better windows in recent years for well-qualified buyers. The combination of stabilizing rates and increasing inventory creates real negotiating power.
        </div>
      </article>
    </div>
  )
}
