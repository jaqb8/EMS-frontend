import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/loginRegisterStyles.css';
import firebase from 'firebase';
import './utils/firebaseInit';
import api from './services/api';

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    user.getIdToken().then(token => {
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    });
  }

  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }

  store.dispatch('auth/authAction', user);
});
