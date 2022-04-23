
<script setup>
	import House from '../assets/images/house-top.png'

	import AddressSearch from '../components/AddressSearch.vue';
	import WhyThisMatters from '../sections/WhyThisMatters.vue'

	import OurStory from '../assets/images/our-story.png'
</script>

<template>
  <div id='home'>
  	<div class='home-inner'>
  		<div class='home-top'>
  			<div class='home-top--inner'>
			    <p class='hero'> 
			    	Is your land worth
						more than the Biltmore?<br>
						Or is it just taxed more?
			    </p>
			    <AddressSearch 
			    class='address-search' 
			    />
			    <img 
			    	class='house'
			    	:src="House"
		    	/>
			  </div>
		  </div>
	    
	  </div>

	  <div class='why-this-matters'>
      <WhyThisMatters />

    </div>
    	<img 
	    	:src="OurStory"
    	/>
  </div>
</template>

<style scoped>

#home{
	@apply sm:py-12;
}

.hero{
	@apply text-2xl sm:text-4xl sm:w-1/2 font-bold;
	@apply mb-6;
}

.home-top--inner{
	@apply relative pb-6 sm:pb-12;
}

.home-top{
	@apply px-8 pt-8 max-w-4xl mx-auto ;
}

.address-search{
	@apply sm:w-1/3;
	z-index: 99999;
}

.house{
	@apply hidden;
	@apply sm:block;

	@apply absolute bottom-0 right-0 w-1/2;
	z-index: 0;
}

img{
	@apply max-w-4xl mx-auto;
	@apply w-full;
}

.why-this-matters{
		@apply bg-white;

}
</style>


