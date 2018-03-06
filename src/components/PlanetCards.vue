<template>
  <div id="PlanetCards" class="container">
		<Card :fetchPlanets="fetchPlanets" v-for="onePlanet in planets" :key="onePlanet.id" :data="onePlanet"/>
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
    };
  },
  mounted() {
    this.fetchPlanets();
  },
  methods: {
    fetchPlanets() {
      fetch("https://terra-former.herokuapp.com/planets")
        .then(response => response.json())
        .then(planetVar => (this.planets = planetVar.planets));
    }
  }
};
</script>

<style scoped>
#PlanetCards {
  display: flex;
  flex-flow: row wrap;
  align-content: space-around;
  padding: 1rem;
}
</style>
