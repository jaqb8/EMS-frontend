<template>
  <div class="dashboard">
    <h1>Welcome {{ getUser }}</h1>
    <router-view name="Dashboard"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters('auth', ['getUser'])
  }
};
</script>

<style scoped>
.dashboard {
  width: calc(100% - 300px);
  margin: 0;
  padding: 0;
}
</style>
