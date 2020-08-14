<template>
  <div class="container">
    <div class="row">
      <dwc-button
        :style="{ padding: '0 24px', marginRight: '8px' }"
        :type="type === 'line' ? 'primary' : 'default'"
        @click="setType('line')"
      >
        Line
      </dwc-button>
      <dwc-button
        :style="{ padding: '0 24px', marginRight: '24px' }"
        :type="type === 'card' ? 'primary' : 'default'"
        @click="setType('card')"
      >
        Card
      </dwc-button>
      <dwc-select
        v-model:value="position"
        allow-clear="false"
        style="width: 100px;"
      >
        <dwc-option value="top" label="Top"></dwc-option>
        <dwc-option value="left" label="Left"></dwc-option>
        <dwc-option value="right" label="Right"></dwc-option>
        <dwc-option value="bottom" label="Bottom"></dwc-option>
      </dwc-select>
    </div>
    <div class="row" :style="{ height: '150px' }">
      <dwc-tabs
        v-model:active-tab-name="activeTabName"
        :type="type"
        :tab-position="position"
        :key="position"
      >
        <dwc-tab-pane name="tab-1">
          <template v-slot:label>
            <span>Tab-One</span>
          </template>
          <template v-slot:default>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 1</div>
          </template>
        </dwc-tab-pane>
        <dwc-tab-pane label="Tab-Two" name="tab-2">
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
          <div>Content of Tab Pane 2</div>
        </dwc-tab-pane>
        <dwc-tab-pane label="Tab-Three" name="tab-3">
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
          <div>Content of Tab Pane 3</div>
        </dwc-tab-pane>
        <dwc-tab-pane label="Tab-Four" name="tab-4" :disabled="true">
          <div>Content of Tab Pane 4</div>
          <div>Content of Tab Pane 4</div>
          <div>Content of Tab Pane 4</div>
        </dwc-tab-pane>
      </dwc-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Button, Select, Option, Tabs, TabPane } from "../../components";

export default {
  name: "tabs-example",
  components: {
    "dwc-button": Button,
    "dwc-select": Select,
    "dwc-option": Option,
    "dwc-tabs": Tabs,
    "dwc-tab-pane": TabPane,
  },
  setup() {
    const activeTabName = ref("tab-1");

    const type = ref("line");
    const setType = (val: string) => {
      type.value = val;
    };

    const position = ref("top");
    const setPosition = (val: string) => {
      position.value = val;
    };

    return {
      activeTabName,
      type,
      setType,
      position,
      setPosition,
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
