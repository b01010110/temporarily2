<template>
  <QLayout class="default-layout" view="lHh LpR lFf">
    <LayoutHeader />
    <LayoutDrawer />

    <QPageContainer class="default-layout__page-container">
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<script setup lang="ts">
import LayoutDrawer from 'components/layout/LayoutDrawer.vue'
import LayoutHeader from 'components/layout/LayoutHeader.vue'
</script>

<style lang="scss">
.default-layout {
  &__page-container {
    background-color: #f9fafb;
  }
}
</style>
