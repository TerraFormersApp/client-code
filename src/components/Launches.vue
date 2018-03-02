<template>
  <div id="Launches">
		<p></p>
		<h4>Plan your travel now - NEW deals DAILY!</h4>
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
			launchURL: "https://launchlibrary.net/1.3/launch?startdate=2018-03-01",
			launches: []
		}
	},
	mounted() {
		this.getLaunches();
	},
	methods: {
		getLaunches() {
			fetch(this.launchURL)
			.then(response => response.json())
			.then(launchesVar => this.launches = launchesVar.launches)
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
