<template>
  <div class="container">
    <div class="row">
      <dwc-select
        v-model:value="state.size"
        :allow-clear="false"
        style="width: 100px;"
      >
        <dwc-option value="small" label="Small"></dwc-option>
        <dwc-option value="middle" label="Middle"></dwc-option>
        <dwc-option value="large" label="Large"></dwc-option>
      </dwc-select>
    </div>
    <div class="row">
      <dwc-input
        :label-attrs="{ style: { marginRight: '8px' } }"
        v-model:value="value"
        :placeholder="
          state.size.replace(state.size[0], state.size[0].toUpperCase()) + '...'
        "
        :size="state.size"
      >
      </dwc-input>
      <dwc-input
        bordered="false"
        placeholder="Borderless..."
        :size="state.size"
      ></dwc-input>
    </div>
    <div class="row">
      <dwc-select
        v-model:value="state.status"
        :allow-clear="false"
        style="width: 100px;"
      >
        <dwc-option value="disabled" label="Disabled"></dwc-option>
        <dwc-option value="readonly" label="Readonly"></dwc-option>
        <dwc-option value="error" label="Error"></dwc-option>
      </dwc-select>
    </div>
    <div class="row">
      <dwc-input
        :placeholder="
          state.status.replace(state.status[0], state.status[0].toUpperCase()) +
          '...'
        "
        :disabled="state.status === 'disabled'"
        :readonly="state.status === 'readonly'"
        :error="state.status === 'error'"
      >
      </dwc-input>
    </div>
    <div class="row">
      <dwc-text-area
        :style="{ width: '250px', height: '100px' }"
        :placeholder="
          state.status.replace(state.status[0], state.status[0].toUpperCase()) +
          '...'
        "
        :disabled="state.status === 'disabled'"
        :readonly="state.status === 'readonly'"
        :error="state.status === 'error'"
      >
      </dwc-text-area>
    </div>
    <div class="row">
      <dwc-input
        :label-attrs="{ style: { marginRight: '8px' } }"
        prefixIconName="user"
      >
      </dwc-input>
      <dwc-input
        v-model:value="password1"
        :error="!!password1"
        prefix-icon-name="lock"
        suffix-icon-name="close"
        suffix-icon-style="cursor:pointer; width: 12px; height: 12px;"
        placeholder="Input..."
        @click-suffix="clear"
      >
      </dwc-input>
    </div>
    <div class="row">
      <dwc-password v-model:value="password2"></dwc-password>
    </div>
    <div class="row">
      <dwc-select
        v-model:value="state.type"
        :allow-clear="false"
        style="width: 100px;"
      >
        <dwc-option value="text" label="Text"></dwc-option>
        <dwc-option value="number" label="Number"></dwc-option>
        <dwc-option value="radio" label="Radio"></dwc-option>
        <dwc-option value="range" label="Range"></dwc-option>
        <dwc-option value="color" label="Color"></dwc-option>
      </dwc-select>
      <dwc-input
        :label-attrs="{ style: { marginLeft: '8px' } }"
        :type="state.type"
        :style="state.type === 'color' ? 'width: 80px;' : ''"
      >
      </dwc-input>
    </div>
    <div class="row">
      Autosize:<dwc-switch
        v-model:value="state.autosize"
        style="margin-left: 8px;"
      ></dwc-switch>
    </div>
    <div class="row">
      <dwc-text-area
        :style="{ width: '250px', height: '100px' }"
        :autosize="state.autosize"
      ></dwc-text-area>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive } from "vue";

import {
  Button,
  Switch,
  Input,
  Password,
  TextArea,
  Select,
  Option,
} from "../../components";

export default {
  name: "input-example",
  components: {
    "dwc-button": Button,
    "dwc-switch": Switch,
    "dwc-input": Input,
    "dwc-password": Password,
    "dwc-text-area": TextArea,
    "dwc-select": Select,
    "dwc-option": Option,
  },
  setup() {
    const value = ref("");
    const password1 = ref("");
    const password2 = ref("");

    const state = reactive({
      size: "middle",
      type: "text",
      autosize: true,
      status: "disabled",
    });

    const clear = () => {
      password1.value = "";
    };

    return {
      value,
      password1,
      password2,
      state,
      clear,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 40px auto;

  .row {
    margin-bottom: 16px;
    display: flex;
  }
}
</style>
