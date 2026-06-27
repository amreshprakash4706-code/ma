import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home, Heart, Calendar, TrendingUp, Bot, ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Good morning, Alex 👋</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">Here’s what’s happening with your real estate journey today.</p>
        </div>
        <Link href="/properties">
          <Button>Browse Properties <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Saved Properties", value: "24", icon: Heart, change: "+3 this week" },
          { label: "Scheduled Visits", value: "4", icon: Calendar, change: "2 this week" },
          { label: "AI Valuations", value: "12", icon: TrendingUp, change: "This month" },
          { label: "Messages", value: "7", icon: Bot, change: "3 unread" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-500">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-zinc-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-semibold tracking-tighter">{stat.value}</div>
              <p className="text-xs text-emerald-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Bot className="h-5 w-5" /> AI Property Valuation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">Get an instant, accurate valuation of any property using our advanced AI model.</p>
            <Link href="/valuations">
              <Button className="w-full">Start AI Valuation</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Home className="h-5 w-5" /> Recommended for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Modern Villa in Beverly Hills", price: "$4.2M", match: "96%" },
                { title: "Downtown Loft with City Views", price: "$1.85M", match: "91%" },
              ].map((rec, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <div>
                    <div className="font-medium">{rec.title}</div>
                    <div className="text-sm text-zinc-500">{rec.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="ai-badge mb-1">AI MATCH {rec.match}</div>
                    <Link href="/properties" className="text-xs text-blue-600 hover:underline">View →</Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center text-xs text-zinc-400">
        Welcome to Lumina. Your AI-powered real estate journey starts here.
      </div>
    </div>
  )
}
