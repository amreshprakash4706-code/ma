'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Building2, ArrowLeft, User, Users } from 'lucide-react'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  role: z.enum(['USER', 'AGENT']).default('USER'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'USER',
    },
  })

  const selectedRole = watch('role')

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          role: data.role,
        }),
      })

      const result = await res.json()

      if (result.success) {
        toast.success('Account created! Welcome to Lumina.')
        router.push('/dashboard')
      } else {
        toast.error(result.error || 'Registration failed')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-12 bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-700 mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600">
              <Building2 className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight">Create your account</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Join thousands finding their dream homes with AI</p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Role Selection */}
            <div>
              <Label className="mb-3 block">I am a</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => register('role').onChange({ target: { value: 'USER' } })}
                  className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 transition-all ${selectedRole === 'USER' ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50' : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}
                >
                  <User className="h-6 w-6" />
                  <div className="font-medium">Home Buyer / Seller</div>
                  <div className="text-xs text-zinc-500">Looking to buy or sell</div>
                </button>
                <button
                  type="button"
                  onClick={() => register('role').onChange({ target: { value: 'AGENT' } })}
                  className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 transition-all ${selectedRole === 'AGENT' ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50' : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900'}`}
                >
                  <Users className="h-6 w-6" />
                  <div className="font-medium">Real Estate Agent</div>
                  <div className="text-xs text-zinc-500">Professional agent</div>
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Alex Rivera" className="mt-2" {...register('name')} />
              {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-2" {...register('email')} />
              {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-2" {...register('password')} />
                {errors.password && <p className="text-red-500 text-xs mt-1.5">{errors.password.message}</p>}
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" className="mt-2" {...register('confirmPassword')} />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1.5">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <Button type="submit" className="w-full h-11 text-base mt-2" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create my Lumina account'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:underline">Sign in</Link>
          </div>
        </div>

        <p className="text-center text-[10px] text-zinc-400 mt-8">By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  )
}
