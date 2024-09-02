import { Close } from '../icon'

type RemoveWishProductProps = {
  className?: string
  handleClick?: () => void
}

const RemoveWishProduct = ({ className, handleClick }: RemoveWishProductProps) => (
  <div onClick={handleClick} className={className}>
    <Close className=" text-2xl" />
  </div>
)

export default RemoveWishProduct
