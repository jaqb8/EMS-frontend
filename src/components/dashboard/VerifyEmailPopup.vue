<template>
  <div v-if="!isEmailVerified" class="email-banner">
    Please check your email and verify your account.
    <button class="btn" @click="sendVerificationEmail">
      Send verification email
    </button>
    <button class="btn" @click="refresh">Refresh</button>
  </div>
</template>
<script>
import store from '@/store';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters('auth', ['isEmailVerified'])
  },
  methods: {
    ...mapActions('auth', ['sendVerificationEmail']),
    refresh() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.email-banner {
  padding: 20px;
  background-color: #0e0d52;
  color: #fff;
}

.btn {
  background: #2b7af0;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  height: 5rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  margin: 0 15px 0 15px;
}
</style>
