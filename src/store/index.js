import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import alert from './modules/alert';
import tasks from './modules/tasks';
import leaves from './modules/leaves';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: { ...auth, namespaced: true },
    alert: { ...alert, namespaced: true },
    tasks: { ...tasks, namespaced: true },
    leaves: { ...leaves, namespaced: true }
  }
});
