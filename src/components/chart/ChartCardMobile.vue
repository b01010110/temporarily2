<template>
  <div class="chart-card-mobile">
    <div class="chart-card-mobile__title">
      Продажи по
      <UISelectText v-model="select" :options="SelectOptions" />
    </div>

    <QTabPanels :model-value="select.value" animated>
      <QTabPanel
        v-for="option in optionCharts"
        :key="option.id"
        class="chart-card-mobile__tab-panel"
        :name="option.type"
      >
        <VChart class="chart-card-mobile__chart" :option="option" autoresize />
      </QTabPanel>
    </QTabPanels>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { extend } from 'quasar'
import VChart from 'vue-echarts'
import { use, ComposeOption } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import { GridComponent, GridComponentOption } from 'echarts/components'
import { UniversalTransition } from 'echarts/features'
import { useChartStore } from 'stores/chart'
import type { ChartCardMobileProps, ChartCardTypes } from 'src/interfaces/Chart'
import UISelectText from 'components/ui/UISelectText.vue'

const props = defineProps<ChartCardMobileProps>()

const chartStore = useChartStore()
const { ChartColors, DefaultOption } = chartStore
const { SelectOptions } = storeToRefs(chartStore)

const select = ref(SelectOptions.value[0])

use([CanvasRenderer, LineChart, GridComponent, UniversalTransition])

const optionCharts = computed(() => {
  const options = props.charts.map((chart) => {
    const option: ComposeOption<GridComponentOption | LineSeriesOption> & {
      id: number
      type: ChartCardTypes
    } = extend(true, {}, DefaultOption, {
      id: chart.id,
      type: chart.type,
      xAxis: { data: chart.data.x },
      series: [
        {
          data: chart.data.y,
          lineStyle: { color: ChartColors[chart.type].line },
          areaStyle: { color: ChartColors[chart.type].area },
        },
      ],
    })

    return option
  })

  return options
})
</script>

<style lang="scss">
.chart-card-mobile {
  padding: 16px;
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

  &__tab-panel {
    padding: 0;
    overflow: hidden;
  }

  &__chart {
    height: 320px;
  }
}
</style>
