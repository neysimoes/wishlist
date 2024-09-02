import { Star, StarFill, StarHalf } from '../icon'

type RatingProps = {
  rating: number
}

const Rating = ({ rating }: RatingProps) => {
  if (rating > 5) {
    rating = 5
  }

  if (!rating || rating < 0) {
    rating = 0
  }

  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  return (
    <div className="flex flex-row text-base items-center">
      {Array(fullStars)
        .fill('')
        .map((_, index) => (
          <StarFill className="fill-yellow-400" key={index} />
        ))}
      {hasHalfStar && <StarHalf className="fill-yellow-400" />}
      {Array(emptyStars)
        .fill('')
        .map((_, index) => (
          <Star className="fill-yellow-400" key={index} />
        ))}
      <span className="text-sm">{rating}</span>
    </div>
  )
}

export default Rating
