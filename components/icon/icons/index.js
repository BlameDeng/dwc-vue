import { defineAsyncComponent } from "vue";

import list from "./icon-list.json";

export const install = (app) => {
  for (const icon of list) {
    const iconComponent = defineAsyncComponent(() =>
      import("./components/" + icon + ".js")
    );

    app.component("dwc-" + icon, iconComponent);
  }
};

export const iconList = list;
