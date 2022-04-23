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
  <div class='page-section page-section--list'>
    <div class='page-section__inner'>
      <h2>{{ title }}</h2>
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
  .page-section{
    @apply bg-white;
  }

  .page-section--list{
    .page-section__content{
      @apply sm:grid sm:grid-cols-2 sm:gap-12;
    }
  }
</style>
