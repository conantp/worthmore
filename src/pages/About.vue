<script setup>

import Mockup from '../assets/images/subpage.png'

import AboutTop from '../assets/images/about-top.png'
import OtherTopics from '../assets/images/other-topics.png'
import FooterSearch from '../sections/FooterSearch.vue'

</script>

<template>
  <div id='about'>
    <div>
      <img :src="AboutTop">
    </div>
    <div class='other-topics'>
      <img :src="OtherTopics">
    </div>
    <div>
      <FooterSearch />
    </div>
  </div>
</template>

<style scoped>

  .other-topics{
    @apply bg-white;
  }
img{
    @apply px-8 pt-8 max-w-4xl mx-auto ;

}
</style>
