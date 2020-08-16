<template>
  <div class="container">
    <h4 class="title">两种样式</h4>
    <div class="row" :style="{ height: '150px' }">
      <dwc-tabs default-active-tab-name="tab-1" type="line">
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
    <div class="row" :style="{ height: '150px' }">
      <dwc-tabs default-active-tab-name="tab-2" type="card">
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
    <h4 class="title">四种位置</h4>
    <div class="row">
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
        default-active-tab-name="tab-1"
        type="line"
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
    const position = ref("top");
    const setPosition = (val: string) => {
      position.value = val;
    };

    return {
      position,
      setPosition,
    };
  },
};
</script>
<style lang="scss" scoped></style>
