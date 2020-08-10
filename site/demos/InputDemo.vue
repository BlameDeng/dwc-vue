<template>
  <div class="container">
    <div class="row">
      <Input
        :style="{ marginRight: '8px' }"
        v-model:value="value1"
        placeholder="Small..."
        size="small"
      />
      <Input
        :style="{ marginRight: '8px' }"
        v-model:value="value2"
        placeholder="Middle..."
      />
      <Input v-model:value="value3" placeholder="Large..." size="large" />
    </div>
    <div class="row">
      <Input
        :style="{ marginRight: '8px' }"
        v-model:value="value4"
        :disabled="true"
      />
      <Input
        :style="{ marginRight: '8px' }"
        v-model:value="value5"
        readonly="true"
      />
      <Input v-model:value="value6" :error="true" />
    </div>
    <div class="row">
      <Input
        :style="{ marginRight: '8px' }"
        v-model:value="value7"
        prefixIconName="user"
      />
      <Input
        v-model:value="value8"
        :error="!!value8"
        prefixIconName="lock"
        suffixIconName="close"
        suffixIconStyle="cursor:pointer;"
        placeholder="Input..."
        @click-suffix="onClear"
      />
    </div>
    <div class="row">
      <Input
        :style="{ marginRight: '8px' }"
        min="0"
        max="10"
        step="0.5"
        type="number"
        v-model:value="value10"
      />
      <Password v-model:value="value9" />
    </div>
    <div class="row">
      <Input
        :style="{ marginRight: '8px' }"
        type="radio"
        v-model:checked="value11"
      />
      <Input
        :style="{ marginRight: '8px' }"
        min="1"
        max="100"
        step="1"
        type="range"
        v-model:value="value12"
      />
      <Input
        :style="{ marginRight: '8px' }"
        type="color"
        v-model:value="value13"
      />
    </div>
    <div class="row">
      <Input
        :disabled="true"
        :style="{ marginRight: '8px' }"
        type="radio"
        :checked="false"
      />
      <Input
        :disabled="true"
        :style="{ marginRight: '8px' }"
        min="1"
        max="100"
        step="1"
        type="range"
        value="50"
      />
      <Input
        :disabled="true"
        :style="{ marginRight: '8px' }"
        type="color"
        value="#ffffff"
      />
    </div>
    <div class="row">
      <Input
        bordered="false"
        placeholder="Borderless..."
        v-model:value="value14"
      />
    </div>
    <div class="row">
      <TextArea v-model:value="value15" :cols="50" :rows="8" />
    </div>
    <div class="row">
      <TextArea cols="50" rows="8" v-model:value="value16" :autosize="true" />
    </div>
    <div class="row">
      <TextArea
        :style="{ width: '250px', height: '100px' }"
        v-model:value="value17"
        :disabled="true"
      />
    </div>
    <div class="row">
      <TextArea
        :style="{ width: '250px', height: '100px' }"
        v-model:value="value18"
        :readonly="true"
      />
    </div>
    <div class="row">
      <TextArea
        :style="{ width: '250px', height: '100px' }"
        v-model:value="value19"
        :error="true"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { ref, watchEffect } from "vue";

import { Input, Password, TextArea } from "../../components";

export default {
  name: "InputDemo",
  components: { Input, Password, TextArea },
  setup() {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const value4 = ref("Disabled");
    const value5 = ref("Readonly");
    const value6 = ref("Error");
    const value7 = ref("");
    const value8 = ref("");
    const value9 = ref("");
    const value10 = ref("1");
    const value11 = ref(false);
    const value12 = ref("20");
    const value13 = ref("#ffffff");
    const value14 = ref("");
    const value15 = ref("");
    const value16 = ref("");
    const value17 = ref("Disabled");
    const value18 = ref("Readonly");
    const value19 = ref("Error");

    const onClear = () => {
      value8.value = "";
    };

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
      value11,
      value12,
      value13,
      value14,
      value15,
      value16,
      value17,
      value18,
      value19,
      onClear,
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
