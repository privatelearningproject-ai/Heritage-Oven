import { Product } from './products'

export const COLLECTIONS: Record<string, {
  title: string
  subtitle: string
  emoji: string
  description: string
  filter: (p: Product) => boolean
}> = {
  'celebration': {
    title: 'The Celebration Hub',
    subtitle: 'Cakes, decor & everything for your big moments',
    emoji: '🎂',
    description: 'From handcrafted signature cakes to complete party kits — Heritage Oven is your one-stop celebration destination.',
    filter: (p) => ['Cakes', 'Party Supplies'].includes(p.category),
  },
  'tea-time': {
    title: 'Tea-Time Ritual',
    subtitle: 'The perfect crunch for your evening chai',
    emoji: '☕',
    description: 'Authentic desi ghee biscuits, traditional namkeens, and premium savouries — crafted to make your chai moment feel special.',
    filter: (p) => p.occasion_tags.includes('Tea Time'),
  },
  'wellness-pantry': {
    title: 'The Wellness Pantry',
    subtitle: 'Roasted, not fried. Flavourful, not guilty.',
    emoji: '🥗',
    description: 'Premium superfoods and guilt-free munchies. Discover our range of Farmley Makhanas, roasted seed mixes, and healthy snacks.',
    filter: (p) => p.category === 'Healthy Snacks',
  },
  'quick-bites': {
    title: 'Quick Bites',
    subtitle: 'Hot, fresh & ready in minutes',
    emoji: '⚡',
    description: 'Freshly baked patties, stuffed rolls and soft kulchas — perfect for when hunger is non-negotiable.',
    filter: (p) => p.category === 'Savory Snacks',
  },
  'birthday': {
    title: 'Birthday Boutique',
    subtitle: 'Everything for a perfect surprise',
    emoji: '🎉',
    description: 'Cakes, balloons, candles, poppers and banners — one WhatsApp order and your party is sorted.',
    filter: (p) => p.occasion_tags.includes('Birthday'),
  },
  'best-sellers': {
    title: 'The Heritage Favorites',
    subtitle: 'Crowd-validated, community-loved',
    emoji: '★',
    description: 'The products Ghaziabad comes back for — ordered thousands of times and rated highest by our customers.',
    filter: (p) => p.is_best_seller,
  },
  'under-99': {
    title: 'Under ₹99',
    subtitle: 'Add without thinking twice',
    emoji: '💛',
    description: 'Great snacks, pastries and treats for under a hundred rupees. No hesitation required.',
    filter: (p) => p.price <= 99,
  },
}
