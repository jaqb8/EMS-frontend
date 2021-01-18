<template>
  <div class="login">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/auth/Login.vue';

export default {
  name: 'LoginView',
  components: {
    Login
  }
};
</script>
