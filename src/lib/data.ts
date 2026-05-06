export interface MenuItem {
  name: string;
  price: string;
  image?: string;
  emoji?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "cakes",
    name: "Cakes",
    items: [
      { name: "Pineapple cake", price: "₹450", emoji: "🍍", image: "/img/products/pineapple-cake.webp" },
      { name: "Black forest", price: "₹500", emoji: "🍒", image: "/img/products/black-forest-cake.webp" },
      { name: "Choco Brownie", price: "₹600", emoji: "🍫", image: "/img/products/choco-brownie-pastry.jpeg" },
      { name: "Rocky Road Cake", price: "₹650", emoji: "⛰️", image: "/img/products/rocky-road-cake.jpeg" },
      { name: "Choco Chips", price: "₹500", emoji: "🍪", image: "/img/products/choco-chip-cake.jpeg" },
      { name: "Choco Vanilla", price: "₹500", emoji: "🍦", image: "/img/products/choco-vanilla-cake.jpeg" },
      { name: "KitKat Truffle", price: "₹650", emoji: "🍫", image: "/img/products/kitkat-truffle.jpeg" },
    ],
  },
  {
    id: "pastries",
    name: "Pastries",
    items: [
      { name: "Pineapple Pastry", price: "₹85", emoji: "🍰", image: "/img/products/pineapple-cake.webp" },
      { name: "Blueberry Cheesecake", price: "₹180", emoji: "🫐", image: "/img/products/blueberry-cheesecake.jpeg" },
      { name: "Royal Dutch Pastry", price: "₹210", emoji: "🍫", image: "/img/products/dark-choco-truffle-pastry.jpeg" },
      { name: "Brownie Pastry", price: "₹85", emoji: "🧁", image: "/img/products/choco-brownie-pastry.jpeg" },
      { name: "Dutch Truffle", price: "₹85", emoji: "🍬", image: "/img/products/dark-choco-truffle-pastry.jpeg" },
      { name: "Red Velvet (Eggless)", price: "₹85", emoji: "🌹", image: "/img/products/red-velvet-cake.webp" },
      { name: "Badam Pista Pastry", price: "₹95", emoji: "🥜", image: "/img/products/badam-pista-pastry.jpeg" },
      { name: "Choco Crunch Pastry", price: "₹90", emoji: "🍫", image: "/img/products/choco-crunch-pastry.jpeg" },
      { name: "Rainbow Pastry", price: "₹100", emoji: "🌈", image: "/img/products/rainbow-pastry.jpeg" },
    ],
  },
  {
    id: "snacks",
    name: "Savory Snacks",
    items: [
      { name: "Paneer Tikka Roll", price: "₹80", emoji: "🌯", image: "/img/products/paneer-roll.jpeg" },
      { name: "Paneer Kulcha", price: "₹60", emoji: "🥯", image: "/img/products/paneer-kulcha.jpeg" },
      { name: "Aloo Patty", price: "₹30", emoji: "🥐", image: "/img/products/aloo-patty.jpg" },
      { name: "Samosa", price: "₹20", emoji: "🥟", image: "/img/products/punjabi-samosa.webp" },
      { name: "Sandwich", price: "₹25", emoji: "🥪", image: "/img/products/sandwich.jpg" },
    ],
  },
];
