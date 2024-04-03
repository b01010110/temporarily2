<template>
  <QSelect v-model="model" class="ui-select-text" :options="options" borderless />
</template>

<script setup lang="ts">
import { QSelectProps } from 'quasar'

defineProps<QSelectProps>()

const model = defineModel()
</script>

<style lang="scss">
.ui-select-text {
  display: inline-flex;

  .q-field__control {
    min-height: initial;
  }

  .q-field__native {
    min-height: initial;
    padding: 0;

    & > span {
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      color: #7226be;
    }
  }

  .q-field__marginal {
    height: auto;
    font-size: 18px;
  }

  .q-field__append {
    padding-left: 4px;

    & > i {
      color: #7226be;
    }
  }
}
</style>
