<template>
  <div class="about">
    <div class="jumbotron">
    <h1 class="display-3">Why Terraforming?</h1>
    <p class="lead">Because awesome.</p>
    <hr class="my-4">
    <p>Our team is passionate about space, fantasy, and creating new things. A place on the web is a  good start toward a real place in space.</p>
    </div>
    <div class="team">
        <div class="card mb-3">
            <h3 class="card-header">Technologies Used</h3>
            <img style="height: auto; width: 100%; display: block;" src="../../static/images/techUsed.png" alt="Card image">
        </div>
        <div class="card text-white bg-primary mb-3" style="width: 70   %;">
        <div class="card-header">Our Team</div>
        </div>
        <div class="teammates">
            <div id="teammate" class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Brian Novak</h5>
                    <h6 class="card-subtitle text-muted">Full Stack Web Developer</h6>
                </div>
                <img style="height: auto; width: 250px; display: block;" src="../../static/images/brovak.jpg" alt="Card image">
            </div>
            <div id="teammate" class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Patrick Biffle</h5>
                    <h6 class="card-subtitle text-muted">Full Stack Web Developer</h6>
                </div>
                <img style="height: auto; width: 290px; display: block;" src="../../static/images/pBiff.png" alt="Card image">
            </div>
            <div id="teammate" class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Kevin O'Brien</h5>
                    <h6 class="card-subtitle text-muted">Full Stack Web Developer</h6>
                </div>
                <img style="height: auto; width: 250px; display: block;" src="../../static/images/kevin.jpg" alt="Card image">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>
<style scoped>
.teammates {
  display: flex;
  flex-flow: row;
}
#teammate {
  margin: 4px;
  overflow: hidden;
}
#teammate img {
  border-radius: 5px;
}
@media screen and (max-width: 775px) {
  #temmate {
    width: 250px;
  }
  .teammates {
    display: block;
  }
  .card-body {
    width: 180%;
  }
}
</style>


