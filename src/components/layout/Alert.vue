<template>
  <div class="alerts">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      v-bind:class="'alert alert-' + alert.alertType"
    >
      {{ alert.msg }}
      <button @click="removeAlert({ id: alert.id })" class="btn">
        <i class="nav__icon material-icons">close</i>
      </button>
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
.alert {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(158, 28, 35, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}
.alert-danger {
  background-color: #ffe3e6;
}

.alert-info {
  background-color: #c9dbe8;
  border-color: #0a3656;
}
</style>
