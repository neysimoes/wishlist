export const formatCurrency = (value: string | number): string => {
  try {
    if (typeof value === 'string') {
      value = value.trim()
      if (!/^\d+(\.\d{1,2})?$/.test(value)) {
        return 'R$ 0,00'
      }
      value = parseFloat(value)
    } else if (typeof value !== 'number' || isNaN(value)) {
      return 'R$ 0,00'
    }
    if (Number.isInteger(value)) {
      value = value / 100
    }

    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  } catch {
    return 'R$ 0,00'
  }
}
