# Love Bakery - Sourdough Bread Cafe

Premium animated website platform for an artisan sourdough bread cafe.

This is a first client preview build focused on visual direction, animation quality, scalable architecture, and the public website experience.

## Preview Features

- Cinematic animated homepage
- Premium Framer Motion interactions
- Animated hero, parallax imagery, staggered menu cards, gallery, testimonials, and reservation CTA
- Real Love Bakery menu content from the provided menu boards
- Dedicated `/menu` and `/gallery` pages
- Reservation form UI wired to an API route
- Admin dashboard foundation
- Supabase schema foundation
- Cloudinary-ready media helper
- SEO metadata and production build setup

## Tech Stack

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase-ready backend
- Cloudinary-ready image pipeline
- Vercel-ready deployment

## Local Setup

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Production Check

```bash
npm run lint
npm run build
```

## Environment Variables

Create `.env.local` from `.env.example` when connecting Supabase and Cloudinary:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

## Important Routes

- `/` - animated homepage
- `/menu` - digital menu plus original menu-board references
- `/gallery` - gallery experience
- `/admin` - admin dashboard foundation
- `/api/reservations` - reservation submission endpoint

## Next Phase

If the client approves the visual direction, the next phase should add:

- Supabase auth for admin login
- Menu CRUD
- Gallery upload and management through Cloudinary
- Reservation dashboard
- Settings management
- Vercel deployment with real environment variables
