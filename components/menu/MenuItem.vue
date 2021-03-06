<template>
  <li
    class="dwc-menu-item"
    :class="{
      active: selectedKey === value,
      [mode]: true,
      disabled: disabled === true || disabled === 'true',
    }"
    @click="onClick"
  >
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { inject } from "vue";

import {
  DWCMenuMode,
  DWCMenuParentKey,
  DWCMenuSetRelationship,
  DWCMenuSelectedKey,
  DWCMenuSetSelectedKey,
} from "./Menu.vue";

export default {
  name: "dwc-menu-item",
  props: {
    disabled: { type: [Boolean, String], default: false },
    value: { type: [Number, String], required: true },
  },
  setup(props) {
    const mode = inject(DWCMenuMode);
    const parentKey = inject(DWCMenuParentKey);

    const setRelationship = inject(DWCMenuSetRelationship);
    const selectedKey = inject(DWCMenuSelectedKey);
    const setSelectdKey = inject(DWCMenuSetSelectedKey);

    setRelationship(props.value, parentKey);

    const onClick = () => {
      if (props.disabled === true || props.disabled === "true") {
        return;
      }

      if (selectedKey.value !== props.value) {
        setSelectdKey(props.value);
      }
    };

    return { mode, selectedKey, onClick };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-menu {
  &.horizontal {
    > .dwc-menu-item {
      &.active {
        background-color: #fff;

        &::after {
          position: absolute;
          bottom: -1px;
          right: 0;
          left: 0;
          display: block;
          content: "";
          height: 2px;
          background-color: $dwc-blue;
        }
      }
    }
  }
}

.dwc-menu-item {
  color: $dwc-main;
  cursor: pointer;
  transition: color $dwc-transition, background-color $dwc-transition;
  padding: 12px 24px;
  background-color: #fff;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: $dwc-blue-highlight;
  }

  &.active {
    color: $dwc-blue;
    background-color: $dwc-background-selected;
  }

  &.vertical {
    &.active {
      &::after {
        transform: scale(1);
      }
    }

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1px;
      display: block;
      content: "";
      width: 2px;
      background-color: $dwc-blue;
      transition: transform $dwc-transition;
      transform: scale(0);
    }
  }

  &.disabled {
    color: $dwc-disable;
    cursor: not-allowed;
  }
}
</style>
