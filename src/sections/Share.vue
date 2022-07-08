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

function splitStringAtInterval (string, interval) {
  var result = [];
  for (var i=0; i<string.length; i+=interval)
    result.push(string.substring (i, i+interval));
  return result.join("\n").replace(/Z/g, '💰');
}


const multiple = ref(props.primaryParcel ? store.multipleLandValuePerAcre(props.primaryParcel, props.compareParcel) : '' ) 

const multipleIcon = ref(props.primaryParcel ? '💰'.repeat(store.multipleLandValuePerAcre(props.primaryParcel, props.compareParcel) ) : '' ) 

const multipleIconSplit = ref(props.primaryParcel ? 'Z'.repeat(store.multipleLandValuePerAcre(props.primaryParcel, props.compareParcel) ) : '' ) 


let share_text = computed(() => {
  let temp = `I just found out my property is *${multiple.value}X* more valuable than the Biltmore per acre! ` +
    `\n${splitStringAtInterval(multipleIconSplit.value, 5) }\n` + 
    `Is it #Worthmore or just #Taxedmore? 🧐 Look up your address ` +
    `using this tool: https://worthmoreproject.com`;
  return temp;
})

let share_mailto_text = computed(() => {
  // let temp = `mailto:brownie.newman@buncombecounty.org,alfred.whitesides@buncombecounty.org,terri.wells@buncombecounty.org,jasmine.beach-ferrara@buncombecounty.org,amanda.edwards@buncombecounty.org,parker.sloan@buncombecounty.org,robert.pressley@buncombecounty.org?subject=Worthmore%20Project&body=My%20property%20is%20*${multiple.value}X*%20more%20valuable%20than%20the%20Biltmore%20per%20acre!%20%F0%9F%92%B0%20Is%20it%20%23Worthmore%20or%20just%20%23Taxedmore%3F%20%F0%9F%A7%90%20Look%20up%20your%20address%20using%20this%20tool%20here%3A%20https%3A%2F%2Fworthmoreproject.com`;

  let temp = `mailto:amanda.edwards@buncombecounty.org;brownie.newman@buncombecounty.org;alfred.whitesides@buncombecounty.org;terri.wells@buncombecounty.org;jasmine.beach-ferrara@buncombecounty.org;parker.sloan@buncombecounty.org;robert.pressley@buncombecounty.org?subject=Property%20tax%20valuation%20correct%3F&body=Dear%20County%20Commissioners%2C%0D%0A%0D%0AInsert%20your%20message%20here!%0D%0A%0D%0AMy%20property%20is%20*${multiple.value}X*%20more%20valuable%20than%20the%20Biltmore%20per%20acre!%20%F0%9F%92%B0%20Is%20it%20%23Worthmore%20or%20just%20%23Taxedmore%3F%20%F0%9F%A7%90%20Look%20up%20your%20address%20using%20this%20tool%20here%3A%20https%3A%2F%2Fworthmoreproject.com%0D%0A%0D%0ASincerely%2C%0D%0A%0D%0A`;


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
            position: 'top',
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
      <div
        class='share__content_social_bc_commissioners'
      >
        <a
          class='share-button'
          :href="share_mailto_text"
        >
          Email Buncombe County Commissioners
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .share__content_social_bc_commissioners{
    @apply text-left;
  }
  .share-button{
    @apply block text-center mt-2;
    @apply sm:inline-block bg-white p-4 border-black border-4 rounded-xl font-bold;
  }

  h3{
    @apply font-bold text-2xl sm:text-left;
  }

  .share__content_text{
     @apply flex-grow; 

      textarea{
        @apply border-black border-4 rounded-xl;
        @apply p-3 h-44 sm:h-56;
        @apply text-lg sm:text-xl;
        @apply w-full
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
