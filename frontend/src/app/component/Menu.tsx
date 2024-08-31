import { PersonFill } from '../icon'

const Menu = () => (
  <div>
    <div className="rounded-full">
      <PersonFill className="fill-white" />
    </div>
    <ul className="hidden group/menu">
      <li>Entrar</li>
      <li>Minha Conta</li>
      <li>Endereços</li>
      <li>Minha Netshoes</li>
    </ul>
  </div>
)

export default Menu
