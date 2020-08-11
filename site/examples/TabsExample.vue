<template>
  <div class="container">
    <div class="row">
      <Tabs>
        <TabPane label="Tab-1" name="tab-1">
          <template v-slot:label>
            <span>Tab-1</span>
          </template>
          <template v-slot:default><span>Content-1</span></template>
        </TabPane>
        <TabPane label="Tab-2" name="tab-2">Content-2</TabPane>
        <TabPane label="Tab-3" name="tab-3">Content-3</TabPane>
      </Tabs>
    </div>
    <div class="row">
      <Tabs :active-tab-name="activeTabName1" @click-tab="onTab1">
        <TabPane label="Tab-1" name="tab-1">
          <template v-slot:label>
            <span>Tab-1</span>
          </template>
          <template v-slot:default><span>Content-1</span></template>
        </TabPane>
        <TabPane label="Tab-2" name="tab-2">Content-2</TabPane>
        <TabPane label="Tab-3" name="tab-3">Content-3</TabPane>
      </Tabs>
    </div>
    <div class="row">
      <Tabs v-model:active-tab-name="activeTabName2">
        <TabPane label="Tab-1" name="tab-1">
          <template v-slot:label>
            <span>Tab-1</span>
          </template>
          <template v-slot:default><span>Content-1</span></template>
        </TabPane>
        <TabPane label="Tab-2" name="tab-2">Content-2</TabPane>
        <TabPane label="Tab-3" name="tab-3">Content-3</TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Tabs, TabPane } from "../../components";

export default {
  name: "TabsExample",
  components: { Tabs, TabPane },
  setup() {
    const activeTabName1 = ref("tab-1");
    const activeTabName2 = ref("tab-1");
    const value3 = ref(false);
    const value4 = ref(true);

    const onTab1 = (args: any[]) => {
      if (activeTabName1.value !== args[1]) {
        activeTabName1.value = args[1];
      }
    };

    return { activeTabName1, onTab1, activeTabName2 };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 40px auto;
}
</style>
