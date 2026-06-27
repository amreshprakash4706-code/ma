import Link from 'next/link'
import { Building2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600">
                <Building2 className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-semibold text-xl tracking-tighter">lumina</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 max-w-[220px]">
              The intelligent real estate platform powered by AI.
            </p>
          </div>

          <div>
            <div className="font-semibold text-sm mb-4 tracking-tight">Platform</div>
            <div className="flex flex-col gap-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="/properties" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Browse Homes</Link>
              <Link href="/valuations" className="hover:text-zinc-900 dark:hover:text-white transition-colors">AI Valuations</Link>
              <Link href="/mortgage-calculator" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Mortgage Calculator</Link>
              <Link href="/compare" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Compare Properties</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm mb-4 tracking-tight">For Professionals</div>
            <div className="flex flex-col gap-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="/agent" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Agent Portal</Link>
              <Link href="/admin" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Admin Dashboard</Link>
              <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Market Insights</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm mb-4 tracking-tight">Company</div>
            <div className="flex flex-col gap-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About Us</Link>
              <Link href="/careers" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
              <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm mb-4 tracking-tight">Legal</div>
            <div className="flex flex-col gap-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Security</Link>
            </div>
            <div className="mt-8 text-xs text-zinc-400">© {new Date().getFullYear()} Lumina, Inc.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
