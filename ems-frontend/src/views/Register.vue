<template>
  <div class="register">
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue';

export default {
  name: 'register',
  components: {
    Register
  }
};
</script>
<style scoped>
.register {
  width: 35%;
  margin: 0 auto;
}
</style>
