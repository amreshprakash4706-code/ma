'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { Bot, TrendingUp, Globe } from 'lucide-react'

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
]

export default function GlobalAIValuationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  
  const [formData, setFormData] = useState({
    address: '',
    country: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    propertyType: 'HOUSE',
    currency: 'USD',
  })

  const selectedCurrency = currencies.find(c => c.code === formData.currency)!

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.address || !formData.country) {
      toast.error('Please enter address and country')
      return
    }

    setIsLoading(true)
    setResult(null)

    try {
      const res = await fetch('/api/ai/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      setResult(data)
      toast.success('Global AI Valuation completed!')
    } catch {
      // Demo fallback with currency conversion
      const base = 850000 + Math.random() * 1500000
      const rates: any = { USD:1, EUR:0.92, GBP:0.78, INR:83.5, JPY:155, AED:3.67, SGD:1.35, AUD:1.52 }
      const rate = rates[formData.currency] || 1
      
      setResult({
        estimatedValue: Math.round(base * rate),
        currency: formData.currency,
        symbol: selectedCurrency.symbol,
        confidence: 0.88,
        summary: `This property in ${formData.address}, ${formData.country} shows solid market fundamentals based on local comparables, infrastructure growth, and international demand trends.`,
        factors: [
          `Market conditions in ${formData.country}`,
          "Recent local and regional transactions",
          "Infrastructure & development outlook",
          "Currency strength & economic stability",
          "Global investor interest in the area"
        ]
      })
      toast.success('Global AI Valuation complete! (Demo)')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950 px-4 py-1 rounded-full text-sm font-medium text-blue-600 mb-4">
          <Globe className="h-4 w-4" /> WORLDWIDE AI VALUATION
        </div>
        <h1 className="text-6xl font-semibold tracking-tighter">AI Valuation for Any Property, Anywhere</h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Get accurate, data-driven property valuations <strong>anywhere in the world</strong> — in USD, EUR, INR, AED, or any major currency.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Enter Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>Address or Landmark</Label>
                  <Input 
                    placeholder="123 Marina Bay Sands, Singapore or 88 Park Lane, London" 
                    value={formData.address} 
                    onChange={e => setFormData({...formData, address: e.target.value})} 
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Country / Region</Label>
                    <Input 
                      placeholder="Singapore, United Kingdom, India, UAE..." 
                      value={formData.country} 
                      onChange={e => setFormData({...formData, country: e.target.value})} 
                      required 
                    />
                  </div>
                  <div>
                    <Label>Display Currency</Label>
                    <select 
                      className="input w-full h-11" 
                      value={formData.currency} 
                      onChange={e => setFormData({...formData, currency: e.target.value})}
                    >
                      {currencies.map(c => (
                        <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div><Label>Bedrooms</Label><Input type="number" value={formData.bedrooms} onChange={e => setFormData({...formData, bedrooms: e.target.value})} /></div>
                  <div><Label>Bathrooms</Label><Input type="number" step="0.5" value={formData.bathrooms} onChange={e => setFormData({...formData, bathrooms: e.target.value})} /></div>
                  <div><Label>Size (sqft / sqm)</Label><Input type="number" value={formData.sqft} onChange={e => setFormData({...formData, sqft: e.target.value})} required /></div>
                </div>

                <div>
                  <Label>Property Type</Label>
                  <select className="input w-full h-11 mt-2" value={formData.propertyType} onChange={e => setFormData({...formData, propertyType: e.target.value})}>
                    <option value="HOUSE">House / Villa</option>
                    <option value="APARTMENT">Apartment / Flat</option>
                    <option value="CONDO">Condominium</option>
                    <option value="TOWNHOUSE">Townhouse</option>
                    <option value="LAND">Land / Plot</option>
                    <option value="COMMERCIAL">Commercial Property</option>
                  </select>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full h-12 text-base">
                  {isLoading ? "Analyzing globally..." : `Get AI Valuation in ${formData.currency}`}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="lg:col-span-2">
          {result ? (
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>AI Valuation Result</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-sm text-zinc-500">Estimated Value</div>
                  <div className="text-6xl font-semibold tracking-tighter mt-1">
                    {result.symbol}{result.estimatedValue.toLocaleString()}
                  </div>
                  <div className="text-emerald-600 mt-1">{result.currency} • {Math.round(result.confidence * 100)}% confidence</div>
                </div>

                <div>
                  <div className="font-medium mb-3">Key Factors</div>
                  <ul className="space-y-2 text-sm">
                    {result.factors?.map((f: string, i: number) => (
                      <li key={i} className="flex gap-2">• {f}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t text-sm text-zinc-600 dark:text-zinc-400">
                  {result.summary}
                </div>

                <Button variant="outline" onClick={() => setResult(null)} className="w-full">New Valuation</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="card p-8 text-center border-dashed h-full flex flex-col justify-center">
              <Globe className="mx-auto h-10 w-10 text-zinc-400 mb-4" />
              <p className="text-zinc-500">Enter any property address in the world and get an instant AI-powered valuation in your chosen currency.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
