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
</script>

<template>
  <div>
    <div
      v-if="activeParcel"
      class='text-2xl font-bold' 
    >
      {{ activeParcel.attributes.Address }}
    </div>
    <!-- <div>
        ${{ dollarUSLocale.format(store.appraisedValue(activeParcel)) }}<br>
    </div> -->
    <div class=''>
      <label>Appraised Land Value:</label>
      ${{ dollarUSLocale.format(store.landValue(activeParcel) ) }} land value
    </div>
    <div>
      <label>Acreage:</label>
      {{ addCommas(store.acrerage(activeParcel).toFixed(2) ) }} acres
    </div>
    <div>
      <label>Appraised Land Value / Acre:</label>
      ${{ dollarUSLocale.format(store.landValuePerAcre(activeParcel) ) }} per acre
    </div>
  </div>


</template>

<style scoped>

    div{
      @apply border-black border-2 p-4 text-center;
    }

    label{
      @apply block;
    }
</style>
