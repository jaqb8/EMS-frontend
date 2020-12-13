<template>
  <div class="home">
    <ul>
      <li v-for="item in sidebarItems" :key="item.id">
        <router-link to="/home/dashboard">
          <SidebarItem v-bind:item="item" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SidebarItem from '@/components/home/SidebarItem.vue';
export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data() {
    return {
      sidebarItems: [
        {
          id: 1,
          name: 'Dashboard',
          icon: 'home'
        },
        {
          id: 2,
          name: 'Tasks',
          icon: 'format_list_numbered'
        },
        {
          id: 3,
          name: 'Calendar',
          icon: 'date_range'
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  background: #3f67a4;
  max-width: 300px;
  height: calc(100vh - 70px);
  padding-top: 30px;
}
ul {
  width: 100%;
}
</style>
