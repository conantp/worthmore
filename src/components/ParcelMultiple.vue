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
      <p class='font-bold'>
        Your land is taxed
      </p>
      <p
        v-if="props.primaryParcel && props.compareParcel"
        class='multiple-figure'
      >
        {{ multiple }}X MORE
      </p>
      <p class='font-bold'>
        per acre than the Biltmore Estate!
      </p>
    </div>
  </div>
</template>

<style scoped>
  #multiple{
    @apply content-center grid grid-cols-10;
  }

  .multiple-prefix{
    @apply text-6xl font-bold col-span-2 text-center;
  }
  .multiple-inner{
    @apply col-span-8;
  }
  .multiple-figure{
    @apply text-6xl font-bold;
  }

  p{
    @apply text-center font-semibold;
  }
</style>
