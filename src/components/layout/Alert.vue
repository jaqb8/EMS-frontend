<template>
  <div class="alerts">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      v-bind:alert="'alert alert-' + alert.alertType"
    >
      {{ alert.msg }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      alerts: []
    };
  },
  computed: {
    ...mapGetters('alert', ['getAlertList'])
  },
  mounted() {
    let alertList = this.getAlertList();
    this.alerts = alertList;
  }
};
</script>

<style></style>
