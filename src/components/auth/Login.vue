<template>
  <div>
    <Alert />
    <div class="form-container">
      <div class="form-top-bar">
        <div class="bar-top-line"></div>
        <div class="bar-bottom-container">
          <h1>EMS</h1>
          <p>Login</p>
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
        <div class="keepMeLogIn__container">
          <input type="checkbox" name="keepLogIn" id="keepMeLogIn" />
          <label for="keepMeLogIn" class="keepMeLogIn__text"
            >Angemeldet bleiben</label
          >
        </div>
        <button :disabled="checkFormFields" id="form-submit-btn">
          <div v-if="!loading">Login</div>
          <div v-else><Spinner /></div>
        </button>
      </form>
      <p class="create-account">
        Or create an account if you don’t have it yet. You can do it
        <router-link to="/register">here</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import { mixin } from '../../utils/loginRegisterScripts.js';
import { mapActions, mapState } from 'vuex';
import Alert from '@/components/layout/Alert';
import Spinner from '@/components/layout/Spinner';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  mixins: [mixin],
  methods: {
    ...mapActions('auth', ['login']),
    onSubmit() {
      this.login({ email: this.email, password: this.password });
    }
  },
  computed: {
    ...mapState({
      loading: state => state.auth.loading
    }),
    checkFormFields() {
      return this.email === '' || this.password === '' || this.loading;
    }
  },
  components: {
    Alert,
    Spinner
  }
};
</script>
