<template>
  <div id="app">
    <Navbar :key="$route.fullPath" />
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> -->
    </div>
    <router-view></router-view>
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
#app {
  width: 100%;
}
</style>
