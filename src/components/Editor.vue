<template>
  <div>
    <div id="planetImage">
        <img src="https://www.nature.com/polopoly_fs/7.44819.1498125747!/image/WEB-GettyImages-685026469.jpg_gen/derivatives/landscape_630/WEB-GettyImages-685026469.jpg" alt="placeholder for image">
    </div>
    <form @submit.prevent="postPlanet">
        <div class="form-group">
            <label class="col-form-label" for="inputDefault">Your Planet's Name</label>
            <input v-model="planetName" class="form-control" placeholder="Default input" id="inputDefault" type="text">
        </div>
        <div class="form-group">
            <select v-model="waterPercent" class="custom-select">
                <option selected="">Choose water percentage</option>
                <option value=10>Ten</option>
                <option value=20>Twenty</option>
                <option value=30>Thirty</option>
                <option value=40>Forty</option>
                <option value=50>Fifty</option>
                <option value=60>Sixty</option>
                <option value=70>Seventy</option>
                <option value=80>Eighty</option>
                <option value=90>Ninety</option>
            </select>
        </div>
        <div class="form-group">
            <select v-model="waterColor" class="custom-select">
                <option selected="">Choose water color</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Indigo">Indigo</option>
                <option value="Violet">Violet</option>
                <option value="Seagreen">Seagreen</option>
                <option value="Mauve">Mauve</option>
                <option value="Aqua">Aqua</option>
                <option value="Cornflowerblue">Cornflowerblue</option>
            </select>
        </div>
        <div class="form-group">
            <select v-model="landColor" class="custom-select">
                <option selected="">Choose land color</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Indigo">Indigo</option>
                <option value="Violet">Violet</option>
                <option value="Seagreen">Seagreen</option>
                <option value="Mauve">Mauve</option>
                <option value="Aqua">Aqua</option>
                <option value="Cornflowerblue">Cornflowerblue</option>
            </select>
        </div>
				<div class="form-group">
            <select v-model="skyColor" class="custom-select">
                <option selected="">Choose sky color</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Indigo">Indigo</option>
                <option value="Violet">Violet</option>
                <option value="Seagreen">Seagreen</option>
                <option value="Mauve">Mauve</option>
                <option value="Aqua">Aqua</option>
                <option value="Cornflowerblue">Cornflowerblue</option>
            </select>
        </div>
        <div class="form-group">
            <div class="custom-control custom-checkbox">
            <input v-model="mountains" class="custom-control-input" id="customCheck1" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck1">Mountains</label>
            </div>
        </div>
        <div class="form-group">
            <div class="custom-control custom-checkbox">
            <input v-model="trees" class="custom-control-input" id="customCheck2" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck2">Trees</label>
            </div>
        </div>
        <div class="form-group">
            <div class="custom-control custom-checkbox">
            <input v-model="wind"class="custom-control-input" id="customCheck3" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck3">Wind</label>
            </div>
        </div>
        <div class="form-group">
            <div class="custom-control custom-checkbox">
            <input v-model="hurricanes" class="custom-control-input" id="customCheck4" checked="" type="checkbox">
            <label class="custom-control-label" for="customCheck4">Hurricanes</label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Save Your Planet</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Editor",
	data(){
		return {
			planetName: "",
			waterPercent: 0,
			waterColor: "",
			landPercent: 0,
			landColor: "",
			skyColor: "",
			mountains: false,
			trees: false,
			wind: false,
			hurricanes: false,
		}
	},
	methods: {
		postPlanet(){
			if (this.planetName === "" || this.waterPercent === "" || this.waterColor === "" || this.landColor === "" || this.skyColor === "") {
				alert("Please enter all fields for your planet!");
			} else {
				fetch("http://localhost:3000/planets", {
					method: "post",
					body: JSON.stringify({
						name: `${this.planetName}`,
						water_percent: 0,
						water_color: `${this.waterColor}`,
						sky_color: `${this.skyColor}`,
						mountains: `${this.mountains}`,
						trees: `${this.trees}`,
						land_percent: `${this.landPercent}`,
						land_color: `${this.trees}`,
						hurricane: `${this.hurricanes}`,
						wind: `${this.wind}`,
						thumbnail_image: "",
					}),
					headers: new Headers({
						"Content-Type": "application/json"
					})
				})
				.then(response => response.json())
				.then(response => console.log(response))
			}
		}
	}
}
</script>

<style scoped>
#planetImage {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
