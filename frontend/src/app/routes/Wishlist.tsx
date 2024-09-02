import { json, useLoaderData } from 'react-router-dom'
import Container from '../component/Container'
import ProductCard from '../component/ProductCard'
import EmptyWishlist from '../component/EmptyWishlist'
import { ProductListData } from '../types/product'

export const wishlistLoader = () => {
  return json([], { status: 200 })
}

const Wishlist = () => {
  const products = useLoaderData() as ProductListData
  console.log(products)
  return (
    <>
      {!products?.length && <EmptyWishlist />}
      {!!products?.length && (
        <Container className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.code} />
          ))}
        </Container>
      )}
    </>
  )
}

export default Wishlist
