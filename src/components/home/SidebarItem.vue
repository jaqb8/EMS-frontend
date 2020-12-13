<template>
  <div class="item-container">
    <!-- <router-link :to="'/home/' + item.name"> -->
    <span class="material-icons">{{ item.icon }}</span>
    <p>{{ item.name }}</p>
    <!-- </router-link> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: Object
  },
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped>
.item-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
span {
  margin-right: 10px;
  font-size: 30px;
}
span,
p {
  color: white;
}
p {
  font-weight: 700;
  font-size: 18px;
}
</style>
