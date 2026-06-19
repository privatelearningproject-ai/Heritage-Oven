import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    title: "Signature Cakes",
    subtitle: "Artisanal masterpieces for your most cherished celebrations.",
    image: "/img/products/pineapple-cake.webp",
    cta: "Explore Cakes",
    color: "bg-[#FDF7F2]"
  },
  {
    title: "Wellness Pantry",
    subtitle: "Guilt-free munching for the health-conscious connoisseur.",
    image: "/img/products/aloo-patty.jpg",
    cta: "Shop Healthy",
    color: "bg-[#F2F8F2]"
  }
];

export const PremiumCollections = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {collections.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-sm ${col.color} flex flex-col items-center text-center`}
            >
              <div className="w-full p-10 md:p-16 space-y-6 z-10 flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary leading-tight">
                  {col.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm">
                  {col.subtitle}
                </p>
                <button className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 group-hover:text-accent group-hover:border-accent transition-all">
                  {col.cta} <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
                <img 
                  src={col.image} 
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
