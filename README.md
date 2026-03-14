# Shayasi Global Resources Website

This repository contains the official marketing website for Shayasi Global Resources Limited, a diversified Nigerian company operating across oil and gas, strategic investments, real estate, and agriculture through Shayasi Farms.

The site is built as a modern, static-first Next.js application with a polished editorial layout, image-led sections, reusable UI components, and centralized content configuration for branding, SEO, imagery, and contact details.

## Project Overview

The website presents Shayasi Global Resources as a multi-sector business with a strong corporate identity and a clear content structure.

It currently includes:

- A homepage with a branded hero, core business areas, company overview, subsidiary spotlight, and partnership messaging
- An About page that explains the company profile, business areas, and operating approach
- A Services page covering Oil and Gas, Investments, and Real Estate in detail
- A dedicated Shayasi Farms page for agriculture and farming operations
- A Contact page with office details, phone, email, and an embedded Google Map
- Shared navigation, footer, SEO metadata, image mapping, and styling tokens

## Business Areas Covered

- Oil and Gas
- Investments
- Real Estate
- Agriculture and Farming

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `next/font/google` for typography
- `lucide-react` for icons
- Reusable UI primitives built in `components/ui`

## Design and Content System

The site uses a shared brand layer instead of page-by-page styling overrides.

- Typography: `Fraunces` for display headings and `Manrope` for body copy
- Global styling: custom theme tokens, glass surfaces, dark panels, spacing, and animation utilities in `app/globals.css`
- Shared metadata and contact details: `lib/seo.ts`
- Shared image assignments: `lib/site-images.ts`
- Shared layout shell: `app/layout.tsx`

This setup makes it easy to update brand colors, fonts, SEO defaults, phone/email details, and imagery from a few central files.

## Route Map

| Route | Purpose |
| --- | --- |
| `/` | Homepage with company summary, services, and Shayasi Farms spotlight |
| `/about` | Company profile, business areas, and operating approach |
| `/services` | Detailed service breakdown for Oil and Gas, Investments, and Real Estate |
| `/contact` | Office location, map, email, and phone contact details |
| `/subsidiaries/shayasi-farms` | Dedicated agriculture and farming page |
| `/sitemap.xml` | Generated sitemap entry point |

## Project Structure

```text
app/
  about/page.tsx
  contact/page.tsx
  services/page.tsx
  subsidiaries/shayasi-farms/page.tsx
  layout.tsx
  globals.css
  page.tsx
  sitemap.ts

components/
  navbar.tsx
  footer.tsx
  hero.tsx
  services.tsx
  page-hero.tsx
  cta-banner.tsx
  ui/

lib/
  seo.ts
  site-images.ts
  utils.ts

public/
  shayasi-logo.png
  Shayasi-icon.png
  images/
```

## Content Editing Guide

Most site content is hardcoded in the route and component files. There is currently no CMS, database, or admin dashboard.

Use the following files when updating content:

### Company-wide settings

- `lib/seo.ts`
  - Site name
  - Base URL
  - Default SEO description
  - Keywords
  - Navigation items
  - Head office address
  - Email address
  - Phone number

### Shared image assignments

- `lib/site-images.ts`
  - Maps each section to a unique image in `public/images`
  - Keeps image reuse under control across the site

### Homepage

- `app/page.tsx`
  - Who we are section
  - Shayasi Farms spotlight
  - Partnership reasons
- `components/hero.tsx`
  - Main hero headline
  - Mission line
  - CTA buttons
  - Hero media cards
- `components/services.tsx`
  - Homepage service cards and summaries

### About page

- `app/about/page.tsx`
  - Company description
  - Business area descriptions
  - Incorporation detail
  - Operating approach

### Services page

- `app/services/page.tsx`
  - Detailed Oil and Gas copy
  - Investment copy
  - Real Estate copy
  - Service highlights and supporting paragraphs

### Agriculture / Shayasi Farms page

- `app/subsidiaries/shayasi-farms/page.tsx`
  - Crop, livestock, and trading descriptions
  - Export and agricultural impact messaging
  - Partnership messaging

### Contact page

- `app/contact/page.tsx`
  - Inquiry reasons
  - Map embed
  - Phone, email, and address presentation
  - Contact CTAs

### Navigation and footer

- `components/navbar.tsx`
  - Logo display
  - Menu links
  - Primary CTA
- `components/footer.tsx`
  - Footer messaging
  - Quick contact actions
  - Location and sector tags

## Assets and Branding

Important brand assets:

- Logo: `public/shayasi-logo.png`
- Favicon: `public/Shayasi-icon.png`
- Photography and section imagery: `public/images/*`

When replacing images:

1. Add the new files to `public/images`
2. Update the relevant path in `lib/site-images.ts`
3. Rebuild or run the app to confirm layout balance and image cropping

## Local Development

### Prerequisites

- Node.js 20+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Environment variables

There are currently no required environment variables for local development.

### Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint checks |

## Validation Workflow

Before shipping content or design changes, run:

```bash
npm run lint
npm run build
```

This project is routinely checked with both commands after updates.

## Deployment Notes

- The project is static-friendly and works well for standard Next.js hosting
- Metadata is configured centrally in `app/layout.tsx`
- The sitemap is generated through `app/sitemap.ts`
- The site uses Google-hosted fonts through `next/font/google`

Important:

- In restricted or sandboxed environments, `npm run build` may require network access to fetch the `Fraunces` and `Manrope` font files

## Contact Details in Code

Current shared contact details are stored in `lib/seo.ts`:

- Email: `info@shayasiglobalresources.com`
- Phone: `+2348024071895`
- Address:
  - `AYINKE HOUSE`
  - `120 Mushin Road`
  - `Isolo, Lagos, Nigeria`

## Maintenance Notes

- Keep route copy consistent with the business messaging already established across the site
- Update `lib/seo.ts` whenever brand or contact details change
- Update `lib/site-images.ts` when rotating imagery so sections stay visually distinct
- Prefer editing reusable components before duplicating layout logic across pages
- Run lint and build after every meaningful update

## Summary

This codebase is a tailored corporate website for Shayasi Global Resources Limited. It is structured for straightforward content updates, reusable visual patterns, and consistent brand presentation across all major business areas.
