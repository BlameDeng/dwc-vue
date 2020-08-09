<template>
  <i
    class="dwc-icon"
    :class="{ spinning: spinning === true || spinning === 'true' }"
    :style="{ width: iconSize, height: iconSize }"
  >
    <component :is="'dwc-' + name"></component>
  </i>
</template>
<script lang="ts">
import { computed } from "vue";

export default {
  name: "Icon",
  props: {
    name: { type: String, required: true },
    spinning: [Boolean, String],
    size: { type: [Number, String], default: 14 },
  },
  setup(props, context) {
    const iconSize = computed(() => {
      return typeof props.size === "string" ? props.size : props.size + "px";
    });

    return { iconSize };
  },
};
</script>
<style lang="scss">
.dwc-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &.spinning {
    > svg {
      animation: dwc-spin 1.2s linear infinite;
    }
  }

  > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}

@keyframes dwc-spin {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
