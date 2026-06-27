'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MortgageCalculatorPage() {
  const [form, setForm] = useState({
    price: 1250000,
    downPayment: 250000,
    interestRate: 6.75,
    loanTerm: 30,
  })

  const [result, setResult] = useState<any>(null)

  const calculateMortgage = () => {
    const principal = form.price - form.downPayment
    const monthlyRate = form.interestRate / 100 / 12
    const numberOfPayments = form.loanTerm * 12

    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - principal

    setResult({
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principal: Math.round(principal),
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold tracking-tight">Mortgage Calculator</h1>
        <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400">Plan your home purchase with confidence</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Home Price</Label>
                <Input 
                  type="number" 
                  value={form.price} 
                  onChange={(e) => setForm({...form, price: Number(e.target.value)})} 
                  className="mt-2 text-lg h-12"
                />
              </div>

              <div>
                <Label>Down Payment</Label>
                <Input 
                  type="number" 
                  value={form.downPayment} 
                  onChange={(e) => setForm({...form, downPayment: Number(e.target.value)})} 
                  className="mt-2 text-lg h-12"
                />
                <div className="text-xs text-zinc-500 mt-1">
                  {((form.downPayment / form.price) * 100).toFixed(1)}% down
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Interest Rate (%)</Label>
                  <Input 
                    type="number" 
                    step="0.01" 
                    value={form.interestRate} 
                    onChange={(e) => setForm({...form, interestRate: Number(e.target.value)})} 
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label>Loan Term (Years)</Label>
                  <select 
                    className="input mt-2 h-12 w-full" 
                    value={form.loanTerm} 
                    onChange={(e) => setForm({...form, loanTerm: Number(e.target.value)})}
                  >
                    <option value={15}>15 years</option>
                    <option value={20}>20 years</option>
                    <option value={30}>30 years</option>
                  </select>
                </div>
              </div>

              <Button onClick={calculateMortgage} className="w-full h-12 text-base mt-4">
                Calculate Monthly Payment
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          {result ? (
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Your Monthly Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-6xl font-semibold tracking-tighter text-blue-600">
                    ${result.monthlyPayment.toLocaleString()}
                  </div>
                  <div className="text-zinc-500 mt-1">per month</div>
                </div>

                <div className="space-y-4 text-sm border-t pt-6">
                  <div className="flex justify-between"><span>Loan Amount</span> <span className="font-medium">${result.principal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Total Interest</span> <span className="font-medium">${result.totalInterest.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Total Cost</span> <span className="font-medium">${result.totalPayment.toLocaleString()}</span></div>
                </div>

                <Button variant="outline" className="w-full mt-8" onClick={() => setResult(null)}>
                  Calculate Again
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="card p-8 h-full flex items-center justify-center text-center border-dashed">
              <div>
                <div className="text-6xl mb-4">🏠</div>
                <p className="text-zinc-500">Enter your details and calculate your estimated monthly mortgage payment.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
