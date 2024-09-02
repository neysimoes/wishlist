import { Favorite } from '../icon'

type WishlistButtonProps = {
  className?: string
  handleClick?: () => void
}

const WishlistButton = ({ className, handleClick }: WishlistButtonProps) => (
  <div
    onClick={handleClick}
    className={`rounded-full bg-gray-400 inline-block p-1 hover:bg-red-500 ${className}`}
  >
    <Favorite className="fill-white text-2xl" />
  </div>
)

export default WishlistButton
