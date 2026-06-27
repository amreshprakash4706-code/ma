'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, User, LogOut, Settings, Heart, Building2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Will be replaced with real auth state
  const { theme, setTheme } = useTheme()

  // In production, this would come from Zustand store or session
  const user = {
    name: 'Alex Rivera',
    role: 'USER',
    avatar: null,
  }

  const navLinks = [
    { href: '/properties', label: 'Browse Properties' },
    { href: '/valuations', label: 'AI Valuation' },
    { href: '/investment-analysis', label: 'Investment Analysis' },
    { href: '/blog', label: 'Insights' },
    { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
    { href: '/chat', label: 'AI Assistant' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-tighter">lumina</div>
              <div className="text-[10px] text-zinc-500 -mt-1.5">REAL ESTATE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                    <User className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 pl-2 pr-4 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    <div className="h-7 w-7 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center overflow-hidden">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                      ) : (
                        <User className="h-4 w-4 text-zinc-500" />
                      )}
                    </div>
                    <span className="hidden md:block font-medium">{user.name.split(' ')[0]}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-zinc-200 bg-white py-1 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all dark:border-zinc-800 dark:bg-zinc-950">
                    <div className="px-4 py-2 text-xs text-zinc-500 border-b dark:border-zinc-800">{user.email || 'user@lumina.com'}</div>
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900">
                      <User className="h-4 w-4" /> Dashboard
                    </Link>
                    <Link href="/dashboard/wishlist" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900">
                      <Heart className="h-4 w-4" /> Wishlist
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900">
                      <Settings className="h-4 w-4" /> Settings
                    </Link>
                    <div className="my-1 border-t dark:border-zinc-800" />
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
                    >
                      <LogOut className="h-4 w-4" /> Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <Button variant="ghost" size="sm">Log in</Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-zinc-900 hover:bg-black text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100">Get started free</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
                {!isLoggedIn && (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">Log in</Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">Create account</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
