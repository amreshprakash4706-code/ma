import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AgentDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Agent Dashboard</h1>
          <p className="text-zinc-600">Welcome back, Elena Rodriguez</p>
        </div>
        <Button asChild>
          <Link href="/properties/new">+ List New Property</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Active Listings", value: "18" },
          { label: "Pending Offers", value: "4" },
          { label: "This Month's Sales", value: "$12.4M" },
          { label: "Client Meetings", value: "9" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-zinc-500">{stat.label}</CardTitle></CardHeader>
            <CardContent><div className="text-4xl font-semibold tracking-tighter">{stat.value}</div></CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex justify-between items-center"><span>New offer on Oceanfront Villa</span> <span className="text-emerald-600">2h ago</span></div>
            <div className="flex justify-between items-center"><span>Visit scheduled with Alex Rivera</span> <span className="text-emerald-600">Yesterday</span></div>
            <div className="flex justify-between items-center"><span>Property #42 went under contract</span> <span className="text-emerald-600">2 days ago</span></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">Manage My Listings</Button>
            <Button variant="outline" className="w-full justify-start">View Client Messages</Button>
            <Button variant="outline" className="w-full justify-start">Generate AI Property Description</Button>
            <Button variant="outline" className="w-full justify-start">Schedule Open House</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
