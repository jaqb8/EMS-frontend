<template>
  <div class="form-container">
    <div class="form-top-bar">
      <div class="bar-top-line"></div>
      <div class="bar-bottom-container">
        <h1>EMS</h1>
        <p>Register</p>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="input-container">
        <label for="email" ref="emailLabel">E-mail</label>
        <input
          @focus="onFocus()"
          @blur="activeClassClear()"
          id="email"
          type="text"
          ref="emailInput"
          v-model="email"
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
          v-model="password"
        />

        <div class="bottom-line-wrapper">
          <span ref="passwordSpan"></span>
        </div>
      </div>
      <div class="input-container">
        <label for="password2" ref="passwordLabel2">Repeat password</label>
        <input
          @focus="onFocus()"
          @blur="activeClassClear()"
          id="password2"
          type="password"
          ref="passwordInput2"
          v-model="password2"
        />

        <div class="bottom-line-wrapper">
          <span ref="passwordSpan2"></span>
        </div>
      </div>
      <div class="agreement__container">
        <input type="checkbox" name="agreement" id="agreement" />
        <label for="agreement" class="agreement__text"
          >Ich stimme der Betreuung eines Kindes mit Asperger-Syndrom namens
          Tomasz und Kulig zu</label
        >
      </div>
      <button id="form-submit-btn">Register</button>
    </form>
  </div>
</template>

<script>
import { mixin } from '../utils/loginRegisterScripts.js';
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      password2: '',
      error: false
    };
  },
  mixins: [mixin],
  methods: {
    ...mapActions('auth', ['register']),
    ...mapActions('alert', ['setAlert']),
    onSubmit() {
      if (this.password !== this.password2) {
        this.setAlert({
          msg: 'Password do not match',
          alertType: 'danger'
        });
      } else this.register({ email: this.email, password: this.password });
    }
  }
};
</script>
