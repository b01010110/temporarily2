<template>
  <div class="informer-card">
    <div class="informer-card__content">
      <div class="informer-card__title">{{ title }}</div>
      <div class="informer-card__count">{{ formatNumber(count) }}</div>
    </div>
    <InformerIcon class="informer-card__icon" :type="type" />
  </div>
</template>

<script setup lang="ts">
import InformerIcon from 'components/informer/InformerIcon.vue'
import type { InformerCardProps } from 'src/interfaces/Informer'
import { formatNumber } from 'src/helper'

defineProps<InformerCardProps>()
</script>

<style lang="scss">
.informer-card {
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  background-color: #fff;
  border-radius: 8px;

  @include breakpoint('xs') {
    flex-direction: column;
    justify-content: initial;
    padding: 14px 16px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include breakpoint('xs') {
      justify-content: initial;
    }
  }

  &__title {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
  }

  &__count {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #101828;

    @include breakpoint('xs') {
      font-size: 18px;
      line-height: 28px;
    }
  }

  &__icon {
    @include breakpoint('xs') {
      order: -1;
      margin-bottom: 8px;
    }
  }
}
</style>
