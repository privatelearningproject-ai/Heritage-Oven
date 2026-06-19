const WA_NUMBER = '8178769036'

export const buildWhatsAppUrl = (productName: string, quantity = 1) => {
  const message = `I'd like to order ${quantity > 1 ? `${quantity}x ` : ''}${productName}`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const buildComboUrl = (items: string[]) => {
  const message = `I'd like to order a combo: ${items.join(', ')}`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const buildCollectionUrl = (collectionName: string) => {
  const message = `I'd like to browse your ${collectionName} collection`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
