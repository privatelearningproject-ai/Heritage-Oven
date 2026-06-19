import { Metadata } from 'next'
import { HeroSection } from '@/components/homepage/HeroSection'
import { ImpulseRow } from '@/components/homepage/ImpulseRow'
import { OccasionGrid } from '@/components/homepage/OccasionGrid'
import { DiscoverySection } from '@/components/homepage/DiscoverySection'
import { PartyBuilder } from '@/components/homepage/PartyBuilder'
import { WellnessZone } from '@/components/homepage/WellnessZone'
import { ComboSection } from '@/components/homepage/ComboSection'
import { QualityPromise } from '@/components/homepage/QualityPromise'
import { InstagramStrip } from '@/components/homepage/InstagramStrip'
import { DiscoveryGrid } from '@/components/homepage/DiscoveryGrid'
import { 
  getBestSellers, 
  getByOccasion, 
  OCCASION_COLLECTIONS 
} from '@/lib/products'

export const metadata: Metadata = {
  title: "Heritage Oven – Bakery & Cake Shop in Crossings Republik, Ghaziabad",
  description: "Freshly baked cakes, pastries, eggless cakes, and artisan breads in Crossings Republik, Ghaziabad. Order on WhatsApp. FSSAI certified.",
  openGraph: {
    title: 'Heritage Oven — Premium Bakery & Discovery Food Commerce',
    description: '170+ products. Cakes, snacks, healthy munchies & party essentials.',
    url: 'https://heritageoven.in',
    images: [{ url: '/img/carousel-1.webp' }],
  },
}

export default function Home() {
  const bestSellers = getBestSellers()
  const officeSnacks = getByOccasion('Office Snack').slice(0, 8)
  const teaTimeProducts = OCCASION_COLLECTIONS.teaTime

  return (
    <div className="flex flex-col pt-0">
      {/* 4. Sticky Category Pills (Mobile Only) */}
      <div className="md:hidden sticky top-[41px] z-40 bg-white/90 backdrop-blur-md border-b border-foreground/5 py-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-6 whitespace-nowrap">
          <a href="#cakes" className="px-5 py-2 bg-rose-tint rounded-full text-[10px] font-bold text-rose-text uppercase tracking-wider">🎂 Cakes</a>
          <a href="#quick-bites" className="px-5 py-2 bg-orange-tint rounded-full text-[10px] font-bold text-orange-text uppercase tracking-wider">🥐 Bites</a>
          <a href="#tea-time" className="px-5 py-2 bg-brown-tint rounded-full text-[10px] font-bold text-brown-text uppercase tracking-wider">☕ Tea-Time</a>
          <a href="#wellness" className="px-5 py-2 bg-green-tint rounded-full text-[10px] font-bold text-green-text uppercase tracking-wider">🥗 Healthy</a>
          <a href="#under-99" className="px-5 py-2 bg-gold-tint rounded-full text-[10px] font-bold text-gold-text border border-gold-deep/10 uppercase tracking-wider">⚡ ₹99</a>
        </div>
      </div>

      <HeroSection />

      <p className="text-[11px] text-muted-foreground/60 tracking-wider max-w-2xl mx-auto text-center px-6 py-8 bg-background font-sans leading-relaxed">
        Heritage Oven is a bakery and cake shop in Crossings Republik, Ghaziabad. We serve fresh cakes, pastries, artisan breads, and savory snacks daily from Shop-06, Assotech Hi-Street.
      </p>

      <div id="under-99">
        <ImpulseRow />
      </div>

      <OccasionGrid />

      <div id="best-sellers">
        <DiscoverySection 
          title="The Heritage Favorites"
          label="★ Most Ordered"
          subtext="The crowd-validated hits that Ghaziabad keeps coming back for."
          products={bestSellers}
          ctaHref="/collections/best-sellers"
          emoji="✨"
          bgClassName="bg-gold-tint"
        />
      </div>

      <div id="office-rescue">
        <DiscoverySection 
          title="Office Hunger Rescue"
          label="💼 Productivity Fuel"
          subtext="No more sad desk lunches. Fresh rolls, patties & healthy munchies — order by WhatsApp and we'll sort your afternoon."
          products={officeSnacks}
          ctaHref="/collections/quick-bites"
          emoji="🌯"
          bgClassName="bg-orange-tint"
        />
      </div>

      <div id="tea-time">
        <DiscoverySection 
          title="The 4PM Tea Ritual"
          label="☕ Comfort & Nostalgia"
          subtext="Desi ghee biscuits, crispy namkeens, and the perfect crunch for your evening chai."
          products={teaTimeProducts}
          ctaHref="/collections/tea-time"
          emoji="🍵"
          bgClassName="bg-brown-tint"
        />
      </div>

      <div className="pt-24">
        <PartyBuilder />
      </div>

      <div id="wellness">
        <WellnessZone />
      </div>

      <ComboSection />

      <QualityPromise />

      <InstagramStrip />

      <DiscoveryGrid />
    </div>
  )
}
