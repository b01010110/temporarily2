<template>
  <QPage class="index-page">
    <LayoutContainer>
      <LayoutPageTitle class="index-page__title">Личный кабинет</LayoutPageTitle>
      <WidgetInformer class="index-page__informers" />
      <WidgetCharts class="index-page__charts" />
      <WidgetUsers class="index-page__users" />
    </LayoutContainer>
  </QPage>
</template>

<script setup lang="ts">
import LayoutContainer from 'components/layout/LayoutContainer.vue'
import LayoutPageTitle from 'components/layout/LayoutPageTitle.vue'
import WidgetInformer from 'components/informer/WidgetInformer.vue'
import WidgetUsers from 'components/user/WidgetUsers.vue'
import WidgetCharts from 'components/chart/WidgetCharts.vue'
</script>

<style lang="scss">
.index-page {
  &__title {
    margin-bottom: 32px;

    @include breakpoint('sm-and-down') {
      margin-bottom: 24px;
    }
  }

  &__informers {
    margin-bottom: 24px;

    @include breakpoint('xs') {
      margin-bottom: 16px;
    }
  }

  &__charts {
    margin-bottom: 24px;

    @include breakpoint('xs') {
      margin-bottom: 16px;
    }
  }
}
</style>
