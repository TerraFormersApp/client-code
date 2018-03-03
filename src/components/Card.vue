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
