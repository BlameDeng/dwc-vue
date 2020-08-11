<template>
  <div class="container">
    <Tabs>
      <TabPane label="Tab-1" name="tab-1">Content-1</TabPane>
      <TabPane label="Tab-2" name="tab-2">Content-2</TabPane>
      <TabPane label="Tab-3" name="tab-3">Content-3</TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Tabs, TabPane } from "../../components";

export default {
  name: "TabsExample",
  components: { Tabs, TabPane },
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
