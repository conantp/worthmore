<script setup>



</script>

<template>
  <div>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style scoped>
  a{
    @apply bg-red-500 inline-block font-bold rounded-lg shadow-sm px-6 py-2 m-2;
  }
</style>
