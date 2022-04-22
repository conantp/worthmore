<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main.js'

const store = useMainStore();

const props = defineProps({
  primaryParcel: {
    type: Object,
    required: true
  },
  compareParcel: {
    type: Object,
    required: true
  }
})

const multiple = ref(props.primaryParcel ? store.multipleLandValuePerAcre(props.primaryParcel, props.compareParcel) : '' ) 

</script>

<template>
  <div id='multiple'>
    <h3>
      Multiple
    </h3>
    <div
      v-if="props.primaryParcel && props.compareParcel"
      class='multiple-figure'
    >
      {{ multiple }}
    </div>
  </div>
</template>

<style scoped>
  .multiple-figure{
    @apply text-8xl;
  }
</style>
