<template>
  <main class="tasks">
    <h1>Tasks</h1>
    <div class="tasksContainer">
      <div class="tasksHeader"></div>
      <div class="tasksDescription">
        <p class="idNumber">ID</p>
        <p class="name">Name</p>
        <p class="status">Status</p>
        <p class="mark">More</p>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="task.id">
          <task-item
            :taskID="index"
            :taskTitle="task.title"
            :taskStatus="task.status"
            :taskDescription="task.description"
          ></task-item>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  name: 'Tasks',
  data() {
    return {
      activeLink: 'tasks',
      tasks: []
    };
  },
  methods: {
    ...mapActions('tasks', ['fetchAllTasks']),
    ...mapGetters('tasks', ['getAllTasks'])
  },
  async mounted() {
    await this.fetchAllTasks();
    this.tasks = this.getAllTasks();
    console.log(this.tasks);
  }
};
</script>
<style>
.tasks {
  display: flex;
  flex-direction: column;
  width: 85%;
  text-align: center;
  padding-top: 50px;
}
.tasksContainer {
  width: 80%;
  margin: 30px auto 0;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
}
.tasksHeader {
  width: 100%;
  height: 65px;
  border-radius: 20px 20px 0 0;
  background: #4997de;
}
.tasksDescription {
  display: flex;
  /* justify-content: space-around; */
  background: #4e769b;
  color: white;
}
.idNumber,
.name,
.status,
.action {
  display: flex;
  padding-left: 20px;
}
.idNumber {
  width: 10%;
  text-align: center;
  padding-left: 50px;
}
.name {
  width: 60%;
}
.status {
  width: 20%;
}
.mark {
  width: 10%;
}
.tasks ul {
  color: #444;
}
.tasks ul li {
  /* display: flex; */
  background: #fff;
  color: #5f5d5d;
  border-bottom: 0.5px solid #b7b7b7;
  line-height: 50px;
  justify-content: unset;
  font-weight: 600;
}
.tasks ul li:nth-last-child(1) {
  border-bottom: unset;
  border-radius: 0 0 20px 20px;
}
li div.mark {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
