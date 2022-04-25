<script setup>
import { ref, computed } from 'vue'
import ProjectPartner from '../components/ProjectPartner.vue'

import siteContentData from '../data/siteContent.json'
const siteContent = ref(siteContentData)

const links = computed(() => {
  return siteContentData['our-story']
})
</script>

<template>
  <div class='page-section page-section--list our-story'>
    <div class='page-section__inner'>
      <h2>
        <a name='why-this-matters'>
          Our Story
        </a>
      </h2>

      <div class=''>
          <ProjectPartner 
            v-for="link in links"
            :content="link"
          />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
