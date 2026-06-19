import { motion } from "motion/react";
import { ProductCard } from "../ui/product-card";

const bestSellers = [
  { 
    name: "Signature Pineapple Cake", 
    price: 450, 
    category: "Cakes", 
    image: "/img/products/pineapple-cake.webp" 
  },
  { 
    name: "Biscoff Cheese Cake", 
    price: 180, 
    category: "Pastries", 
    image: "/img/products/blueberry-cheesecake.jpeg" // Using blueberry as high-quality placeholder for cheese cake
  },
  { 
    name: "Paneer Tikka Roll", 
    price: 80, 
    category: "Savory", 
    image: "/img/products/paneer-roll.jpeg" 
  },
  { 
    name: "Desi Ghee Atta Patti Biscuits", 
    price: 320, 
    category: "Biscuits", 
    image: "/img/products/aloo-patty.jpg" // Using as generic high-quality placeholder for snacks
  },
];

export const BestSellers = () => {
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
            Customer Favorites
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-heading text-primary leading-tight mb-8"
          >
            The Heritage <span className="italic font-light">Favorites</span>
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all"
          >
            View All Best Sellers
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, idx) => (
            <ProductCard 
              key={product.name}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
              isBestSeller={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
