<template>
  <div class="container">
    <div class="row">
      <Button
        :style="{ padding: '0 24px', marginRight: '8px' }"
        :type="type === 'line' ? 'primary' : 'default'"
        @click="setType('line')"
      >
        Line
      </Button>
      <Button
        :style="{ padding: '0 24px' }"
        :type="type === 'card' ? 'primary' : 'default'"
        @click="setType('card')"
      >
        Card
      </Button>
    </div>
    <div class="row">
      <Tabs v-model:active-tab-name="activeTabName1" :type="type">
        <TabPane name="tab-1">
          <template v-slot:label>
            <span>Tab-One</span>
          </template>
          <template v-slot:default>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
          </template>
        </TabPane>
        <TabPane label="Tab-Two" name="tab-2">
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
        </TabPane>
        <TabPane label="Tab-Three" name="tab-3">
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
        </TabPane>
        <TabPane label="Tab-Four" name="tab-4" :disabled="true">
          <div>Content of Tab Pane 4</div>
          <div>Content of Tab Pane 4</div>
          <div>Content of Tab Pane 4</div>
        </TabPane>
      </Tabs>
    </div>
    <div class="row">
      <Tabs
        v-model:active-tab-name="activeTabName2"
        tab-position="bottom"
        :type="type"
      >
        <TabPane name="tab-1">
          <template v-slot:label>
            <span>Tab-One</span>
          </template>
          <template v-slot:default>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
          </template>
        </TabPane>
        <TabPane label="Tab-Two" name="tab-2">
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
        </TabPane>
        <TabPane label="Tab-Three" name="tab-3">
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
        </TabPane>
      </Tabs>
    </div>
    <div class="row">
      <Tabs
        v-model:active-tab-name="activeTabName3"
        tab-position="left"
        :type="type"
      >
        <TabPane name="tab-1">
          <template v-slot:label>
            <span>Tab-One</span>
          </template>
          <template v-slot:default>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
          </template>
        </TabPane>
        <TabPane label="Tab-Two" name="tab-2">
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
        </TabPane>
        <TabPane label="Tab-Three" name="tab-3">
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
        </TabPane>
      </Tabs>
    </div>
    <div class="row">
      <Tabs
        v-model:active-tab-name="activeTabName4"
        tab-position="right"
        :type="type"
      >
        <TabPane name="tab-1">
          <template v-slot:label>
            <span>Tab-One</span>
          </template>
          <template v-slot:default>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
          </template>
        </TabPane>
        <TabPane label="Tab-Two" name="tab-2">
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
        </TabPane>
        <TabPane label="Tab-Three" name="tab-3">
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Button, Tabs, TabPane } from "../../components";

export default {
  name: "TabsExample",
  components: { Button, Tabs, TabPane },
  setup() {
    const activeTabName1 = ref("tab-1");
    const activeTabName2 = ref("tab-1");
    const activeTabName3 = ref("tab-1");
    const activeTabName4 = ref("tab-1");

    const type = ref("line");
    const setType = (val: string) => {
      type.value = val;
    };

    return {
      activeTabName1,
      activeTabName2,
      activeTabName3,
      activeTabName4,
      type,
      setType,
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
  }
}
</style>
