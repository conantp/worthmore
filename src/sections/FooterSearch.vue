<script setup>

import AddressSearch from '../components/AddressSearch.vue'
import House from '../assets/images/house-top.png'

</script>

<template>
  <div
    class='footer-search'
  >
    <div
    class='footer-search--inner'
    >
      <img 
        class='house'
        :src="House"
      />
      <div
      class='address-search--container'
      >
        <h2>Search for an Address:</h2>
        <AddressSearch 
        class='address-search'
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .house{
  }

  .address-search{

  }

  h2{
    @apply font-bold text-2xl mb-2;
  }

  .footer-search--inner{
      @apply px-8 pt-8 max-w-4xl mx-auto grid sm:grid-cols-2
  }

  .address-search--container{
      @apply sm:grid content-center pl-4;
      @apply pb-4 sm:pb-0 order-first sm:order-last;
      @apply text-center sm:text-left

  }
</style>
