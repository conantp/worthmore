<script setup>
import SocialTwitter from '../assets/images/social--twitter.png'

</script>

<template>
  <a href='http://www.twitter.com'>
      <img
         :src="SocialTwitter" 
         class='twitter-icon'
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
