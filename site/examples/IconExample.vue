<template>
  <div class="container">
    <dwc-icon name="wifi" :style="{ marginRight: '8px' }"></dwc-icon>
    <dwc-icon
      name="user"
      :style="{ marginRight: '8px', color: '#56aa1c' }"
      size="22px"
    ></dwc-icon>
    <dwc-icon
      name="charts"
      :style="{ marginRight: '8px' }"
      :size="22"
    ></dwc-icon>
    <dwc-icon name="chevron-right" :style="{ marginRight: '8px' }"></dwc-icon>
    <dwc-icon name="loading" :spinning="true"></dwc-icon>
  </div>
</template>
<script lang="ts">
import { Icon } from "../../components";

export default {
  name: "icon-example",
  components: { "dwc-icon": Icon },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 40px auto;
}
</style>
