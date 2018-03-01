<template>
  <div>
    <div class="logo">
	    <img id= "planet1" src="../../static/images/planet.png" alt="Logo Here">
	    </div>
		    <div class="jumbotron">
		    <h1 class="display-3">Greetings, Terraformer!</h1>
		    <p class="lead">Your fantasy world awaits. </p>
		    <p>Earth life getting you down?  Create your own ideal planet to escape to when you need that better place. Navigate to the Planet Creation page or just check out the worlds that other Terraformers have already created.</p>
	    </div>
  </div>
</template>

<script>
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

#planet1 {
  height: 20rem;
}
</style>
