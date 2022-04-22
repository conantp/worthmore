
<script setup>
	import AddressSearch from '../components/AddressSearch.vue';
	import ActiveParcel from '../components/ActiveParcel.vue';
	import Mockup from '../assets/images/main.png'
	import House from '../assets/images/house.png'

</script>

<template>
  <div id='home'>
  	<div class='home-inner'>
	    <p class='hero'> 
	    	Is your land worth
			more than the Biltmore?
			Or is it just taxed more?
	    </p>
	    <AddressSearch  
	      msg="" 
	    />
	    <img 
	    	class='house'
	    	:src="House"
    	/>
	    
	  </div>

	  <img 
	    	:src="Mockup"
    	/>
  </div>
</template>

<style scoped>

#home{
	@apply p-8;
}

.hero{
	@apply text-4xl w-1/2 font-bold;
}

.home-inner{
	@apply relative;
}

.house{
	@apply absolute bottom-0 right-0 w-1/2
}
</style>


