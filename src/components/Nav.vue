<script setup>

import Logo from '../assets/images/logo.png'

import SocialFB from '../assets/images/social--facebook.png'
import SocialTwitter from '../assets/images/social--twitter.png'

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
      <router-link to="/about">Why this matters</router-link>
      <router-link to="/about">Our Story</router-link>
          <a href='#'>
            <img
               :src="SocialFB" 
               class='fb-icon'
              />
          </a>
          <a href='#'>
            <img
               :src="SocialTwitter" 
              />
          </a>
    </div>
  </div>
</template>

<style scoped>
 
</style>
