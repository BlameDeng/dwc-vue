<template>
  <div class="container">
    <div class="row">
      <dwc-button :style="{ marginRight: '8px' }" :size="size"
        >Default</dwc-button
      >
      <dwc-button :style="{ marginRight: '8px' }" type="primary" :size="size">
        Primary
      </dwc-button>
      <dwc-button :style="{ marginRight: '8px' }" disabled="true" :size="size">
        Default
      </dwc-button>
      <dwc-button type="primary" :disabled="true" :size="size"
        >Primary</dwc-button
      >
    </div>
    <div class="row">
      <dwc-button :style="{ marginRight: '8px' }" :danger="true" :size="size">
        Default
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        type="primary"
        :danger="true"
        :size="size"
      >
        Primary
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        :danger="true"
        disabled="true"
        :size="size"
      >
        Default
      </dwc-button>
      <dwc-button type="primary" :danger="true" :disabled="true" :size="size">
        Primary
      </dwc-button>
    </div>
    <div class="row">
      <dwc-button
        :style="{ marginRight: '8px' }"
        :size="size"
        icon-name="settings"
      >
        Settings
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        type="primary"
        :size="size"
        icon-name="airplane"
      >
        Airplane
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        :disabled="true"
        :size="size"
        icon-name="import"
      >
        Import
      </dwc-button>
      <dwc-button
        type="primary"
        disabled="true"
        :size="size"
        icon-name="export"
      >
        Export
      </dwc-button>
    </div>
    <div class="row">
      <dwc-button
        :style="{ marginRight: '8px' }"
        :size="size"
        icon-name="settings"
        :danger="true"
      >
        Settings
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        type="primary"
        :size="size"
        icon-name="airplane"
        :danger="true"
      >
        Airplane
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        :disabled="true"
        :size="size"
        icon-name="import"
        danger="true"
      >
        Import
      </dwc-button>
      <dwc-button
        type="primary"
        disabled="true"
        :size="size"
        icon-name="export"
        danger="true"
      >
        Export
      </dwc-button>
    </div>
    <div class="row">
      <dwc-button
        :style="{ marginRight: '8px' }"
        size="small"
        :type="size === 'small' ? 'primary' : 'default'"
        @click="setSize('small')"
      >
        Small
      </dwc-button>
      <dwc-button
        :style="{ marginRight: '8px' }"
        :type="size === 'middle' ? 'primary' : 'default'"
        @click="setSize('middle')"
      >
        Middle
      </dwc-button>
      <dwc-button
        size="large"
        :type="size === 'large' ? 'primary' : 'default'"
        @click="setSize('large')"
      >
        Large
      </dwc-button>
    </div>
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
    <div class="row">
      <dwc-button href="https://www.baidu.com" target="_blank">Href</dwc-button>
      <dwc-button
        href="https://www.baidu.com"
        target="_blank"
        :style="{ marginRight: '8px' }"
        disabled="true"
      >
        Href
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
    const size = ref("middle");
    const loading = ref(true);

    const setSize = (val: string) => {
      size.value = val;
    };
    const toggleLoading = () => {
      loading.value = !loading.value;
    };

    return { size, setSize, loading, toggleLoading };
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
