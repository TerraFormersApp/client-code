import Vue from "vue"
import Router from "vue-router"
import LandingPage from "@/components/LandingPage"
import Editor from "@/components/Editor"
import Home from "@/components/Home"
import PlanetCards from "@/components/PlanetCards"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/editor",
      name: "Editor",
      component: Editor
    },
    {
      path: "/home",
      name: "Home",
      component: Home

    },
    {
      path: "/planet-cards",
      name: "PlanetCards",
      component: PlanetCards

    }
  ]
})
