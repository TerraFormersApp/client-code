<template>
  <div id="Editor" class ="container">
    <div id="sphereContainer" ref="sphere"></div>
		<span>
		</span>
			<input v-model="colorValue" type="color" name="waterColor" placeholder="#fff">
			<button type="button" class="btn btn-primary" name="waterColor" @click.prevent="colorValueChange()"> Water Color</button>
			<input v-model="landColor" type="color" name="landColor">
			<button type="button" class="btn btn-primary" name="landColor" @click.prevent="faceColorChange()">Add Land</button>
      <input v-model="mountainColorValue" type="color" name="mountainColor" placeholder="#fff">
			<button type="button" class="btn btn-primary" name="addMountain" @click.prevent="addMountain()"> Add Mountain</button>
      <input v-model="moonColorValue" type="color" name="moonColor" placeholder="#fff">
      <button type="button" class="btn btn-primary" name="addMountain" @click.prevent="moonCounterCheck()">Add Moon</button>
			<button type="button" class="btn btn-primary" name="addTree" @click.prevent="addTree()"> Add "Tree"</button>
      <button type="button" class="btn btn-primary" name="reset" @click.prevent="reset()">Reset</button>
			<p></p>
			<form @submit.prevent="postPlanet()">
				<div class="form-group">
					<label for="planetName">Planet Name</label>
					<input v-model="planetName" class="form-control" id="planetName" aria-describedby="planetName" placeholder="Enter your fantasy planet name"></small>
				</div>
				<div class="form-group">
	      	<label for="planetDescription">Planet Description</label>
	      	<textarea v-model="planetDescription" class="form-control" id="planetDescription" rows="3" placeholder="Tell us about your fantasy. Who lives on your new planet, what do they do?"></textarea>
					<small>Maximum 255 characters.</small>
	    	</div>
				<button type="submit" class="btn btn-primary">Save Your TerraForm</button>
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
      moonColorValue: null,
      mountainGeometry: null,
      scene: null,
      wireframe: false,
      colorValue: "#fff",
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
      treePositionZ: null,
      moonPositionX: null,
      moonPositionY: null,
      moonPositionZ: null,
      moonCounter: 5
    };
  },
  mounted() {
    this.createScene()
  },
  methods: {
    createScene(){
      this.scene = new THREE.Scene();
      let scene = this.scene;
      var camera = new THREE.PerspectiveCamera(50, 375 / 300, 0.1, 1000);

      var renderer = new THREE.WebGLRenderer({
        alpha: true,
        preserveDrawingBuffer: true
      });
      renderer.setSize(375, 300);
      renderer.setClearColor(0xffffff, 0);
      this.$refs.sphere.appendChild(renderer.domElement);

      this.geometry = new THREE.SphereGeometry(3, 12, 12);
      this.geometry.mergeVertices();
      this.color = new THREE.Color("#fff");
      this.material = new THREE.MeshBasicMaterial({
        color: this.color,
        vertexColors: THREE.FaceColors
      });
      this.sphere = new THREE.Mesh(this.geometry, this.material);
      let sphere = this.sphere;
      this.scene.add(sphere);

      camera.position.z = 10;
      var render = function() {
        requestAnimationFrame(render);
				sphere.rotation.y += 0.03;
        renderer.render(scene, camera);
      };

      render();
    },
    reset(){
      var currentCanvas = document.querySelector("canvas")
      currentCanvas.remove()
      while(this.scene.children.length > 0){
        this.scene.remove(this.scene.children[0]);
      }
			this.moonCounter = 5;
      this.createScene();
    },
    addTree(){
      this.randomSpherePoint();
      var geometry = new THREE.CylinderGeometry(0.1, 0.1, .6, 6);
      var material = new THREE.MeshBasicMaterial({
        color: "brown"
      });
      var cylinder = new THREE.Mesh(geometry, material);
      cylinder.position.set(
        this.treePositionX,
        this.treePositionY,
        this.treePositionZ
      );

      var circle1geo = new THREE.SphereGeometry(0.3, 6, 6)
      var circle1mat = new THREE.MeshBasicMaterial({
        color: "green"
      })
      var circle1 = new THREE.Mesh(circle1geo, circle1mat)
      circle1.position.set(.1,.2,.3)
      cylinder.add(circle1)
      var circle2geo = new THREE.SphereGeometry(0.2, 6, 6)
      var circle2mat = new THREE.MeshBasicMaterial({
        color: "green"
      })
      var circle2 = new THREE.Mesh(circle2geo, circle2mat)
      circle2.position.set(.2,.12,.12)
      cylinder.add(circle1)
      cylinder.rotation.z = this.treePositionZ * Math.PI / 3

      this.sphere.add(cylinder);
    },
    moonCounterCheck(){
      if(this.moonCounter > 0) {
        this.moonCounter -= 1;
        this.addMoon();
      } else {
        alert("Mo Moons === Mo Problems");
      }
    },
    randomMoonPoint() {
      var u = Math.random();
      var v = Math.random();
      var theta = 2 * Math.PI * u;
      var phi = Math.acos(2 * v - 1);
      var x = 0 + 3.7 * Math.sin(phi) * Math.cos(theta);
      var y = 0 + 3.7 * Math.sin(phi) * Math.sin(theta);
      var z = 0 + 3.7 * Math.cos(phi);
      this.moonPositionX = x;
      this.moonPositionY = y;
      this.moonPositionZ = z;
    },
    randomSpherePoint() {
      var u = Math.random();
      var v = Math.random();
      var theta = 2 * Math.PI * u;
      var phi = Math.acos(2 * v - 1);
      var x = 0 + 3 * Math.sin(phi) * Math.cos(theta);
      var y = 0 + 3 * Math.sin(phi) * Math.sin(theta);
      var z = 0 + 3 * Math.cos(phi);
      this.treePositionX = x;
      this.treePositionY = y;
      this.treePositionZ = z;
    },
    addMountain() {
      this.randomSpherePoint();
      var geometry = new THREE.CylinderGeometry(0.5, 0, 0.5, 3, false);
      var material = new THREE.MeshBasicMaterial({
        color: this.mountainColorValue
      });
      var cylinder = new THREE.Mesh(geometry, material);
      cylinder.position.set(
        this.treePositionX,
        this.treePositionY,
        this.treePositionZ
      );
      this.sphere.add(cylinder);
    },
    addMoon() {
      this.randomMoonPoint();
      var geometry = new THREE.SphereGeometry(0.5, 16, 10, 8);
      var material = new THREE.MeshBasicMaterial({
        color: this.moonColorValue
      });
      var cylinder = new THREE.Mesh(geometry, material);
      cylinder.position.set(
        this.moonPositionX,
        this.moonPositionY,
        this.moonPositionZ
      );
      this.sphere.add(cylinder);
    },
    colorValueChange() {
      this.geometry.colorsNeedUpdate = true;
      let color = this.colorValue.split("#")[1];
      this.geometry.faces.forEach(function(face) {
        face.color.setHex("0x" + color);
      });
    },
    faceColorChange() {
      let index = Math.floor(Math.random() * 263);
      this.geometry.colorsNeedUpdate = true;
      let landColor = this.landColor.split("#")[1];
      this.geometry.faces[index].color.setHex("0x" + landColor);
      this.geometry.faces[index * 2].color.setHex("0x" + landColor);
      this.geometry.faces[index - 1].color.setHex("0x" + landColor);
      this.geometry.faces[index + 1].color.setHex("0x" + landColor);
      this.geometry.faces[index + 3].color.setHex("0x" + landColor);
      this.geometry.faces[index + 25].color.setHex("0x" + landColor);
      this.geometry.faces[index + 24].color.setHex("0x" + landColor);
      this.geometry.faces[index - 24].color.setHex("0x" + landColor);
      this.geometry.faces[index - 25].color.setHex("0x" + landColor);
      this.geometry.faces[index - 3].color.setHex("0x" + landColor);
    },
    postPlanet() {
      console.log(document.querySelector("canvas"));
      if (this.planetName === "" || this.planetDescription === "") {
        alert("Please enter all fields for your planet!");
      } else {
        this.planetImage = document
          .getElementsByTagName("canvas")[0]
          .toDataURL("image/png");
        fetch("https://terra-former.herokuapp.com/planets", {
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
              this.planetName = "";
              this.planetDescription = "";
              this.serverResponse = response;
							this.reset();
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
