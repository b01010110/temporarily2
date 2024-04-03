<template>
  <h1>
    <slot />
  </h1>
</template>

<script setup lang="ts"></script>

<style lang="scss">
h1 {
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  letter-spacing: normal;
  color: #101828;

  @include breakpoint('xs') {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }
}
</style>
