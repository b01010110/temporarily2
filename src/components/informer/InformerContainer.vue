<template>
  <div class="informer-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.informer-container {
  --informer-container-gap: 24px;
  --informer-card-column: 4;
  --informer-card-all-gap: calc(var(--informer-container-gap) * (var(--informer-card-column) - 1));
  display: flex;
  flex-wrap: wrap;
  gap: var(--informer-container-gap) var(--informer-container-gap);

  & > * {
    flex-basis: calc((100% - var(--informer-card-all-gap)) / var(--informer-card-column));
  }

  @include breakpoint('md-and-down') {
    --informer-card-column: 2;
  }

  @include breakpoint('xs') {
    --informer-container-gap: 16px;
  }
}
</style>
