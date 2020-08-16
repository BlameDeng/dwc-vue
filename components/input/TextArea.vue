<template>
  <textarea
    class="dwc-text-area"
    :class="{
      autosize: autosize === true || autosize === 'true',
      bordered: bordered === true || bordered === 'true',
      error: error === true || error === 'true',
      disabled: disabled === true || disabled === 'true',
    }"
    :disabled="disabled === true || disabled === 'true'"
    ref="el"
    :value="value"
    @input="onInput"
  />
</template>
<script lang="ts">
import { ref, onMounted } from "vue";

import { calNodeHeight } from "../utils/calNodeHeight";

export default {
  name: "dwc-text-area",
  props: {
    autosize: { type: [Boolean, String], default: true },
    bordered: { type: [Boolean, String], default: true },
    disabled: [Boolean, String],
    error: [Boolean, String],
    value: String,
  },
  setup(props, context) {
    const el = ref<HTMLTextAreaElement>(null);
    const originHeight = ref(0);

    onMounted(() => {
      if (el.value) {
        const { top, bottom } = el.value.getBoundingClientRect();
        originHeight.value = bottom - top;
      }
    });

    const onInput = (ev: InputEvent) => {
      context.emit("update:value", (ev.target as HTMLTextAreaElement).value);

      if (props.autosize && el.value) {
        const hiddenHeight = calNodeHeight(el.value);
        if (hiddenHeight > originHeight.value) {
          el.value.style.height = hiddenHeight + "px";
        }
      }
    };

    return { onInput, el };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-text-area {
  color: $dwc-main;
  font-size: 14px;
  padding: 4px 12px;
  border: none;
  border-radius: 2px;
  color: inherit;
  transition: border-color $dwc-transition;
  text-overflow: ellipsis;

  &.disabled {
    color: $dwc-secondary;

    border-color: $dwc-disable;
    background-color: $dwc-background-disable;
    cursor: not-allowed;

    &:hover {
      border-color: $dwc-disable;
    }
  }

  &.error {
    color: $dwc-red;
    border-color: $dwc-red;
    box-shadow: 0px 0px 2px $dwc-red-highlight;

    &:hover {
      border-color: $dwc-red;
    }

    &:focus {
      border-color: $dwc-red;
      box-shadow: 0px 0px 2px $dwc-red-highlight;
    }
  }

  &.bordered {
    border: 1px solid;
    border-color: $dwc-border;
  }

  &::placeholder {
    color: $dwc-disable;
  }

  &::selection {
    color: #fff;
    background-color: $dwc-blue;
  }

  &:hover {
    border-color: $dwc-blue-highlight;
  }

  &:focus {
    border-color: $dwc-blue;
    box-shadow: 0px 0px 2px $dwc-blue-highlight;
    outline: none;
  }

  &.autosize {
    resize: none;
    overflow-y: hidden;
  }
}
</style>
