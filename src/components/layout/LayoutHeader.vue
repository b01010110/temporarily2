<template>
  <QHeader class="layout-header">
    <QBtn class="layout-header__menu-button" flat dense round icon="menu" />
    <LayoutSeparator class="layout-header__separator" vertical />
    <LayoutLogo class="layout-header__logo" />
  </QHeader>
</template>

<script setup lang="ts">
import LayoutSeparator from 'components/layout/LayoutSeparator.vue'
import LayoutLogo from 'components/layout/LayoutLogo.vue'
</script>

<style lang="scss">
.layout-header {
  display: flex;
  align-items: center;
  height: 72px;
  background-color: #fff;

  @include breakpoint('sm-and-down') {
    height: 56px;
    background-color: #310062;
  }

  @include breakpoint('md-and-up') {
    &__menu-button,
    &__logo,
    &__separator {
      display: none;
    }
  }

  &__menu-button {
    color: #c39beb;
    width: 24px;
    height: 24px;
    margin-left: 6px;
    margin-right: 6px;
  }

  &__logo {
    margin-left: 16px;
  }
}
</style>
