<script setup>

import Logo from '../assets/images/logo.png'

import ShareFBNav from '../components/ShareFBNav.vue'
import ShareTwitterNav from '../components/ShareTwitterNav.vue'

</script>

<template>
  <div class='nav'>
    <div class='nav--left'>
      <router-link 
        to="/"
        class=''
      >
        <img
         :src="Logo" 
         class='logo'
        />
      </router-link>
    </div>
    <div class='nav--links'>
      <router-link to="/about">About</router-link>
      <a href="https://worthmoreupdates.blogspot.com">News</a>
      <router-link to="/contact">Contact</router-link>
      <ShareFBNav />
      <!-- <ShareTwitterNav /> -->
    </div>
  </div>
</template>

<style scoped>
 
</style>
