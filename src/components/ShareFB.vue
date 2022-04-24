<script setup>
import SocialFB from '../assets/images/social--facebook.png'

</script>

<template>
  <a href='http://www.facebook.com'>
      <img
         :src="SocialFB" 
         class='fb-icon'
        />
    </a>
</template>

<style scoped>
  a{
      @apply inline-block;
  }

  img{
    @apply mx-4 block w-10 aspect-square;
  }
</style>
