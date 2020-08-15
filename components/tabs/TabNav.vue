<script lang="ts">
import { h, inject, ref, computed } from "vue";

import { DWCTabsActiveTabName } from "./Tabs.vue";

export default {
  name: "dwc-tab-nav",
  inheritAttrs: false,
  props: {
    activeTabLabelRect: DOMRect,
    renderLabels: Function,
    tabPosition: {
      type: String,
      default: "top",
      validator<String>(val: string) {
        return ["top", "left", "bottom", "right"].includes(val);
      },
    },
    type: {
      type: String,
      default: "line",
      validator<String>(val: string) {
        return ["line", "card"].includes(val);
      },
    },
  },
  setup(props, context) {
    const activeTabName = inject(DWCTabsActiveTabName);

    const tabNavEl = ref<HTMLDivElement>(null);

    const sliderStyle = computed(() => {
      if (!props.activeTabLabelRect || !tabNavEl.value) {
        return null;
      }

      const tabNavElRect = tabNavEl.value.getBoundingClientRect();

      const width =
        props.activeTabLabelRect.right - props.activeTabLabelRect.left;
      const left = props.activeTabLabelRect.left - tabNavElRect.left;
      const height =
        props.activeTabLabelRect.bottom - props.activeTabLabelRect.top;
      const top = props.activeTabLabelRect.top - tabNavElRect.top;

      return props.tabPosition === "top" || props.tabPosition === "bottom"
        ? { width: `${width}px`, left: `${left}px` }
        : { height: `${height}px`, top: `${top}px` };
    });

    return () => {
      return h(
        "div",
        {
          class: `dwc-tab-nav ${props.tabPosition} ${props.type}`,
          ref: tabNavEl,
        },
        props.type === "line"
          ? [
              props.renderLabels(),
              h("div", {
                class: "dwc-tab-nav-slider",
                style: sliderStyle.value,
              }),
            ]
          : [props.renderLabels()]
      );
    };
  },
};
</script>
<style lang="scss">
@import "../assets/var.scss";

.dwc-tab-nav {
  position: relative;
  display: flex;

  &.top {
    border-bottom: 1px solid $dwc-border;
    order: 1;

    > .dwc-tab-nav-label {
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
      color: $dwc-main;
      transition: color $dwc-transition;

      &:hover {
        color: $dwc-blue-highlight;
      }

      &.active {
        color: $dwc-blue;
      }

      &:not(:last-child) {
        margin-right: 24px;
      }

      &.card {
        margin-right: 0;
        padding: 8px 16px;
        border-bottom: none;

        &.active {
          background-color: #fff;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            bottom: -1px;
            background-color: #fff;
          }
        }

        &:not(:last-child) {
          margin-right: 2px;
        }
      }

      &.disabled {
        cursor: not-allowed;
        color: $dwc-disable;
      }
    }

    > .dwc-tab-nav-slider {
      bottom: 0;
      height: 2px;
    }
  }

  &.bottom {
    border-top: 1px solid $dwc-border;
    order: 2;

    > .dwc-tab-nav-label {
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
      color: $dwc-main;
      transition: color $dwc-transition;

      &:hover {
        color: $dwc-blue-highlight;
      }

      &.active {
        color: $dwc-blue;
      }

      &:not(:last-child) {
        margin-right: 24px;
      }

      &.card {
        margin-right: 0;
        padding: 8px 16px;
        border-top: none;

        &.active {
          background-color: #fff;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: -1px;
            background-color: #fff;
          }
        }

        &:not(:last-child) {
          margin-right: 2px;
        }
      }

      &.disabled {
        cursor: not-allowed;
        color: $dwc-disable;
      }
    }

    > .dwc-tab-nav-slider {
      top: 0;
      height: 2px;
    }
  }

  &.left {
    border-right: 1px solid $dwc-border;
    flex-direction: column;
    order: 2;

    > .dwc-tab-nav-label {
      padding: 8px;
      padding-right: 16px;
      font-size: 14px;
      cursor: pointer;
      color: $dwc-main;
      transition: color $dwc-transition;
      text-align: end;

      &:hover {
        color: $dwc-blue-highlight;
      }

      &.active {
        color: $dwc-blue;
      }

      &.card {
        padding: 8px 16px;
        border-right: none;

        &.active {
          background-color: #fff;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            position: absolute;
            right: -1px;
            top: 0;
            background-color: #fff;
          }
        }

        &:not(:last-child) {
          margin-bottom: 2px;
        }
      }

      &.disabled {
        cursor: not-allowed;
        color: $dwc-disable;
      }
    }

    > .dwc-tab-nav-slider {
      right: 0;
      width: 2px;
    }
  }

  &.right {
    border-left: 1px solid $dwc-border;
    flex-direction: column;
    order: 2;

    > .dwc-tab-nav-label {
      padding: 8px;
      padding-left: 16px;
      font-size: 14px;
      cursor: pointer;
      color: $dwc-main;
      transition: color $dwc-transition;
      text-align: left;

      &:hover {
        color: $dwc-blue-highlight;
      }

      &.active {
        color: $dwc-blue;
      }

      &.card {
        padding: 8px 16px;
        border-left: none;

        &.active {
          background-color: #fff;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            position: absolute;
            left: -1px;
            top: 0;
            background-color: #fff;
          }
        }

        &:not(:last-child) {
          margin-bottom: 2px;
        }
      }

      &.disabled {
        cursor: not-allowed;
        color: $dwc-disable;
      }
    }

    > .dwc-tab-nav-slider {
      left: 0;
      width: 2px;
    }
  }

  > .dwc-tab-nav-label {
    transition: background-color $dwc-transition;

    &.card {
      background-color: $dwc-background;
      border: 1px solid $dwc-border;
    }
  }

  > .dwc-tab-nav-slider {
    position: absolute;
    background-color: $dwc-blue;
    transition: left $dwc-transition, width $dwc-transition, top $dwc-transition,
      height $dwc-transition;
  }
}
</style>
