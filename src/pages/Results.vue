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




import WhyThisMatters from '../sections/WhyThisMatters.vue'
import FooterSearch from '../sections/FooterSearch.vue'

  import ShareSection from '../sections/Share.vue'


const data = ref(null)

const name = route.params.address;


function getMarketValue(row){
  if(! row){
    return 0;
  }
  return row?.attributes.TotalMarketValue;
}


const url_prefix = "https://gis.buncombecounty.org/arcgis/rest/services/opendata/MapServer/1/query?where=PIN%20%3D%20'";

// const url_prefix = "https://gis.buncombecounty.org/arcgis/rest/services/opendata/MapServer/1/query?where=Address%20%3D%20'";
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

// https://prc-buncombe.spatialest.com/api/v1/recordcard/963794403000000

const multiple = ref(biltmoreData.attributes ? store.multipleLandValuePerAcre(activeParcel, biltmoreParcel) : '' ) 

</script>

<template>
  
  <div id='results'

  >
    <div
      class='loading'
      :class="{'loading_visible': (!(activeParcel && biltmoreParcel))}"
    >
      Loading...
    </div>
    <div class='page-section page-section--top results-top'
    v-show="activeParcel && biltmoreParcel"

    >
      <div class='page-section__inner'>
        <div class='property-grid'>
          <div class='property-primary'>
             <ParcelMetrics 
                v-if="activeParcel"
                :parcel="activeParcel"
            />
          </div>
          <div>
             <ParcelMetrics 
                v-if="biltmoreParcel"
                :parcel="biltmoreParcel"
            
            />

          </div>
        </div>
        <ParcelMultiple
            class='parcel-multiple'
            v-if="activeParcel && biltmoreParcel"
            :primaryParcel="activeParcel"
            :compareParcel="biltmoreParcel"
          />
      </div>
    </div>

    <ShareSection 
        v-if="activeParcel && biltmoreParcel"
        :primaryParcel="activeParcel"
        :compareParcel="biltmoreParcel"
    /> 
    <WhyThisMatters />
    <FooterSearch />
  </div>
</template>

<style scoped>
  #results{
    min-height: 80vh;
  }
  .results-top{
    @apply pb-0;
  }

  .results-top .page-section__inner{
    @apply grid sm:grid-cols-3 sm:gap-2
  }

  .property-grid{
    @apply bg-white sm:col-span-2 grid grid-cols-2 border-4 border-black rounded-xl;
  }

  .property-primary{
    @apply border-r-4 border-black;
  }

  img{
      @apply max-w-4xl mx-auto grid w-full;
    }

    .parcel-multiple{
      @apply order-first sm:order-last;
      @apply pt-4 mx-auto text-center;
    }

</style>
