import { motion } from "motion/react";
import { Plus, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
  image?: string;
  isBestSeller?: boolean;
}

export const ProductCard = ({ name, price, category, image, isBestSeller }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-secondary/50 overflow-hidden"
    >
      {isBestSeller && (
        <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-1">
          Bestseller
        </div>
      )}
      
      {/* Image Container with hover effect */}
      <div className="aspect-[4/5] bg-muted overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-[#E9E2DB]/30 group-hover:scale-105 transition-transform duration-700 ease-out" />
        )}
      </div>

      <div className="p-6 bg-white text-center flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{category}</p>
        <h3 className="text-lg font-heading font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm font-medium text-muted-foreground mb-6">₹{price}</p>
        
        <button className="w-full border border-primary/10 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Plus size={14} /> Add to Bag
        </button>
      </div>
    </motion.div>
  );
};
