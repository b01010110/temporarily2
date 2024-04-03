<template>
  <QIcon class="layout-logo" name="img:logo.svg" />
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layout-logo {
  width: 152px;
  height: 48px;

  @include breakpoint('sm-and-down') {
    width: 126px;
    height: 40px;
  }
}
</style>
