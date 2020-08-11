<template>
  <div class="dwc-tab-pane">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { watchEffect } from "vue";

export default {
  name: "TabPane",
  components: {},
  props: {
    disabled: { type: [Boolean, String], default: false },
    label: { type: String, required: true },
    name: { type: String, required: true },
    _activeName: String,
  },
  setup(props, context) {
    watchEffect(() => {
      console.log(props._activeName);
    });

    return {};
  },
};
</script>
<style lang="scss"></style>
