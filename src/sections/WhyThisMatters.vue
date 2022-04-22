<script setup>

import Mockup from '../assets/images/why-this-matters.png'

</script>

<template>
  <div
    class='why-this-matters'
  >
    <router-link to="/about">
      <div
      class='why-this-matters--inner'
      >

      </div>
       <img class='mockup' :src="Mockup">
     </router-link>
  </div>
</template>

<style scoped>
  .why-this-matters{
    @apply bg-white;
  }

  .why-this-matters--inner{
    @apply px-8 pt-8 max-w-4xl mx-auto grid grid-cols-3;
  }

  .mockup{
      @apply px-8 pt-8 max-w-4xl mx-auto ;

  }
</style>
