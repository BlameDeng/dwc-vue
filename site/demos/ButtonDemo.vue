<template>
  <div class="container">
    <div class="row">
      <Button :style="{ marginRight: '8px' }" :size="size">Default</Button>
      <Button :style="{ marginRight: '8px' }" type="primary" :size="size">
        Primary
      </Button>
      <Button :style="{ marginRight: '8px' }" disabled="true" :size="size">
        Default
      </Button>
      <Button type="primary" :disabled="true" :size="size">Primary</Button>
    </div>
    <div class="row">
      <Button :style="{ marginRight: '8px' }" :danger="true" :size="size">
        Default
      </Button>
      <Button
        :style="{ marginRight: '8px' }"
        type="primary"
        :danger="true"
        :size="size"
      >
        Primary
      </Button>
      <Button
        :style="{ marginRight: '8px' }"
        :danger="true"
        disabled="true"
        :size="size"
      >
        Default
      </Button>
      <Button type="primary" :danger="true" :disabled="true" :size="size">
        Primary
      </Button>
    </div>
    <div class="row">
      <Button :style="{ marginRight: '8px' }" :size="size" iconName="settings">
        Settings
      </Button>
      <Button
        :style="{ marginRight: '8px' }"
        type="primary"
        :size="size"
        iconName="airplane"
      >
        Airplane
      </Button>
      <Button
        :style="{ marginRight: '8px' }"
        :disabled="true"
        :size="size"
        iconName="import"
      >
        Import
      </Button>
      <Button type="primary" disabled="true" :size="size" iconName="export">
        Export
      </Button>
    </div>
    <div class="row">
      <Button
        :style="{ marginRight: '8px' }"
        :size="size"
        iconName="settings"
        :danger="true"
      >
        Settings
      </Button>
      <Button
        :style="{ marginRight: '8px' }"
        type="primary"
        :size="size"
        iconName="airplane"
        :danger="true"
      >
        Airplane
      </Button>
      <Button
        :style="{ marginRight: '8px' }"
        :disabled="true"
        :size="size"
        iconName="import"
        danger="true"
      >
        Import
      </Button>
      <Button
        type="primary"
        disabled="true"
        :size="size"
        iconName="export"
        danger="true"
      >
        Export
      </Button>
    </div>
    <div class="row">
      <Button
        :style="{ marginRight: '8px' }"
        size="small"
        :type="size === 'small' ? 'primary' : 'default'"
        @click="setSize('small')"
      >
        Small
      </Button>
      <Button
        :style="{ marginRight: '8px' }"
        :type="size === 'middle' ? 'primary' : 'default'"
        @click="setSize('middle')"
      >
        Middle
      </Button>
      <Button
        size="large"
        :type="size === 'large' ? 'primary' : 'default'"
        @click="setSize('large')"
      >
        Large
      </Button>
    </div>
    <div class="row">
      <Button
        iconName="cursor"
        type="primary"
        :loading="loading"
        @click="toggleLoading"
      >
        Click me!
      </Button>
    </div>
    <div class="row">
      <Button href="https://www.baidu.com" target="_blank">Href</Button>
      <Button
        href="https://www.baidu.com"
        target="_blank"
        :style="{ marginRight: '8px' }"
        disabled="true"
      >
        Href
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import { Button } from "../../components";

export default {
  name: "ButtonDemo",
  components: { Button },
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
