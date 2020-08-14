<template>
  <div class="icon-page">
    <div
      class="icon-container"
      v-for="i of iconList"
      :key="i"
      @click="onClick(i)"
    >
      <dwc-icon :name="i"></dwc-icon>
      <br />
      <span>{{ i }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import iconList from "../../components/icon/icons/icon-list.json";
import { copyStringToClipboard } from "../../components/utils/copyStringToClipboard";
import { Icon } from "../../components";

export default {
  name: "icon-page",
  components: { "dwc-icon": Icon },
  props: {},
  setup(props, context) {
    const onClick = (iconName: string) => {
      copyStringToClipboard(`<dwc-icon name="${iconName}"></dwc-icon>`);
    };

    return { iconList, onClick };
  },
};
</script>
<style lang="scss" scoped>
.icon-page {
  width: 1000px;
  margin: 40px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  > .icon-container {
    width: 80px;
    height: 40px;
    margin: 8px 4px;
    cursor: pointer;
    font-size: 12px;
    color: #595959;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
