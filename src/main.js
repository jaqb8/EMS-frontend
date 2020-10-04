import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/loginRegisterStyles.css';
import firebase from 'firebase';
import './utils/firebaseInit';

Vue.config.productionTip = false;

const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
      if (firebaseUser) {
        store.dispatch('authAction', firebaseUser);
      }
    }
  });
  unsubscribe();
});
