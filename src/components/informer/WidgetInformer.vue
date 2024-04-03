<template>
  <InformerContainer class="widget-informer">
    <InformerCard
      v-for="informerCard in informerCards"
      :key="informerCard.title"
      v-bind="informerCard"
    />
  </InformerContainer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useInformerStore } from 'stores/informer'
import InformerContainer from 'components/informer/InformerContainer.vue'
import InformerCard from 'components/informer/InformerCard.vue'

const informerStore = useInformerStore()
const { informerCards } = storeToRefs(informerStore)
</script>

<style lang="scss"></style>
