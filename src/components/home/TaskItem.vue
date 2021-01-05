<template>
  <div class="listItemContainer">
    <p class="idNumber">{{ taskID + 1 }}</p>
    <p class="name" title="">
      {{ taskTitle }}
    </p>
    <p class="status">{{ taskStatus }}</p>
    <div class="mark">
      <span class="material-icons" title="More" @click="expandTask">
        expand_more
      </span>
    </div>
    <div class="moreInfo" v-if="isExpanded">
      <p class="taskDescription">{{ taskDescription }}</p>
      <div class="action">
        <span class="material-icons">
          check_circle
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskID: Number,
    taskTitle: String,
    taskValue: String,
    taskStatus: String,
    taskDescription: String
  },
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    expandTask() {
      this.isExpanded = !this.isExpanded;
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
  align-items: center;
  justify-content: center;
}
.action span {
  color: seagreen;
  font-size: 30px;
}
</style>
