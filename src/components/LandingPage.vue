<template>
  <div class="page-landing">
    <router-link to=/home>
      <div class="">
        <lottie :options="defaultOptions" :height="600" :width="600" v-on:animCreated="handleAnimation"/>
      </div>
    </router-link>
  </div>
</template>

<script>
import Lottie from "../../Lottie.vue";
import * as animationData from "../../static/TF.json";

export default {
  name: "LandingPage",
  data(){
    return {
      defaultOptions: {animationData: animationData},
      animationSpeed: 1,
      scrolled: false
    }
  },
  components: {
  	"lottie": Lottie
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0
      play()
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    }
  }
}</script>

<style scoped>
</style>
