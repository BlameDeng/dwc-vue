<template>
  <div class="container">
    <div class="row">
      <dwc-collapse-transition>
        <div class="example" v-show="visible1">
          Horizontal
        </div>
      </dwc-collapse-transition>
    </div>
    <div class="row">
      <dwc-collapse-transition direction="vertical">
        <div class="example" v-if="visible2">
          Column
        </div>
      </dwc-collapse-transition>
    </div>
  </div>
</template>
<script lang="ts">
import { CollapseTransition } from "../../components";
import { ref } from "vue";

export default {
  name: "collapse-transition-example",
  components: { "dwc-collapse-transition": CollapseTransition },
  setup() {
    const visible1 = ref(false);
    const visible2 = ref(true);

    setInterval(() => {
      visible1.value = !visible1.value;
    }, 2000);

    setInterval(() => {
      visible2.value = !visible2.value;
    }, 2000);

    return { visible1, visible2 };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 40px auto;

  .row {
    margin-bottom: 16px;
    height: 100px;

    .example {
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      line-height: 60px;
      text-align: center;
      background-color: #008be1;
    }
  }
}
</style>
