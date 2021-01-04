<template>
  <div class="listItemContainer">
    <p class="idNumber">{{ taskID + 1 }}</p>
    <p class="name" title="">
      {{ taskTitle }}
    </p>
    <p class="status">{{ taskStatus }}</p>
    <div class="mark">
      <span class="material-icons" title="More">
        expand_more
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskID: Number,
    taskTitle: String,
    taskValue: String,
    taskStatus: String
  }
};
</script>
<style>
.listItemContainer {
  width: 100%;
  display: flex;
}
.action {
  line-height: 70px;
}
div.mark span {
  color: #000;
  text-align: left;
  margin: unset;
  font-size: 30px;
  cursor: pointer;
}
</style>
