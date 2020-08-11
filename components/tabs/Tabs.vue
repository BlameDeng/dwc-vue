<template>
  <div class="dwc-tabs">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "Tabs",
  components: {},
  props: {},
  setup(props, context) {
    context.slots.default().forEach((c) => {
      c.props._activeName = "c1";
    });

    console.log(context.slots.default());

    return {};
  },
};
</script>
<style lang="scss"></style>
