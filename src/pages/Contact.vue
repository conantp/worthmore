<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import OurStory from '../sections/OurStory.vue'

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

  return content_about;
})

import content_about from '../data/contact.html?raw'

</script>

<template>
  <div id='about'>
    <div class='page-section page-section--top page-section--split'>
      <div class='page-section__inner'>
        <div class='page-section__left'>
          <h1>{{ activePage.title }}</h1>
            
            <div class='page-content' v-html="contentHTML">
            </div>
        </div>
      </div>
    </div>
    <form class='contact-form' name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    <OurStory />
    <FooterSearch />
  </div>
</template>

<style scoped>


</style>
