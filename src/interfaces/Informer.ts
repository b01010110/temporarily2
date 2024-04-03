export type InformerTypes = 'goods' | 'catalogs' | 'brands' | 'sellers'

export type InformerIcon = {
  [key in InformerTypes]: {
    path: string
    color: string
    bgColor: string
  }
}

export interface InformerCardProps {
  title: string
  count: number
  type: InformerTypes
}

export interface InformerIconProps {
  type: InformerTypes
}
