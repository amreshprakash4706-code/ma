'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Bed, Bath, Square, MapPin, Calendar, Heart, MessageCircle } from 'lucide-react'
import { ReviewForm } from '@/components/review-form'

const propertyData: any = {
  '1': {
    id: '1',
    title: 'Modern Oceanfront Villa',
    address: '456 Pacific Coast Hwy, Malibu, CA 90265',
    price: 8750000,
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 4800,
    type: 'HOUSE',
    description: "Stunning contemporary villa directly on the Pacific Ocean with breathtaking views. This architectural masterpiece offers an open-concept living space, gourmet kitchen, and expansive terraces. The primary suite includes a spa-like bathroom and private ocean-view deck.",
    features: ['Oceanfront', 'Infinity Pool', 'Smart Home', 'Wine Cellar', 'Home Theater', '4-Car Garage'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56b08?w=800',
    ],
    agent: {
      name: "Elena Rodriguez",
      phone: "(310) 555-0142",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64"
    },
    aiMatch: 94,
  }
}

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params.id as string
  const property = propertyData[id] || propertyData['1']

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/properties" className="text-sm text-blue-600 hover:underline">← Back to listings</Link>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <div className="relative rounded-3xl overflow-hidden aspect-video mb-4">
            <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6">
              <div className="ai-badge">AI MATCH {property.aiMatch}%</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {property.images.slice(1).map((img: string, i: number) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-video">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight">{property.title}</h1>
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mt-2">
                  <MapPin className="h-4 w-4" /> {property.address}
                </div>
              </div>
              <button className="p-3 rounded-full border hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 text-6xl font-semibold tracking-tighter">
              ${(property.price / 1000000).toFixed(2)}M
            </div>

            <div className="flex items-center gap-8 mt-6 text-lg">
              <div className="flex items-center gap-2"><Bed className="h-5 w-5" /> {property.bedrooms} beds</div>
              <div className="flex items-center gap-2"><Bath className="h-5 w-5" /> {property.bathrooms} baths</div>
              <div className="flex items-center gap-2"><Square className="h-5 w-5" /> {property.sqft.toLocaleString()} sqft</div>
            </div>

            <div className="mt-8 space-y-4">
              <Button className="w-full h-12 text-base" onClick={() => alert('Visit request submitted! Our agent will contact you shortly.')}>
                <Calendar className="mr-2 h-4 w-4" /> Schedule a Private Tour
              </Button>
              <Button variant="outline" className="w-full h-12 text-base">
                <MessageCircle className="mr-2 h-4 w-4" /> Message Agent
              </Button>
            </div>

            <Card className="mt-8">
              <CardContent className="pt-6 flex items-center gap-4">
                <img src={property.agent.avatar} alt={property.agent.name} className="h-14 w-14 rounded-full" />
                <div className="flex-1">
                  <div className="font-medium">{property.agent.name}</div>
                  <div className="text-sm text-zinc-500">Listing Agent • 14 years experience</div>
                </div>
                <Button variant="outline" size="sm">Contact</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="font-semibold text-2xl mb-4">About this home</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{property.description}</p>

          <h3 className="font-semibold text-xl mt-10 mb-4">Key Features</h3>
          <div className="grid grid-cols-2 gap-3">
            {property.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">AI Insights</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between"><span>Market Trend</span> <span className="font-medium text-emerald-600">+8.7% YoY</span></div>
                <div className="flex justify-between"><span>Days on Market</span> <span className="font-medium">18 days</span></div>
                <div className="flex justify-between"><span>Price per sqft</span> <span className="font-medium">${Math.round(property.price / property.sqft)}</span></div>
                <div className="flex justify-between"><span>Walk Score</span> <span className="font-medium">72 / 100</span></div>
              </div>
              <Button variant="outline" className="w-full mt-6">View Full AI Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 max-w-3xl">
        <h2 className="font-semibold text-2xl mb-6">Reviews & Ratings</h2>
        
        <div className="flex items-baseline gap-4 mb-2">
          <div className="text-5xl font-semibold tracking-tighter">4.8</div>
          <div className="text-zinc-500">out of 5 • 52 reviews</div>
        </div>

        <div className="space-y-6 mb-10">
          {[
            { name: "Sarah M.", rating: 5, comment: "Absolutely stunning property. The ocean views are even better in person.", date: "2 weeks ago" },
            { name: "David K.", rating: 5, comment: "Excellent location and the smart home features are top notch.", date: "1 month ago" },
          ].map((review, i) => (
            <div key={i} className="border-l-4 border-zinc-200 pl-6 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{review.name}</span>
                <span className="text-xs text-zinc-500">• {review.date}</span>
              </div>
              <div className="flex mb-2">
                {Array.from({ length: review.rating }).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="card p-8">
          <h3 className="font-semibold mb-4">Write a Review</h3>
          <ReviewForm propertyId={property.id} />
        </div>
      </div>
    </div>
  )
}
