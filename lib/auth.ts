import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { prisma } from './prisma'
import { Role } from '@prisma/client'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production'
const JWT_EXPIRES_IN = '7d'

export interface JWTPayload {
  userId: string
  email: string
  role: Role
  name: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch (error) {
    return null
  }
}

export async function getUserFromToken(token: string) {
  const payload = verifyToken(token)
  if (!payload) return null

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      avatar: true,
      isVerified: true,
    },
  })

  return user
}

export async function createUser(data: {
  email: string
  password: string
  name: string
  role?: Role
}) {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  })

  if (existingUser) {
    throw new Error('User already exists')
  }

  const passwordHash = await hashPassword(data.password)

  const user = await prisma.user.create({
    data: {
      email: data.email.toLowerCase(),
      passwordHash,
      name: data.name,
      role: data.role || 'USER',
    },
  })

  return user
}

export async function authenticateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  })

  if (!user || !user.passwordHash) {
    throw new Error('Invalid credentials')
  }

  const isValid = await verifyPassword(password, user.passwordHash)
  if (!isValid) {
    throw new Error('Invalid credentials')
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  })

  return { user, token }
}

export async function getGoogleUser(googleId: string, email: string, name: string, picture?: string) {
  let user = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  })

  if (!user) {
    // Create new user from Google
    user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name,
        avatar: picture,
        role: 'USER',
        isVerified: true,
        emailVerified: new Date(),
      },
    })
  }

  // Create or update account for OAuth
  await prisma.account.upsert({
    where: {
      provider_providerAccountId: {
        provider: 'google',
        providerAccountId: googleId,
      },
    },
    update: {},
    create: {
      userId: user.id,
      type: 'oauth',
      provider: 'google',
      providerAccountId: googleId,
    },
  })

  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  })

  return { user, token }
}
