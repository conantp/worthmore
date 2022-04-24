<script setup>

import Logo from '../assets/images/logo.png'

import ShareFB from '../components/ShareFB.vue'
import ShareTwitter from '../components/ShareTwitter.vue'

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
      <router-link to="/#why-this-matters">Why this Matters</router-link>
      <router-link to="/about">About</router-link>
      <ShareFB />
      <ShareTwitter />
    </div>
  </div>
</template>

<style scoped>
 
</style>
