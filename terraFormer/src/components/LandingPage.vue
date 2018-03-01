<template>
  <div class='page-landing'>
    <h1>IM A LANDING PAGE</h1>
    <router-link to="/editor">
      <img src="../../static/Comp-1_1.gif" alt="hold">
    </router-link>
  </div>
</template>
<script>
export default {
  name: "LandingPage",
  data(){
    return {

    }
  }
}</script>
<style scoped>
.page-landing{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
