<template>
  <div class="container">
    <div class="row">
      <dwc-select :size="size" v-model:value="size" :allow-clear="false">
        <dwc-option value="small" label="Small"></dwc-option>
        <dwc-option value="middle" label="Middle"></dwc-option>
        <dwc-option value="disabled" label="Disabled" :disabled="true">
        </dwc-option>
        <dwc-option value="large" label="Large"></dwc-option>
      </dwc-select>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Select, Option } from "../../components";

export default {
  name: "select-example",
  components: { "dwc-select": Select, "dwc-option": Option },
  setup() {
    const size = ref("middle");

    return { size };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 40px auto;

  .row {
    margin-bottom: 16px;
  }
}
</style>
