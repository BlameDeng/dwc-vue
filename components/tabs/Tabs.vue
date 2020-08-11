<template>
  <div class="dwc-tabs">
    <TabNav :label-map="labelMap" @click-tab="onTab" />
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { InjectionKey, provide, ref, Ref, computed, readonly } from "vue";

import TabNav from "./TabNav.vue";

export const DWCTabsActiveTabName: InjectionKey<Ref<number | string>> = Symbol(
  "DWCTabsActiveTabName"
);
export const DWCTabsUpdateCurrentTabName: InjectionKey<(
  n: string
) => void> = Symbol("DWCTabsUpdateCurrentTabName");

export default {
  name: "Tabs",
  components: { TabNav },
  props: {
    activeTabName: [Number, String],
    bordered: { type: Boolean, default: true },
    tabPosition: { type: String, default: "top" },
    type: { type: String, default: "default" },
  },
  setup(props, context) {
    const getFirstTabName = (): number | string | undefined => {
      if (context.slots?.default) {
        const slots = context.slots.default();
        return slots[0]?.props?.name;
      }

      return undefined;
    };

    const current = ref(getFirstTabName());

    const currentTabName = computed(() => {
      if (props.activeTabName !== undefined) {
        return props.activeTabName;
      }

      return current.value;
    });

    const updateCurrentTabName = (val: string) => {
      current.value = val;
      context.emit("update:activeTabName", val);
    };

    provide(DWCTabsActiveTabName, readonly(currentTabName));
    provide(DWCTabsUpdateCurrentTabName, updateCurrentTabName);

    const labelMap = ref<Map<string, any>>(new Map());

    if (context.slots?.default) {
      const map = new Map();

      context.slots.default().forEach((vn) => {
        const l = (vn.children as any).label
          ? (vn.children as any).label()
          : vn.props.label;

        if (l === undefined) {
          throw new Error("123");
        }

        map.set(vn.props.name, l);
      });

      labelMap.value = map;
    }

    const onTab = (args: any[]) => {
      context.emit("click-tab", args);
    };

    return { labelMap, onTab };
  },
};
</script>
<style lang="scss"></style>
