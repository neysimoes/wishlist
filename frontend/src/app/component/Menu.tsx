import { PersonFill } from '../icon'

const Menu = () => (
  <div className="group relative">
    <div className="rounded-full bg-white p-0.5">
      <PersonFill className="fill-primary text-xl" />
    </div>
    <ul className="hidden rounded-md shadow-lg shadow-gray-400 group-hover:block absolute -right-1 top-10 bg-white z-10 w-28 p-2 text-sm drop-shadow-lg before:block before:border-white before:w-0 before:h-0 before:border-x-transparent before:border-x-8 before:border-b-8 before:absolute before:right-2 before:-top-2">
      <li>
        <a href="/#" className="hover:text-primary">
          Entrar
        </a>
      </li>
      <li>
        <a href="/#" className="hover:text-primary">
          Minha Conta
        </a>
      </li>
      <li>
        <a href="/#" className="hover:text-primary">
          Endereços
        </a>
      </li>
      <li>
        <a href="/#" className="hover:text-primary">
          Minha Netshoes
        </a>
      </li>
    </ul>
  </div>
)

export default Menu
