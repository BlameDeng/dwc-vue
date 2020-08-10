<template>
  <div class="container">
    <Icon name="wifi" :style="{ marginRight: '8px' }" />
    <Icon
      name="user"
      :style="{ marginRight: '8px', color: '#56aa1c' }"
      size="22px"
    />
    <Icon name="charts" :style="{ marginRight: '8px' }" :size="22" />
    <Icon name="chevron-right" :style="{ marginRight: '8px' }" />
    <Icon name="loading" :spinning="true" />
  </div>
</template>
<script lang="ts">
import { Icon } from "../../components";

export default {
  name: "IconDemo",
  components: { Icon },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 40px auto;
}
</style>
