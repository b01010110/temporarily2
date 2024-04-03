export interface ChartCardColor {
  line: string
  area: string
}

export interface ChartCardData {
  x: Array<string | number>
  y: Array<string | number>
}

export type ChartCardTypes = 'day' | 'month'

export type ChartCardTitle = {
  [key in ChartCardTypes]: string
}

export type ChartCardColors = {
  [key in ChartCardTypes]: ChartCardColor
}

export interface ChartCardSelectOption {
  label: string
  value: ChartCardTypes
}

export interface ChartCardProps {
  id: number
  type: ChartCardTypes
  data: ChartCardData
}

export interface ChartCardMobileProps {
  charts: ChartCardProps[]
}
