<template>
  <div class="hamburger" ref="hamburger" v-bind:class="{ active: isActive }">
    <span class="top"></span>
    <span class="mid"></span>
    <span class="bottom"></span>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  // data() {
  //   return {
  //     isActive: false
  //   };
  // },
  props: ['isActive'],
  methods: {
    toggleActiveClass() {
      this.isActive = !this.isActive;
      console.log(this.$refs.hamburger);
    }
  }
};
</script>

<style scoped>
.hamburger {
  display: none;
  position: relative;
  width: 40px;
  height: 40px;
  border: 0;
  background: transparent;
  transition: 0.3s transform linear;
}
.hamburger span {
  position: absolute;
  width: 100%;
  border-top: 5px solid #fff;
  border-radius: 10px;
  top: 0;
  left: 0;
  transition: 0.3s transform linear;
}
.hamburger span:nth-child(1) {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.hamburger span:nth-child(2) {
  transform: translateY(10px);
}
.hamburger span:nth-child(3) {
  transform: translateY(20px);
}
/* animations */
.hamburger.active .top {
  transform: rotate(45deg);
}
.hamburger.active .mid {
  transform: rotate(45deg);
}
.hamburger.active .bottom {
  transform: rotate(-45deg);
}
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style>
