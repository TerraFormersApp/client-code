<template>
  <div id="Header">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<router-link class="nav-link navbar-brand" to="/home"><img id= "logo" src= "../../static/images/tflogo.png"/></router-link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarColor02">
		    <ul class="navbar-nav mr-auto">
					<li class="nav-link"><router-link to="/editor">Create Planet</router-link></li>
					<li><router-link class="nav-link" to="/planet-cards">Existing Terraforms</router-link></li>
					<li><router-link class="nav-link" to="/about">About</router-link></li>
		    </ul>
		  </div>
		</nav>
	</div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#logo {
  width: 3rem;
}
</style>
