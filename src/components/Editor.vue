<template>
  <div id="Editor" class ="container">
    <div id="sphereContainer" ref="sphere"></div>
		<span>
		</span>
			<input v-model="colorValue" type="color" name="waterColor" placeholder="#fff">
			<button type="button" class="btn btn-primary" name="waterColor" @click.prevent="colorValueChange()"> Water Color</button>
			<input v-model="landColor" type="color" name="landColor">
			<button type="button" class="btn btn-primary" name="landColor" @click.prevent="faceColorChange()">Add Land</button>
			<p></p>
			<form @submit.prevent="postPlanet()">
				<div class="form-group">
					<label for="planetName">Planet Name</label>
					<input v-model="planetName" class="form-control" id="planetName" aria-describedby="planetName" placeholder="Enter your fantasy planet name"></small>
				</div>
				<div class="form-group">
	      	<label for="planetDescription">Planet Description</label>
	      	<textarea v-model="planetDescription" class="form-control" id="planetDescription" rows="3" placeholder="Tell us about your fantasy. Who lives on your new planet, what do they do?"></textarea>
	    	</div>
				<button type="submit" class="btn btn-primary">Save Your Planet</button>
			</form>
			<p></p>
			<AddPlanetModal v-if="showModal" @close="showModal = false">
				<h3 slot="header">{{this.serverResponse}}</h3>
			</AddPlanetModal>
  </div>
</template>

<script>
import AddPlanetModal from "@/components/AddPlanetModal";
import * as THREE from "three";
// import Planet from "@/components/Planet";

export default {
  name: "Editor",
	components: {
		AddPlanetModal
	},
  data() {
    return {
			landColor: null,
      wireframe: false,
      colorValue: '#fff',
      color: null,
      material: null,
      geometry: null,
			planetName: "",
    	planetDescription: "",
    	planetImage: "",
			serverResponse: "",
			showModal: false
    };
  },
	mounted(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(500, 400);
    renderer.setClearColor( 0xffffff, 0)
    this.$refs.sphere.appendChild(renderer.domElement)

    this.geometry = new THREE.SphereGeometry( 3, 12, 12 );
    this.color = new THREE.Color('#fff')
    this.material = new THREE.MeshBasicMaterial( {color: this.color, vertexColors: THREE.FaceColors } );
    var sphere = new THREE.Mesh( this.geometry, this.material );
    scene.add( sphere )

    camera.position.z = 10;
    var render = function () {
        requestAnimationFrame(render);

        sphere.rotation.y += 0.03;

        renderer.render(scene, camera);
    };

    render();
  },
  methods: {
		colorValueChange(){
			this.geometry.colorsNeedUpdate = true;
			let color = this.colorValue.split("#")[1];
			this.geometry.faces.forEach(function(face){
				face.color.setHex("0x"+color)
			});
		},
		faceColorChange(){
			this.geometry.colorsNeedUpdate = true;
			let landColor = this.landColor.split("#")[1];
			this.geometry.faces[Math.floor(Math.random() * 263)].color.setHex("0x"+landColor);
		},
    postPlanet() {
      if (
        this.planetName === "" ||
        this.planetDescription === ""
      ) {
        alert("Please enter all fields for your planet!");
      } else {
				// this.planetImage = this.$refs.sphere.toDataURL();
        fetch("http://localhost:3000/planets", {
          method: "post",
          body: JSON.stringify({
            name: `${this.planetName}`,
            planet_description: `${this.planetDescription}`,
            planet_image: "figuring out the link"
          }),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        })
          .then(response => response.json())
          .then(response => {
						if (response) {
							this.showModal = true;
							this.planetName= "";
							this.planetDescription = "";
							this.serverResponse = response;
						}
					});
      }
    }
  }
};</script>

<style scoped>
#sphereContainer {
  display: flex;
	flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
