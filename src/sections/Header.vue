<script setup>

import Nav from '../components/Nav.vue'

</script>

<template>
  <div class='header'>
    <Nav 
    class='nav'
    />
  </div>
</template>

<style scoped>
  .header{
    @apply border-b-2 border-black mx-8 py-4;
  }
  .nav{
    @apply max-w-4xl mx-auto
  }


</style>
