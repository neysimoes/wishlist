import { formatCurrency } from './currency'

describe('formatCurrency', () => {
  it('should format a numeric string representing cents as Brazilian currency', () => {
    expect(formatCurrency('39999')).toBe('R$ 399,99')
  })

  it('should format a number representing cents as Brazilian currency', () => {
    expect(formatCurrency(39999)).toBe('R$ 399,99')
  })

  it('should format a float number already in reais as Brazilian currency', () => {
    expect(formatCurrency(399.99)).toBe('R$ 399,99')
  })

  it('should format a float string already in reais as Brazilian currency', () => {
    expect(formatCurrency('399.99')).toBe('R$ 399,99')
  })

  it('should add a zero to the right in floats with one decimal place', () => {
    expect(formatCurrency(123.4)).toBe('R$ 123,40')
  })

  it('should return "R$ 0,00" for strings with non-numeric characters', () => {
    expect(formatCurrency('abc123')).toBe('R$ 0,00')
  })

  it('should return "R$ 0,00" for empty strings', () => {
    expect(formatCurrency('')).toBe('R$ 0,00')
  })

  it('should return "R$ 0,00" for NaN values', () => {
    expect(formatCurrency(NaN)).toBe('R$ 0,00')
  })

  it('should return "R$ 0,00" for non-numeric and non-string values', () => {
    // @ts-ignore
    expect(formatCurrency(null)).toBe('R$ 0,00')
    // @ts-ignore
    expect(formatCurrency(undefined)).toBe('R$ 0,00')
    // @ts-ignore
    expect(formatCurrency(true)).toBe('R$ 0,00')
  })

  it('should correctly format numeric strings with leading or trailing whitespace', () => {
    expect(formatCurrency(' 39999 ')).toBe('R$ 399,99')
  })
})
