<template>
  <nav>
    <v-app-bar app flat color="blue darken-2" dark>
      <v-toolbar-title class="ml-6">
        <span class="font-weight-bold">EMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mr-6" v-if="getUser">
        <v-icon>mdi-account-circle</v-icon>
        <span class="pa-2 text-overline">{{ getUser }}</span>
      </div>
      <v-btn v-if="!getUser" outlined class="mr-6">Login</v-btn>
      <v-btn v-else outlined class="mr-6" @click="onLogout">Logout</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: mapGetters(['getUser']),
  methods: {
    ...mapActions(['logoutUser']),
    onLogout() {
      this.logoutUser();
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
