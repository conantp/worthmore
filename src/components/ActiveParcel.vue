<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main.js'

const store = useMainStore();
let dollarUSLocale = Intl.NumberFormat('en-US');


const activeParcel = computed(() => store.activeRow)

// const count = ref(0)
</script>

<template>
  <h1
    class='bg-red-500'
  >
    Active Row
  </h1>
  <div
    v-if="store.activeRow"
  >
    {{ activeParcel.attributes.Address }}
  </div>
  <div>
    ${{ dollarUSLocale.format(store.activeAppraisedValue) }}<br>
    ${{ dollarUSLocale.format(store.activeLandValue) }}<br>
    {{ store.activeAcrerage }} acres<br>
    ${{ dollarUSLocale.format(store.activeLandValuePerAcre) }}

  </div>
  <div
      @click="store.setActiveRow(false)"
  >
    Clear
  </div>

</template>

<style scoped>
</style>
