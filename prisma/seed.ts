import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create demo users
  const hashedPassword = await bcrypt.hash('demo1234', 12)

  const user = await prisma.user.upsert({
    where: { email: 'demo@lumina.com' },
    update: {},
    create: {
      email: 'demo@lumina.com',
      name: 'Alex Rivera',
      passwordHash: hashedPassword,
      role: 'USER',
      isVerified: true,
    },
  })

  const agent = await prisma.user.upsert({
    where: { email: 'agent@lumina.com' },
    update: {},
    create: {
      email: 'agent@lumina.com',
      name: 'Elena Rodriguez',
      passwordHash: hashedPassword,
      role: 'AGENT',
      isVerified: true,
    },
  })

  const admin = await prisma.user.upsert({
    where: { email: 'admin@lumina.com' },
    update: {},
    create: {
      email: 'admin@lumina.com',
      name: 'Admin User',
      passwordHash: hashedPassword,
      role: 'ADMIN',
      isVerified: true,
    },
  })

  // Create demo properties
  await prisma.property.createMany({
    data: [
      {
        title: 'Modern Oceanfront Villa',
        description: 'Stunning contemporary villa directly on the Pacific Ocean with breathtaking views.',
        price: 4250000,
        location: 'Malibu, CA',
        address: '456 Pacific Coast Hwy, Malibu, CA 90265',
        city: 'Malibu',
        state: 'CA',
        zipCode: '90265',
        lat: 34.0259,
        lng: -118.7798,
        bedrooms: 5,
        bathrooms: 4.5,
        sqft: 4200,
        type: 'HOUSE',
        status: 'AVAILABLE',
        images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
        features: ['Oceanfront', 'Pool', 'Smart Home'],
        agentId: agent.id,
      },
      {
        title: 'Downtown Penthouse with Views',
        description: 'Luxurious penthouse in the heart of downtown with panoramic city views.',
        price: 1890000,
        location: 'Los Angeles, CA',
        address: '1200 S Figueroa St, Los Angeles, CA 90015',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90015',
        lat: 34.0407,
        lng: -118.269,
        bedrooms: 3,
        bathrooms: 3,
        sqft: 2100,
        type: 'CONDO',
        status: 'AVAILABLE',
        images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
        features: ['City Views', 'Concierge', 'Gym'],
        agentId: agent.id,
      },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
