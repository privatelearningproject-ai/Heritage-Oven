import { motion } from "motion/react";
import { Cake, Cookie, Croissant, Leaf, PartyPopper } from "lucide-react";

const categories = [
  { name: "Cakes", icon: Cake, color: "bg-[#FDF2F2]" },
  { name: "Pastries", icon: Cookie, color: "bg-[#F2F4F8]" },
  { name: "Savory", icon: Croissant, color: "bg-[#FDF7F2]" },
  { name: "Healthy", icon: Leaf, color: "bg-[#F2F8F2]" },
  { name: "Party", icon: PartyPopper, color: "bg-[#F6F2F8]" },
];

export const CategoryScroller = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container px-6">
        <div className="flex items-center justify-start md:justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar pb-4">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 group min-w-[80px]"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 ${cat.color} rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                <cat.icon className="text-primary/70 group-hover:text-accent transition-colors duration-500" size={28} />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
