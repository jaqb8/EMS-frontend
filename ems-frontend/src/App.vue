<template>
  <div id="app">
    <Navbar />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
