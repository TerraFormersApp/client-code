<template>
  <div id="Launch">
		<div class="card border-info mb-3" style="width: 20rem;">
  		<div class="card-header">
				<h4>{{data.name.split("|")[0]}} <img src="../../static/images/rocket.png"></h4>
			</div>
  		<div class="card-body">
    		<h5 class="card-title">Trip Info:</h5>
    		<p class="card-text">Launch Date: {{data.net}}</p>
    		<p class="card-text">Trip Duration: {{tripDuration}} days</p>
    		<p class="card-text">Trip Price: ${{tripPrice}}</p>
  		</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "Launch",
	props: ["data"],
	data() {
		return {
			tripDuration: 0,
			tripPrice: 0
		}
	},
	mounted() {
		this.generateTripPrice();
		this.generateTripDuration();
	},
	methods: {
		generateTripPrice(){
			this.tripPrice = (Math.random() * 5280).toFixed(2);
		},
		generateTripDuration(){
			this.tripDuration = (Math.random() * 1825).toFixed();
		}
	}
}
</script>

<style scoped>
#Launch {
	padding: 5px 10px 5px 10px;
}

img {
	height: 30px
}
</style>
