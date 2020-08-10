<template>
  <ButtonDemo />
  <IconDemo />
  <InputDemo />
  <SwitchDemo />
</template>
<script lang="ts">
import ButtonDemo from "../demos/ButtonDemo.vue";
import IconDemo from "../demos/IconDemo.vue";
import InputDemo from "../demos/InputDemo.vue";
import SwitchDemo from "../demos/SwitchDemo.vue";

export default {
  name: "Doc",
  components: { ButtonDemo, IconDemo, InputDemo, SwitchDemo },
  setup(props) {},
};
</script>
