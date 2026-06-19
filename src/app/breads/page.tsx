import { Metadata } from 'next'
import { allProducts } from '@/lib/products'
import { CollectionHero } from '@/components/catalog/CollectionHero'
import { ProductGrid } from '@/components/catalog/ProductGrid'

export const metadata: Metadata = {
  title: "Fresh Artisan Breads in Crossings Republik, Ghaziabad – Heritage Oven",
  description: "Daily baked artisan breads and savory bakes in Crossings Republik, Ghaziabad. No preservatives. Order from Heritage Oven on WhatsApp.",
}

export default function BreadsPage() {
  const breads = allProducts.filter(
    (product) => product.category === 'Savory Snacks'
  )

  return (
    <div className="pt-[100px] md:pt-[140px]">
      <CollectionHero 
        title="Breads & Savory Bakes – Heritage Oven, Crossings Republik"
        emoji="🥖"
        count={breads.length}
        bgClassName="bg-brown-deep"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="prose prose-stone max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed serif italic">
            Daily baked artisan breads and savory bakes in Crossings Republik, Ghaziabad. No preservatives. Order from Heritage Oven on WhatsApp.
          </p>
        </div>

        <ProductGrid products={breads} />
      </div>
    </div>
  )
}
