import { Favorite, FavoriteFill } from '../icon'
import Container from './Container'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="bg-primary h-20 flex items-center">
      <Container className="grid grid-cols-3 lg:grid-cols-8 lg:gap-4">
        <Link to="/" className="order-2 lg:order-1 lg:col-span-6">
          <h1>
            <img src="public/logo.svg" alt="Logotipo da loja" />
          </h1>
        </Link>
        <div className="flex flex-row justify-end order-3 lg:order-2">
          <Link to="/wishlist" className="flex flex-row">
            <Favorite className="fill-white text-2xl" />
            <span className="text-white ml-2 text-lg hidden lg:block">Wishlist</span>
          </Link>
        </div>
        <div className="flex flex-row order-1 lg:order-3 lg:justify-end">
          <Menu className="" />
        </div>
      </Container>
    </header>
  )
}

export default Header
