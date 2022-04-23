<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main.js'

const store = useMainStore();

const data = ref(null)

const name = ref('')
const isNamePresent = computed(() => name.value.length > 0)

const header = computed(() => (data.value ? data.value.fields : '') )
const rows = computed(() => (data.value ? data.value.features.sort() : '') )
const rowCount = computed(() => (data.value ? data.value.features.length : 0) )

function getMarketValue(row){
  if(! row){
    return 0;
  }
  return row?.attributes.TotalMarketValue;
}


const url_prefix = "https://gis.buncombecounty.org/arcgis/rest/services/opendata/MapServer/1/query?where=StreetName%20%3D%20'";
const url_suffix = "'&outFields=*&outSR=4326&f=json";

function submitName() {
  console.log(name.value)
  console.log(url_prefix + name.value + url_suffix);

  fetch(url_prefix + encodeURIComponent(name.value) + url_suffix)
    .then(r => r.json())
    .then(res => data.value = res)
}

</script>

<template>

<div>
    <input 
      type='text' 
      v-model="name"
      @input.debounce="submitName"
      placeholder="Enter your address to find out" 
      class="
        w-full
        block
        border-4
        border-black
        border-round
          py-2
          px-4
          font-semibold
          rounded-lg
          shadow-md
        "
    />
    <!-- <button v-show="isNamePresent" @click="submitName">Submit</button> -->
    <div 
      class='search-results--container'
      v-if="rowCount"
    >
      <div 
          class='search-results'
      >
        <div class='text-slate-500 text-md text-left p-2 pb-0'>
          Select from the list below:<br>
        </div>
        <ul>
          <li
            class='text-left p-2 py-4 border-black border-b font-bold'
            v-for="row in rows"
          >
              <a
                :href="'/results/' + row.attributes.Address"
              >
              <div class='text-md'>
                {{ row.attributes.Address }}
              </div>
            </a>
          </li>
        </ul>
    </div>
  </div>
</div>
  
</template>

<style scoped>

a {

}

li{
  cursor:  pointer;
}

.search-results--container{
  @apply relative;
}

.search-results{
  @apply absolute bg-white w-full;
  /*@appy max-h-screen;*/
  max-height:  400px;
  overflow:  scroll;
}

</style>
