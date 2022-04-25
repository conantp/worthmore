<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main.js'
import { request } from "@esri/arcgis-rest-request";
import { queryFeatures } from "@esri/arcgis-rest-feature-service";
import _ from 'lodash'

import SearchResultRow from '../components/SearchResultRow.vue';

const store = useMainStore();

const data = ref(null)

const name = ref('')
const isNamePresent = computed(() => name.value.length > 0)

const rows = computed(() => (data.value ? data.value.features.sort() : '') )
const rowCount = computed(() => (data.value ? data.value.features.length : 0) )

let pending_request = false;


const submitName = _.debounce(() => {  
  let temp_name = name.value;
  let temp_name_arr = temp_name.split(' ');

  let search_house = false;

  let search_name = temp_name;

  let or_mode = false;
  if(temp_name_arr.length == 1){
    search_house = temp_name_arr[0];
    search_name = temp_name_arr[0];
    or_mode = true;
  }

  if(temp_name_arr.length > 1){
    search_house = temp_name_arr[0];
    search_name = temp_name_arr[1];
  }

  let search_full = '';

  search_full += `StreetName LIKE '${search_name}%'`
  if(search_house){

    if(or_mode){
      search_full += " OR ";
    }
    else{
      search_full += " AND ";
    }

    search_full += ` HouseNumber = '${search_house}' `;
  }

  const controller = new AbortController()
  const signal = controller.signal

  // if(pending_request){
  // console.log(controller, signal);
  //     controller.abort();

  // }
  pending_request = true;

  // console.log(search_house, search_name, search_full);

  const options = {
    url: "https://gis.buncombecounty.org/arcgis/rest/services/opendata/MapServer/1",
    where: search_full
  };

  queryFeatures(options)
    .then(res => {
      console.log("RESULTS", res);
      console.log(name.value);
      data.value = res;
      pending_request = false;
    })
}, 100);


</script>

<template>

<div>
    <input 
      type='text' 
      v-model="name"
      @input.debounce="submitName"
      placeholder="Enter your address to find out" 
      class="
          search-input
          
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
          <SearchResultRow
            v-for="row in rows"
            :row="row"
          />
        </ul>
    </div>
  </div>
</div>
  
</template>

<style scoped>

.search-input{
  @apply w-full block;
  @apply border-4 border-black;
  @apply py-2 px-4;
  @apply font-semibold rounded-lg;
  @apply z-10 relative ;
}

.search-results--container{
  @apply relative;
}

.search-results{
  @apply absolute -top-1  bg-white w-full;
  @apply border-black border-2 border-t-0;

  /*@appy max-h-screen;*/
  max-height:  400px;
  overflow:  scroll;
}

</style>
