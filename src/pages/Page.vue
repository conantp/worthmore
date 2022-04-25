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
  return siteContentData['pages'].find(function(item) {
    return (item.link == route.path);
  });
})

let icon_url = computed(() => {
  const activeIcon = siteContentData['pages'].find(function(item) {
    return (item.link == route.path);
  });

  return '/images/' + activeIcon.icon + '.png';
})

let contentHTML = computed(() => {
  const activeContent = siteContentData['pages'].find(function(item) {
    return (item.link == route.path);
  });

  if(route.path == '/how-is-property-assessed-in-north-carolina'){
    return content_how;
  }

  if(route.path == '/are-property-taxes-equitable'){
    return content_equitable;
  }

  if(route.path == '/about'){
    return content_about;
  }

  

  return '';

})

import content_how from '../data/how-is-property-assessed-in-north-carolina.html?raw'
import content_equitable from '../data/are-property-taxes-equitable.html?raw'
import content_about from '../data/about.html?raw'

</script>

<template>
  <div id='about'>
    <div class='page-section page-section--top page-section--split'>
      <div class='page-section__inner'>
        <div class='page-section__left'>
          <h1>{{ activePage.title }}</h1>
            <img 
              class='page-icon'
              :src="icon_url" 
            />
            <div class='page-content' v-html="contentHTML">
            </div>
        </div>
      </div>
    </div>
   <!--  <div class='page-section'>
      <div class='page-section__inner'>
            <div class='page-content' v-html="content">

          </div>
        </div>
    </div> -->
    <OtherTopics 
      title="Other Topics"
      :links="links"
    />
    <FooterSearch />
  </div>
</template>

<style scoped>


</style>
