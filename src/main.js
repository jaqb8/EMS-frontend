import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/loginRegisterStyles.css';
import firebase from 'firebase';
import './utils/firebaseInit';
import api from './services/api';
import axios from 'axios';

Vue.config.productionTip = false;

const bootstrap = async user => {
  let app;
  let token;
  if (user) {
    token = await user.getIdToken();
  }

  console.log(token);

  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App),
      created() {
        axios.defaults.baseURL = process.env.VUE_APP_API_URL;
        axios.defaults.timeout = 10000;
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
          delete axios.defaults.headers.common['Authorization'];
        }

        console.log(axios.defaults);
      }
    }).$mount('#app');
  }

  store.dispatch('auth/authAction', user);
};

firebase.auth().onIdTokenChanged(user => bootstrap(user));
