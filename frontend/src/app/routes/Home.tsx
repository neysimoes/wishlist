import { useLoaderData } from 'react-router-dom'
import Container from '../component/Container'
import ProductCard from '../component/ProductCard'
import WishlistButton from '../component/WishlistButton'
import { ProductData, ProductListData } from '../types/product'
import { useState } from 'react'
import { getLocalWishlist } from '../helper/localStore'

export const homeLoader = () => {
  return fetch('http://localhost:3000/products')
}

const Home = () => {
  const wishlist = getLocalWishlist()
  const [wishlistProducts, setWishlistProducts] = useState(wishlist)

  const addToWishList = ({ code }: ProductData) => {
    const wishlist = getLocalWishlist()
    if (wishlist.includes(code)) {
      return
    }
    wishlist.push(code)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    setWishlistProducts(wishlist)
  }

  const products = useLoaderData() as ProductListData
  return (
    <Container className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-6">
      {!!products?.length &&
        products.map((product) => (
          <ProductCard
            hasOnWishlist={wishlistProducts.includes(product.code)}
            product={product}
            key={product.code}
            ActionButton={WishlistButton}
            handleAction={addToWishList}
          />
        ))}
    </Container>
  )
}

export default Home
