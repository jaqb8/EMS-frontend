<template>
  <div class="form-container">
    <div class="form-top-bar">
      <div class="bar-top-line"></div>
      <div class="bar-bottom-container">
        <h1>EMS</h1>
        <p>Register</p>
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
      <button @click="register" id="form-submit-btn">Register</button>
    </form>
  </div>
</template>

<script>
import { mixin } from '../utils/loginRegisterScripts.js';
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      password2: ''
    };
  },
  mixins: [mixin],
  methods: {
    async register(e) {
      e.preventDefault();
      try {
        const data = await axios.post(
          '/api/users',
          {
            email: this.email,
            password: this.password,
            department: 'Sprzątanie',
            position: 'Woźny'
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        console.log(data);
        alert('Your account has been created.');
      } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors);

        if (errors) {
          errors.forEach(error => alert(error.msg));
        }
      }
    }
  }
};
</script>
