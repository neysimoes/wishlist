import { formatCurrency } from '../helper/currency'
import { ProductData } from '../types/product'
import Rating from './Rating'

type ProductCardProps = {
  product: ProductData
  ActionButton?: JSX.ElementType
  handleAction?: (product: ProductData) => void
  hasOnWishlist?: boolean
}

const ProductCard = ({ product, ActionButton, handleAction, hasOnWishlist }: ProductCardProps) => (
  <div
    className={`group ${
      hasOnWishlist && 'hasonwishlist'
    } bg-white shadow-lg rounded-md overflow-hidden shadow-gray-400 mt-4 relative border border-gray-300`}
  >
    {ActionButton && handleAction && (
      <ActionButton
        className="absolute top-2 right-2 cursor-pointer"
        handleClick={() => handleAction(product)}
      />
    )}
    <img className="w-full" src={product.image} alt={product.details.description} />
    <div className="p-2 flex flex-col gap-1">
      <span>{product.name}</span>
      <Rating rating={product.rating} />
      <span className="text-gray-400 line-through">{formatCurrency(product.fullPriceInCents)}</span>
      <span className="text-primary font-bold text-2xl">{formatCurrency(product.salePriceInCents)}</span>
    </div>
  </div>
)

export default ProductCard
