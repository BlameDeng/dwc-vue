<template>
  <li
    class="dwc-select-option"
    :class="{
      active: selectValue === value,
      disabled: disabled === true || disabled === 'true',
    }"
    @click="onClick"
  >
    {{ label || value }}
  </li>
</template>
<script lang="ts">
import { inject } from "vue";

import { DWCSelectValue, DWCUpdateSelectValue } from "./Select.vue";

export default {
  name: "dwc-option",
  components: {},
  props: {
    disabled: [Boolean, String],
    label: [Number, String],
    value: { type: [Number, String], required: true },
  },
  setup(props, context) {
    const selectValue = inject(DWCSelectValue);
    const updateSelectValue = inject(DWCUpdateSelectValue);

    const onClick = (ev: MouseEvent) => {
      if (props.disabled === true || props.disabled === "true") {
        ev.preventDefault();

        return;
      }

      updateSelectValue(props.value);
    };

    return { selectValue, onClick };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-select-option {
  width: 100%;
  padding: 8px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: $dwc-main;
  cursor: pointer;
  background-color: #fff;
  transition: background-color $dwc-transition, color $dwc-transition;

  &:hover {
    background-color: $dwc-background-hover;
  }

  &.active {
    color: $dwc-blue;
  }

  &.disabled {
    color: $dwc-disable;
    background-color: #fff;
    cursor: not-allowed;
  }
}
</style>
