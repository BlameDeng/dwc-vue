<template>
  <Input
    :bordered="bordered"
    :disabled="disabled"
    :error="error"
    :inputStyle="inputStyle"
    :placeholder="placeholder"
    :prefixIconName="prefixIconName"
    :prefixIconStyle="prefixIconStyle"
    :readonly="readonly"
    :size="size"
    :suffixIconName="visible ? 'visibility' : 'visibility-hide_2'"
    suffixIconStyle="cursor:pointer;"
    :type="visible ? 'text' : 'password'"
    :value="value"
    :width="width"
    @click-suffix="toggle"
    @input="onInput"
  />
</template>
<script lang="ts">
import { ref } from "vue";

import Input from "./Input.vue";

export default {
  name: "Password",
  components: { Input },
  props: {
    bordered: { type: [Boolean, String], default: true },
    disabled: [Boolean, String],
    error: [Boolean, String],
    inputStyle: [String, Object],
    placeholder: { type: String, default: "" },
    prefixIconName: String,
    prefixIconStyle: [String, Object],
    readonly: [Boolean, String],
    size: { type: String, default: "middle" },
    value: { type: String, required: true },
    width: { type: [Number, String], default: "180px" },
  },
  setup(props, context) {
    const visible = ref(false);

    const toggle = () => {
      visible.value = !visible.value;
    };

    const onInput = (ev: InputEvent) => {
      context.emit("update:value", (ev.target as HTMLInputElement).value);
    };

    return { visible, toggle, onInput };
  },
};
</script>
<style lang="scss" scoped></style>
