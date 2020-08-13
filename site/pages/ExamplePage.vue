<template>
  <collapse-transition-example></collapse-transition-example>
  <button-example></button-example>
  <icon-example></icon-example>
  <input-example></input-example>
  <select-example></select-example>
  <switch-example></switch-example>
  <tabs-example></tabs-example>
</template>
<script lang="ts">
import ButtonExample from "../examples/ButtonExample.vue";
import CollapseTransitionExample from "../examples/CollapseTransitionExample.vue";
import IconExample from "../examples/IconExample.vue";
import InputExample from "../examples/InputExample.vue";
import SelectExample from "../examples/SelectExample.vue";
import SwitchExample from "../examples/SwitchExample.vue";
import TabsExample from "../examples/TabsExample.vue";

export default {
  name: "example-page",
  components: {
    "button-example": ButtonExample,
    "collapse-transition-example": CollapseTransitionExample,
    "icon-example": IconExample,
    "input-example": InputExample,
    "select-example": SelectExample,
    "switch-example": SwitchExample,
    "tabs-example": TabsExample,
  },
  setup(props) {},
};
</script>
