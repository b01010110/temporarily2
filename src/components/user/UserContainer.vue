<template>
  <div class="user-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.user-container {
  --user-container-gap: 24px;
  --user-card-column: 4;
  --user-card-all-gap: calc(var(--user-container-gap) * (var(--user-card-column) - 1));
  display: flex;
  flex-wrap: wrap;
  gap: var(--user-container-gap) var(--user-container-gap);

  & > * {
    flex-basis: calc((100% - var(--user-card-all-gap)) / var(--user-card-column));
  }

  @include breakpoint('md-and-down') {
    --user-card-column: 2;
  }

  @include breakpoint('sm-and-down') {
    --user-card-column: 1;
  }

  @include breakpoint('xs') {
    --user-container-gap: 16px;
  }
}
</style>
