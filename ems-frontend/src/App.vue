<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
/* .v-application {
  background-color: black;
} */
</style>
