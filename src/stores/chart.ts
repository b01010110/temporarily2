import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ComposeOption } from 'echarts/core'
import { formatNumber } from 'src/helper'
import type { LineSeriesOption } from 'echarts/charts'
import type { GridComponentOption } from 'echarts/components'
import type {
  ChartCardProps,
  ChartCardTitle,
  ChartCardColors,
  ChartCardSelectOption,
} from 'src/interfaces/Chart'

export const useChartStore = defineStore('chart', () => {
  const TitleData: ChartCardTitle = {
    day: 'дням',
    month: 'месяцам',
  }

  const ChartColors: ChartCardColors = {
    day: {
      line: '#6395F9',
      area: '#F0F5FF',
    },
    month: {
      line: '#69DFAE',
      area: '#D6F5E8',
    },
  }

  const SelectOptions = ref<ChartCardSelectOption[]>([
    { label: 'дням', value: 'day' },
    { label: 'месяцам', value: 'month' },
  ])

  const DefaultOption: ComposeOption<GridComponentOption | LineSeriesOption> = {
    grid: {
      top: 20,
      bottom: 0,
      left: 0,
      right: 0,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
      axisLabel: {
        interval: 2,
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: '#98A2B3',
      },
      axisLine: {
        lineStyle: {
          color: '#E6E7EA',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: '#98A2B3',
        formatter(value: number) {
          return formatNumber(value)
        },
      },
      splitLine: {
        lineStyle: {
          color: '#E4E7EC',
        },
      },
      interval: 100000,
    },
    series: [
      {
        type: 'line',
        data: [],
        lineStyle: {
          width: 1,
        },
        areaStyle: {},
        symbol: 'none',
      },
    ],
  }

  const chartCards = ref<ChartCardProps[]>([
    {
      id: 1,
      type: 'day',
      data: {
        x: [
          '1.02',
          '2.02',
          '3.02',
          '4.02',
          '5.02',
          '6.02',
          '7.02',
          '8.02',
          '9.02',
          '10.02',
          '11.02',
          '12.02',
          '13.02',
          '14.02',
        ],
        y: [
          0, 80000, 75000, 105000, 110000, 125000, 230000, 125000, 115000, 160000, 227500, 295000,
          280000, 310000,
        ],
      },
    },
    {
      id: 2,
      type: 'month',
      data: {
        x: [
          'Январь',
          'Феврать',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь',
        ],
        y: [
          180000, 280000, 195000, 207000, 175000, 295000, 110000, 125000, 225000, 125000, 103000,
          75000,
        ],
      },
    },
  ])

  return { TitleData, ChartColors, DefaultOption, SelectOptions, chartCards }
})
