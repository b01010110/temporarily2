<template>
  <div class="chart-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.chart-container {
  --chart-container-gap: 24px;
  --chart-card-column: 2;
  --chart-card-all-gap: calc(var(--chart-container-gap) * (var(--chart-card-column) - 1));
  display: flex;
  flex-wrap: wrap;
  gap: var(--chart-container-gap) var(--chart-container-gap);

  & > * {
    flex-basis: calc((100% - var(--chart-card-all-gap)) / var(--chart-card-column));
  }

  @include breakpoint('md-and-down') {
    --chart-card-column: 1;
  }

  @include breakpoint('xs') {
    --chart-container-gap: 16px;
  }
}
</style>
