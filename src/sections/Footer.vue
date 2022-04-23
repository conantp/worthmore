<script setup>

import Logo from '../assets/images/logo.png'

import Social from '../assets/images/social.png'
import Mockup from '../assets/images/footer.png'

</script>

<template>
  <div
    class='bg-white'

  >
    <!-- <div class='nav-inner'>
      <router-link to="/"
      class='content-end'
      >
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
      
    </div> -->
    <img
       :src="Mockup" 
       class='w-full'
      />
  </div>
</template>

<style scoped>
  img{
    @apply py-4 max-w-4xl mx-auto
  
  }
</style>
