<template>
  <div class="login-form">
    <div class="form-top-bar">
      <div class="bar-top-line"></div>
      <div class="bar-bottom-container">
        <h1>EMS</h1>
        <p>Login</p>
      </div>
    </div>
    <form>
      <input id="email" type="text">
      <input id="password" type="password">
      <input id="retype-password" type="password">
      <button id="form-submit-btn">Login</button>
    </form>
    <p class="create-account">Or create an account if you don’t have it yet.
You can do it here.</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data (){
    return {
      msg: 'Welcome'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>