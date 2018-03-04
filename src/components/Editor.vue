<template>
  <div id="Editor" class ="container">
    <div id="sphereContainer" ref="sphere" class="canvas1"></div>
		<span>
		</span>
			<input v-model="colorValue" type="color" name="waterColor" placeholder="#fff">
			<button type="button" class="btn btn-primary" name="waterColor" @click.prevent="colorValueChange()"> Water Color</button>
			<input v-model="landColor" type="color" name="landColor">
			<button type="button" class="btn btn-primary" name="landColor" @click.prevent="faceColorChange()">Add Land</button>
      <input v-model="mountainColorValue" type="color" name="mountainColor" placeholder="#fff">
			<button type="button" class="btn btn-primary" name="addMountain" @click.prevent="addMountain()"> Add Mountain</button>
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
      sphere: null,
			landColor: null,
      mountainColorValue: null,
      mountainGeometry: null,
      scene: null,
      wireframe: false,
      colorValue: '#fff',
      color: null,
      material: null,
      geometry: null,
			planetName: "",
    	planetDescription: "",
    	planetImage: "",
			serverResponse: "",
			showModal: false,
      treePositionX: null,
      treePositionY: null,
      treePositionZ: null
    };
  },
	mounted(){
    this.scene = new THREE.Scene();
    let scene = this.scene
    var camera = new THREE.PerspectiveCamera(50, 375 / 300, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({
			alpha: true,
			preserveDrawingBuffer: true
		});
    renderer.setSize(375, 300);
    renderer.setClearColor( 0xffffff, 0)
    this.$refs.sphere.appendChild(renderer.domElement)

    this.geometry = new THREE.SphereGeometry( 3, 12, 12 );
    this.geometry.mergeVertices();
    this.color = new THREE.Color('#fff')
    this.material = new THREE.MeshBasicMaterial( {color: this.color, vertexColors: THREE.FaceColors } );
    this.sphere = new THREE.Mesh( this.geometry, this.material );
    let sphere = this.sphere
    this.scene.add( sphere )

    // var geometry = new THREE.CylinderGeometry(.5, 0, .5, 3, false);
    // var material = new THREE.MeshBasicMaterial( {color: this.mountainColorValue} );
    // var cylinder = new THREE.Mesh( geometry, material );
    // cylinder.position.set(3, Math.random() *2 , Math.random()* 2)
    // sphere.add( cylinder );

    camera.position.z = 10;
    var render = function () {
        requestAnimationFrame(render);

        // cylinder.rotation.y += 0.01;
        sphere.rotation.y += 0.03;

        renderer.render(scene, camera);
    };

    render();
  },
  methods: {
    randomSpherePoint(){
     var u = Math.random();
     var v = Math.random();
     var theta = 2 * Math.PI * u;
     var phi = Math.acos(2 * v - 1);
     var x = 0 + (3 * Math.sin(phi) * Math.cos(theta));
     var y = 0 + (3 * Math.sin(phi) * Math.sin(theta));
     var z = 0 + (3 * Math.cos(phi));
     console.log(x,y,z);
     this.treePositionX = x;
     this.treePositionY = y;
     this.treePositionZ = z;
},
    addMountain(){
      this.randomSpherePoint();
      let index = Math.floor(Math.random() * 20)
      let coordinates = [{x:0.5, y: 0.88, z: 2.83},{x: 0.0428,y:0.002 , z: 2.999 },{x: 0.124, y:0.01 , z: 2.997},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
      var geometry = new THREE.CylinderGeometry(.5, 0, .5, 3, false);
      var material = new THREE.MeshBasicMaterial( {color: this.mountainColorValue} );
      var cylinder = new THREE.Mesh( geometry, material );
      cylinder.position.set(this.treePositionX, this.treePositionY, this.treePositionZ)
      this.sphere.add(cylinder)
    },
		colorValueChange(){
			this.geometry.colorsNeedUpdate = true;
			let color = this.colorValue.split("#")[1];
			this.geometry.faces.forEach(function(face){
				face.color.setHex("0x"+color);
			});
		},
		faceColorChange(){
      let index = Math.floor(Math.random() * 263);
      this.geometry.colorsNeedUpdate = true;
      let landColor = this.landColor.split("#")[1];
      this.geometry.faces[index].color.setHex("0x"+landColor);
      this.geometry.faces[index*2].color.setHex("0x"+landColor);
      this.geometry.faces[index-1].color.setHex("0x"+landColor);
      this.geometry.faces[index+1].color.setHex("0x"+landColor);
      this.geometry.faces[index+3].color.setHex("0x"+landColor);
      this.geometry.faces[index+25].color.setHex("0x"+landColor);
      this.geometry.faces[index+24].color.setHex("0x"+landColor);
      this.geometry.faces[index-24].color.setHex("0x"+landColor);
      this.geometry.faces[index-25].color.setHex("0x"+landColor);
      this.geometry.faces[index-3].color.setHex("0x"+landColor);
		},
    postPlanet() {
      console.log(document.querySelector('canvas'))
      if (
        this.planetName === "" ||
        this.planetDescription === ""
      ) {
        alert("Please enter all fields for your planet!");
      } else {
				this.planetImage = document.getElementsByTagName("canvas")[0].toDataURL("image/png");
        fetch("http://localhost:3000/planets", {
          method: "post",
          body: JSON.stringify({
            name: `${this.planetName}`,
            planet_description: `${this.planetDescription}`,
            planet_image: `${this.planetImage}`
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
