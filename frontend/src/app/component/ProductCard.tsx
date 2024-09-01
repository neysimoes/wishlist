import { formatCurrency } from '../helper/currency'
import { ProductData } from '../types/product'

type ProductCardProps = {
  product: ProductData
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="bg-white shadow-lg rounded shadow-gray-400 mt-4">
    <img className="w-full" src={product.image} alt={product.details.description} />
    <div className="p-2 flex flex-col gap-1">
      <span>{product.name}</span>
      <span className="text-gray-300 line-through">{formatCurrency(product.fullPriceInCents)}</span>
      <span className="text-primary font-bold text-2xl">{formatCurrency(product.salePriceInCents)}</span>
    </div>
  </div>
)

export default ProductCard
