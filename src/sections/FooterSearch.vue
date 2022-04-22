<script setup>

import Mockup from '../assets/images/footer-search.png'
import AddressSearch from '../components/AddressSearch.vue'
import House from '../assets/images/house.png'

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
    <!-- <img class='mockup' :src="Mockup"> -->
  </div>
</template>

<style scoped>
  .mockup{
      @apply px-8 pt-8 max-w-4xl mx-auto ;

  }

  .house{
  }

  .address-search{

  }

  h2{
    @apply font-bold text-2xl mb-2;
  }

  .footer-search--inner{
      @apply px-8 pt-8 max-w-4xl mx-auto grid grid-cols-2
  }

  .address-search--container{
          @apply grid content-center;

  }
</style>
