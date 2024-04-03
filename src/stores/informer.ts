import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { InformerIcon, InformerCardProps } from 'src/interfaces/Informer'

export const useInformerStore = defineStore('informer', () => {
  const InformerIconTypes: InformerIcon = {
    goods: {
      path: 'app:shopping-cart',
      color: '#1570EF',
      bgColor: '#EFF8FF',
    },
    catalogs: {
      path: 'app:category-alt',
      color: '#039855',
      bgColor: '#ECFDF3',
    },
    brands: {
      path: 'app:star',
      color: '#DC6803',
      bgColor: '#FFFAEB',
    },
    sellers: {
      path: 'app:store-alt',
      color: '#E31B53',
      bgColor: '#FFF1F3',
    },
  }

  const informerCards = ref<InformerCardProps[]>([
    { title: 'Товаров', count: 14360601, type: 'goods' },
    { title: 'Каталогов', count: 3069, type: 'catalogs' },
    { title: 'Брендов', count: 352335, type: 'brands' },
    { title: 'Продавцов', count: 47246, type: 'sellers' },
  ])

  return { InformerIconTypes, informerCards }
})
