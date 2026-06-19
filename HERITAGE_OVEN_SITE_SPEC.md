# Heritage Oven — Full Site Rebuild Spec
## Master Dev Prompt for Gemini CLI

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Vercel  
**Ordering:** WhatsApp only — all CTAs point to `https://wa.me/8178769036`  
**Data sources:** `product_intelligence.json` · `website_collections.json`  
**Design ethos:** Premium bakery branding + addictive discovery commerce. NOT a minimal cake portfolio.

---

## CRITICAL PRINCIPLES — READ BEFORE ANY CODE

1. **No cart system.** Every "Order" or "Add" action opens WhatsApp with a pre-filled message: `https://wa.me/8178769036?text=I'd like to order [PRODUCT NAME]`
2. **Data-driven.** All product data, collections, tags, prices, and cross-sells come from `product_intelligence.json`. Never hardcode product lists — always filter the JSON.
3. **Occasion-first navigation.** Organise by eating behaviour and emotional intent, not by product type.
4. **Product density is king.** The site must feel like 170+ products exist. Use carousels, grids, and impulse rows aggressively.
5. **Mobile-first.** Over 70% of traffic will be on mobile. Every section must be designed thumb-first.
6. **Preserve branding.** Existing typography, colour palette, and logo must remain unchanged.

---

## FILE & FOLDER ARCHITECTURE

```
src/
  app/
    page.tsx                    ← Homepage (FULL REBUILD)
    our-products/
      page.tsx                  ← Catalog page (FULL REBUILD)
    collections/
      [slug]/
        page.tsx                ← Dynamic collection page (NEW)
    about/
      page.tsx                  ← Keep existing, minor updates
    contact/
      page.tsx                  ← Keep existing
    pos/
      page.tsx                  ← Keep existing

  components/
    layout/
      Navbar.tsx                ← REBUILD
      Footer.tsx                ← REBUILD
      AnnouncementBar.tsx       ← NEW

    homepage/
      HeroSection.tsx           ← REBUILD (time-aware)
      ImpulseRow.tsx            ← NEW (₹99 under scroller)
      OccasionGrid.tsx          ← NEW (collection tiles)
      DiscoverySection.tsx      ← NEW (emotion-tagged rows)
      PartyBuilder.tsx          ← NEW (step-by-step bundle)
      WellnessZone.tsx          ← NEW (Farmley section)
      ComboSection.tsx          ← NEW (cross-category pairings)
      QualityPromise.tsx        ← NEW (trust badges)
      InstagramStrip.tsx        ← NEW (social proof)

    catalog/
      ProductCard.tsx           ← REBUILD (3 variants)
      ProductGrid.tsx           ← NEW
      FilterBar.tsx             ← NEW
      CollectionHero.tsx        ← NEW

    shared/
      WhatsAppButton.tsx        ← NEW (reusable CTA)
      SectionHeader.tsx         ← NEW
      HorizontalScroller.tsx    ← NEW

  lib/
    products.ts                 ← NEW (data helpers)
    collections.ts              ← NEW (collection logic)
    whatsapp.ts                 ← NEW (URL builder)
```

---

## DATA HELPERS — Build these first

### `src/lib/products.ts`

```typescript
import productData from '../../product_intelligence.json'

export type Product = {
  id: string
  clean_name: string
  premium_title: string
  price: number
  category: string
  subcategory: string
  seo_description: string
  short_description: string
  tags: string[]
  occasion_tags: string[]
  classification: 'Budget' | 'Premium'
  is_best_seller: boolean
  cross_sell: string[]
  combos: string[]
}

export const allProducts: Product[] = productData.products

// Filter helpers
export const getByCategory = (category: string) =>
  allProducts.filter(p => p.category === category)

export const getByOccasion = (tag: string) =>
  allProducts.filter(p => p.occasion_tags.includes(tag))

export const getBestSellers = () =>
  allProducts.filter(p => p.is_best_seller)

export const getUnder99 = () =>
  allProducts.filter(p => p.price <= 99)

export const getByClassification = (c: 'Budget' | 'Premium') =>
  allProducts.filter(p => p.classification === c)

export const getByIds = (ids: string[]) =>
  allProducts.filter(p => ids.includes(p.clean_name))

// Occasion-based collections (for homepage sections)
export const OCCASION_COLLECTIONS = {
  teaTime: getByOccasion('Tea Time').slice(0, 12),
  officeSnack: getByOccasion('Office Snack').slice(0, 8),
  birthday: getByOccasion('Birthday').slice(0, 12),
  quickBite: getByCategory('Savory Snacks'),
  wellness: getByCategory('Healthy Snacks').slice(0, 10),
  impulse: getUnder99().slice(0, 10),
}
```

### `src/lib/whatsapp.ts`

```typescript
const WA_NUMBER = '8178769036'

export const buildWhatsAppUrl = (productName: string, quantity = 1) => {
  const message = `I'd like to order ${quantity > 1 ? `${quantity}x ` : ''}${productName}`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const buildComboUrl = (items: string[]) => {
  const message = `I'd like to order a combo: ${items.join(', ')}`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const buildCollectionUrl = (collectionName: string) => {
  const message = `I'd like to browse your ${collectionName} collection`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
```

---

## PAGE 1 — HOMEPAGE (`src/app/page.tsx`)

The homepage is a **discovery scroll experience**. Each section has a distinct purpose. Order matters.

### Section 1: Announcement Bar (`AnnouncementBar.tsx`)

- Sticky top bar, amber/gold background
- Text: `✨ Free delivery on orders above ₹299 · Call +91 8178769036 to order · Crossings Republik, Ghaziabad`
- Scrolling marquee on mobile, static on desktop

### Section 2: Navbar (`Navbar.tsx`)

**Desktop layout:**
```
[Story]  [Explore]  [Healthy]     [HERITAGE OVEN]     [Visit]  [🔍]  [Order on WhatsApp →]
```

**Mobile layout:**
- Logo center, hamburger left, WhatsApp icon right (green)
- Hamburger opens a full-screen slide-over drawer with the full nav tree

**Nav links and their destinations:**

| Label | Destination | Notes |
|---|---|---|
| Story | /about | Existing page |
| Explore | /our-products | Rebuilt catalog |
| Healthy | /collections/wellness-pantry | New collection page |
| Visit | /contact | Existing page |
| Order on WhatsApp | `wa.me/8178769036` | Green button, opens in new tab |

**Sticky behavior:** Navbar becomes solid white with a subtle shadow after scrolling 80px.

---

### Section 3: Hero (`HeroSection.tsx`)

**Time-aware hero.** Use `new Date().getHours()` to determine which variant renders:

| Time Window | Headline | Subtext | CTA | Background Tone |
|---|---|---|---|---|
| 07:00–11:59 | "Fresh from the Oven" | Breads, pastries & morning treats baked today | Shop Breakfast | Warm cream |
| 12:00–15:59 | "Office Hunger Rescue" | Rolls, patties & sandwiches — hot and ready | Grab a Quick Bite | Deep amber |
| 16:00–18:59 | "The 4PM Ritual" | Ghee biscuits, namkeens & tea-time classics | Shop Tea-Time | Earthy brown |
| 19:00–23:59 | "Midnight Cravings" | Pastries, cakes & late-night indulgence | Order Now | Dark chocolate |
| 00:00–06:59 | (default) | Pure Tradition. Premium Baking. | Explore All | Cream |

**Layout:**
- Full-width, min-height 80vh on desktop / 65vh on mobile
- Left-aligned text (preserve existing premium aesthetic)
- CTA is a large button that links to the relevant section anchor or `/our-products?filter=<occasion>`
- Background: use existing carousel images (`/img/carousel-1.webp`, `/img/carousel-2.webp`, `/img/carousel-3.webp`) cycling with a subtle crossfade

---

### Section 4: Sticky Category Pills (Mobile Only)

Horizontal scrollable pill row pinned below the hero on mobile. No equivalent on desktop (desktop has the nav).

```
🎂 Cakes  |  🥐 Quick Bites  |  ☕ Tea-Time  |  🥗 Healthy  |  🎉 Celebrate  |  ⚡ Under ₹99
```

Each pill scrolls the user to the corresponding homepage section via `id` anchor.

---

### Section 5: ⚡ Impulse Row — "Under ₹99, Add Without Thinking" (`ImpulseRow.tsx`)

**Purpose:** Highest-velocity, lowest-friction section. Drive impulsive adds.

**Data:** `getUnder99()` — filter `product_intelligence.json` for `price <= 99`, show 10 items

**Layout:**
- Section label: `⚡ Under ₹99` in a bold pill badge
- Heading: "Quick Adds · Low Price · No Regrets"
- Horizontal scrolling row of compact product cards (no full PDP needed)
- Each card: product image placeholder (use emoji if no image), name (truncated 20 chars), price badge `Only ₹XX`, one-tap WhatsApp CTA

**Card size:** 140px wide × 200px tall on mobile. 160px × 220px on desktop.

**Sample products to prioritise:**
- Aloo Patty ₹30
- Samosa ₹20
- Farmley Makhana 14GM Peri Peri ₹30
- Pudina Chips ₹79
- Jeera Biscuits ₹79
- Pineapple Pastry ₹85
- Corn Chips ₹79
- Mini Bar Ice Cream ₹10
- Lahori Jeera ₹10
- Candy Mango ₹10

---

### Section 6: Occasion Grid — "What Are You In The Mood For?" (`OccasionGrid.tsx`)

**Purpose:** Replace the 3-tile "Permanent Collection" with a diverse 6-tile grid. Each tile = one collection. Cross-category.

**Layout:** 3×2 grid on desktop, 2×3 on mobile. Each tile is a large card with image, emoji, label, and CTA.

**Six tiles:**

| Emoji | Title | Subtitle | Link | Products to show |
|---|---|---|---|---|
| 🎂 | Celebration Hub | Cakes, decor & party magic | /collections/celebration | Cakes + Party Supplies |
| ☕ | Tea-Time Ritual | Biscuits, namkeens & crunch | /collections/tea-time | Biscuits + Namkeen |
| 🥗 | Wellness Pantry | Roasted, not fried | /collections/wellness-pantry | Farmley products |
| ⚡ | Quick Bites | Hot, fresh & on the go | /collections/quick-bites | Savory Snacks |
| 🎁 | Birthday Boutique | Everything for a perfect party | /collections/birthday | Party Supplies + Cakes |
| ✨ | Best Sellers | Loved by Ghaziabad | /collections/best-sellers | is_best_seller == true |

**Card style:** Dark overlay on a food-mood background colour (use Tailwind `bg-amber-900`, `bg-stone-800` etc. as placeholders until real images are added). White text. Large emoji. Hover: scale 1.02 + brightness up.

---

### Section 7: Best Sellers Carousel — "The Heritage Favorites" (`DiscoverySection.tsx`)

**Purpose:** Social proof. Show the crowd-validated hits.

**Data:** `getBestSellers()` — 17 products from JSON

**Layout:**
- Section header: "The Heritage Favorites" + small badge "★ Most Ordered"
- Horizontal scroller, standard product cards (see ProductCard spec below)
- "View All →" link to `/collections/best-sellers`

---

### Section 8: Office Hunger Rescue — Cross-Category Section

**Purpose:** Occasion-based merchandising. High-frequency purchase moment.

**Data:** `getByOccasion('Office Snack')` — filter and show 8 items  

**Layout:**
- Two-column layout on desktop: left is a tall editorial card with copy, right is a 2×2 product grid
- Editorial card copy: "No More Sad Desk Lunches" / "Fresh rolls, patties & healthy munchies — order by WhatsApp and we'll sort your afternoon"
- Products: Paneer Tikka Roll, Sandwich, Aloo Patty, Farmley Makhana, Pudina Chips, Soya Katori Namkeen
- CTA: "Order for the Office →" → WhatsApp

---

### Section 9: The 4PM Tea Ritual — Mixed Collection Section

**Purpose:** Cross-sell biscuits with namkeen. Emotional trigger: comfort & nostalgia.

**Data:** Mix of `getByCategory('Cookies & Biscuits')` + `getByCategory('Traditional Snacks')`

**Layout:**
- Full-width warm-toned banner with section heading: "The 4PM Ritual ☕"
- Subtext: "Desi ghee biscuits, crispy namkeens, and the perfect crunch for your evening chai"
- 3-column product grid (desktop) / horizontal scroll (mobile)
- Show 6 products: Atta Patti Ghee Biscuits, Jeera Biscuits, Ratnam Mixture, Pudina Chips, Masala Mathi, Navrattan Namkeen
- CTA: "Shop Tea-Time →" → `/collections/tea-time`

---

### Section 10: 🎉 Build Your Party (`PartyBuilder.tsx`)

**Purpose:** Bundle engine to maximise AOV for celebration orders. The most important AOV section.

**Layout:** Step-by-step visual card with 3 steps.

**Step 1 — Pick a Cake:**
Show 4 cake thumbnails: Pineapple Cake ₹450, Black Forest ₹500, Brownie Cake ₹600, Choco Vanilla ₹500. User taps to "select" (visual highlight only — no state persistence needed across sessions).

**Step 2 — Add Snacks:**
Show 4 snack options: Paneer Tikka Roll, Aloo Patty, Paneer Kulcha, Samosa. Multi-select allowed.

**Step 3 — Decor:**
Show 4 decor items: Happy Bday Combo Set ₹79, Party Poppers ₹79, Sparkling Candle ₹79, Bunny Balloons ₹79.

**CTA:** "Order Full Party on WhatsApp →"  
Build message: `I'd like to order a party bundle: [Cake Name] + [Snack names] + [Decor items]`  
Use `buildComboUrl()` from `whatsapp.ts`.

**Visual style:** Numbered steps (1, 2, 3) in gold circles. Clean card layout. Mobile: vertical stack. Desktop: 3-column row.

---

### Section 11: Wellness Zone — "Guilt-Free Indulgence" (`WellnessZone.tsx`)

**Purpose:** Surface the Farmley range which is currently invisible on the site.

**Data:** `getByCategory('Healthy Snacks')` — 21 Farmley products exist

**Layout:**
- Clean, airy section. Light green accent tones.
- Heading: "Snack Smarter, Not Sadder 🥗"
- Subtext: "Roasted, not fried. Premium superfoods that actually taste like something."
- Trust badge row: "High Protein · Low Calorie · Roasted Not Fried · No Artificial Colour"
- Product grid: Show 6 items — 3 Makhana jars (₹239 each), 3 Farmley Munchies/Stix (₹20)
- CTA: "Explore Wellness Pantry →" → `/collections/wellness-pantry`

---

### Section 12: Combo Pairings — "Perfect Pairings" (`ComboSection.tsx`)

**Purpose:** Show cross-category combos, drive AOV up, normalise multi-item orders.

**Three featured combos (static):**

**Combo 1 — The Party Starter**  
Pineapple Cake ₹450 + Happy Bday Combo Set ₹79  
Badge: "Save with a Bundle"  
WhatsApp message: `I'd like to order The Party Starter combo: Pineapple Cake + Happy Bday Combo Set`

**Combo 2 — The Evening Rescue**  
Aloo Patty ₹30 + Amul Lassi ₹25 + Pudina Chips ₹79  
Badge: "Most Popular · ₹134 Total"  
WhatsApp message: `I'd like to order The Evening Rescue combo: Aloo Patty + Amul Lassi + Pudina Chips`

**Combo 3 — The Wellness Pack**  
Any 3 Farmley Makhana packs (14g) ₹90  
Badge: "Healthy Snacker Pick"  
WhatsApp message: `I'd like to order 3x Farmley Makhana packs — please suggest flavours`

**Layout:** 3-column card grid on desktop, vertical stack on mobile. Each card has a prominent price total and single CTA button.

---

### Section 13: Quality Promise (`QualityPromise.tsx`)

**Purpose:** Trust building. Retain the existing philosophy section but redesign as icon strip.

**Four pillars:**
- 🥚 100% Eggless
- 🧈 Pure Ingredients
- 🔥 Baked Fresh Daily
- 🚗 Handled with Care

**Layout:** 4-column icon grid on desktop, 2×2 on mobile. Clean and minimal. No verbose text.

---

### Section 14: Instagram Strip (`InstagramStrip.tsx`)

**Purpose:** Social proof and community building.

**Layout:** Row of 6 square placeholder tiles (150×150px) with gradient overlay and @HeritageOven handle centred. Below: "Follow us @HeritageOven" with Instagram icon linking to `#` for now.

**Note:** These are static placeholder images for now. Leave comments in code for dynamic Instagram feed integration later via Instagram Basic Display API.

---

### Section 15: Discovery Grid — "Everything We Make"

**Purpose:** Expose inventory depth. Site should never feel like it has 12 products.

**Data:** `allProducts` — randomly shuffled on each page load (use `useMemo` with a stable seed, or just sort by category alternating), show 16 items from different categories

**Layout:** 4-column grid on desktop, 2-column on mobile. Standard product cards.

**Rule:** Never show more than 2 consecutive products from the same category. Enforce mixing.

**CTA below grid:** "Browse All 170+ Products →" → `/our-products`

---

## PAGE 2 — CATALOG PAGE (`src/app/our-products/page.tsx`)

This is the most broken page currently. Full rebuild.

### Layout Structure

```
[CollectionHero] — large banner with category name and count
[FilterBar]      — sticky filter pills
[ProductGrid]    — responsive product grid
```

### Filter Bar (`FilterBar.tsx`)

Sticky below navbar. Horizontal scrollable pills on mobile.

**Filter options (these are URL query params: `?filter=X`):**

| Pill Label | Filter Value | Logic |
|---|---|---|
| All | `all` | Show everything |
| Cakes 🎂 | `cakes` | category == 'Cakes' |
| Pastries | `pastries` | category == 'Pastries' |
| Savory Bites ⚡ | `savory` | category == 'Savory Snacks' |
| Tea-Time ☕ | `tea-time` | occasion_tags includes 'Tea Time' |
| Healthy 🥗 | `healthy` | category == 'Healthy Snacks' |
| Party 🎉 | `party` | category == 'Party Supplies' |
| Drinks | `drinks` | category == 'Beverages' |
| Desserts | `desserts` | category == 'Desserts' |
| Under ₹99 | `under99` | price <= 99 |
| Best Sellers ★ | `bestsellers` | is_best_seller == true |

Active filter pill: filled background (amber). Inactive: outlined.

**URL pattern:** `/our-products?filter=tea-time`  
Read `searchParams.filter` in the page component and pass to `ProductGrid`.

### Product Grid (`ProductGrid.tsx`)

Renders the filtered list of products.

- 4 columns desktop, 2 columns mobile
- Product count shown: `Showing 23 products`
- If filtered list > 20 items: show "Load More" button (client-side, show 20 more)
- Empty state: "No products found for this filter. Try another category." with a link to `?filter=all`

### Product Card — Three Variants (`ProductCard.tsx`)

Build all three variants as props: `variant: 'standard' | 'compact' | 'featured'`

**Standard Card (default — used in catalog grid):**
```
[Image placeholder — 280×200px, bg-stone-100, emoji centred]
[Classification badge] — "Premium" (amber) or skip if Budget
[Product name] — clean_name, 2 lines max, font-semibold
[Short description] — 1 line, text-sm, text-stone-500
[Price row] — "₹{price}" large + "Order on WhatsApp →" button
[Cross-sell tag] — subtle: "Pairs well with: Cold Drink"
```

**Compact Card (used in impulse row and carousels):**
```
[Image placeholder — 140×100px]
[Name] — truncated 1 line
[Price badge] — "Only ₹XX" in amber pill
[WhatsApp icon button] — circular, green
```

**Featured Card (used in collection hero and combo sections):**
```
[Full-width image placeholder — 100%, 260px tall]
[Large name overlay at bottom]
[Description below card]
[Full-width CTA button]
```

**WhatsApp CTA always uses `buildWhatsAppUrl(product.clean_name)`**

---

## PAGE 3 — COLLECTION PAGES (`src/app/collections/[slug]/page.tsx`)

Dynamic route. Each slug maps to a curated set of products.

### Collection slug → data mapping

```typescript
// src/lib/collections.ts

export const COLLECTIONS: Record<string, {
  title: string
  subtitle: string
  emoji: string
  description: string
  filter: (p: Product) => boolean
}> = {
  'celebration': {
    title: 'The Celebration Hub',
    subtitle: 'Cakes, decor & everything for your big moments',
    emoji: '🎂',
    description: 'From handcrafted signature cakes to complete party kits — Heritage Oven is your one-stop celebration destination.',
    filter: (p) => ['Cakes', 'Party Supplies'].includes(p.category),
  },
  'tea-time': {
    title: 'Tea-Time Ritual',
    subtitle: 'The perfect crunch for your evening chai',
    emoji: '☕',
    description: 'Authentic desi ghee biscuits, traditional namkeens, and premium savouries — crafted to make your chai moment feel special.',
    filter: (p) => p.occasion_tags.includes('Tea Time'),
  },
  'wellness-pantry': {
    title: 'The Wellness Pantry',
    subtitle: 'Roasted, not fried. Flavourful, not guilty.',
    emoji: '🥗',
    description: 'Premium superfoods and guilt-free munchies. Discover our range of Farmley Makhanas, roasted seed mixes, and healthy snacks.',
    filter: (p) => p.category === 'Healthy Snacks',
  },
  'quick-bites': {
    title: 'Quick Bites',
    subtitle: 'Hot, fresh & ready in minutes',
    emoji: '⚡',
    description: 'Freshly baked patties, stuffed rolls and soft kulchas — perfect for when hunger is non-negotiable.',
    filter: (p) => p.category === 'Savory Snacks',
  },
  'birthday': {
    title: 'Birthday Boutique',
    subtitle: 'Everything for a perfect surprise',
    emoji: '🎉',
    description: 'Cakes, balloons, candles, poppers and banners — one WhatsApp order and your party is sorted.',
    filter: (p) => p.occasion_tags.includes('Birthday'),
  },
  'best-sellers': {
    title: 'The Heritage Favorites',
    subtitle: 'Crowd-validated, community-loved',
    emoji: '★',
    description: 'The products Ghaziabad comes back for — ordered thousands of times and rated highest by our customers.',
    filter: (p) => p.is_best_seller,
  },
  'under-99': {
    title: 'Under ₹99',
    subtitle: 'Add without thinking twice',
    emoji: '💛',
    description: 'Great snacks, pastries and treats for under a hundred rupees. No hesitation required.',
    filter: (p) => p.price <= 99,
  },
}
```

### Collection Page Layout

```
[CollectionHero]
  - Large header section
  - Emoji, title, subtitle
  - Product count badge: "47 products"
  - Optional: mood-colour background (stone/amber/green depending on collection)

[ProductGrid]
  - Full grid of all matching products
  - Same FilterBar as catalog but pre-filtered to this collection
  - "Sort by: Price ↑ · Price ↓ · Name" dropdown

[Cross-Collection CTA Strip]
  - "Also explore:" → 3 other collection pills as horizontal links
```

---

## NAVBAR — FULL SPEC (`src/components/layout/Navbar.tsx`)

### Desktop

```
Height: 64px, sticky, bg-white, border-bottom: 1px solid stone-100

LEFT:
  [Story] → /about
  [Explore ↓] → triggers MegaMenu on hover
  [Healthy] → /collections/wellness-pantry

CENTER:
  Heritage Oven wordmark (existing SVG/font)

RIGHT:
  [Visit] → /contact
  [🔍] → triggers search drawer
  [Order on WhatsApp →] → wa.me/8178769036 — green button, rounded-full
```

### MegaMenu (on "Explore" hover)

```
4-column dropdown, appears below navbar:

Column 1 — Celebrations
  Signature Cakes → /collections/celebration
  Birthday Boutique → /collections/birthday
  Party Supplies → /our-products?filter=party

Column 2 — Daily Eats
  Quick Bites → /collections/quick-bites
  Tea-Time → /collections/tea-time
  Savory Snacks → /our-products?filter=savory

Column 3 — Specialty
  Wellness Pantry → /collections/wellness-pantry
  Best Sellers → /collections/best-sellers
  Under ₹99 → /collections/under-99

Column 4 — Featured (static promo card)
  Background: amber-50
  Title: "Build Your Party 🎉"
  Subtext: "Cake + Decor + Snacks in one order"
  CTA: "Start Building →" → homepage #party-builder anchor
```

### Mobile Drawer

Full-screen slide-over from the left. Sections:

```
[Heritage Oven logo + close button]

SHOP BY MOOD
  🎂 Celebrations
  ⚡ Quick Bites
  ☕ Tea-Time
  🥗 Healthy Pantry
  🎉 Birthday Boutique
  ✨ Best Sellers
  💛 Under ₹99

THE BRAND
  Our Story
  Visit Us
  Contact

[Order on WhatsApp — full-width green button at bottom]
```

---

## FOOTER — FULL SPEC (`src/components/layout/Footer.tsx`)

```
4-column layout on desktop, 2-column on mobile, single-column on small mobile.

Col 1 — Heritage Oven
  Logo + brand statement
  "Bringing premium artisanal baking to the heart of Ghaziabad."
  Social icons: Instagram · Facebook

Col 2 — Discover
  Signature Cakes
  Quick Bites
  Tea-Time Essentials
  Wellness Pantry
  Birthday Boutique
  Under ₹99

Col 3 — About
  Our Story
  Visit the Bakery
  FSSAI: 22725692001172
  EST. 2018

Col 4 — Contact
  📍 Shop-06, Assotech HI-STREET, LGF,
     Crossings Republik, Ghaziabad UP 201016
  📞 +91 8178769036
  [Order on WhatsApp →] — green button

Bottom bar:
  © 2026 Heritage Oven. All Rights Reserved.
  [Privacy Policy]
```

---

## COMPONENT SPECS — Key Behaviours

### `WhatsAppButton.tsx`

```typescript
// Props
interface WhatsAppButtonProps {
  productName: string
  variant?: 'icon' | 'full' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

// Renders:
// icon — circular green WhatsApp icon button (for compact cards)
// full — "Order on WhatsApp →" green pill button
// ghost — outlined white text, for dark backgrounds
```

Always opens in `target="_blank"`. Always uses `buildWhatsAppUrl()`.

### `SectionHeader.tsx`

```typescript
// Props
interface SectionHeaderProps {
  emoji?: string
  label?: string       // small uppercase tag above heading
  heading: string
  subtext?: string
  cta?: { text: string; href: string }
  align?: 'left' | 'center'
}
```

Usage: every homepage section gets a SectionHeader for consistency.

### `HorizontalScroller.tsx`

```typescript
// A snap-scroll horizontal container
// On mobile: full-width, snap to card edges, hide scrollbar
// On desktop: standard overflow-x-auto with custom scrollbar
// Props: children, gap, padding
```

---

## STYLING RULES — Tailwind Conventions

Follow these consistently:

**Colours:**
- Primary text: `text-stone-900`
- Secondary text: `text-stone-500`
- Accent/Gold: `bg-amber-400`, `text-amber-700`
- WhatsApp green: `bg-[#25D366]` or `bg-green-500`
- Background: `bg-white` or `bg-stone-50`
- Card border: `border border-stone-100`

**Typography:**
- Headings: `font-serif` (or the existing brand font — check `globals.css`)
- Body: `font-sans`
- Labels/badges: `text-xs font-semibold uppercase tracking-wide`

**Spacing:**
- Section padding: `py-16 px-4 md:px-8 lg:px-16`
- Card gap: `gap-4 md:gap-6`
- Section gap: `space-y-20 md:space-y-28`

**Hover effects:**
- Cards: `hover:shadow-md transition-shadow duration-200`
- Buttons: `hover:opacity-90 active:scale-95`
- Images: `hover:scale-105 transition-transform duration-300 overflow-hidden`

**Borders:**
- Cards: `rounded-2xl`
- Pills/badges: `rounded-full`
- Buttons: `rounded-full` (CTAs) or `rounded-lg` (secondary)

---

## SEO — METADATA FOR EACH PAGE

### Homepage (`app/page.tsx`)
```typescript
export const metadata = {
  title: 'Heritage Oven | Premium Bakery in Ghaziabad',
  description: 'Freshly baked cakes, savory snacks, namkeens and celebration kits. Premium artisanal bakery in Crossings Republik, Ghaziabad.',
  openGraph: {
    title: 'Heritage Oven — Premium Bakery & Discovery Food Commerce',
    description: '170+ products. Cakes, snacks, healthy munchies & party essentials.',
    url: 'https://heritageoven.in',
    images: [{ url: '/img/carousel-1.webp' }],
  },
}
```

### Catalog Page (`app/our-products/page.tsx`)
```typescript
export const metadata = {
  title: 'Shop All Products | Heritage Oven Ghaziabad',
  description: 'Browse 170+ products — cakes, pastries, namkeens, healthy snacks, beverages and party supplies. Premium bakery in Ghaziabad.',
}
```

### Collection Pages — Dynamic (`app/collections/[slug]/page.tsx`)
```typescript
export async function generateMetadata({ params }) {
  const collection = COLLECTIONS[params.slug]
  return {
    title: `${collection.title} | Heritage Oven`,
    description: collection.description,
  }
}
```

---

## WHATSAPP CTA COPY STANDARDS

These are the pre-filled messages for each context. Always URL-encode them.

| Context | WhatsApp Message |
|---|---|
| Single product | `I'd like to order [product name]` |
| Combo | `I'd like to order a combo: [item1] + [item2] + [item3]` |
| Party builder | `I'd like to order a party bundle: [cake] + [snacks] + [decor items]` |
| Collection browse | `Hi! I'm interested in your [collection name] range. Can you share what's available today?` |
| General inquiry | `Hi Heritage Oven! Can I see today's menu?` |

---

## DATA NOTES & CLEANUP TASKS

The following data quality issues exist in `product_intelligence.json` and should be handled gracefully in the UI:

1. **Duplicate entries:** `Red Bull` appears under both `Beverages` and `Desserts/Ice Cream`. De-duplicate by `id` when rendering — prefer `cold_drinks` variant.
2. **Raw product names:** Some names include technical prefixes like `"25g*150p"` or `"MRP. 30"`. Use `premium_title` from JSON for all display purposes, NOT `clean_name`.
3. **Missing images:** No product images exist for most SKUs. Use category-based emoji placeholders:
   - Cakes 🎂
   - Pastries 🍰
   - Savory Snacks 🥐
   - Namkeen/Chips 🍿
   - Biscuits 🍪
   - Healthy Snacks 🥗
   - Party Supplies 🎉
   - Beverages 🥤
   - Ice Cream/Desserts 🍦
4. **Price as float:** `price: 30.0` — always render as `₹${Math.round(product.price)}`.

---

## IMPLEMENTATION ORDER FOR GEMINI CLI

Execute in this sequence to avoid breaking the live site:

**Phase 1 — Foundation (don't touch existing pages yet)**
1. Create `src/lib/products.ts`
2. Create `src/lib/whatsapp.ts`
3. Create `src/lib/collections.ts`
4. Create `src/components/shared/WhatsAppButton.tsx`
5. Create `src/components/shared/SectionHeader.tsx`
6. Create `src/components/shared/HorizontalScroller.tsx`
7. Create `src/components/catalog/ProductCard.tsx` (all 3 variants)

**Phase 2 — Navigation**
8. Create `src/components/layout/AnnouncementBar.tsx`
9. Rebuild `src/components/layout/Navbar.tsx`
10. Rebuild `src/components/layout/Footer.tsx`

**Phase 3 — Homepage sections (build individually, compose last)**
11. `HeroSection.tsx` (time-aware)
12. `ImpulseRow.tsx`
13. `OccasionGrid.tsx`
14. `DiscoverySection.tsx` (reusable — used for Best Sellers, Tea-Time, Office rows)
15. `PartyBuilder.tsx`
16. `WellnessZone.tsx`
17. `ComboSection.tsx`
18. `QualityPromise.tsx`
19. `InstagramStrip.tsx`

**Phase 4 — Compose homepage**
20. Rebuild `src/app/page.tsx` composing all sections in order

**Phase 5 — Catalog & Collections**
21. Rebuild `src/app/our-products/page.tsx`
22. Create `src/components/catalog/FilterBar.tsx`
23. Create `src/components/catalog/ProductGrid.tsx`
24. Create `src/components/catalog/CollectionHero.tsx`
25. Create `src/app/collections/[slug]/page.tsx`

**Phase 6 — QA**
26. Test all WhatsApp URL outputs manually
27. Test mobile layout at 375px viewport
28. Test all filter params on `/our-products`
29. Verify no product is hardcoded — all from JSON
30. Verify `generateStaticParams` for collection slugs

---

## FINAL CHECKLIST BEFORE DEPLOYMENT

- [ ] All `Order` buttons open WhatsApp in a new tab with correct pre-filled message
- [ ] No broken links (all `/collections/[slug]` routes resolve)
- [ ] Homepage loads in < 3s on mobile (no large unoptimised images)
- [ ] `next/image` used for all images with appropriate `priority` on hero
- [ ] `generateStaticParams` defined for `/collections/[slug]` to enable static generation
- [ ] Filter state is read from URL `searchParams`, not local state (for shareability)
- [ ] No TypeScript errors (`npx tsc --noEmit` passes)
- [ ] Tailwind purge includes all dynamic class strings (no purged classes)
- [ ] FSSAI number visible in footer
- [ ] Phone number clickable (`tel:` link) on mobile

---

*Document version 1.0 — Heritage Oven Site Rebuild · May 2026*
