<template>
  <div id="Card" :class="{shakeable}">
		<div class="card border-info mb-3" style="width: 20rem;">
  		<div class="card-header">
				<h3>{{data.name}} <img src="../../static/images/AcidPlanet.gif"></h3>
			</div>
  		<div class="card-body">
    		<h5 class="card-title">Planet Description:</h5>
    		<p>{{data.planet_description}}</p>
				<button @click="updatePlanet" type="button" class="btn btn-secondary">Rename Your Planet</button>
				<button @click="destroy" type="button" class="btn btn-danger">DeathStar Destroy</button>
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
      submission: { name: "" },
      shakeable: false
    };
  },
  methods: {
    playSound() {
      var audio = new Audio(
        "http://soundfxcenter.com/movies/star-wars/8d82b5_Death_Star_Firing_Sound_Effect.mp3"
      );
      audio.play();
    },
    shakeIt() {
      this.shakeable = true;
    },
    destroy() {
      this.playSound();
      setTimeout(this.shakeIt, 5000);
      setTimeout(this.deletePlanet, 9000);
    },
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
button {
  width: 15rem;
}
.shakeable {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 4s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
