<script setup>
    import ActiveParcel from '../components/ActiveParcel.vue';
    import ParcelMetrics from '../components/ParcelMetrics.vue';
    import ParcelMultiple from '../components/ParcelMultiple.vue';

import { useRouter, useRoute } from 'vue-router'

import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main.js'

    const router = useRouter()
    const route = useRoute()

const store = useMainStore();
let dollarUSLocale = Intl.NumberFormat('en-US');


const activeResultsLink = computed(() => '/results/' + encodeURIComponent(activeParcel.attributes.Address) )




const data = ref(null)

const name = route.params.address;


function getMarketValue(row){
  if(! row){
    return 0;
  }
  return row?.attributes.TotalMarketValue;
}


const url_prefix = "https://gis.buncombecounty.org/arcgis/rest/services/opendata/MapServer/1/query?where=Address%20%3D%20'";
const url_suffix = "'&outFields=*&outSR=4326&f=json";

function getData(address) {
  console.log(url_prefix + address + url_suffix);

  fetch(url_prefix + encodeURIComponent(address) + url_suffix)
    .then(r => r.json())
    .then(res => data.value = res)
}
getData(route.params.address);
const activeParcel = computed(() => (data.value ? data.value.features[0] : '') )


const bt_url_prefix = "https://gis.buncombecounty.org/arcgis/rest/services/opendata/MapServer/1/query?where=PIN%20%3D'";

const biltmoreData = ref(null)

function getBiltmore(address) {
  console.log(bt_url_prefix + address + url_suffix);

  fetch("https://gis.buncombecounty.org/arcgis/rest/services/opendata/MapServer/1/query?where=PIN%20%3D%20'" + address + "'&outFields=*&outSR=4326&f=json")
    .then(r => r.json())
    .then(res => biltmoreData.value = res)
}
getBiltmore("963794403000000");
const biltmoreParcel = computed(() => (biltmoreData.value ? biltmoreData.value.features[0] : '') )


const multiple = ref(biltmoreData.attributes ? store.multipleLandValuePerAcre(activeParcel, biltmoreParcel) : '' ) 

</script>

<template>
  <div id='results'>
    <h2>Results</h2>

    <ParcelMultiple
      v-if="activeParcel && biltmoreParcel"

      :primaryParcel="activeParcel"
      :compareParcel="biltmoreParcel"
    />
    <div class='grid grid-cols-2 gap-4'>
      <div>
        <h2>Primary</h2>
         <ParcelMetrics 
            v-if="activeParcel"
            :parcel="activeParcel"
        />
      </div>
      <div>
        <h2>Biltmore</h2>
         <ParcelMetrics 
            v-if="biltmoreParcel"
            :parcel="biltmoreParcel"
        
        />

      </div>
    </div>
  </div>
</template>

<style>

</style>
