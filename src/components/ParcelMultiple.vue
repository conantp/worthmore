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
    <div class='multiple-prefix'>
      =
    </div>
    <div class='multiple-inner'>
      <p class=''>
        Your land is valued
      </p>
      <p
        v-if="props.primaryParcel && props.compareParcel"
        class='multiple-figure'
      >
        {{ multiple }}X MORE
      </p>
      <p class=''>
        per acre than the<br> Biltmore Estate!
      </p>
    </div>
  </div>
</template>

<style scoped>
  #multiple{
    @apply sm:grid grid-cols-10 content-center;
  }

  .multiple-prefix{
    @apply hidden;
    @apply text-8xl font-bold col-span-1 text-center lg:grid content-center;
  }
  .multiple-inner{
    @apply sm:col-span-9;
  }
  .multiple-figure{
    @apply text-6xl font-bold;
  }

  p{
    @apply text-center font-semibold text-2xl;
  }
</style>
