<template>
  <div id="Card">
		<div class="card border-info mb-3" style="width: 20rem;">
  		<div class="card-header">
				<h4>{{data.name}} <img src="../../static/images/AcidPlanet.gif"></h4>
			</div>
  		<div class="card-body">
    		<h5 class="card-title">Terraformation:</h5>
    		<p class="card-text">% Water and Color: {{data.water_percent}}% {{data.water_color}}</p>
    		<p class="card-text">Land-Color: {{data.land_color}}</p>
    		<p class="card-text">Sky-Color: {{data.sky_color}}</p>
    		<p class="card-text">Hurricanes: {{data.hurricane}}</p>
    		<p class="card-text">Wind: {{data.wind}}</p>
    		<p class="card-text">Mountains: {{data.mountains}}</p>
    		<p class="card-text">Trees: {{data.trees}}</p>
  		</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "Card",
	props: ["data"]
}
</script>

<style scoped>
#Card {
	padding: 5px 10px 5px 10px;
}

img {
	height: 30px
}
</style>
