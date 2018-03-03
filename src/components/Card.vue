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
				<button @click="updatePlanet" type="button" class="btn btn-secondary">Edit Planet</button>
				<button @click="deletePlanet" type="button" class="btn btn-danger">Delete Planet</button>
  		</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["data", "fetchPlanets"],
  data() {
    return {
      submission: { name: "" }
    };
  },
  methods: {
    deletePlanet() {
      fetch("http://localhost:3000/planets/" + this.data.id, {
        method: "DELETE"
      }).then(() => this.fetchPlanets());
    },
    updatePlanet() {
      let nameChange = prompt("Rename the planet here:", "");
      if (nameChange != null) {
        this.submission.name = nameChange;
        console.log(this.submission.name);
        fetch("http://localhost:3000/planets/" + this.data.id, {
          method: "put",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify(this.submission)
        })
          .then(() => console.log("Name changed!"))
          .then(() => this.fetchPlanets());
      }
    }
  }
};
</script>

<style scoped>
#Card {
  padding: 5px 10px 5px 10px;
}

img {
  height: 30px;
}
</style>
