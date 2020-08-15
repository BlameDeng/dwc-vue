import "./index.scss";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import ExamplePage from "./pages/ExamplePage.vue";

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes: [
    { path: "/", component: HomePage },
    { path: "/example", component: ExamplePage },
  ],
});

createApp(App).use(router).mount("#app");
