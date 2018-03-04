<template>
  <div id="">
    <form v-on:submit.prevent='colorValueChange()' >
      <input v-model='colorValue' type="color" name="color" placeholder='#fff'>
      <input type="submit" value='color'>
    </form>
    <form v-on:submit.prevent='faceColorChange()'>
      <input v-model='landColor' type="color" name="landColor">
      <input type="submit" value="land color">
    </form>
    <div ref='sphere'></div>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: "Planet",
  data(){
    return {
      landColor: null,
      wireframe: false,
      colorValue: '#fff',
      color: null,
      material: null,
      geometry: null
    }
  },
  watch: {

  },
  computed: {

  },
  methods: {
    colorValueChange(){
      this.geometry.colorsNeedUpdate = true;
      let color = this.colorValue.split('#')[1]
      this.geometry.faces.forEach(function(face){
        face.color.setHex('0x'+color)
      })
    },
    faceColorChange(){
      let index = Math.floor(Math.random() * 263)
      this.geometry.colorsNeedUpdate = true;
      let landColor = this.landColor.split('#')[1]
      this.geometry.faces[index].color.setHex('0x'+landColor)
      this.geometry.faces[index*2].color.setHex('0x'+landColor)
      this.geometry.faces[index-1].color.setHex('0x'+landColor)
      this.geometry.faces[index+1].color.setHex('0x'+landColor)
      this.geometry.faces[index+3].color.setHex('0x'+landColor)
      this.geometry.faces[index+25].color.setHex('0x'+landColor)
      this.geometry.faces[index+24].color.setHex('0x'+landColor)
      this.geometry.faces[index-24].color.setHex('0x'+landColor)
      this.geometry.faces[index-25].color.setHex('0x'+landColor)
      this.geometry.faces[index-3].color.setHex('0x'+landColor)
    }
  },
  updated(){

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
  }
}</script>
<style scoped>
</style>
