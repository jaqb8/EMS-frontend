<template>
  <div class="register">
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/auth/Register.vue';

export default {
  name: 'RegisterView',
  components: {
    Register
  }
};
</script>
