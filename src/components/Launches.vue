<template>
  <div id="Launches">
		<p></p>
		<h4>Plan your travel now - NEW deals DAILY!</h4>
		<p></p>
		<p>Simply select your preferred launch date to start the journey of a lifetime. Your new TerraForm awaits! Find the trip that matches your desires, spend more time in space - save money! Want to get there a little faster...might cost you a pretty penny. You can find the perfect deal!</p>
		<p></p>
		<small>Trip Prices and Durations are subject to change.</small>
		<p></p>
		<div class="form-group container">
	      <label for="date">Select Your Launch Date:</label>
	      <input v-model="launchDate" type="date" id="date" class="form-control">
				<p></p>
				<button class ="btn btn-primary" type="button" name="launchDate" @click.prevent="setLaunchURL()">Find Launches</button>
			</div>
		<span>
			<Launch v-for="launch in launches" :key="launch.id" :data="launch"/>
		</span>
  </div>
</template>
<script>
import Launch from "@/components/Launch";

export default {
  name: "Launches",
	components: {
		Launch
	},
  data() {
		return {
			launchDate: "",
			launchURL: "https://launchlibrary.net/1.3/launch?startdate=",
			launches: []
		}
	},
	methods: {
		getLaunches() {
			fetch(this.launchURL)
			.then(response => response.json())
			.then(launchesVar => this.launches = launchesVar.launches)
		},
		setLaunchURL(){
			this.launchURL += this.launchDate;
			this.getLaunches();
		}
	}
}
</script>

<style scoped>
span {
	display: flex;
	flex-flow: row wrap;
	align-content: space-around;
	padding: 1rem;

}
</style>
