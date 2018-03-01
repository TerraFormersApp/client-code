<template>
  <div id="PlanetCards" class="container">
		<Card v-for="onePlanet in planets" :key="onePlanet.id" :data="onePlanet"/>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "PlanetCards",
  components: {
		Card
	},
	data() {
		return {
			planets: []
		}
	},
	mounted() {
		this.fetchPlanets();
	},
	methods: {
		fetchPlanets(){
			fetch("http://localhost:3000/planets")
			.then(response => response.json())
			.then(planetVar => this.planets = planetVar.planets)
		}
	}
}
</script>

<style scoped>
#PlanetCards {
	display: flex;
	flex-flow: row wrap;
	align-content: space-around;
	padding: 1rem;

}
</style>
