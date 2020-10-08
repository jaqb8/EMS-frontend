<template>
  <div class="hamburger">
    <span class="top"></span>
    <span class="mid"></span>
    <span class="bottom"></span>
  </div>
</template>

<script>
export default {
  name: 'Hamburger'
};
</script>

<style scoped>
.hamburger {
  width: 40px;
  height: 40px;
  border: 0;
  border-top: 5px solid #fff;
  border-radius: 5px;
  background: transparent;
  position: relative;
  transition: 0.3s transform linear;
}
.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 5px solid #fff;
  border-radius: 10px;
  transform: translateY(10px);
}
.hamburger::after {
  transform: translateY(25px);
  transition: 0.3s transform linear;
}
.hamburger:focus {
  transform: rotate(45deg) translateY(5px);
  border: none;
}
.hamburger:focus::after {
  transform: rotate(-90deg) translateX(-10px);
}
</style>
