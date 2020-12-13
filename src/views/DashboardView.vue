<template>
  <div class="dashboard">
    dupa
    <Sidebar />
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/home/Dashboard.vue';
import Sidebar from '@/components/home/Sidebar.vue';

export default {
  name: 'DashboardView',
  components: {
    Dashboard,
    Sidebar
  }
};
</script>
