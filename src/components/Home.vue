<template>
  <div>
    <div v-if="!emailVerified" class="email-banner">
      Please check your email and verify your account.
      <button class="btn" @click="sendVerificationEmail">
        Send verification email
      </button>
      <button class="btn" @click="refresh">Refresh</button>
    </div>
    <div>
      <h1>This is Homepage</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import store from '@/store';
import actionCodeSettings from '../utils/emailConfig';

export default {
  name: 'Home',
  data() {
    return {
      emailVerified: firebase.auth().currentUser.emailVerified
    };
  },
  methods: {
    refresh() {
      window.location.reload();
    },
    async sendVerificationEmail() {
      try {
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification(actionCodeSettings);
        alert('Verification email was successfully sent.');
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
  }
};
</script>

<style scoped>
.email-banner {
  padding: 20px;
  background-color: #0e0d52;
  color: #fff;
  margin-bottom: 25px;
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
