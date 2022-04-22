<script setup>

import Logo from '../assets/logo.png'

import Social from '../assets/images/social.png'

</script>

<template>
  <div
    class=''

  >
    <div class='nav-inner'>
      <router-link to="/">
        <img
         :src="Logo" 
         class='w-full mx-auto'
        />
      </router-link>

      <div class='nav-links col-span-1 grid grid-cols-3'>
        <router-link to="/about">Why this matters</router-link>
        <router-link to="/about">Our Story</router-link>
        <div class='nav-social'>
            <img
             :src="Social" 
             class='w-20'
            />
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
  .nav-links  a{
    @apply inline-block font-bold m-2;
  }

  .nav-inner{
    @apply p-8 border-b-2 border-black grid grid-cols-2;
  }
</style>
