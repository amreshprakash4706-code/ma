import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold tracking-tight mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Users", value: "89,421" },
          { label: "Active Properties", value: "14,872" },
          { label: "Monthly Revenue", value: "$284k" },
          { label: "AI Valuations Run", value: "12,394" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-zinc-500">{stat.label}</CardTitle></CardHeader>
            <CardContent><div className="text-4xl font-semibold tracking-tighter">{stat.value}</div></CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Platform Health</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between"><span>API Uptime</span> <span className="font-medium text-emerald-600">99.98%</span></div>
              <div className="flex justify-between"><span>AI Response Time</span> <span className="font-medium">1.2s avg</span></div>
              <div className="flex justify-between"><span>Active Sessions</span> <span className="font-medium">4,821</span></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Quick Admin Actions</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="p-3 border rounded-2xl">Verify new agent accounts</div>
            <div className="p-3 border rounded-2xl">Review flagged listings</div>
            <div className="p-3 border rounded-2xl">Export monthly analytics report</div>
            <div className="p-3 border rounded-2xl">Manage featured properties</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
