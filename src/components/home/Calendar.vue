<template>
  <main class="calendar">
    <h1>This is CALENDAR content</h1>
    <div>
      <ul v-if="leaves">
        <li style="color: black" v-for="leave in leaves" :key="leave.id">
          start date: {{ leave.startDate }}<br />
          end date: {{ leave.endDate }}<br />
          leave status: {{ leave.status }}
        </li>
      </ul>
      <h3 v-else>You don't have any leave requests.</h3>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      activeLink: 'calendar'
    };
  },
  methods: {
    ...mapActions('leaves', ['fetchAllLeaves'])
  },
  computed: {
    ...mapGetters('leaves', { leaves: 'getAllLeaves' })
  },
  mounted() {
    this.fetchAllLeaves();
  }
};
</script>
<style>
.calendar {
  width: 85%;
  border: 5px solid #444;
}
</style>
