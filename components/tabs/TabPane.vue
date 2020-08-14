<template>
  <div class="dwc-tab-pane" v-if="activeTabName === name">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { inject } from "vue";

import { DWCTabsActiveTabName } from "./Tabs.vue";

export default {
  name: "dwc-tab-pane",
  props: {
    disabled: { type: [Boolean, String], default: false },
    label: String,
    labelStyle: [Object, String],
    name: { type: [Number, String], required: true },
  },
  setup(props, context) {
    const activeTabName = inject(DWCTabsActiveTabName);

    return { activeTabName };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-tab-pane {
  color: $dwc-main;
  font-size: 14px;
}
</style>
