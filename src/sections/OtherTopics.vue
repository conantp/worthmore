<script setup>
import TopicIcon from '../components/TopicIcon.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class='page-section'>
    <div class='page-section--inner'>
      <h2>{{ title }}</h2>
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
  .page-section{
    @apply bg-white;
  }

  .page-section--content{
    @apply grid grid-cols-2 gap-12;
  }
</style>
