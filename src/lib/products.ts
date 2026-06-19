import productData from '../../product_intelligence.json'

export type Product = {
  id: string
  clean_name: string
  premium_title: string
  price: number
  category: string
  subcategory: string
  seo_description: string
  short_description: string
  tags: string[]
  occasion_tags: string[]
  classification: 'Budget' | 'Premium'
  is_best_seller: boolean
  cross_sell: string[]
  combos: string[]
  image?: string
}

// @ts-ignore
export const allProducts: Product[] = productData.products

// Filter helpers
export const getByCategory = (category: string) =>
  allProducts.filter(p => p.category === category)

export const getByOccasion = (tag: string) =>
  allProducts.filter(p => p.occasion_tags.includes(tag))

export const getBestSellers = () =>
  allProducts.filter(p => p.is_best_seller)

export const getUnder99 = () =>
  allProducts.filter(p => p.price <= 99)

export const getByClassification = (c: 'Budget' | 'Premium') =>
  allProducts.filter(p => p.classification === c)

export const getByIds = (ids: string[]) =>
  allProducts.filter(p => ids.includes(p.clean_name))

// Occasion-based collections (for homepage sections)
export const OCCASION_COLLECTIONS = {
  teaTime: getByOccasion('Tea Time').slice(0, 12),
  officeSnack: getByOccasion('Office Snack').slice(0, 8),
  birthday: getByOccasion('Birthday').slice(0, 12),
  quickBite: getByCategory('Savory Snacks'),
  wellness: getByCategory('Healthy Snacks').slice(0, 10),
  impulse: getUnder99().slice(0, 10),
}
