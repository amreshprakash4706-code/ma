'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin } from 'lucide-react'

const demoVisits = [
  {
    id: 'v1',
    property: 'Modern Oceanfront Villa',
    address: '456 Pacific Coast Hwy, Malibu',
    date: '2026-07-05',
    time: '2:00 PM',
    status: 'CONFIRMED',
    agent: 'Elena Rodriguez',
  },
  {
    id: 'v2',
    property: 'Downtown Penthouse',
    address: '1200 S Figueroa St, Los Angeles',
    date: '2026-07-08',
    time: '11:00 AM',
    status: 'PENDING',
    agent: 'Marcus Chen',
  },
]

export default function VisitsPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Scheduled Visits</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Manage your property tours</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>Schedule New Visit</Button>
      </div>

      {showForm && (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Request a New Visit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="input" placeholder="Property Address or ID" />
              <input className="input" type="date" />
              <input className="input" type="time" />
              <input className="input" placeholder="Preferred Agent (optional)" />
            </div>
            <Button className="mt-6 w-full" onClick={() => { alert('Visit request submitted!'); setShowForm(false) }}>
              Submit Visit Request
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {demoVisits.map((visit) => (
          <Card key={visit.id}>
            <CardContent className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6">
              <div>
                <div className="font-semibold text-xl">{visit.property}</div>
                <div className="flex items-center text-sm text-zinc-500 mt-1">
                  <MapPin className="h-4 w-4 mr-1.5" /> {visit.address}
                </div>
              </div>

              <div className="flex items-center gap-8 text-sm">
                <div>
                  <div className="flex items-center gap-2 text-zinc-500"><Calendar className="h-4 w-4" /> Date</div>
                  <div className="font-medium">{new Date(visit.date).toLocaleDateString()}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-zinc-500"><Clock className="h-4 w-4" /> Time</div>
                  <div className="font-medium">{visit.time}</div>
                </div>
                <div>
                  <div className="text-emerald-600 font-medium px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-xs w-fit">
                    {visit.status}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm">Reschedule</Button>
                <Button variant="destructive" size="sm">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
