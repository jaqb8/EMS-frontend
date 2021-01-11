<template>
  <div class="listItemContainer">
    <p class="idNumber">{{ taskIndex + 1 }}</p>
    <p class="name" title="">
      {{ task.title }}
    </p>
    <p class="status">{{ taskStatusValue }}</p>
    <div class="mark">
      <span class="material-icons" title="More" @click="expandTask">
        expand_more
      </span>
    </div>
    <div class="moreInfo" v-if="isExpanded">
      <div class="moreInfoHeaders">
        <p class="moreInfoHeadersTxt">Description</p>
        <p class="moreInfoHeadersTxt">Mark as done</p>
      </div>
      <div class="moreInfoContent">
        <p class="taskDescription moreInfoContentItem">
          "{{ task.description }}"
        </p>
        <div class="action moreInfoContentItem">
          <span
            class="material-icons"
            title="Mark as done"
            @click="changeTaskStatus"
          >
            check_circle
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    taskIndex: Number,
    taskID: String,
    taskStatus: String,
    task: Object
  },
  data() {
    return {
      isExpanded: false,
      taskStatusValue: this.task.status
    };
  },
  methods: {
    ...mapActions('tasks', ['updateStatus']),
    expandTask() {
      this.isExpanded = !this.isExpanded;
    },
    async changeTaskStatus() {
      this.taskStatusValue = 'IN_REVIEW';
      await this.updateStatus({
        id: this.taskID,
        status: this.taskStatusValue
      });
      this.$emit('task-status', this.taskID, this.taskStatusValue);
    }
  }
};
</script>
<style>
.listItemContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.action {
  line-height: 50px;
}
div.mark span {
  color: #000;
  text-align: left;
  margin: unset;
  font-size: 30px;
  cursor: pointer;
}
.moreInfo {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 100%;
  padding-bottom: 20px;
}
.moreInfoHeaders,
.moreInfoContent {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
}
.moreInfoHeadersTxt,
.moreInfoContentItem {
  display: flex;
  padding-left: 20px;
}
.moreInfoHeadersTxt:first-child,
.moreInfoContentItem:first-child {
  width: 60%;
  margin-left: 10%;
  padding-left: 50px;
}
.moreInfoHeadersTxt:last-child,
.moreInfoContentItem:last-child {
  width: 30%;
}
.action span {
  color: seagreen;
  font-size: 30px;
  margin: 0;
  padding-left: 40px;
  cursor: pointer;
}
.taskDescription {
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
}
</style>
