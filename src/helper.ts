import numeral from 'numeral'

export function formatNumber(value: number) {
  const val = value.toString().replace(/[^\d]/g, '')
  return numeral(val).format('0,0').replaceAll(',', ' ')
}
