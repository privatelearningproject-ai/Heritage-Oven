import { Metadata } from 'next'
import { allProducts } from '@/lib/products'
import { CollectionHero } from '@/components/catalog/CollectionHero'
import { ProductGrid } from '@/components/catalog/ProductGrid'

export const metadata: Metadata = {
  title: "Eggless & Custom Cakes in Crossings Republik, Ghaziabad – Heritage Oven",
  description: "Order birthday, anniversary, and eggless cakes from Heritage Oven in Crossings Republik, Ghaziabad. Pineapple, Black Forest, KitKat Truffle and more.",
}

export default function CakesPage() {
  const cakes = allProducts.filter(
    (product) => product.category === 'Cakes'
  )

  return (
    <div className="pt-[100px] md:pt-[140px]">
      <CollectionHero 
        title="Cakes – Heritage Oven, Crossings Republik"
        emoji="🎂"
        count={cakes.length}
        bgClassName="bg-rose-deep"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="prose prose-stone max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed serif italic">
            Freshly prepared cakes for every occasion in Crossings Republik, Ghaziabad. All variants available eggless. WhatsApp to order custom cakes.
          </p>
        </div>

        <ProductGrid products={cakes} />
      </div>
    </div>
  )
}
