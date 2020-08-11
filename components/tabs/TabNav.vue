<script lang="ts">
import { h, inject } from "vue";

import { DWCTabsActiveTabName, DWCTabsUpdateCurrentTabName } from "./Tabs.vue";

export default {
  name: "TabNav",
  components: {},
  inheritAttrs: false,
  props: {
    labelMap: Map,
  },
  setup(props, context) {
    const activeTabName = inject(DWCTabsActiveTabName);
    const updateCurrenTabName = inject(DWCTabsUpdateCurrentTabName);

    const onTab = (ev: MouseEvent, k: string) => {
      context.emit("click-tab", [ev, k]);

      updateCurrenTabName(k);
    };

    return () =>
      h(
        "div",
        { className: "dwc-tab-nav" },
        Array.from(props.labelMap).map(([k, v]) =>
          h(
            "div",
            {
              className: "dwc-tab-nav-label",
              onClick: (ev: MouseEvent) => onTab(ev, k as string),
            },
            v as any
          )
        )
      );
  },
};
</script>
<style lang="scss" scoped></style>
