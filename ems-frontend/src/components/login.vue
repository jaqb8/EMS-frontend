<template>
  <div class="form-container">
    <div class="form-top-bar">
      <div class="bar-top-line"></div>
      <div class="bar-bottom-container">
        <h1>EMS</h1>
        <p>Login</p>
      </div>
    </div>
    <form>
      <div class="input-container">
        <label for="email" ref="emailLabel">E-mail</label>
        <input
          @focus="onFocus()"
          @blur="activeClassClear()"
          id="email"
          type="text"
          ref="emailInput"
        />
        <div class="bottom-line-wrapper">
          <span ref="emailSpan"></span>
        </div>
      </div>
      <div class="input-container">
        <label for="password" ref="passwordLabel">Password</label>
        <input
          @focus="onFocus()"
          @blur="activeClassClear()"
          id="password"
          type="password"
          ref="passwordInput"
        />

        <div class="bottom-line-wrapper">
          <span ref="passwordSpan"></span>
        </div>
      </div>
      <div class="keepMeLogIn__container">
        <input type="checkbox" name="keepLogIn" id="keepMeLogIn" />
        <label for="keepMeLogIn" class="keepMeLogIn__text"
          >Angemeldet bleiben</label
        >
      </div>
      <button id="form-submit-btn">Login</button>
    </form>
    <p class="create-account">
      Or create an account if you don’t have it yet. You can do it
      <router-link to="/register">here</router-link>.
    </p>
  </div>
</template>

<script>
import { mixin } from '../utils/loginRegisterScripts.js';

export default {
  name: 'Login',
  data() {
    return {};
  },
  mixins: [mixin]
};
</script>
      }
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
