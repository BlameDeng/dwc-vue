import "./index.scss";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import { install as icons } from "../components/icon/icons";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import ExamplePage from "./pages/ExamplePage.vue";
import IconPage from "./pages/IconPage.vue";

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes: [
    { path: "/", component: HomePage },
    { path: "/example", component: ExamplePage },
    { path: "/icon", component: IconPage },
  ],
});

createApp(App).use(router).use(icons).mount("#app");
