<template>
  <div class="container">
    <h4 class="title">基本使用</h4>
    <div class="row">
      <dwc-select defaultValue="lucy">
        <dwc-option value="lucy" label="Lucy"></dwc-option>
        <dwc-option value="jack" label="Jack"></dwc-option>
        <dwc-option value="disabled" label="Disabled" :disabled="true">
        </dwc-option>
        <dwc-option value="lily" label="Lily"></dwc-option>
      </dwc-select>
    </div>
    <h4 class="title">三种大小</h4>
    <div class="row">
      <dwc-select defaultValue="lucy" size="small" style="margin-right: 8px;">
        <dwc-option value="lucy" label="Lucy"></dwc-option>
        <dwc-option value="jack" label="Jack"></dwc-option>
        <dwc-option value="disabled" label="Disabled" :disabled="true">
        </dwc-option>
        <dwc-option value="lily" label="Lily"></dwc-option>
      </dwc-select>
      <dwc-select
        defaultValue="lucy"
        style="margin-right: 8px;"
        allow-clear="true"
      >
        <dwc-option value="lucy" label="Lucy"></dwc-option>
        <dwc-option value="jack" label="Jack"></dwc-option>
        <dwc-option value="disabled" label="Disabled" :disabled="true">
        </dwc-option>
        <dwc-option value="lily" label="Lily"></dwc-option>
      </dwc-select>
      <dwc-select defaultValue="lucy" size="large">
        <dwc-option value="lucy" label="Lucy"></dwc-option>
        <dwc-option value="jack" label="Jack"></dwc-option>
        <dwc-option value="disabled" label="Disabled" :disabled="true">
        </dwc-option>
        <dwc-option value="lily" label="Lily"></dwc-option>
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
};
</script>
<style lang="scss" scoped></style>
