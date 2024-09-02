import { json, useLoaderData } from 'react-router-dom'
import Container from '../component/Container'
import ProductCard from '../component/ProductCard'
import WishlistButton from '../component/WishlistButton'
import { ProductData, ProductListData } from '../types/product'
import productList from '../__mock__/productList'

export const homeLoader = () => {
  return json(productList, { status: 200 })
}

const addToWishList = (product: ProductData) => {
  console.log(`${product.code} adicionado a wishlist!`)
}

const Home = () => {
  const products = useLoaderData() as ProductListData
  return (
    <Container className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {!!products?.length &&
        products.map((product) => (
          <ProductCard
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
