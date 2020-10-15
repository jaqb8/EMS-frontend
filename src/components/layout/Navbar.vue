<template>
  <nav class="nav">
    <div class="nav__left-container">
      <h1>EMS</h1>
    </div>
    <div class="nav__right-container">
      <div class="nav__icon-container" v-if="isAuthenticated">
        <i class="nav__icon material-icons">account_circle</i>
        <span class="nav__username">{{ getUser }}</span>
      </div>
      <div class="nav__button-container">
        <router-link v-if="!isAuthenticated" to="/login">
          <button outlined class="">Login</button>
        </router-link>
        <router-link v-if="!isAuthenticated" to="/register">
          <button outlined class="">Register</button>
        </router-link>
        <button v-else outlined class="" @click="onLogout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      currentUser: false
    };
  },
  computed: { ...mapGetters('auth', ['isAuthenticated', 'getUser']) },
  methods: {
    ...mapActions('auth', ['logout']),
    onLogout() {
      this.logout();
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #2b7af0;
  color: #fff;
  margin-bottom: 2%;
}
.nav a {
  color: white;
  margin: 0 20px;
}
.nav__left-container,
.nav__right-container {
  display: flex;
  align-items: center;
  width: 50%;
  padding: 0 15px 0 30px;
}
.nav__right-container {
  justify-content: flex-end;
}
.nav__icon-container {
  display: flex;
  margin-right: 60px;
}
.nav__icon {
  margin-right: 5px;
}
.nav__button-container button {
  width: 140px;
  height: 48px;
  background: white;
  color: #2163c7;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
}
</style>
