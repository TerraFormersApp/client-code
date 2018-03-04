<template>
  <div id="Card" :class="{shakeable}">
		<div class="card border-info mb-3" style="width:400px">
  		<div class="card-header">
				<h3>{{data.name}}</h3>
			</div>
  		<div class="card-body">
				<canvas :id="data.name" width="375" height="300"></canvas>
    		<h5 class="card-title">Planet Description:</h5>
    		<p>{{data.planet_description}}</p>
				<button @click="updatePlanet" type="button" class="btn btn-secondary">Rename Your Planet</button>
				<button @click="destroy" type="button" class="btn btn-danger">DeathStar Destroy</button>
				<DeletePlanetModal v-if="showModal" @close="showModal = false">
					<h3 slot="header">{{this.serverResponse}}</h3>
				</DeletePlanetModal>
  		</div>
		</div>
  </div>
</template>

<script>
import DeletePlanetModal from "@/components/DeletePlanetModal";

export default {
  name: "Card",
  props: ["data", "fetchPlanets"],
	components: {
		DeletePlanetModal
	},
  data() {
    return {
      shakeable: false,
			showModal: false,
			nameChange: "",
			serverResponse: ""
    };
  },
	mounted() {
		this.renderPlanet();
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
      }).then(response => {
				this.serverResponse = response;
				this.showModal = true;
				this.fetchPlanets();
			});
    },
    updatePlanet() {
      this.nameChange = prompt("Rename the planet here:", "");
			console.log(this.nameChange);
      if (this.nameChange != null) {
        fetch("http://localhost:3000/planets/" + this.data.id, {
          method: "put",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify({
						name: `${this.nameChange}`
					})
        })
          .then(response => response.json())
          .then(response => {
						this.showModal = true;
						this.serverResponse = response;
						this.fetchPlanets();
					});
      }
    },
		renderPlanet(){
			var planetCanvas = document.getElementById(this.data.name);
			var planetCTX = planetCanvas.getContext("2d")
			var planetImage = new Image;
			planetImage.onload = function(){
				planetCTX.drawImage(planetImage,0,0);
			};
			planetImage.src = this.data.planet_image;
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
  animation: shake 4s;
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
