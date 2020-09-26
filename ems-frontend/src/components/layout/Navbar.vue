<template>
  <nav>
    <v-app-bar app flat color="blue darken-2" dark>
      <v-toolbar-title class="ml-6">
        <span class="font-weight-bold">EMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined class="mr-6">Login</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
