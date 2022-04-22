<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from './sections/Header.vue'
import Footer from './sections/Footer.vue'



</script>

<template>
  <div id='demo'>
    
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}

#demo{
  @apply bg-primary;
  width:  100%;
  margin: 0 auto;
}
</style>
