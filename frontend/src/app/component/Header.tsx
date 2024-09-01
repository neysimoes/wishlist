import { Favorite } from '../icon'
import Container from './Container'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="bg-primary h-20 flex items-center">
      <Container className="flex flex-row justify-between">
        <h1>
          <img src="public/netshoes-logo.svg" alt="Logotipo da Netshoes" />
        </h1>
        <div className="w-48 flex flex-row justify-between">
          <Link to="/" className="flex flex-row">
            <Favorite className="fill-white text-2xl" />
            <span className="text-white ml-2 text-lg">Wishlist</span>
          </Link>
          <Menu />
        </div>
      </Container>
    </header>
  )
}

export default Header
