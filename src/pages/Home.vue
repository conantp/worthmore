
<script setup>
	import AddressSearch from '../components/AddressSearch.vue';
	import ActiveParcel from '../components/ActiveParcel.vue';
	import House from '../assets/images/house.png'

	import WhyThisMatters from '../assets/images/why-this-matters.png'
	import OurStory from '../assets/images/our-story.png'

</script>

<template>
  <div id='home'>
  	<div class='home-inner'>
  		<div class='home-top'>
  		<div class='home-top--inner'>
			    <p class='hero'> 
			    	Is your land worth
					more than the Biltmore?
					Or is it just taxed more?
			    </p>
			    <AddressSearch  
			    />
			    <img 
			    	class='house'
			    	:src="House"
		    	/>
			  </div>
		  </div>
	    
	  </div>

	  <div class='why-this-matters'>
	  	<router-link 
        :to="'/about/'"
      >
			  <img 
		    	:src="WhyThisMatters"
	    	/>
      </router-link>
    </div>
    	<img 
	    	:src="OurStory"
    	/>
  </div>
</template>

<style scoped>

#home{
	@apply py-8;
}

.hero{
	@apply text-4xl w-1/2 font-bold;
}

.home-top--inner{
	@apply relative pb-12;
}

.home-top{
	@apply px-8 pt-8 max-w-4xl mx-auto ;
}

.house{
	@apply absolute bottom-0 right-0 w-1/2
}

img{
	@apply max-w-4xl mx-auto
}

.why-this-matters{
		@apply bg-white;

}
</style>


