<template>
  <div class="container">
    <h4 class="title">两种大小</h4>
    <div class="row">
      <dwc-switch
        v-model:value="value1"
        :style="{ marginRight: '8px' }"
        size="small"
      >
      </dwc-switch>
      <dwc-switch v-model:value="value2"></dwc-switch>
    </div>
    <h4 class="title">禁用</h4>
    <div class="row">
      <dwc-switch
        v-model:value="value3"
        :style="{ marginRight: '8px' }"
        disabled="true"
      >
      </dwc-switch>
      <dwc-switch v-model:value="value4" :disabled="true"></dwc-switch>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Switch } from "../../components";

export default {
  name: "switch-example",
  components: { "dwc-switch": Switch },
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    const value3 = ref(false);
    const value4 = ref(true);

    return { value1, value2, value3, value4 };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 40px auto;
}
</style>
