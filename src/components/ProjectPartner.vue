<script setup>
  import { ref, computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

let icon_url = computed(() => {
  return '/images/' + props.content.icon;
})
</script>

<template>
  <div class='project-partner'>
    <div class='image-container'>
      <img :src="icon_url" />
    </div>
    <div class='project-content'>
      <p>
        {{ content.content }}
      </p>
      <h3>
        - {{ content.title }}
      </h3>
      
    </div>
  </div>


</template>

<style scoped>
  .project-partner{
    @apply sm:flex items-center;
    @apply my-4;
  }

  .image-container{
    @apply flex-initial basis-1/4;
     img{
        @apply w-1/2 mx-auto sm:w-full;
        @apply border-black border-4;
    }
  }

  .project-content{
    @apply flex-grow basis-3/4;
    @apply sm:ml-8 py-4;
    @apply grid;
  }

  p{
    @apply text-sm text-left;
    @apply pb-2;
  }

  h3{
    @apply text-lg text-left font-bold;
  }
</style>
