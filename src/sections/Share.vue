<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main.js'

import { copyText } from 'vue3-clipboard'

import ShareFB from '../components/ShareFB.vue'
import ShareTwitter from '../components/ShareTwitter.vue'


const store = useMainStore();

const props = defineProps({
  primaryParcel: {
    type: Object,
    required: true
  },
  compareParcel: {
    type: Object,
    required: true
  }
})

const multiple = ref(props.primaryParcel ? store.multipleLandValuePerAcre(props.primaryParcel, props.compareParcel) : '' ) 


let share_text = computed(() => {
  let temp = `My property is *${multiple.value}X* more valuable than the Biltmore per acre! 💰 ` + 
    `Is it #Worthmore or just #Taxedmore? 🧐 Look up your address ` +
    `using this tool here: https://worthmoreproject.com`;
  return temp;
})


function onCopy(event){
  console.log('on copy', event);
}


import {useToast} from "vue-toast-notification";
// useToast({}, 'You did it!');

    let toastInstance = useToast({});



var showCopyMessage = ref('Click to copy text');
const doCopy = () => {
    copyText(share_text.value, undefined, (error, event) => {
      if (error) {
        // alert('Can not copy')
        console.log(error)
        // showCopyMessage = error;
      } else {
        // alert('Copied')
        console.log(event, showCopyMessage.value)
        showCopyMessage.value = "Copied!";
        
        toastInstance.clear();

        toastInstance.open({
            message: 'Text Copied',
            type: 'success',
            position: 'bottom',
            duration: 1000
            // all of other options may go here
        });

        // useTippy(btn, {
        //   content: "" + JSON.stringify(showCopyMessage.value) + "TEST",
        // })
      }
    })
  }



import { useTippy } from 'vue-tippy'
const btn = ref()

useTippy(btn, {
  content: "Click to copy text",
})


</script>

<template>
  <div class='page-section page-section--top share-section'>
    <div class='page-section__inner'>
      <h3>Share Your Results:</h3>
      <div class='share__content'>
        <div class='share__content_text'>
          <textarea 
            @click="doCopy"
            ref="btn"
          >{{ share_text }}</textarea>
          <!-- <button @click="doCopy">Copy + Share</button> -->
        </div>
        <div class='share__content_social'>
          <ShareFB />
          <ShareTwitter 
            :shareText="share_text"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>


  h3{
    @apply font-bold text-2xl sm:text-left;
  }

  .share__content_text{
     @apply flex-grow; 

     textarea{
      @apply border-black border-4 rounded-xl;
      @apply p-3 h-44 sm:h-28;
      @apply text-lg sm:text-xl;
      @apply w-full
    }
    button{
      @apply bg-white p-4 border-black border-2 rounded-xl;
    }
  }

  .share__content{
    @apply p-0;
    @apply sm:flex items-center;

    .share__content_social{
      @apply items-center mt-4 sm:mt-0;

      a{
        @apply inline-block;
      }
    }

    img{
      @apply mx-4 block w-10 aspect-square;
    }
  }
</style>
