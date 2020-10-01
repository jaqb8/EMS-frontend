import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/loginRegisterStyles.css';
import firebase from 'firebase';
import './utils/firebaseInit';

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch('autoSignIn', user);
      }
    });
  }
}).$mount('#app');
