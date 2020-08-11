<template>
  <div class="dwc-tab-pane" v-if="activeTabName === name">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { inject } from "vue";

import { DWCTabsActiveTabName } from "./Tabs.vue";

export default {
  name: "TabPane",
  components: {},
  props: {
    disabled: { type: [Boolean, String], default: false },
    label: { type: String, required: true },
    name: { type: [Number, String], required: true },
  },
  setup(props, context) {
    const activeTabName = inject(DWCTabsActiveTabName);

    return { activeTabName };
  },
};
</script>
<style lang="scss"></style>
