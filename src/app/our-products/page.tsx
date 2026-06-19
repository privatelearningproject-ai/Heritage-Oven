"use client"

import React from "react"

interface MenuItem {
  name: string
  price: number
  image: string
  desc?: string
  brand?: string
}

const MENU: Record<string, MenuItem[]> = {

  bakes: [
    { name: "Biscoff Cheese Cake", price: 180, desc: "Lotus biscoff base · cream cheese · eggless", image: "/img/products/assets/Biscoff Cheesecake  .jpeg" },
    { name: "Belgium Devil Pastry", price: 210, desc: "Dark Belgian chocolate · eggless", image: "/img/products/assets/dark-choco-truffle-pastry.jpeg" },
    { name: "Brownie Pastry", price: 85, desc: "Fudgy walnut slice · eggless", image: "/img/products/assets/choco-brownie-pastry.jpeg" },
    { name: "Red Velvet", price: 85, desc: "Cream cheese frosting · eggless", image: "/img/products/assets/red-velvet-pastry.jpg" },
    { name: "Pineapple Pastry", price: 85, desc: "Light & tropical · eggless", image: "/img/products/assets/images/Pineapple Cake.jpg.webp" },
    { name: "WhiteForest Pastry", price: 85, desc: "Whipped cream & cherry · eggless", image: "/img/products/assets/images/BlackForestCake.jpg.webp" },
  ],
  cakes: [
    { name: "Pineapple Cake", price: 450, desc: "Serves 6–8", image: "/img/products/assets/pineapple-cake.webp" },
    { name: "Black Forest", price: 500, desc: "Whipped cream & cherries", image: "/img/products/assets/black-forest-cake.webp" },
    { name: "Brownie Cake", price: 600, desc: "Dense chocolate fudge", image: "/img/products/assets/images/Rocky Road Cake.jpeg" },
    { name: "Choco Vanilla", price: 500, desc: "Classic layered sponge", image: "/img/products/assets/choco-vanilla-cake.jpeg" },
  ],
  snacks: [
    { name: "Farmley Makhana Peri Peri", price: 30, brand: "Farmley", image: "/img/products/assets/Farmley Makhanna.jpeg" },
    { name: "Farmley Date Bites", price: 480, brand: "Farmley", image: "" },
    { name: "Pudina Chips", price: 79, brand: "Local", image: "" },
    { name: "Beetroot Chips", price: 79, brand: "Local", image: "" },
    { name: "Halka Fulka Mix", price: 79, brand: "Local", image: "" },
    { name: "Malai Sev", price: 125, brand: "Local", image: "" },
    { name: "Bingo Tedhe Medhe", price: 20, brand: "Bingo", image: "" },
    { name: "Max Pro Protein Chips", price: 20, brand: "Max Pro", image: "" },
  ],
  namkeen: [
    { name: "Nutcracker Namkeen", price: 165, image: "" },
    { name: "Bhavnagri Gathiya", price: 125, image: "" },
    { name: "Aloo Lacha", price: 105, image: "" },
    { name: "Ragi Chips", price: 79, image: "" },
    { name: "Banana Chips", price: 99, image: "" },
    { name: "Moong Dal", price: 160, image: "" },
  ],
  icecream: [
    { name: "Rabri Kulfi", price: 25, image: "" },
    { name: "Mini Bar", price: 10, image: "" },
    { name: "Cone Butter Scotch", price: 35, image: "" },
    { name: "Sandwich Slice", price: 30, image: "/img/products/assets/sandwich.jpg" },
    { name: "Cone Double Magic", price: 25, image: "" },
    { name: "Vanilla Cup", price: 10, image: "" },
  ],
  drinks: [
    { name: "Hell Energy Can", price: 60, image: "/img/products/assets/Hell.jpeg" },
    { name: "Starbucks Caramel RTD", price: 300, image: "" },
    { name: "Coca Cola Can", price: 30, image: "/img/products/assets/Coca-Cola.jpeg" },
    { name: "Diet Coke Can", price: 30, image: "" },
    { name: "Fanta", price: 20, image: "/img/products/assets/Fanta.jpeg" },
    { name: "Amul Lassi", price: 25, image: "/img/products/assets/Amul Lassi.jpeg" },
    { name: "Bisleri 500ml", price: 10, image: "/img/products/assets/Bisleri.jpeg" },
  ],
  party: [
    { name: "Balloon Pack (assorted)", price: 79, image: "/img/products/assets/Balooon.jpeg" },
    { name: "Sparkling Candles", price: 79, image: "/img/products/assets/Birthday Candles & Sparkling Candles  .jpeg" },
    { name: "Birthday Banner Premium", price: 79, image: "/img/products/assets/Happy Birthday Banner  .jpeg" },
    { name: "Silver Tiara", price: 110, image: "/img/products/assets/Silver Curtain.jpeg" },
    { name: "Number Candles (per digit)", price: 10, image: "/img/products/assets/Birthday Candles & Sparkling Candles  .jpeg" },
    { name: "Balloon Pump", price: 70, image: "/img/products/assets/Balloon Pump.jpeg" },
    { name: "Pull Flower Ribbon", price: 79, image: "/img/products/assets/Pull Flower Ribbon.jpeg" },
  ],
}

const SECTIONS = [
  { id: "bakes", title: "Fresh Bakes", items: MENU.bakes },
  { id: "cakes", title: "Whole Cakes", items: MENU.cakes },
  { id: "snacks", title: "Curated Snacks", items: MENU.snacks },
  { id: "namkeen", title: "Namkeen", items: MENU.namkeen },
  { id: "icecream", title: "Ice Cream", items: MENU.icecream },
  { id: "drinks", title: "Refreshments", items: MENU.drinks },
  { id: "party", title: "Party Essentials", items: MENU.party },
]

export default function OurProductsPage() {
  return (
    <div className="bg-[#FAFAF5] text-[#2B1E1A] min-h-screen font-sans pt-[90px] md:pt-[110px] pb-16">
      {/* Sticky Sub-Navigation */}
      <nav className="sticky top-[72px] md:top-[90px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 flex gap-2 overflow-x-auto px-4 py-3 [&::-webkit-scrollbar]:hidden">
        {SECTIONS.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="flex-shrink-0 text-xs px-4.5 py-1.5 rounded-full bg-gray-100 hover:bg-[#2B1E1A] hover:text-white transition-colors text-gray-700 font-semibold"
          >
            {sec.title}
          </a>
        ))}
      </nav>

      {/* Main Content Area: Centered, occupying full space without extra borders */}
      <main className="w-full px-[10px] py-[10px] mx-auto space-y-12">
        {SECTIONS.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-36">
            <div className="px-[10px] pb-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2B1E1A]/60 border-b border-[#2B1E1A]/10 pb-1.5">
                {sec.title}
              </h2>
            </div>

            {/* Product Grid: Centrally aligned, exactly 5 columns on large screen, 10px spacing and margin */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[10px] m-[10px]">
              {sec.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image container: Aspect-ratio 1:1, zoom in image by 2px on hover */}
                  <div className="aspect-square overflow-hidden bg-[#F5E6D0]/30 relative">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#2B1E1A]/5 flex items-center justify-center text-xs text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Text details */}
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      {item.brand && (
                        <p className="text-[9px] uppercase tracking-widest text-[#C8A97A] font-semibold mb-0.5">
                          {item.brand}
                        </p>
                      )}
                      <h3 className="text-sm font-medium text-[#1A1A1A] leading-snug">
                        {item.name}
                      </h3>
                      {item.desc && (
                        <p className="text-[11px] text-gray-400 mt-1 leading-normal">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <div className="pt-2 mt-auto">
                      <p className="text-sm font-bold text-[#1A1A1A]">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
