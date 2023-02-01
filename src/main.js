import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./interceptors/axios";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
// importing element plus library for carousel funtioning
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// const gAuthOptions = {
//   clientId:
//     "715591355963-9br97sg1ug28v086m0egutn2e7vuc57g.apps.googleusercontent.com",
//   scope: "email",
//   prompt: "consent",
//   fetch_basic_profile: true,
// };

const app = createApp(App);

AOS.init({
  offset: 60, // offset (in px) from the original trigger point
  easing: "ease", // default easing for AOS animations
  once: false,
  delay: 1, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  mirror: false, // whether elements should animate out while scrolling past them
});

// app.use(GAuth, gAuthOptions);
app.use(store).use(router).use(ElementPlus).mount("#app");
