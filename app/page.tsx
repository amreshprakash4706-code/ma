'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Check, Star, Users, TrendingUp, Shield, 
  Bot, Home, Calendar, MessageCircle, Award 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Bot,
    title: "AI Property Valuation",
    description: "Get instant, accurate property valuations powered by advanced machine learning models trained on millions of transactions.",
  },
  {
    icon: TrendingUp,
    title: "Smart Recommendations",
    description: "Our AI learns your preferences and surfaces the perfect properties before you even search for them.",
  },
  {
    icon: MessageCircle,
    title: "Intelligent Chat Assistant",
    description: "Ask anything about neighborhoods, schools, market trends, or get help finding your ideal home 24/7.",
  },
  {
    icon: Calendar,
    title: "Seamless Visit Scheduling",
    description: "Book property tours instantly with agents. AI suggests optimal times based on your calendar and traffic.",
  },
  {
    icon: Shield,
    title: "Verified Listings & Agents",
    description: "Every property and agent is verified. Read authentic reviews from real buyers and sellers.",
  },
  {
    icon: Users,
    title: "Collaborative Tools",
    description: "Share properties with family, compare side-by-side, and make decisions together with shared wishlists.",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "First-time Homebuyer",
    content: "Lumina's AI valuation was spot on. I negotiated $42k below asking because I knew the true market value. Closed in 19 days.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Marcus Rodriguez",
    role: "Real Estate Investor",
    content: "The investment analysis feature has completely changed how I evaluate deals. I've used it on 14 properties this year alone.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Priya Patel",
    role: "Selling my childhood home",
    content: "The AI-generated description captured the soul of our home better than I could. We had 3 offers in the first week.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
]

const stats = [
  { number: "142k+", label: "Properties Listed" },
  { number: "89k", label: "Homes Sold" },
  { number: "4.98", label: "Average Rating" },
  { number: "37%", label: "Faster Closings" },
]

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 mb-6">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Now with GPT-4o powered AI analysis
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-balance leading-[0.95]">
            The smartest way<br />to buy and sell homes.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600 dark:text-zinc-400 text-balance">
            Lumina combines cutting-edge AI with human expertise to help you find, value, and close on your perfect property faster and smarter.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto group">
                Start free trial <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch 1:42 demo
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-xs text-zinc-500 flex items-center justify-center gap-2">
            <Check className="h-3.5 w-3.5" /> No credit card required &nbsp;•&nbsp; 14-day free trial &nbsp;•&nbsp; Cancel anytime
          </div>
        </div>

        {/* Hero Visual - Property Grid Mock */}
        <div className="mt-16 md:mt-20 mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1,2,3].map((i) => (
              <div key={i} className="property-card group relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_0.5px,transparent_1px)] dark:bg-[radial-gradient(#27272a_0.5px,transparent_1px)] [background-size:4px_4px]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white font-semibold text-lg">Modern {i === 1 ? 'Villa' : i === 2 ? 'Penthouse' : 'Townhome'} in {i === 1 ? 'Malibu' : i === 2 ? 'Downtown' : 'Pasadena'}</div>
                      <div className="text-white/70 text-sm mt-0.5">${(2.1 + i * 0.8).toFixed(1)}M • {3 + i} beds</div>
                    </div>
                    <div className="ai-badge">AI MATCH 94%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 py-5">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-zinc-500 dark:text-zinc-400">
          <div>Featured in</div>
          <div className="font-semibold text-zinc-700 dark:text-zinc-300">Forbes</div>
          <div className="font-semibold text-zinc-700 dark:text-zinc-300">TechCrunch</div>
          <div className="font-semibold text-zinc-700 dark:text-zinc-300">The Wall Street Journal</div>
          <div className="font-semibold text-zinc-700 dark:text-zinc-300">Fast Company</div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-semibold tracking-tighter tabular-nums">{stat.number}</div>
              <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-950 px-4 py-1 text-xs font-semibold tracking-[1.5px] text-blue-600 dark:text-blue-400 mb-4">POWERED BY AI</div>
            <h2 className="text-5xl font-semibold tracking-tighter">Everything you need.<br />Nothing you don&apos;t.</h2>
            <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">A complete real estate operating system designed for the modern buyer, seller, and agent.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card group p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-2xl tracking-tight mb-3">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Teaser */}
      <section id="demo" className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="ai-badge mx-auto mb-6 w-fit">NEW</div>
          <h2 className="text-5xl font-semibold tracking-tighter">Ask our AI anything about real estate.</h2>
          <p className="mt-4 text-xl text-zinc-400">“What’s the best neighborhood in Austin for families under $850k with good schools and walkability?”</p>
          
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-zinc-900 rounded-3xl p-8 text-left border border-white/10">
              <div className="flex gap-4">
                <div className="h-9 w-9 rounded-full bg-white/10 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-mono text-xs text-emerald-400 mb-1.5">LUMINA AI • 2s ago</div>
                  <p className="text-white/90">Based on current market data, I recommend the following 3 neighborhoods that match your criteria perfectly...</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['South Congress', 'Tarrytown', 'Zilker'].map(area => (
                      <div key={area} className="text-xs bg-white/10 px-3 py-1 rounded-full">{area}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/chat">
            <Button size="lg" variant="secondary" className="mt-8 bg-white text-zinc-950 hover:bg-zinc-100">
              Try the AI Assistant now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tighter">Find your home in 3 simple steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[ 
              { step: "01", title: "Tell us what you want", desc: "Answer a few questions or let our AI analyze your browsing behavior to understand your perfect home profile." },
              { step: "02", title: "Discover & Analyze", desc: "Browse AI-curated listings, get instant valuations, investment projections, and neighborhood insights." },
              { step: "03", title: "Connect & Close", desc: "Schedule tours instantly, chat with verified agents, compare properties, and close with confidence." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-[80px] font-semibold tracking-[-6px] text-zinc-100 dark:text-zinc-800 absolute -top-8 -left-2 select-none">{item.step}</div>
                <div className="relative pt-12">
                  <div className="font-semibold text-3xl tracking-tight mb-4">{item.title}</div>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-20 border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="uppercase tracking-[2px] text-xs font-semibold text-blue-600 dark:text-blue-400">REAL STORIES</div>
              <h3 className="text-4xl font-semibold tracking-tight mt-2">Loved by thousands of home buyers &amp; sellers</h3>
            </div>
            <Link href="/register" className="hidden md:block text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">Join them today <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                  “{testimonial.content}”
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="h-11 w-11 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-800" />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-6xl font-semibold tracking-tighter">Ready to find your next chapter?</h2>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Join 89,000+ happy homeowners who used Lumina to buy or sell smarter.</p>
          
          <div className="mt-10">
            <Link href="/register">
              <Button size="lg" className="px-14 text-base h-14">Create your free account</Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-zinc-500">Free forever for buyers • Agents start at $29/mo</p>
        </div>
      </section>
    </div>
  )
}
