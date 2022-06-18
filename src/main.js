import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./interceptors/axios";
// import GAuth from "vue3-google-oauth2";

// const gAuthOptions = {
//   clientId:
//     "715591355963-9br97sg1ug28v086m0egutn2e7vuc57g.apps.googleusercontent.com",
//   scope: "email",
//   prompt: "consent",
//   fetch_basic_profile: false,
// };

const app = createApp(App);

// app.use(GAuth, gAuthOptions);

app.use(router).mount("#app");
