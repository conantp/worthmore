<script setup>
  import { ref, computed } from 'vue'

  const props = defineProps({
    shareText: {
      type: String,
      required: true
    }
})
import SocialTwitter from '../assets/images/social--twitter.png'

const getShareUrl = computed(() => "https://twitter.com/intent/tweet?text=" + encodeURIComponent(props.shareText) );


//
</script>

<template>
  <a 
    :href='getShareUrl'
  >
      <img
         :src="SocialTwitter" 
         class='twitter-icon'
        />
    </a>
  
</template>

<style scoped>
  a{
      @apply inline-block;
  }

  img{
    @apply mx-4 block w-10 aspect-square;
  }
</style>
