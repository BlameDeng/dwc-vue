<template>
  <site-header></site-header>
  <router-view></router-view>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";

export default {
  name: "App",
  components: { "site-header": SiteHeader },
};
</script>
