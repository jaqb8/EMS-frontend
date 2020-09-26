<template>
  <v-app>
    <Navbar />
    <v-main></v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
/* .v-application {
  background-color: black;
} */
</style>
