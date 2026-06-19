import { motion } from "motion/react";
import { Sparkles, ShoppingBag } from "lucide-react";

const combos = [
  {
    name: "The Signature Birthday Surprise",
    includes: "Signature Cake + Party Poppers + Balloons + Candles",
    price: "From ₹699",
    tag: "Celebration Ready",
    image: "/img/products/pineapple-cake.webp"
  },
  {
    name: "Heritage High-Tea Collection",
    includes: "Desi Ghee Biscuits + Ratnam Mixture + Masala Mathi",
    price: "₹499",
    tag: "Bestseller Bundle",
    image: "/img/products/aloo-patty.jpg"
  }
];

export const SmartCombos = () => {
  return (
    <section className="py-24 bg-[#FDFCF8]">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            Curated for You
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-heading text-primary leading-tight mb-8"
          >
            Perfect <span className="italic font-light">Pairings</span>
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all"
          >
            Explore All Bundles
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {combos.map((combo, idx) => (
            <motion.div
              key={combo.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 border border-secondary/50 flex flex-col items-center text-center gap-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest z-20">
                Save 15%
              </div>
              <div className="w-full aspect-[16/9] overflow-hidden bg-muted rounded-sm">
                <img 
                  src={combo.image} 
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="w-full flex flex-col items-center space-y-4">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={12} /> {combo.tag}
                </p>
                <h3 className="text-2xl font-heading font-bold text-primary">{combo.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed italic max-w-sm">{combo.includes}</p>
                <div className="flex flex-col items-center gap-4 pt-6 border-t border-secondary/50 w-full">
                  <span className="text-xl font-bold text-primary">{combo.price}</span>
                  <button className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest bg-primary text-white px-10 py-4 rounded-sm hover:bg-accent transition-colors w-full md:w-auto">
                    Add Bundle <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
