<template>
  <NavBar />
  <router-view />
</template>

<style>
@import "./assests/styles/main.css";
</style>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar }
}
</script>
