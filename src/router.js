import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/people",
      name: "people",
      component: () => import("./views/Technology/People.vue")
    },
    {
      path: "/cars",
      name: "cars",
      component: () => import("./views/Technology/Cars.vue")
    },
    {
      path: "/traffic",
      name: "traffic",
      component: () => import("./views/Industry/Traffic.vue")
    },
    {
      path: "/security",
      name: "security",
      component: () => import("./views/Industry/Security.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
