<template>
  <div class="alerts">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      v-bind:class="'alert alert-' + alert.alertType"
    >
      {{ alert.msg }}
      <button @click="removeAlert({ id: alert.id })" class="btn">[X]</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      alerts: state => state.alert.alertsList
    })
  },
  methods: {
    ...mapActions('alert', ['removeAlert'])
  }
};
</script>

<style scoped>
.btn {
  cursor: pointer;
}

.alert-danger {
  background-color: red;
}

.alert-info {
  background-color: skyblue;
}
</style>
