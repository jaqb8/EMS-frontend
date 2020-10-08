<template>
  <div id="app">
    <Navbar :key="$route.fullPath" />
    <Alert />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar';
import Alert from '@/components/layout/Alert';

export default {
  name: 'App',

  components: {
    Navbar,
    Alert
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
