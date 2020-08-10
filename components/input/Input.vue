<template>
  <label
    class="dwc-input"
    :class="{
      bordered: bordered === true || bordered === 'true',
      error: error === true || error === 'true',
      disabled: disabled === true || disabled === 'true',
      prefix: !!prefixIconName,
      suffix: !!suffixIconName,
      [type]: true,
      [size]: true,
    }"
    :style="{ width: inputWidth }"
  >
    <Icon
      v-if="prefixIconName"
      class="dwc-input-prefix-icon"
      :name="prefixIconName"
      size="1em"
      :style="prefixIconStyle"
      @click="onPrefixIcon"
    />
    <input
      class="dwc-input-el"
      :checked="checked"
      :disabled="disabled === true || disabled === 'true'"
      :max="max"
      :min="min"
      :placeholder="placeholder"
      :readonly="readonly === true || readonly === 'true'"
      :step="step"
      :style="inputStyle"
      :type="type"
      :value="value"
      @input="onInput"
    />
    <Icon
      v-if="suffixIconName"
      class="dwc-input-suffix-icon"
      :name="suffixIconName"
      size="1em"
      :style="suffixIconStyle"
      @click="onSuffixIcon"
    />
  </label>
</template>
<script lang="ts">
import { computed } from "vue";

import Icon from "../icon/Icon.vue";

export default {
  name: "Input",
  components: { Icon },
  props: {
    bordered: { type: [Boolean, String], default: true },
    checked: { type: Boolean, default: false },
    disabled: [Boolean, String],
    error: [Boolean, String],
    inputStyle: [String, Object],
    max: [String, Number],
    min: [String, Number],
    placeholder: { type: String, default: "" },
    prefixIconName: String,
    prefixIconStyle: [String, Object],
    readonly: [Boolean, String],
    step: [String, Number],
    suffixIconName: String,
    suffixIconStyle: [String, Object],
    size: { type: String, default: "middle" },
    type: { type: String, defult: "text" },
    value: String,
    width: { type: [Number, String], default: "180px" },
  },
  setup(props, context) {
    const onInput = (ev: InputEvent) => {
      context.emit("update:value", (ev.target as HTMLInputElement).value);
      context.emit("update:checked", (ev.target as HTMLInputElement).checked);
    };

    const inputWidth = computed(() => {
      if (props.type === "radio") {
        if (props.size == "small") {
          return "24px";
        }

        if (props.size == "middle") {
          return "32px";
        }

        if (props.size == "large") {
          return "40px";
        }
      }

      return typeof props.width === "string" ? props.width : props.width + "px";
    });

    const onPrefixIcon = (ev: MouseEvent) => {
      context.emit("click-prefix", ev);
    };

    const onSuffixIcon = (ev: MouseEvent) => {
      context.emit("click-suffix", ev);
    };

    return { onInput, inputWidth, onPrefixIcon, onSuffixIcon };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/var.scss";

.dwc-input {
  display: inline-block;
  position: relative;
  height: 32px;
  color: $dwc-main;
  font-size: 14px;

  &.disabled {
    color: $dwc-secondary;

    > .dwc-input-el {
      border-color: $dwc-disable;
      background-color: $dwc-background-disable;
      cursor: not-allowed;

      &:hover {
        border-color: $dwc-disable;
      }
    }
  }

  &.error {
    color: $dwc-red;

    > .dwc-input-el {
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
  }

  &.small {
    height: 24px;
  }

  &.large {
    height: 40px;
    font-size: 16px;
  }

  &.bordered {
    > .dwc-input-el {
      border: 1px solid;
      border-color: $dwc-border;
    }
  }

  &.prefix {
    > .dwc-input-el {
      padding-left: 28px;
    }
  }

  &.suffix {
    > .dwc-input-el {
      padding-right: 28px;
    }
  }

  &.radio {
    width: 32px;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &.small {
      width: 24px;
      height: 24px;
    }

    &.large {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }

    > .dwc-input-el {
      width: 16px;
      height: 16px;
      padding: 0;

      &:focus {
        box-shadow: none;
      }
    }
  }

  &.range {
    > .dwc-input-el {
      padding: 0;
    }
  }

  > .dwc-input-prefix-icon {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: inherit;
  }

  > .dwc-input-el {
    width: 100%;
    height: 100%;
    padding: 0 12px;
    border: none;
    border-radius: 2px;
    color: inherit;
    font-size: inherit;
    transition: border-color $dwc-transition;
    text-overflow: ellipsis;

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
  }

  > .dwc-input-suffix-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    color: inherit;
  }
}
</style>