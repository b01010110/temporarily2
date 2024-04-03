<template>
  <QDrawer v-model="model" class="layout-drawer" :width="288">
    <LayoutLogo class="layout-drawer__logo" />
    <LayoutSeparator class="layout-drawer__separator" />
  </QDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LayoutLogo from 'components/layout/LayoutLogo.vue'
import LayoutSeparator from 'components/layout/LayoutSeparator.vue'

const model = ref(true)
</script>

<style lang="scss">
.layout-drawer {
  background-color: #310062;

  &__logo {
    margin: 12px 16px;
  }

  &__separator {
    margin-bottom: 12px;
  }
}
</style>
