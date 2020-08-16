<template>
  <div class="container">
    <h4 class="title">按钮类型</h4>
    <div class="row">
      <dwc-button :style="{ marginRight: '8px' }">
        Default
      </dwc-button>
      <dwc-button type="primary">
        Primary
      </dwc-button>
    </div>
    <h4 class="title">危险按钮</h4>
    <div class="row">
      <dwc-button :style="{ marginRight: '8px' }" :danger="true">
        Default
      </dwc-button>
      <dwc-button :style="{ marginRight: '8px' }" type="primary" :danger="true">
        Primary
      </dwc-button>
    </div>
    <h4 class="title">图标按钮</h4>
    <div class="row">
      <dwc-button :style="{ marginRight: '8px' }" icon-name="settings">
        Settings
      </dwc-button>
      <dwc-button type="primary" icon-name="airplane">
        Airplane
      </dwc-button>
    </div>
    <h4 class="title">按钮大小</h4>
    <div class="row">
      <dwc-button :style="{ marginRight: '8px' }" type="primary" size="small">
        Small
      </dwc-button>
      <dwc-button :style="{ marginRight: '8px' }" type="primary">
        Middle
      </dwc-button>
      <dwc-button size="large" type="primary">
        Large
      </dwc-button>
    </div>
    <h4 class="title">禁用</h4>
    <div class="row">
      <dwc-button :style="{ marginRight: '8px' }" disabled="true">
        Default
      </dwc-button>
      <dwc-button
        type="primary"
        :style="{ marginRight: '8px' }"
        :disabled="true"
      >
        Primary
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        :danger="true"
        disabled="true"
      >
        Danger
      </dwc-button>
      <dwc-button type="primary" :danger="true" :disabled="true">
        Danger
      </dwc-button>
    </div>
    <h4 class="title">加载中</h4>
    <div class="row">
      <dwc-button
        icon-name="cursor"
        type="primary"
        :loading="loading"
        @click="toggleLoading"
      >
        Click me!
      </dwc-button>
    </div>
    <h4 class="title">链接</h4>
    <div class="row">
      <dwc-button href="https://github.com/BlameDeng/dwc-vue" target="_blank">
        代码仓库
      </dwc-button>
      <dwc-button
        href="https://github.com/BlameDeng/dwc-vue"
        target="_blank"
        :style="{ marginRight: '8px' }"
        disabled="true"
      >
        代码仓库
      </dwc-button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Button } from "../../components";

export default {
  name: "button-example",
  components: { "dwc-button": Button },
  setup() {
    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };

    return { loading, toggleLoading };
  },
};
</script>
<style lang="scss" scoped></style>
