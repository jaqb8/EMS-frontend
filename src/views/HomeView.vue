<template>
  <div class="home">
    <left-side-menu></left-side-menu>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';
import LeftSideMenu from '@/components/dashboard/LeftSideMenu.vue';

export default {
  name: 'HomeView',
  components: {
    LeftSideMenu
  }
};
</script>

<style>
.home {
  display: flex;
  width: 100%;
}
</style>
