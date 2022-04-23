<script setup>
import { ref, computed } from 'vue'
import TopicIcon from '../components/TopicIcon.vue'

import siteContentData from '../data/siteContent.json'
const siteContent = ref(siteContentData)

const links = computed(() => {
  return siteContentData['why-this-matters-links']
})
</script>

<template>
  <div class='page-section page-section--list why-this-matters'>
    <div class='page-section__inner'>
      <h2>Why This Matters</h2>

      <div class='page-section__content'>
          <TopicIcon 
            v-for="link in links"
            :content="link"
          />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .why-this-matters{
    @apply bg-white;
  }  
</style>
