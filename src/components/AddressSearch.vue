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
      @input="submitName"
      placeholder="Enter your address to find out" 
      class="
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
    <button v-show="isNamePresent" @click="submitName">Submit</button>
  <div class='search-results--container'
  v-if="rowCount"
  >
    <div 
        class='search-results'
    >
      <div class='text-center p-2'>
        {{ rowCount }} results
      </div>
      <ul
      >
        <li
          class='m-2 p-2 border-slate-300 border-2 rounded-md'
          v-for="row in rows"
        >
            <router-link 
              :to="'/results/' + row.attributes.Address"
            >
            <div class='text-md'>
              {{ row.attributes.Address }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <div style='display: none;'>
    <table>
      <thead>
        <tr>
          <th 
            v-for="(key,value) in header"
          >
            {{ key.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
        >
          <td
            v-for="field in row.attributes"
          >
            {{ field }}

          </td>
        </tr>
      </tbody>
    </table>
  </div>


  </div>
  
</template>

<style scoped>
  table,tr,td,th{
    border:  1px solid black;
  }
a {

}

li{
  cursor:  pointer;
}

.search-results--container{
  @apply relative;
}

.search-results{
  @apply absolute bg-white;
  max-height:  400px;
  overflow:  scroll;

}

</style>
