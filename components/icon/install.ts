import { Plugin, defineAsyncComponent } from "vue";

import iconList from "./icon-list.json";

export const install: Plugin = (app) => {
  for (const icon of iconList) {
    const iconComponent = defineAsyncComponent(() =>
      import("./components/" + icon + ".js")
    );

    app.component("dwc-" + icon, iconComponent);
  }
};
