<template>
  <div>
    <Navbar/>
    <div class="logo">
    <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg" alt="Logo Here">
    </div>
    <div class="jumbotron">
    <h1 class="display-3">Geetings, Terraformer!</h1>
    <p class="lead">Your world awaits. </p>
    <hr class="my-4">
    <p>Earth life getting you down?  Create your own ideal planet to escape to when you need that better place. Navigate to the Planet Creation page or just check out the worlds that other Terraformers have already created.</p>
    </div>
  </div>
    </template>
<script>
// import Navbar from "/@components/Navbar";

export default {
  name: "Home"
};
</script>
<style scoped>
.logo {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
</style>


