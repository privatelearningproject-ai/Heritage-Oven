import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bakery Tips & Stories – Heritage Oven Blog, Crossings Republik Ghaziabad",
  description: "Baking tips, product stories and updates from Heritage Oven – your local bakery in Crossings Republik, Ghaziabad.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "Looking for a Bakery Near You in Ghaziabad? Heritage Oven Has You Covered",
      excerpt: "Looking for fresh eggless cakes, pastries, or artisan sourdough in Crossings Republik, Ghaziabad? Here is why Heritage Oven is the trusted bakery near you.",
      date: "June 19, 2026",
      slug: "bakery-near-me-crossings-republik-ghaziabad",
      image: "/img/products/assets/heritage-display.jpg",
    },
  ];

  return (
    <div className="pt-[120px] md:pt-[160px] min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
            Our Journal
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 tracking-tight">
            From Our Oven
          </h1>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-xl">
            Baking tips, product stories, and updates from Heritage Oven. Follow our journey of flour, fire, and tradition in Crossings Republik.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="group bg-white rounded-lg overflow-hidden border border-border/40 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/20 flex flex-col h-full"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                  <span>{post.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  <span>Bakery Life</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-stone-50 mt-auto">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors"
                  >
                    Read Article 
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
