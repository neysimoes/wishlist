import { useEffect, useRef, useState } from 'react'
import { PersonFill } from '../icon'

type MenuProps = {
  className?: string
}

const Menu = ({ className }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={`group relative ${className} inline-block`} ref={menuRef}>
      <div className="rounded-full bg-white p-0.5" onClick={toggleMenu}>
        <PersonFill className="fill-primary text-xl" />
      </div>
      <ul className="hidden rounded-md shadow-lg shadow-gray-400 group-hover:block absolute lg:-right-1 lg:left-auto -left-1 top-8 bg-white z-10 w-28 p-2 text-sm drop-shadow-lg before:block before:border-white before:w-0 before:h-0 before:border-x-transparent before:border-x-8 before:border-b-8 before:absolute before:left-2 lg:before:left-auto lg:before:right-2 before:-top-2">
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
}

export default Menu
