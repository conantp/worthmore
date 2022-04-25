<script setup>
  import { ref, computed } from 'vue'
  import { useMainStore } from '../stores/main.js'

  const store = useMainStore();

  const props = defineProps({
    row: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <li
    class='text-left p-2 py-4 border-black border-b font-bold'
  >
      <a
        :href="store.searchResultsLink(row)"
      >
        <div class='text-md'>
          {{ store.fullAddress(row) }}
        </div>
    </a>
  </li>
</template>

<style scoped>
  li{
    cursor:  pointer;
  }
</style>
