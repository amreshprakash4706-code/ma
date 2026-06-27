'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, Heart, Calendar, MessageCircle, TrendingUp, 
  User, Settings, LogOut, Building2, Bot 
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface UserPayload {
  userId: string
  email: string
  role: string
  name: string
}

export function DashboardSidebar({ user }: { user: UserPayload }) {
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', label: 'Overview', icon: Home },
    { href: '/dashboard/wishlist', label: 'Wishlist', icon: Heart },
    { href: '/dashboard/visits', label: 'Scheduled Visits', icon: Calendar },
    { href: '/dashboard/messages', label: 'Messages', icon: MessageCircle },
    { href: '/valuations', label: 'AI Valuation', icon: TrendingUp },
    { href: '/chat', label: 'AI Assistant', icon: Bot },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <div className="w-72 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col">
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="font-semibold tracking-tighter">lumina</div>
            <div className="text-[10px] text-zinc-500 -mt-1">DASHBOARD</div>
          </div>
        </Link>
      </div>

      <div className="flex-1 p-4">
        <div className="px-3 mb-2 text-xs font-semibold tracking-widest text-zinc-500">MENU</div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors",
                  isActive(item.href) 
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950" 
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {user.role === 'AGENT' || user.role === 'ADMIN' && (
          <div className="mt-8">
            <div className="px-3 mb-2 text-xs font-semibold tracking-widest text-zinc-500">AGENT TOOLS</div>
            <Link href="/agent" className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900">
              <Building2 className="h-4 w-4" /> Agent Portal
            </Link>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm truncate">{user.name}</div>
            <div className="text-xs text-zinc-500 truncate">{user.email}</div>
          </div>
        </div>

        <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900 rounded-2xl">
          <Settings className="h-4 w-4" /> Settings
        </Link>
        
        <button 
          onClick={() => {
            document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            window.location.href = '/login'
          }}
          className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-2xl mt-1"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </div>
  )
}
