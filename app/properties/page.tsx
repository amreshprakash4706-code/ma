'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react'
import { motion } from 'framer-motion'

const demoProperties = [
  {
    id: '1',
    title: 'Modern Oceanfront Villa',
    address: '456 Pacific Coast Hwy, Malibu, CA',
    price: 8750000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4200,
    type: 'HOUSE',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    match: 96,
    lat: 34.0259,
    lng: -118.7798,
  },
  {
    id: '2',
    title: 'Downtown Penthouse with Views',
    address: '1200 S Figueroa St, Los Angeles, CA',
    price: 2650000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    type: 'CONDO',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    match: 91,
    lat: 34.0407,
    lng: -118.269,
  },
  {
    id: '3',
    title: 'Charming Craftsman Home',
    address: '892 Oak Street, Pasadena, CA',
    price: 1680000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2650,
    type: 'HOUSE',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    match: 87,
    lat: 34.1478,
    lng: -118.1445,
  },
]

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [bedrooms, setBedrooms] = useState(0)
  const [propertyType, setPropertyType] = useState('ALL')

  const filteredProperties = demoProperties.filter((property) => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
    const matchesBeds = bedrooms === 0 || property.bedrooms >= bedrooms
    const matchesType = propertyType === 'ALL' || property.type === propertyType

    return matchesSearch && matchesPrice && matchesBeds && matchesType
  })

  const toggleFavorite = (id: string) => {
    // In production: call API to add/remove from wishlist
    alert(`Property ${id} added to wishlist! (Demo)`)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight">Discover Homes</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mt-2">AI-curated listings tailored to you</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-zinc-500">
          {filteredProperties.length} properties found
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <Input 
              placeholder="Search by neighborhood or address..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12"
            />
          </div>
          
          <div>
            <select 
              className="input h-12 w-full" 
              value={bedrooms} 
              onChange={(e) => setBedrooms(Number(e.target.value))}
            >
              <option value={0}>Any bedrooms</option>
              <option value={2}>2+ bedrooms</option>
              <option value={3}>3+ bedrooms</option>
              <option value={4}>4+ bedrooms</option>
            </select>
          </div>

          <div>
            <select 
              className="input h-12 w-full" 
              value={propertyType} 
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="ALL">Any type</option>
              <option value="HOUSE">House</option>
              <option value="CONDO">Condo</option>
              <option value="APARTMENT">Apartment</option>
              <option value="TOWNHOUSE">Townhouse</option>
            </select>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full h-12"
              onClick={() => {
                setSearchTerm('')
                setBedrooms(0)
                setPropertyType('ALL')
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property, index) => (
          <motion.div 
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="property-card overflow-hidden group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="property-image w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => toggleFavorite(property.id)}
                    className="h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart className="h-5 w-5 text-zinc-700" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="ai-badge">AI MATCH {property.match}%</div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-xl tracking-tight line-clamp-1">{property.title}</h3>
                    <div className="flex items-center text-sm text-zinc-500 mt-1">
                      <MapPin className="h-3.5 w-3.5 mr-1" /> {property.address}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-2xl tracking-tighter">
                      ${(property.price / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400 border-t pt-4 mt-4">
                  <div className="flex items-center gap-1.5">
                    <Bed className="h-4 w-4" /> {property.bedrooms} beds
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" /> {property.bathrooms} baths
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Square className="h-4 w-4" /> {property.sqft.toLocaleString()} sqft
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link href={`/properties/${property.id}`} className="flex-1">
                    <Button className="w-full">View Details</Button>
                  </Link>
                  <Button variant="outline" onClick={() => alert('Visit request sent! (Demo)')}>
                    Schedule Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-20 text-zinc-500">No properties match your filters.</div>
      )}
    </div>
  )
}
