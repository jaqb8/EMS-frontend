<template>
  <main class="tasks">
    <h1>This is TASKS content</h1>
    <div>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      activeLink: 'tasks'
    };
  }
};
</script>
<style>
.tasks {
  width: 85%;
  border: 5px solid #444;
}
</style>
