<template>
  <i
    class="dwc-icon"
    :style="{ width: size + 'px', height: size + 'px' }"
    @click="onClick"
  >
    <component :is="'dwc-' + name"></component>
  </i>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  name: "Icon",
  props: {
    name: { type: String, required: true },
    size: { type: [Number, String], default: 14 },
  },
  setup(props, context) {
    const onClick = (ev: MouseEvent) => {
      context.emit("click", ev);
    };

    return { onClick };
  },
};
</script>
<style lang="scss">
.dwc-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
</style>
