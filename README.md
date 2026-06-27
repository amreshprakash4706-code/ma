# Lumina - AI-Powered Real Estate SaaS Platform

Lumina is a modern, production-ready real estate platform powered by artificial intelligence. It helps buyers, sellers, and agents find, value, and close on properties faster and smarter.

## Features

### Core Platform
- Modern responsive landing page
- Full authentication (JWT + Google OAuth ready)
- Role-based access: User, Agent, Admin
- Property browsing with advanced filters
- Property detail pages with Google Maps
- Wishlist, Compare, and Visit scheduling
- Messaging between users and agents
- Reviews & Ratings

### AI-Powered Features
- **AI Property Valuation** — Instant accurate valuations using GPT-4o
- **AI Chat Assistant** — 24/7 real estate expert chatbot
- **AI Investment Analysis** — Cash flow, cap rate, and appreciation projections
- Smart recommendations on dashboard

### Tools
- Mortgage Calculator
- Blog / Market Insights
- Featured listings with Stripe

### For Professionals
- Agent Dashboard
- Admin Dashboard with analytics

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: JWT + bcrypt
- **AI**: OpenAI (GPT-4o)
- **Payments**: Stripe
- **Images**: Cloudinary ready
- **Maps**: Google Maps API
- **Deployment**: Docker + Vercel ready

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment

```bash
cp .env.example .env.local
```

Fill in your API keys (OpenAI, Stripe, Google Maps, etc.)

### 3. Database

```bash
docker-compose up -d          # Start Postgres
npx prisma generate
npx prisma migrate dev
npm run prisma:seed           # Add demo data
```

### 4. Run

```bash
npm run dev
```

Visit http://localhost:3000

**Demo Login**: demo@lumina.com / demo1234

## Key Pages

- `/` — Landing
- `/properties` — Browse listings
- `/valuations` — AI Valuation
- `/chat` — AI Assistant
- `/investment-analysis` — AI Investment Tool
- `/dashboard` — User Dashboard
- `/agent` — Agent Dashboard
- `/admin` — Admin Dashboard

## Production

- Deploy easily on **Vercel**
- Use **Docker** for self-hosting
- Connect your own PostgreSQL, Stripe, OpenAI keys

## License

MIT — Free for personal and commercial use.

---

**Lumina** — The future of real estate is intelligent.
