import React from 'react'

const PILLARS = [
  { emoji: "🥚", title: "100% Eggless", desc: "Pure vegetarian kitchen" },
  { emoji: "🧈", title: "Pure Ingredients", desc: "No compromises on quality" },
  { emoji: "🔥", title: "Baked Fresh Daily", desc: "Never sold yesterday's stock" },
  { emoji: "🚗", title: "Handled with Care", desc: "Safe, local delivery" }
]

export const QualityPromise: React.FC = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <span className="text-5xl md:text-6xl mb-2">{pillar.emoji}</span>
              <h3 className="text-lg font-bold tracking-tight text-white">{pillar.title}</h3>
              <p className="text-xs text-background/60 font-medium uppercase tracking-[0.2em]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
