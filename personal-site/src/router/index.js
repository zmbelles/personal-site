import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DatabaseDemo from "../views/DatabaseDemo.vue"; // Import the DatabaseDemo view

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/database-demo",
    name: "DatabaseDemo",
    component: DatabaseDemo, // Add the route for DatabaseDemo
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
