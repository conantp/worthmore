<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import OtherTopics from '../sections/OtherTopics.vue'
import FooterSearch from '../sections/FooterSearch.vue'

import siteContentData from '../data/siteContent.json'
const siteContent = ref(siteContentData)

const route = useRoute()

const links = computed(() => {
  return siteContentData['why-this-matters-links'].filter(function(item) {
    return (item.link != route.path);
  });
})

let activePage = computed(() => {
  return siteContentData['why-this-matters-links'].find(function(item) {
    return (item.link == route.path);
  });
})

let icon_url = computed(() => {
  const activeIcon = siteContentData['why-this-matters-links'].find(function(item) {
    return (item.link == route.path);
  });

  return '/images/' + activeIcon.icon + '.png';
})
</script>

<template>
  <div id='about'>
    <div class='page-section'>
      <div class='page-section--inner page-section--split'>
        <div class='page-section--left'>
          <h1>{{ activePage.title }}</h1>
          <p>
            {{ activePage.content }}
          </p>
        </div>
        <div class='page-section--right'>
          <img :src="icon_url" />
        </div>
      </div>
    </div>
    <OtherTopics 
      title="Other Topics"
      :links="links"
    />
    <FooterSearch />
  </div>
</template>

<style scoped>
  

</style>
