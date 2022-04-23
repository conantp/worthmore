<script setup>
  import { ref, computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

let icon_url = computed(() => {
  return '/images/' + props.content.icon + '.png';
})
</script>

<template>
  <div class='topic-icon'>
    <router-link 
      :to="content.link"
    >
      <img :src="icon_url" />
      <h3>
        {{ content.title }}
      </h3>
    </router-link>
  </div>


</template>

<style scoped>
  .topic-icon{
    text-align: center;
  }
  img{
    @apply p-4 max-h-48 mx-auto;
  }
  h3{
    @apply font-bold;
  }
</style>
