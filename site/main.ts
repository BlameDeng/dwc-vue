import "./index.scss";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import IntroducePage from "./pages/IntroducePage.vue";
import ComponentsPage from "./pages/ComponentsPage.vue";
import QAPage from "./pages/QAPage.vue";

import ComponentsOverview from "./components/ComponentsOverview.vue";
import ButtonExample from "./examples/ButtonExample.vue";
import MenuExample from "./examples/MenuExample.vue";
import InputExample from "./examples/InputExample.vue";
import SelectExample from "./examples/SelectExample.vue";
import SwitchExample from "./examples/SwitchExample.vue";
import TabsExample from "./examples/TabsExample.vue";

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/components" },
    { path: "/introduce", component: IntroducePage },
    {
      path: "/components",
      component: ComponentsPage,
      children: [
        { path: "", redirect: { name: "overview" } },
        { path: "overview", name: "overview", component: ComponentsOverview },
        { path: "button", component: ButtonExample },
        { path: "menu", component: MenuExample },
        { path: "input", component: InputExample },
        { path: "select", component: SelectExample },
        { path: "switch", component: SwitchExample },
        { path: "tabs", component: TabsExample },
      ],
    },
    { path: "/qa", component: QAPage },
  ],
});

createApp(App).use(router).mount("#app");
