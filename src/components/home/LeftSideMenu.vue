<template>
  <nav class="left-side-nav">
    <ul>
      <li>
        <router-link to="/home/dashboard">
          <span class="material-icons"> home </span>Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/home/tasks">
          <span class="material-icons"> format_list_numbered </span>Tasks
        </router-link>
      </li>
      <li>
        <router-link to="/home/calendar">
          <span class="material-icons"> date_range </span>Calendar
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      elementDashboard: true,
      elementTasks: false,
      elementCalendar: false
    };
  }
};
</script>
<style>
.left-side-nav {
  width: 15%;
  height: calc(100vh - 70px);
  background-color: #3f67a4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));
  padding-top: 50px;
}
ul {
  width: 100%;
  margin: 0 auto;
  color: white;
}
li {
  display: flex;
  justify-content: center;
  transition: 0.4s;
}
li a {
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}
li span {
  margin: 0 10px 0 50px;
}
.router-link-active {
  background: #70a2cf;
}
@media (max-width: 1400px) {
  li span {
    margin: 0 10px 0 10px;
  }
}
@media (max-width: 1024px) {
  .left-side-nav {
    width: 25%;
  }
}
</style>
