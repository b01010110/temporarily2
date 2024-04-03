<template>
  <div class="chart-card">
    <div class="chart-card__title">{{ title }}</div>
    <VChart class="chart-card__chart" :option="option" autoresize />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { extend } from 'quasar'
import VChart from 'vue-echarts'
import type { ChartCardProps } from 'src/interfaces/Chart'
import { use, ComposeOption } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import { GridComponent, GridComponentOption } from 'echarts/components'
import { UniversalTransition } from 'echarts/features'
import { useChartStore } from 'stores/chart'

const props = defineProps<ChartCardProps>()

const { TitleData, ChartColors, DefaultOption } = useChartStore()

const title = computed(() => `Продажи по ${TitleData[props.type]}`)
const color = computed(() => ChartColors[props.type])

use([CanvasRenderer, LineChart, GridComponent, UniversalTransition])

const option = computed(() => {
  let options: ComposeOption<GridComponentOption | LineSeriesOption> = extend(
    true,
    {},
    DefaultOption,
    {
      xAxis: { data: props.data.x },
      series: [
        {
          data: props.data.y,
          lineStyle: { color: color.value.line },
          areaStyle: { color: color.value.area },
        },
      ],
    }
  )

  return options
})
</script>

<style lang="scss">
.chart-card {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;

  &__title {
    margin-bottom: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #101828;
  }

  &__chart {
    height: 400px;
  }
}
</style>
