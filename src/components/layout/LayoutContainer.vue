<template>
  <div class="layout-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layout-container {
  max-width: 1800px;
  padding: 24px;
  margin-left: auto;
  margin-right: auto;

  @include breakpoint('xl') {
    padding: 40px;
  }

  @include breakpoint('xs') {
    padding: 16px;
  }
}
</style>
