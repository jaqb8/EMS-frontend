<template>
  <div id="app">
    <Navbar :key="$route.fullPath" />
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
