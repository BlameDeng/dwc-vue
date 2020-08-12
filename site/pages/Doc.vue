<template>
  <CollapseTransitionExample />
  <TabsExample />
  <ButtonExample />
  <IconExample />
  <InputExample />
  <SwitchExample />
</template>
<script lang="ts">
import ButtonExample from "../examples/ButtonExample.vue";
import CollapseTransitionExample from "../examples/CollapseTransitionExample.vue";
import IconExample from "../examples/IconExample.vue";
import InputExample from "../examples/InputExample.vue";
import SwitchExample from "../examples/SwitchExample.vue";
import TabsExample from "../examples/TabsExample.vue";

export default {
  name: "Doc",
  components: {
    ButtonExample,
    CollapseTransitionExample,
    IconExample,
    InputExample,
    SwitchExample,
    TabsExample,
  },
  setup(props) {},
};
</script>
