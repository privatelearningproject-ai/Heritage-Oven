"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

const steps = [
  {
    id: "intent",
    question: "What is the occasion for your celebration today?",
    options: [
      { label: "A Grand Birthday", sub: "Signature Cakes & Decor" },
      { label: "Elegant Tea Time", sub: "Biscuits & Savories" },
      { label: "Healthy Cravings", sub: "Roasted Superfoods" },
      { label: "Intimate Party", sub: "Platters & Refreshments" },
    ]
  },
  {
    id: "flavor",
    question: "Which flavor profile speaks to you?",
    options: [
      { label: "Intense Chocolate", sub: "Belgian & Dark Cocoa" },
      { label: "Fresh & Fruity", sub: "Seasonal Fruit Infusions" },
      { label: "Zesty & Savory", sub: "Tandoori Spices" },
      { label: "Rich & Nutty", sub: "Roasted Almonds & Ghee" },
    ]
  }
];

export const AIAssistant = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (option: string) => {
    const newSelections = { ...selections, [steps[currentStep].id]: option };
    setSelections(newSelections);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setSelections({});
    setIsFinished(false);
  };

  return (
    <section className="py-32 bg-primary text-white overflow-hidden selection:bg-accent selection:text-white">
      <div className="container px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-full flex items-center justify-center">
              <Sparkles size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] leading-none mb-2">Personalized Discovery</p>
              <h2 className="text-3xl font-heading font-bold tracking-tight">The Choice Assistant</h2>
            </div>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 md:p-20 rounded-sm min-h-[500px] flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!isFinished ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="space-y-16 relative z-10"
                >
                  <div className="space-y-4">
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Step 0{currentStep + 1} of 02</p>
                    <h3 className="text-3xl md:text-5xl font-heading leading-[1.2] max-w-2xl">
                      {steps[currentStep].question}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps[currentStep].options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => handleSelect(opt.label)}
                        className="group flex flex-col items-center gap-1 p-8 bg-white/5 border border-white/5 rounded-sm hover:bg-white hover:border-white transition-all duration-500 text-center"
                      >
                        <span className="text-lg font-heading font-bold group-hover:text-primary transition-colors">{opt.label}</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary/60 transition-colors">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-12 relative z-10"
                >
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-heading italic font-light tracking-tight">An Artisanal Match.</h3>
                    <p className="text-white/60 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                      Guided by your preference for <span className="text-white font-medium border-b border-accent/50">{selections.flavor}</span>, 
                      we've curated a selection perfectly suited for <span className="text-white font-medium border-b border-accent/50">{selections.intent}</span>.
                    </p>
                  </div>

                  <div className="py-12 border-y border-white/10 group cursor-pointer">
                    <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 group-hover:tracking-[0.6em] transition-all">Recommended for You</p>
                    <h4 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">
                      Signature {selections.flavor.split(' ')[1] || selections.flavor} Selection
                    </h4>
                    <p className="text-white/40 text-xs tracking-widest uppercase">Handcrafted & Freshly Baked</p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
                    <button className="bg-accent text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl">
                      Discover the Selection <ArrowRight size={14} />
                    </button>
                    <button onClick={reset} className="text-white/30 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                      <RotateCcw size={14} /> Refine Preferences
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
