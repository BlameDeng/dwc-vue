import "./index.scss";

import { Plugin } from "vue";

import { ClickOutside } from "./directives/ClickOutside";

import { default as Button } from "./button/Button.vue";
import { default as CollapseTransition } from "./collapse-transition/CollapseTransition.vue";
import { default as Icon } from "./icon/Icon.vue";
import { default as Input } from "./input/Input.vue";
import { default as Password } from "./input/Password.vue";
import { default as TextArea } from "./input/TextArea.vue";
import { default as Select } from "./select/Select.vue";
import { default as Option } from "./select/Option.vue";
import { default as Switch } from "./switch/Switch.vue";
import { default as Tabs } from "./tabs/Tabs.vue";
import { default as TabPane } from "./tabs/TabPane.vue";

const components = [
  Button,
  CollapseTransition,
  Icon,
  Input,
  Password,
  TextArea,
  Select,
  Option,
  Switch,
  Tabs,
  TabPane,
];

export {
  ClickOutside,
  Button,
  CollapseTransition,
  Icon,
  Input,
  Password,
  TextArea,
  Select,
  Option,
  Switch,
  Tabs,
  TabPane,
};

export const version = "0.0.1";

export const install: Plugin = (app) => {
  app.directive("click-outside", ClickOutside);

  components.forEach((component) => {
    app.component(component.name, component);
  });
};
