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
      <div class="moreInfoHeaders">
        <p class="moreInfoHeadersTxt">Description</p>
        <p class="moreInfoHeadersTxt">Mark as done</p>
      </div>
      <div class="moreInfoContent">
        <p class="taskDescription moreInfoContentItem">
          "{{ taskDescription }}"
        </p>
        <div class="action moreInfoContentItem">
          <span class="material-icons" title="Mark as done">
            check_circle
          </span>
        </div>
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
}
.taskDescription {
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
}
</style>
