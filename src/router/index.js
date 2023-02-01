import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Car_repairs from "../pages/Car_repairs";
import Maritime from "../pages/Maritime";
import Flight from "../pages/Flight";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import axios from "axios";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/car_repairs",
    name: "Car_repairs",
    component: Car_repairs,
  },
  {
    path: "/maritime",
    name: "Maritime",
    component: Maritime,
  },
  {
    path: "/flight",
    name: "Flight",
    component: Flight,
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
