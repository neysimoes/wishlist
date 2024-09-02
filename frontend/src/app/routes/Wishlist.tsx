import { NavigateFunction, useLoaderData, useNavigate } from 'react-router-dom'
import Container from '../component/Container'
import ProductCard from '../component/ProductCard'
import EmptyWishlist from '../component/EmptyWishlist'
import { ProductData, ProductListData } from '../types/product'
import { getLocalWishlist } from '../helper/localStore'
import RemoveWishProduct from '../component/RemoveWishProduct'

export const wishlistLoader = () => {
  return fetch(`http://localhost:3000/wishlist?skus=${getLocalWishlist()}`)
}

const removeFromWishList = ({ code }: ProductData, navigate: NavigateFunction) => {
  let wishlist = getLocalWishlist()

  if (!wishlist.includes(code)) {
    return
  }

  wishlist = wishlist.filter((item: string) => item !== code)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  navigate('/wishlist')
}

const Wishlist = () => {
  const products = useLoaderData() as ProductListData
  const navigate = useNavigate()

  return (
    <>
      {!products?.length && <EmptyWishlist />}
      {!!products?.length && (
        <Container className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.code}
              ActionButton={RemoveWishProduct}
              handleAction={() => removeFromWishList(product, navigate)}
            />
          ))}
        </Container>
      )}
    </>
  )
}

export default Wishlist
