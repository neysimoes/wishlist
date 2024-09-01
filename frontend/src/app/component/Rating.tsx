import { Star, StarFill, StarHalf } from '../icon'

type RatingProps = {
  rating: number
}

const Rating = ({ rating }: RatingProps) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  return (
    <div className="flex flex-row">
      {Array(fullStars).fill(<StarFill className="fill-yellow-400" />)}
      {hasHalfStar && <StarHalf className="fill-yellow-400" />}
      {Array(emptyStars).fill(<Star className="fill-yellow-400" />)}
    </div>
  )
}

export default Rating
