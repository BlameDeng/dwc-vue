<template>
  <Input
    :suffixIconName="visible ? 'visibility' : 'visibility-hide_2'"
    suffixIconStyle="cursor:pointer;"
    :type="visible ? 'text' : 'password'"
    @click-suffix="toggle"
  />
</template>
<script lang="ts">
import { ref } from "vue";

import Input from "./Input.vue";

export default {
  name: "dwc-password",
  components: { Input },
  setup(props, context) {
    const visible = ref(false);

    const toggle = () => {
      visible.value = !visible.value;
    };

    return { visible, toggle };
  },
};
</script>
