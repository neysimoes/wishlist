import { Favorite } from '../icon'
import Container from './Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-primary h-20 flex items-center">
      <Container className="flex flex-row justify-between">
        <h1>
          <img src="public/netshoes-logo.svg" alt="Logotipo da Netshoes" />
        </h1>
        <div className="w-48 flex flex-row justify-between">
          <Link to="/">
            <Favorite className="fill-white text-2xl" />
          </Link>
          <ul>
            <li>Entrar</li>
            <li>Minha Conta</li>
            <li>Endereços</li>
            <li>Minha Netshoes</li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header
