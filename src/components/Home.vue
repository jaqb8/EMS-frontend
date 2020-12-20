<template>
  <section class="main-section-container">
    <left-side-menu></left-side-menu>
  </section>
</template>

<script>
import store from '@/store';
import { mapGetters, mapActions } from 'vuex';
import LeftSideMenu from './dashboard/LeftSideMenu.vue';

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
  },
  components: {
    LeftSideMenu
  }
};
</script>
