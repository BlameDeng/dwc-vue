<template>
  <button
    v-if="!href"
    class="dwc-button"
    :class="{
      danger: danger === true || danger === 'true',
      disabled: disabled === true || disabled === 'true',
      loading: loading === true || loading === 'true',
      [size]: true,
      [type]: true,
    }"
    :disabled="disabled === true || disabled === 'true'"
    :type="htmlType"
  >
    <dwc-icon
      v-if="iconName && !loading"
      :name="iconName"
      :size="iconSize"
      :style="{ marginRight: '4px' }"
    ></dwc-icon>
    <dwc-icon
      v-if="loading === true || loading === 'true'"
      name="loading"
      :size="iconSize"
      :spinning="true"
      :style="{ marginRight: '4px' }"
    ></dwc-icon>
    <span><slot></slot></span>
  </button>
  <a
    v-else
    class="dwc-href"
    :class="{
      disabled: disabled === true || disabled === 'true',
    }"
    :href="disabled ? 'javascript:void(0);' : href"
    :target="target"
    @click="onClick"
  >
    <span><slot></slot></span>
  </a>
</template>
<script lang="ts">
import { Icon } from "dwc-icons";

export default {
  name: "dwc-button",
  components: { "dwc-icon": Icon },
  props: {
    danger: [Boolean, String],
    disabled: [Boolean, String],
    href: String,
    htmlType: { type: String, default: "button" },
    iconName: String,
    iconSize: { type: [Number, String], default: "1em" },
    loading: [Boolean, String],
    size: {
      type: String,
      default: "middle",
      validator<String>(val: string) {
        return ["small", "middle", "large"].includes(val);
      },
    },
    target: String,
    type: {
      type: String,
      default: "default",
      validator<String>(val: string) {
        return ["primary", "default"].includes(val);
      },
    },
  },
  setup(props, context) {
    const onClick = (ev: MouseEvent) => {
      if (props.disabled) {
        ev.preventDefault();
      }
    };

    return { onClick };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-button {
  height: 32px;
  padding: 0 8px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  background-color: #fff;
  outline: none;
  border: 1px solid;
  border-color: $dwc-border;
  color: $dwc-main;
  cursor: pointer;
  font-size: 14px;
  transition: color $dwc-transition, background-color $dwc-transition,
    border-color $dwc-transition;

  &:hover {
    color: $dwc-blue-highlight;
    border-color: $dwc-blue-highlight;
  }

  &.primary {
    background-color: $dwc-blue;
    border-color: $dwc-blue;
    color: #fff;

    &:hover {
      background-color: $dwc-blue-highlight;
      border-color: $dwc-blue-highlight;
    }
  }

  &.danger {
    color: $dwc-red;
    border-color: $dwc-red;

    &:hover {
      color: $dwc-red-highlight;
      border-color: $dwc-red-highlight;
    }

    &.primary {
      background-color: $dwc-red;
      color: #fff;

      &:hover {
        background-color: $dwc-red-highlight;
        border-color: $dwc-red-highlight;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    color: $dwc-disable;
    border-color: $dwc-disable;

    &:hover {
      color: $dwc-disable;
      border-color: $dwc-disable;
    }

    &.primary {
      background-color: $dwc-background-disable;
      border-color: $dwc-disable;
      color: $dwc-disable;

      &:hover {
        background-color: $dwc-background-disable;
        border-color: $dwc-disable;
      }
    }
  }

  &.small {
    height: 24px;
  }

  &.large {
    height: 40px;
    font-size: 16px;
  }
}

.dwc-href {
  display: inline-block;
  padding: 0 8px;
  color: $dwc-blue;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  transition: color $dwc-transition;

  &:hover {
    color: $dwc-blue-highlight;
  }

  &.disabled {
    cursor: not-allowed;
    color: $dwc-disable;

    &:hover {
      color: $dwc-disable;
    }
  }
}
</style>
