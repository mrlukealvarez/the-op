# THE OP — Entity Command Center
> Coffee Shop + Merch Counter + Drive-Through | Grow Campus, Custer, SD
> Part of Black Hills Consortium | Master brief: ~/Projects/master-hub/content/entity-briefs/the-op-brief.md

---

## ENTITY IDENTITY

THE OP LLC is a community coffee shop and campus merchandise counter on the Grow Campus in Custer, South Dakota. Think Wild Spruce Market — a charming stop where tourists grab coffee, local beer, snacks, and souvenirs on their way to Custer State Park.

**What THE OP IS:**
- Coffee shop (espresso, drip, cold brew, local beer/cider on tap)
- Merch counter (BHC branded apparel, local artisan goods, tourist souvenirs)
- Drive-through window for grab-and-go tourists
- Employee perks profit center (food/beverage/merch as BHC employee benefits)
- GrowWise POS live demo for investor campus tours

**What THE OP is NOT:**
- NOT a cannabis cafe or Amsterdam-style anything
- NOT an event venue (that's THE CULT Events LLC)
- NOT a coworking space (that's Grow Campus)
- NOT a full restaurant (counter service only, no chef, no sit-down dining)

---

## VERIFIED NUMBERS (V5 Floor / V4 Ceiling)

| Metric | V5 Floor | V4 Ceiling |
|--------|----------|------------|
| Y1 Revenue | $380K | $1.5M |
| Y5 Revenue | $1.9M | $15M |
| Y1 Net Income | $18K | $375K |
| Y5 Net Income | $589K | $5.25M |
| Y5 Net Margin | 31.0% | 35.0% |
| Break-Even | Month 5-6 | Month 3 |

### Revenue Streams (Y1: $380K)
| Stream | Amount | % |
|--------|--------|---|
| Food & Beverage | $300K | 79% |
| Merchandise | $80K | 21% |

### Staffing
| Year | Headcount | Total Labor |
|------|-----------|-------------|
| Y1 | 3 | $115K |
| Y5 | 7 | $360K |

---

## KEY STRATEGIC ELEMENTS

- **Zero rent:** Owned Grow Campus real estate — 15-20% margin advantage
- **14.9M tourists:** SD annual visitors, 2M+ past campus via Custer State Park
- **Employee perks model:** F&B + merch as BHC employee benefits — fully deductible
- **$2/transaction charitable floor:** $1.50 Seed Foundation + $0.50 BHC per transaction
- **Charity QR on coffee sleeve:** Every cup has a QR code linking to Seed Foundation + BHC donation pages — passive fundraising with every coffee sold
- **POS round-up donation:** GrowWise POS prompts "Round up to the nearest dollar for BHC?" at checkout — classic charity round-up model, also demos GrowWise charitable integration for visiting investors
- **Drive-through:** Captures grab-and-go tourist traffic
- **Everything Is Content:** Outpost Media produces zero-CAC marketing content
- **GrowWise live demo:** POS runs on GrowWise — investors see platform while ordering coffee
- **Rotating local roster:** Coffee roasters and craft beer/cider rotate constantly — no two visits the same. Every VC, celebrity, or tourist gets a different experience. Cycle through Black Hills roasters (Black Hills Coffee, etc.) and local breweries (Miner, Sawyer, etc.) so the menu is always fresh and uniquely local.

---

## DESIGN TOKENS

| Token | Value | Usage |
|-------|-------|-------|
| Primary | Espresso brown (#3E2723) | Headers, CTAs |
| Secondary | Amber (#F59E0B) | Accents, highlights |
| Background | Cream (#FFF8E1) | Page backgrounds |
| Text | Dark brown (#1A0F0A) | Body text |
| Accent | Pine green (#2D5016) | Nature/outdoor elements only |

**NO cannabis-green.** THE OP palette is warm, inviting, coffeehouse-inspired. Think espresso, caramel, cream — not dispensary.

---

## TECH STACK

- **Framework:** Next.js 16.1.6
- **UI:** React 19.2.3, Tailwind CSS 4
- **Animation:** Framer Motion 12.33.0
- **Icons:** Lucide React 0.563.0
- **Backend:** Supabase 2.95.3
- **Charts:** Recharts 3.7.0
- **Validation:** Zod 4.3.6
- **Styling Utilities:** clsx, tailwind-merge, class-variance-authority
- **Deployment:** Vercel
- **TypeScript:** 5.x

---

## FILE STRUCTURE

### Public Routes
- `/` — Homepage (page.tsx)
- `/about` — About page
- `/menu` — Menu page
- `/events` — Events page
- `/community` — Community page
- `/blog` — Blog listing
- `/blog/[slug]` — Individual blog posts
- `/contact` — Contact page

### Dashboard Routes (Admin)
- `/dashboard` — Overview (overview-client.tsx)
- `/dashboard/community` — Community management (community-client.tsx)
- `/dashboard/events` — Events management (events-client.tsx)
- `/dashboard/login` — Admin login

### Special Routes
- `error.tsx` — Error handling
- `not-found.tsx` — 404 page
- `layout.tsx` — Root layout

---

## DO NOT

- Reference cannabis, dispensary, or Amsterdam in any content
- Use cannabis-green (#22C55E or similar) in design
- Add events features (events = THE CULT Events LLC)
- Add coworking features (coworking = Grow Campus)
- Use $600K or any pre-Sprint-134 revenue numbers
- Create full restaurant features (no full kitchen, no chef, no sit-down dining)
- Modify financial projections without updating master-hub brief

---

## REFERENCES

| Purpose | Path |
|---------|------|
| Master Brief | ~/Projects/master-hub/content/entity-briefs/the-op-brief.md |
| V5 Research | ~/Projects/master-hub/content/entity-briefs/V5-MARKET-CAPTURE-RESEARCH.md |
| Capital Flow | ~/Projects/master-hub/content/entity-briefs/V5-CAPITAL-FLOW.md |
| Entity Map | ~/Projects/master-hub/context/ENTITY-RELATIONSHIP-MAP.md |
| THE CULT Brief | ~/Projects/master-hub/content/entity-briefs/the-cult-brief.md |
