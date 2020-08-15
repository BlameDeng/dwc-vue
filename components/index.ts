import "./index.scss";

import { Plugin } from "vue";

import { ClickOutside } from "./directives/ClickOutside";

import { default as Button } from "./button/Button.vue";
import { default as CollapseTransition } from "./collapse-transition/CollapseTransition.vue";
import { default as Input } from "./input/Input.vue";
import { default as Password } from "./input/Password.vue";
import { default as TextArea } from "./input/TextArea.vue";
import { default as Menu } from "./menu/Menu.vue";
import { default as MenuGroup } from "./menu/MenuGroup.vue";
import { default as MenuItem } from "./menu/MenuItem.vue";
import { default as SubMenu } from "./menu/SubMenu.vue";
import { default as Select } from "./select/Select.vue";
import { default as Option } from "./select/Option.vue";
import { default as Switch } from "./switch/Switch.vue";
import { default as Tabs } from "./tabs/Tabs.vue";
import { default as TabPane } from "./tabs/TabPane.vue";

const components = [
  Button,
  CollapseTransition,
  Input,
  Password,
  TextArea,
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
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
  Input,
  Password,
  TextArea,
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
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
