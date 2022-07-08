<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '../stores/main.js'

const props = defineProps({
  parcel: {
    type: Object,
    required: true
  }
})

const store = useMainStore();
let dollarUSLocale = Intl.NumberFormat('en-US');

function addCommas(nStr)
{
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

const activeParcel = props.parcel

const getPropertyCardURL = computed(() => (activeParcel ? 'https://prc-buncombe.spatialest.com/#/property/' + activeParcel.attributes.PIN : '') );


import { useTippy } from 'vue-tippy'
const appraised_land_value_container = ref()

// useTippy(appraised_land_value_container, {
//   content: "Land Value minus any Deferred Value",
// })

</script>

<template>
  <div class='outer'>
    <div
      v-if="activeParcel"
      class='parcel-address' 
    > 
      <span v-if="activeParcel.attributes.PIN == '963794403000000'">
        Biltmore Estate (Land)
      </span>
      <span v-else>
        {{ store.fullAddress(activeParcel) }}
      </span>
    </div>
    <!-- <div>
        ${{ dollarUSLocale.format(store.appraisedValue(activeParcel)) }}<br>
    </div> -->
    <div 
      class=''
      ref="appraised_land_value_container"
    >
      <label>Appraised Land Value:</label>
      ${{ dollarUSLocale.format(store.landValue(activeParcel) ) }}
    </div>
    <div>
      <label>Acreage:</label>
      {{ addCommas(store.acrerage(activeParcel).toFixed(2) ) }} acres
    </div>
    <div>
      <label>Appraised Land <br>Value / Acre:</label>
      ${{ dollarUSLocale.format(store.landValuePerAcre(activeParcel) ) }} per acre
    </div>
    <div class='last'>
      <a 
        target='_blank' 
        :href="getPropertyCardURL"
      >Property Card</a>
    </div>
  </div>


</template>

<style scoped>
  a{
    @apply font-bold underline;
  }

  .outer{
  }

  .outer > div{
    @apply text-sm sm:text-lg border-black border-b-4 p-4 text-center;
  }

  .outer .parcel-address{
    @apply text-sm sm:text-xl font-bold text-ellipsis truncate;
  }

  .outer .last{
    @apply border-b-0;
  }

  label{
    @apply block;
  }
</style>
