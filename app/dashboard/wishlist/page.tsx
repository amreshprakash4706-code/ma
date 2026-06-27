'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Trash2 } from 'lucide-react'

const demoWishlist = [
  {
    id: '1',
    title: 'Modern Oceanfront Villa',
    address: '456 Pacific Coast Hwy, Malibu, CA',
    price: 4250000,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    bedrooms: 5,
    bathrooms: 4.5,
  },
  {
    id: '3',
    title: 'Charming Craftsman Home',
    address: '892 Oak Street, Pasadena, CA',
    price: 1250000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    bedrooms: 4,
    bathrooms: 3,
  },
]

export default function WishlistPage() {
  const removeFromWishlist = (id: string) => {
    alert(`Removed property ${id} from wishlist (Demo - would call API in production)`)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Your Wishlist</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">Properties you've saved for later</p>
        </div>
        <div className="text-sm text-zinc-500">{demoWishlist.length} saved properties</div>
      </div>

      {demoWishlist.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoWishlist.map((property) => (
            <Card key={property.id} className="overflow-hidden group">
              <div className="relative aspect-video">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => removeFromWishlist(property.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg tracking-tight">{property.title}</h3>
                <p className="text-sm text-zinc-500 mt-1">{property.address}</p>
                
                <div className="mt-4 flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-semibold tracking-tighter">
                      ${(property.price / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-xs text-zinc-500">{property.bedrooms} beds • {property.bathrooms} baths</div>
                  </div>
                  <Link href={`/properties/${property.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Heart className="mx-auto h-12 w-12 text-zinc-300 mb-4" />
          <p className="text-xl text-zinc-500">Your wishlist is empty</p>
          <Link href="/properties">
            <Button className="mt-6">Browse Properties</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
