<template>
  <main class="tasks">
    <h1>This is TASKS content</h1>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      activeLink: 'tasks',
      tasks: [...this.getAllTasks()]
    };
  },
  methods: {
    ...mapActions('tasks', ['fetchAllTasks']),
    ...mapGetters('tasks', ['getAllTasks'])
  },
  async mounted() {
    await this.fetchAllTasks();
  }
};
</script>
<style>
.tasks {
  width: 85%;
  border: 5px solid #444;
}
</style>
