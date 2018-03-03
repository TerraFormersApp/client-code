<template>
  <div id="Card">
		<div class="card border-info mb-3" style="width: 20rem;">
  		<div class="card-header">
				<h3>{{data.name}} <img src="../../static/images/AcidPlanet.gif"></h3>
			</div>
  		<div class="card-body">
    		<h5 class="card-title">Planet Description:</h5>
    		<p>{{data.planet_description}}</p>
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
