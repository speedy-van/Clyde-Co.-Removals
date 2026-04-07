# Clyde & Co. Removals

A production-ready, frontend-only website for Clyde & Co. Removals — a furniture removal company serving South Lanarkshire, Scotland.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📋 Placeholder Values to Replace

Before launching, update the following placeholder values in `src/lib/config.ts`:

| Field | Current Value | Action Required |
|-------|---------------|-----------------|
| `phone` | `+441698000000` | Replace with actual phone number |
| `phoneDisplay` | `01698 000 000` | Format for display |
| `whatsapp` | `+441698000000` | WhatsApp number (can be same as phone) |
| `email` | `hello@clydeandco-removals.co.uk` | Replace with actual email |
| `address.street` | `TBD` | Add street address |
| `address.postcode` | `ML3` | Add full postcode |
| `social.facebook` | Empty | Add Facebook page URL |
| `social.instagram` | Empty | Add Instagram profile URL |

### SEO Configuration

Update the base URL in `src/lib/seo.ts`:

```typescript
const baseUrl = "https://clydeandco-removals.co.uk"; // Your actual domain
```

Also update in `next-sitemap.config.js`:

```javascript
siteUrl: 'https://clydeandco-removals.co.uk', // Your actual domain
```

## 🖼️ Images to Replace

Drop the following images into the `public/` directory:

| File | Location | Description |
|------|----------|-------------|
| `hero-bg.jpg` | `public/images/` | Hero background (1920x1080 min, JPG) |
| `og-default.jpg` | `public/` | Social sharing image (1200x630, JPG) |

Optional team/equipment photos for About page:
- Place in `public/images/`
- Update references in `src/app/about/page.tsx`

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Chakra UI v3 + Emotion
- **Animations**: Framer Motion
- **SEO**: next-seo, next-sitemap
- **Icons**: react-icons (Feather icons)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts, providers
│   ├── page.tsx           # Home page
│   ├── about/
│   ├── contact/
│   ├── services/
│   │   ├── page.tsx       # Services index
│   │   └── [slug]/        # Dynamic service pages
│   ├── areas/
│   │   ├── page.tsx       # Areas index
│   │   └── [slug]/        # Dynamic area pages
│   ├── privacy/
│   ├── terms/
│   ├── not-found.tsx      # Custom 404
│   └── error.tsx          # Error boundary
├── components/
│   ├── brand/
│   │   └── Logo.tsx       # SVG logo component
│   ├── home/              # Home page sections
│   ├── layout/            # Navbar, Footer, StickyCallBar
│   └── shared/            # Reusable components
└── lib/
    ├── config.ts          # Site configuration
    ├── links.ts           # URL helpers
    ├── seo.ts             # SEO utilities
    ├── theme.ts           # Chakra UI theme
    ├── area-content.ts    # Area page content
    └── service-content.ts # Service page content
```

## 🎨 Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Clyde Navy | `#0B2A4A` | Primary / headers |
| Heather Gold | `#E8A33D` | Accent / CTAs |
| Neutral Light | `#F7F5F0` | Page background |
| Neutral Dark | `#1A1A1A` | Body text |
| Muted | `#6B7280` | Secondary text |
| Success | `#2F855A` | Positive indicators |

## 🔤 Typography

- **Headings**: Playfair Display (600, 700)
- **Body/UI**: Inter (400, 500, 600)

Loaded via `next/font/google` for optimal performance.

## 📱 Key Features

- **Mobile-first responsive design**
- **Sticky contact bar on mobile** (Call + WhatsApp)
- **Static site generation** for all pages
- **JSON-LD structured data** (LocalBusiness, Service schemas)
- **Automatic sitemap generation**
- **SEO-optimized** with unique meta for each page
- **Accessibility-focused** (semantic HTML, focus indicators, aria labels)

## 🚢 Deploying to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Add your custom domain in Vercel dashboard
5. Ensure DNS is configured correctly

No environment variables are required for this frontend-only site.

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run postbuild` | Generate sitemap (runs after build) |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔧 Customization

### Adding New Areas

1. Add area name to `SITE.areas` array in `src/lib/config.ts`
2. Add content to `areaContent` object in `src/lib/area-content.ts`
3. Pages are generated automatically via `generateStaticParams`

### Adding New Services

1. Add service object to `SITE.services` array in `src/lib/config.ts`
2. Add content to `serviceContent` object in `src/lib/service-content.ts`
3. Add icon to `iconMap` in service components if using a new icon
4. Pages are generated automatically via `generateStaticParams`

### Modifying Theme

Edit `src/lib/theme.ts` to adjust colors, fonts, or global styles.

## ⚠️ Important Notes

- **No backend/database**: All content is static
- **No forms**: Bookings are via phone/WhatsApp only
- **No dark mode**: Intentional brand decision
- **Images**: Use `next/image` for automatic optimization

## 📄 License

Private - All rights reserved by Clyde & Co. Removals Ltd

---

Built with care for Clyde & Co. Removals. *Moved with Care. Rooted in the Clyde.*
