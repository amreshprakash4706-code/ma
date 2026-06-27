import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-[120px] font-semibold tracking-tighter text-zinc-200 dark:text-zinc-800">404</div>
      <h1 className="text-4xl font-semibold tracking-tight -mt-8">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
      </p>
      <Link href="/" className="mt-8">
        <Button size="lg" className="gap-2">
          <Home className="h-4 w-4" /> Return to Homepage
        </Button>
      </Link>
    </div>
  )
}
