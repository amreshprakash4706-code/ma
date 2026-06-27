'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function InvestmentAnalysisPage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const runAnalysis = () => {
    setLoading(true)
    setTimeout(() => {
      setResult({
        projectedAppreciation: '7.8%',
        cashFlow: '$1,240/mo',
        capRate: '5.4%',
        recommendation: 'Strong Buy',
        summary: 'This property offers excellent long-term appreciation potential combined with positive cash flow. The neighborhood is experiencing rapid gentrification with strong job growth nearby.',
      })
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-semibold tracking-tight text-center">AI Investment Analysis</h1>
      <p className="text-center text-xl text-zinc-600 dark:text-zinc-400 mt-3 mb-10">Get data-driven investment insights for any property</p>

      <Card>
        <CardContent className="pt-8">
          <Button onClick={runAnalysis} disabled={loading} className="w-full h-12 text-base">
            {loading ? 'Analyzing with AI...' : 'Run AI Investment Analysis on Current Property'}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-emerald-600">AI Recommendation: {result.recommendation}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><div className="text-3xl font-semibold">{result.projectedAppreciation}</div><div className="text-xs text-zinc-500">Projected 5yr Appreciation</div></div>
              <div><div className="text-3xl font-semibold">{result.cashFlow}</div><div className="text-xs text-zinc-500">Est. Monthly Cash Flow</div></div>
              <div><div className="text-3xl font-semibold">{result.capRate}</div><div className="text-xs text-zinc-500">Cap Rate</div></div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">{result.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
