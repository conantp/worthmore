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
  <h1
    class='bg-red-500'
  >
  </h1>

  
  <div>
    <input 
      type='text' 
      v-model="name"
      @input="submitName"
      class="
          py-2
          px-4
          font-semibold
          rounded-lg
          shadow-md
          text-white
          bg-green-500
          hover:bg-green-700
        "
    />
    <button v-show="isNamePresent" @click="submitName">Submit</button>
  <div>
    <div>
      {{ rowCount }} results
    </div>
    <ul>
      <li
        class='m-2 p-2 border-slate-300 border-2 rounded-md'
        v-for="row in rows"
        @click="store.setActiveRow(row)"
      >
        <div class='text-md'>
          {{ row.attributes.Address }}
        </div>
        <div class='text-md text-sky-500'>
          ${{ getMarketValue(row) }}
        </div>
        <div>
          <router-link 
            :to="'/results/' + row.attributes.Address"
          >
            Results
          </router-link>
        </div>
      </li>
    </ul>
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
  color: #42b983;
}

li{
  cursor:  pointer;
}
</style>
