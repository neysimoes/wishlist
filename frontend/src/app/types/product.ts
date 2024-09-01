export type ProductData = {
  code: string
  name: string
  available: boolean
  visible: boolean
  details: {
    name: string
    description: string
  }
  fullPriceInCents: string
  salePriceInCents: string
  rating: number
  image: string
  stockAvailable: boolean
}
