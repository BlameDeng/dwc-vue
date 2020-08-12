import "./index.scss";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import { ClickOutside } from "../components";
import { install as icons } from "../components/icon/icons";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Doc from "./pages/Doc.vue";

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    { path: "/doc", component: Doc },
  ],
});

createApp(App)
  .use(router)
  .use(icons)
  .directive("click-outside", ClickOutside)
  .mount("#app");
