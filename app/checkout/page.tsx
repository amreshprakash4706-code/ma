'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    
    // In production: Create Stripe Checkout Session
    // const res = await fetch('/api/stripe/checkout', { method: 'POST' })
    // const { url } = await res.json()
    // window.location.href = url

    setTimeout(() => {
      alert('Stripe Checkout would open here in production!\n\nThank you for upgrading to Featured Listing.')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <Card>
        <CardHeader>
          <CardTitle>Upgrade to Featured Listing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-semibold tracking-tighter mb-2">$99<span className="text-base font-normal text-zinc-500">/month</span></div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Get 10x more visibility and priority in search results.</p>

          <ul className="space-y-2 text-sm mb-8">
            <li>✓ Featured placement on homepage</li>
            <li>✓ Priority in AI recommendations</li>
            <li>✓ Premium badge on your listing</li>
            <li>✓ Advanced analytics dashboard</li>
          </ul>

          <Button onClick={handleCheckout} disabled={loading} className="w-full h-12">
            {loading ? 'Processing...' : 'Subscribe with Stripe'}
          </Button>
          <p className="text-[10px] text-center text-zinc-400 mt-4">Secure payment powered by Stripe. Cancel anytime.</p>
        </CardContent>
      </Card>
    </div>
  )
}
