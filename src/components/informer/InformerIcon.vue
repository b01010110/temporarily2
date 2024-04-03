<template>
  <div class="informer-icon" :style="{ backgroundColor: icon.bgColor }">
    <QIcon
      class="informer-icon__icon"
      :name="icon.path"
      :style="{ color: icon.color }"
      size="24px"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InformerIconProps } from 'src/interfaces/Informer'
import { useInformerStore } from 'stores/informer'

const props = defineProps<InformerIconProps>()

const informerStore = useInformerStore()

const icon = computed(() => informerStore.InformerIconTypes[props.type])
</script>

<style lang="scss">
.informer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;

  @include breakpoint('xs') {
    width: 24px;
    height: 24px;
    background-color: transparent !important;
    border-radius: 0;
  }
}
</style>
