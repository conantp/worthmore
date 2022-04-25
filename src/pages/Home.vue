
<script setup>
	import House from '../assets/images/house-top.png'

	import AddressSearch from '../components/AddressSearch.vue';
	import WhyThisMatters from '../sections/WhyThisMatters.vue'

	import OurStory from '../sections/OurStory.vue'
</script>

<template>
  <div id='home'>
  		<div class='page-section home-top'>
	      <div class='page-section__inner home-top--inner'>
			    <p class='hero'> 
						Is your land worth more per acre than the Biltmore?<br> Or is it just taxed more?
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
		  <div class='why-this-matters'>
	      <WhyThisMatters />
	    </div>
      <OurStory />
    	
  </div>
</template>

<style scoped>

#home{
}

.hero{
	@apply sm:w-1/2;
	@apply  text-2xl sm:text-4xl font-bold text-center sm:text-left;
	@apply mb-6;
}

.home-top--inner{
	@apply sm:relative sm:pb-24;
}

.home-top{
	@apply pt-4 sm:pt-8 pb-0;
}


.address-search{
	@apply sm:w-2/5;
	z-index: 99999;
}

.house{
	/*@apply hidden;*/
	/*@apply sm:block;*/

	@apply sm:absolute bottom-0 right-0 sm:w-1/2;

	@apply mt-4 sm:mt-0;
}

img{
	@apply max-w-4xl mx-auto;
	@apply w-full;
}

.why-this-matters{
		@apply bg-white;

}
</style>


