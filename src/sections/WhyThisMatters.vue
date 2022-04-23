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
  <div class='page-section why-this-matters'>
    <div class='page-section--inner'>
      <h2>Why This Matters</h2>

      <div class='page-section--content'>
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

  .page-section--content{
    @apply grid grid-cols-3 gap-12
  }
</style>
