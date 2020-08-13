<template>
  <button
    class="dwc-switch"
    :class="{
      checked: value,
      [size]: true,
      disabled: disabled === true || disabled === 'true',
    }"
    @click="onClick"
  >
    <span class="dwc-switch-inner"></span>
  </button>
</template>
<script lang="ts">
export default {
  name: "dwc-switch",
  props: {
    disabled: [Boolean, String],
    size: {
      type: String,
      default: "middle",
      validator<String>(val: string) {
        return ["small", "middle"].includes(val);
      },
    },
    value: { type: Boolean, required: true },
  },
  setup(props, context) {
    const onClick = (ev: MouseEvent) => {
      if (!props.disabled) {
        context.emit("update:value", !props.value);
      }
    };

    return { onClick };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-switch {
  width: 44px;
  height: 22px;
  position: relative;
  background-color: $dwc-disable;
  border: none;
  outline: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color $dwc-transition;
  position: relative;

  &.small {
    width: 28px;
    height: 16px;

    > .dwc-switch-inner {
      width: 14px;
      height: 14px;
      border-radius: 7px;
    }
  }

  &.checked {
    background-color: $dwc-blue;

    > .dwc-switch-inner {
      left: 22px;
    }

    &.small {
      > .dwc-switch-inner {
        left: 12px;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  > .dwc-switch-inner {
    position: absolute;
    top: 1px;
    left: 2px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 10px;
    transition: left $dwc-transition;
  }
}
</style>
