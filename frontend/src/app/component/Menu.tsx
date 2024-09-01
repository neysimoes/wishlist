import { PersonFill } from '../icon'

const Menu = () => (
  <div className="group relative">
    <div className="rounded-full">
      <PersonFill className="fill-white text-2xl" />
    </div>
    <ul
      className="hidden group-hover:block absolute right-0 top-8 bg-white z-10 w-24 p-2 text-sm
drop-shadow-lg before:block before:border-white before:w-0 before:h-0 before:border-x-transparent before:border-x-8 before:border-b-8 before:absolute before:right-1 before:-top-2"
    >
      <li>Entrar</li>
      <li>Minha Conta</li>
      <li>Endereços</li>
      <li>Minha Netshoes</li>
    </ul>
  </div>
)

export default Menu
