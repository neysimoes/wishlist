import { render } from '@testing-library/react'
import Rating from './Rating'

jest.mock('../icon', () => ({
  StarFill: () => {
    return <div data-testid="star-fill" />
  },
  StarHalf: () => {
    return <div data-testid="star-half" />
  },
  Star: () => {
    return <div data-testid="star" />
  },
}))

describe('Rating', () => {
  it('renders five empty stars when rating is 0', () => {
    const { getAllByTestId } = render(<Rating rating={0} />)
    expect(getAllByTestId('star')).toHaveLength(5)
  })

  it('renders one filled star and four empty stars when rating is 1', () => {
    const { getAllByTestId } = render(<Rating rating={1} />)
    expect(getAllByTestId('star-fill')).toHaveLength(1)
    expect(getAllByTestId('star')).toHaveLength(4)
  })

  it('renders three filled stars, one half star, and one empty star when rating is 3.5', () => {
    const { getAllByTestId } = render(<Rating rating={3.5} />)
    expect(getAllByTestId('star-fill')).toHaveLength(3)
    expect(getAllByTestId('star-half')).toHaveLength(1)
    expect(getAllByTestId('star')).toHaveLength(1)
  })

  it('renders five filled stars when rating is 5', () => {
    const { getAllByTestId } = render(<Rating rating={5} />)
    expect(getAllByTestId('star-fill')).toHaveLength(5)
  })

  it('renders four filled stars and one half star when rating is 4.5', () => {
    const { getAllByTestId } = render(<Rating rating={4.5} />)
    expect(getAllByTestId('star-fill')).toHaveLength(4)
    expect(getAllByTestId('star-half')).toHaveLength(1)
  })

  it('renders three filled stars and two empty stars when rating is 3', () => {
    const { getAllByTestId } = render(<Rating rating={3} />)
    expect(getAllByTestId('star-fill')).toHaveLength(3)
    expect(getAllByTestId('star')).toHaveLength(2)
  })

  it('renders two filled stars, one half star, and two empty stars when rating is 2.5', () => {
    const { getAllByTestId } = render(<Rating rating={2.5} />)
    expect(getAllByTestId('star-fill')).toHaveLength(2)
    expect(getAllByTestId('star-half')).toHaveLength(1)
    expect(getAllByTestId('star')).toHaveLength(2)
  })

  it('renders one filled star, one half star, and three empty stars when rating is 1.5', () => {
    const { getAllByTestId } = render(<Rating rating={1.5} />)
    expect(getAllByTestId('star-fill')).toHaveLength(1)
    expect(getAllByTestId('star-half')).toHaveLength(1)
    expect(getAllByTestId('star')).toHaveLength(3)
  })

  it('renders zero filled stars and five empty stars when rating is 0.5', () => {
    const { getAllByTestId } = render(<Rating rating={0.5} />)
    expect(getAllByTestId('star-half')).toHaveLength(1)
    expect(getAllByTestId('star')).toHaveLength(4)
  })
})
