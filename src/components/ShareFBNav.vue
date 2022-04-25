<script setup>
import SocialFB from '../assets/images/social--facebook.png'

</script>

<template>
  <a target="_blank" 
      href='https://www.facebook.com/Worthmore-Project-101631242543798'
  >
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
