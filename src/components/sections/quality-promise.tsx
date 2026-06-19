import { motion } from "motion/react";
import { ShieldCheck, Flame, Leaf } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "100% Eggless",
    desc: "Pure vegetarian baking without compromising on taste or texture."
  },
  {
    icon: Flame,
    title: "Baked Fresh Daily",
    desc: "Small batches, zero staleness. Your food is always fresh out of the oven."
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    desc: "We source only the finest chocolate, real butter, and fresh local produce."
  }
];

export const QualityPromise = () => {
  return (
    <section className="py-24 bg-white border-y border-secondary/30">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            Our Guarantee
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading text-primary leading-tight"
          >
            The Heritage Oven <span className="italic">Promise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {promises.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
                <p.icon className="text-accent" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
