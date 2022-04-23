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
    @apply border-black border-b sm:border-none;
  }

  a{
    @apply flex sm:block items-center;
  }
  img{
    @apply flex-initial p-4 max-h-24 sm:max-h-48 aspect-square mx-auto;
    /*@apply p-4 max-h-24 sm:max-h-48 mx-auto;*/
  }
  h3{
    @apply text-left sm:text-center flex-grow font-bold;
  }
</style>
