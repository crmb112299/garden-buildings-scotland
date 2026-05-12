# Garden Buildings Scotland — Setup

Lead-gen site (Next.js 15, TypeScript, Tailwind). Modelled on the Weatherseal funnel — same hero, trust bar, single lead form, town × product ad pages.

## 1. Install dependencies

```bash
cd "/Users/matthewcrombie/Desktop/PRO Programmes/garden-buildings-scotland"
npm install
```

## 2. Set environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```
RESEND_API_KEY=...                 # https://resend.com — free tier is fine
LEAD_FROM_EMAIL=onboarding@resend.dev   # works out of the box; swap for leads@gardenbuildingsscotland.co.uk once the domain is verified in Resend
LEAD_RECIPIENTS=info@leadgenerationcartel.co.uk,matthewcrombie44@gmail.com
LEAD_REPLY_TO=info@gardenbuildingsscotland.co.uk
```

Without a key, leads still log to the server console — nothing is lost.

## 3. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000.

## 4. Verify a few key URLs

- `/` — homepage
- `/sheds`, `/garden-rooms`, `/customer-reviews`, `/frequently-asked-questions`, `/online-quote`, `/contact-us`
- `/areas-covered`, `/privacy-policy`, `/cookie-policy`
- Ad pages: `/garden-sheds-edinburgh`, `/garden-rooms-glasgow`, `/summerhouse-falkirk`, etc. (all product × town combos auto-generated)

## 5. Push to GitHub + deploy on Vercel

```bash
git init
git add .
git commit -m "Initial scaffold"
# Then create the repo via gh CLI or github.com and push:
gh repo create garden-buildings-scotland --public --source=. --push
```

Hook the repo up at https://vercel.com/new — set the same env vars in the Vercel dashboard.

## 6. Swap in real images

Placeholder images live in `lib/products.ts` (`image` field on each product). Drop the real photos into `public/images/` and update those URLs.

## 7. SEO copy pass

Default meta lives in `lib/seo.ts` (ad pages) and inline in each page. Refine titles + descriptions when ready — keep titles under ~60 chars, descriptions under ~155 chars, always include the town name on ad pages.

## Architecture cheatsheet

- `lib/site.ts` — brand details, phone, address, trust bar items
- `lib/products.ts` — all 5 products (sheds, rooms, greenhouse, summerhouse, playhouses)
- `lib/towns.ts` — town/region list, drives ad-page generation
- `components/LeadForm.tsx` — the single lead form, used everywhere. Button labelled **Continue**, posts to `/api/leads`.
- `components/AdPageTemplate.tsx` — shared template for all town × product ad pages
- `app/api/leads/route.ts` — receives form submissions, sends via Resend, also logs every lead
- 5 dynamic ad routes: `app/[product]-[town]/page.tsx` for sheds, rooms, greenhouse, summerhouse, playhouses
