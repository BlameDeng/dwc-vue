<template>
  <label
    class="dwc-select"
    :class="{ [size]: true }"
    v-click-outside="onOutside"
  >
    <dwc-input
      :disabled="disabled"
      :placeholder="placeholder"
      :label-attrs="{
        style: { width: '100%' },
        onmouseenter: onMouseEnter,
        onmouseleave: onMouseLeave,
      }"
      :style="{ cursor: 'pointer', width: '100%' }"
      :size="size"
      :value="label"
      :suffix-icon-name="iconName"
      :suffix-icon-style="{ width: `${iconSize}px`, height: `${iconSize}px` }"
      readonly="true"
      @click="onClickInput"
      @click-suffix="onSuffix"
    >
    </dwc-input>
    <dwc-collapse-transition direction="vertical">
      <ul
        class="dwc-select-dropdown-list"
        :class="dropDownClass"
        :style="dropDownStyle"
        v-if="!closed"
      >
        <slot></slot>
      </ul>
    </dwc-collapse-transition>
  </label>
</template>
<script lang="ts">
import { ref, InjectionKey, Ref, computed, provide } from "vue";

import { ClickOutside } from "../directives/ClickOutside";
import CollapseTransition from "../collapse-transition/CollapseTransition.vue";
import Input from "../input/Input.vue";

export const DWCSelectValue: InjectionKey<Ref<string | number>> = Symbol(
  "DWCSelectValue"
);
export const DWCUpdateSelectValue: InjectionKey<(
  val: string | number
) => void> = Symbol("DWCUpdateSelectValue");

export default {
  name: "dwc-select",
  components: {
    "dwc-collapse-transition": CollapseTransition,
    "dwc-input": Input,
  },
  directives: { "click-outside": ClickOutside },
  props: {
    allowClear: { type: [Boolean, String], default: false },
    defaultValue: [Number, String],
    disabled: [Boolean, String],
    dropDownClass: [String, Array, Object],
    dropDownStyle: [String, Object],
    placeholder: String,
    size: {
      type: String,
      default: "middle",
      validator<String>(val: string) {
        return ["small", "middle", "large"].includes(val);
      },
    },
    value: [Number, String],
  },
  setup(props, context) {
    const closed = ref(true);

    const map = ref<Map<string | number, string | number>>(new Map());

    if (context.slots?.default) {
      context.slots.default().forEach((child) => {
        if (map.value.has(child.props.value)) {
          throw new Error(
            `Duplicate option value found - "${child.props.value}".`
          );
        } else {
          map.value.set(
            child.props.value,
            child.props.label || child.props.value
          );
        }
      });
    }

    const current = ref<string | number>(props.defaultValue);

    const selectValue = computed(() => {
      if (props.value !== undefined) {
        return props.value;
      }

      return current.value;
    });

    const updateSelectValue = (val: string | number) => {
      current.value = val;
      context.emit("update:value", val);
    };

    provide(DWCSelectValue, selectValue);
    provide(DWCUpdateSelectValue, updateSelectValue);

    const label = computed(() => {
      if (!selectValue.value) {
        return "";
      } else {
        return map.value.get(selectValue.value);
      }
    });

    const mouseIn = ref(false);

    const iconName = computed(() => {
      const allowed = props.allowClear === true || props.allowClear === "true";

      if (mouseIn.value && selectValue.value && allowed) {
        return "close";
      }

      return "chevron-down";
    });

    const iconSize = computed(() => {
      if (props.size === "large") {
        return 12;
      } else if (props.size === "middle") {
        return 10;
      } else {
        return 8;
      }
    });

    const onClickInput = () => {
      closed.value = !closed.value;
    };

    const onOutside = () => {
      closed.value = true;
    };

    const onMouseEnter = () => {
      mouseIn.value = true;
    };

    const onMouseLeave = () => {
      mouseIn.value = false;
    };

    const onSuffix = (ev: MouseEvent) => {
      if (iconName.value === "close") {
        ev.preventDefault();
        updateSelectValue("");
      }
    };

    return {
      closed,
      label,
      iconName,
      iconSize,
      onClickInput,
      onOutside,
      onMouseEnter,
      onMouseLeave,
      onSuffix,
    };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-select {
  position: relative;
  width: 180px;
  display: inline-block;

  &.small {
    > .dwc-select-dropdown-list {
      top: 28px;
    }
  }

  &.large {
    > .dwc-select-dropdown-list {
      top: 44px;
    }
  }

  > .dwc-select-dropdown-list {
    width: 100%;
    margin-bottom: 0;
    padding: 4px 0;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 36px;
    z-index: 1000;
    list-style: none;
    box-shadow: $dwc-shadow;
  }
}
</style>
