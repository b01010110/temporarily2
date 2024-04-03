<template>
  <div class="widget-charts">
    <ChartContainer class="widget-charts__charts">
      <ChartCard v-for="chartCard in chartCards" :key="chartCard.id" v-bind="chartCard" />
    </ChartContainer>

    <ChartCardMobile class="widget-charts__charts-mobile" :charts="chartCards" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useChartStore } from 'stores/chart'
import ChartContainer from 'components/chart/ChartContainer.vue'
import ChartCard from 'components/chart/ChartCard.vue'
import ChartCardMobile from 'components/chart/ChartCardMobile.vue'

const chartStore = useChartStore()
const { chartCards } = storeToRefs(chartStore)
</script>

<style lang="scss">
.widget-charts {
  &__charts {
    @include breakpoint('xs') {
      display: none;
    }
  }

  &__charts-mobile {
    display: none;

    @include breakpoint('xs') {
      display: block;
    }
  }
}
</style>
