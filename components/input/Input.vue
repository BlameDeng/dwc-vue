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
    v-bind="labelAttrs"
  >
    <dwc-icon
      v-if="prefixIconName"
      class="dwc-input-prefix-icon"
      :name="prefixIconName"
      size="1em"
      :style="prefixIconStyle"
      @click="onPrefixIcon"
    ></dwc-icon>
    <input
      class="dwc-input-el"
      :class="{
        bordered: bordered === true || bordered === 'true',
        error: error === true || error === 'true',
        disabled: disabled === true || disabled === 'true',
        prefix: !!prefixIconName,
        suffix: !!suffixIconName,
        [type]: true,
        [size]: true,
      }"
      :value="value"
      :checked="checked"
      :disabled="disabled === true || disabled === 'true'"
      :readonly="readonly === true || readonly === 'true'"
      :type="type"
      @input="onInput"
      v-bind="$attrs"
    />
    <dwc-icon
      v-if="suffixIconName"
      class="dwc-input-suffix-icon"
      :name="suffixIconName"
      size="1em"
      :style="suffixIconStyle"
      @click="onSuffixIcon"
    ></dwc-icon>
  </label>
</template>
<script lang="ts">
import { computed, watchEffect } from "vue";
import { Icon } from "dwc-icons";

export default {
  name: "dwc-input",
  components: { "dwc-icon": Icon },
  inheritAttrs: false,
  props: {
    bordered: { type: [Boolean, String], default: true },
    checked: { type: Boolean, default: false },
    disabled: [Boolean, String],
    error: [Boolean, String],
    labelAttrs: Object,
    prefixIconName: String,
    prefixIconStyle: [String, Object],
    readonly: [Boolean, String],
    suffixIconName: String,
    suffixIconStyle: [String, Object],
    size: {
      type: String,
      default: "middle",
      validator<String>(val: string) {
        return ["small", "middle", "large"].includes(val);
      },
    },
    type: { type: String, defult: "text" },
    value: String,
  },
  setup(props, context) {
    const onInput = (ev: InputEvent) => {
      context.emit("update:value", (ev.target as HTMLInputElement).value);
      context.emit("update:checked", (ev.target as HTMLInputElement).checked);
    };

    const onPrefixIcon = (ev: MouseEvent) => {
      context.emit("click-prefix", ev);
    };

    const onSuffixIcon = (ev: MouseEvent) => {
      context.emit("click-suffix", ev);
    };

    return { onInput, onPrefixIcon, onSuffixIcon };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-input {
  display: inline-block;
  position: relative;
  height: 32px;
  color: $dwc-main;
  font-size: 14px;

  &.bordered {
    > .dwc-input-el {
      border: 1px solid;
      border-color: $dwc-border;
    }
  }

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
    outline: none;

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
