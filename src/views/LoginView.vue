<template>
  <div class="login">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';

export default {
  name: 'LoginView',
  components: {
    Login
  }
};
</script>
<style scoped>
.login {
  width: 35%;
  margin: 0 auto;
}
</style>
