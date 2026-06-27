'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const demoProperties = [
  { id: '1', title: 'Oceanfront Villa', price: 4250000, beds: 5, baths: 4.5, sqft: 4200, score: 96 },
  { id: '2', title: 'Downtown Penthouse', price: 1890000, beds: 3, baths: 3, sqft: 2100, score: 91 },
  { id: '3', title: 'Craftsman Home', price: 1250000, beds: 4, baths: 3, sqft: 2650, score: 87 },
]

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>(['1', '2'])

  const comparedProperties = demoProperties.filter(p => selected.includes(p.id))

  const toggleProperty = (id: string) => {
    if (selected.includes(id)) {
      if (selected.length > 1) setSelected(selected.filter(s => s !== id))
    } else {
      if (selected.length < 3) setSelected([...selected, id])
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold tracking-tight mb-2">Compare Properties</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">Select up to 3 properties to compare side by side</p>

      <div className="flex gap-4 mb-8">
        {demoProperties.map(prop => (
          <button
            key={prop.id}
            onClick={() => toggleProperty(prop.id)}
            className={`px-4 py-2 rounded-2xl border text-sm transition-all ${selected.includes(prop.id) ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-950' : 'border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800'}`}
          >
            {prop.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparedProperties.map((property, index) => (
          <Card key={index} className="p-6">
            <div className="font-semibold text-xl mb-1">{property.title}</div>
            <div className="text-3xl font-semibold tracking-tighter mb-6">
              ${(property.price / 1000000).toFixed(1)}M
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-3 border-b"><span>AI Match Score</span> <span className="font-medium text-emerald-600">{property.score}%</span></div>
              <div className="flex justify-between py-3 border-b"><span>Bedrooms</span> <span className="font-medium">{property.beds}</span></div>
              <div className="flex justify-between py-3 border-b"><span>Bathrooms</span> <span className="font-medium">{property.baths}</span></div>
              <div className="flex justify-between py-3 border-b"><span>Square Feet</span> <span className="font-medium">{property.sqft.toLocaleString()}</span></div>
              <div className="flex justify-between py-3"><span>Price per sqft</span> <span className="font-medium">${Math.round(property.price / property.sqft)}</span></div>
            </div>

            <Link href={`/properties/${property.id}`} className="block mt-8">
              <Button className="w-full">View Full Details</Button>
            </Link>
          </Card>
        ))}
      </div>

      {comparedProperties.length === 0 && (
        <p className="text-center text-zinc-500 py-12">Select properties above to start comparing.</p>
      )}
    </div>
  )
}
