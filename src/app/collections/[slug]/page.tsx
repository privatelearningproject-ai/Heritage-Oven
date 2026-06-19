import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allProducts } from '@/lib/products'
import { COLLECTIONS } from '@/lib/collections'
import { CollectionHero } from '@/components/catalog/CollectionHero'
import { ProductGrid } from '@/components/catalog/ProductGrid'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = COLLECTIONS[slug]
  
  if (!collection) {
    return {
      title: 'Collection Not Found | Heritage Oven',
    }
  }

  return {
    title: `${collection.title} | Heritage Oven`,
    description: collection.description,
  }
}

export async function generateStaticParams() {
  return Object.keys(COLLECTIONS).map((slug) => ({
    slug,
  }))
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params
  const collection = COLLECTIONS[slug]

  if (!collection) {
    notFound()
  }

  const filteredProducts = allProducts.filter(collection.filter)

  return (
    <div className="pt-[100px] md:pt-[140px]">
      <CollectionHero 
        title={collection.title}
        subtitle={collection.subtitle}
        emoji={collection.emoji}
        count={filteredProducts.length}
        bgClassName={
          slug === 'wellness-pantry' ? 'bg-green-deep' :
          ['celebration', 'birthday'].includes(slug) ? 'bg-rose-deep' :
          ['under-99', 'quick-bites'].includes(slug) ? 'bg-orange-deep' :
          slug === 'tea-time' ? 'bg-brown-deep' :
          'bg-primary'
        }
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="prose prose-stone max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed serif italic">
            {collection.description}
          </p>
        </div>

        <ProductGrid products={filteredProducts} />

        <div className="mt-24 pt-12 border-t border-stone-100">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8 text-center">
            Also Explore
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(COLLECTIONS)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, value]) => (
                <Link
                  key={key}
                  href={`/collections/${key}`}
                  className="px-10 py-5 bg-background hover:bg-white rounded-none border border-foreground/5 transition-all text-center group shadow-sm"
                >
                  <span className="text-2xl block mb-2">{value.emoji}</span>
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-widest group-hover:text-accent">
                    {value.title}
                  </span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
