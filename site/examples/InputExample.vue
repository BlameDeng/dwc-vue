<template>
  <div class="container">
    <h4 class="title">基本使用</h4>
    <div class="row">
      <dwc-input placeholder="Basic usage"> </dwc-input>
    </div>
    <h4 class="title">三种大小</h4>
    <div class="row">
      <dwc-input
        :label-attrs="{ style: { marginRight: '8px' } }"
        placeholder="Small..."
        size="small"
      >
      </dwc-input>
      <dwc-input
        :label-attrs="{ style: { marginRight: '8px' } }"
        placeholder="Middle..."
      >
      </dwc-input>
      <dwc-input placeholder="Large..." size="large"></dwc-input>
    </div>
    <h4 class="title">三种状态</h4>
    <div class="row">
      <dwc-input
        :label-attrs="{ style: { marginRight: '8px' } }"
        placeholder="Disabled..."
        :disabled="true"
      >
      </dwc-input>
      <dwc-input
        :label-attrs="{ style: { marginRight: '8px' } }"
        placeholder="Readonly..."
        :readonly="true"
      >
      </dwc-input>
      <dwc-input placeholder="Error..." :error="true"></dwc-input>
    </div>
    <h4 class="title">前缀和后缀</h4>
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
    <h4 class="title">密码框</h4>
    <div class="row">
      <dwc-password v-model:value="password2"></dwc-password>
    </div>
    <h4 class="title">文本框</h4>
    <div class="row">
      <dwc-text-area :style="{ width: '250px', height: '100px' }">
      </dwc-text-area>
    </div>
    <h4 class="title">原生类型</h4>
    <div class="row">
      <dwc-input :label-attrs="{ style: { marginLeft: '8px' } }" type="number">
      </dwc-input>
      <dwc-input :label-attrs="{ style: { marginLeft: '8px' } }" type="range">
      </dwc-input>
      <dwc-input :label-attrs="{ style: { marginLeft: '8px' } }" type="radio">
      </dwc-input>
      <dwc-input :label-attrs="{ style: { width: '80px' } }" type="color">
      </dwc-input>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Input, Password, TextArea } from "../../components";

export default {
  name: "input-example",
  components: {
    "dwc-input": Input,
    "dwc-password": Password,
    "dwc-text-area": TextArea,
  },
  setup() {
    const password1 = ref("");
    const password2 = ref("");

    const clear = () => {
      password1.value = "";
    };

    return {
      password1,
      password2,
      clear,
    };
  },
};
</script>
<style lang="scss" scoped></style>
