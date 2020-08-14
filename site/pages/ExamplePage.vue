<template>
  <button-example></button-example>
  <collapse-transition-example></collapse-transition-example>
  <icon-example></icon-example>
  <input-example></input-example>
  <menu-example></menu-example>
  <select-example></select-example>
  <switch-example></switch-example>
  <tabs-example></tabs-example>
</template>
<script lang="ts">
import ButtonExample from "../examples/ButtonExample.vue";
import CollapseTransitionExample from "../examples/CollapseTransitionExample.vue";
import IconExample from "../examples/IconExample.vue";
import InputExample from "../examples/InputExample.vue";
import MenuExample from "../examples/MenuExample.vue";
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
    "menu-example": MenuExample,
    "select-example": SelectExample,
    "switch-example": SwitchExample,
    "tabs-example": TabsExample,
  },
  setup(props) {},
};
</script>
