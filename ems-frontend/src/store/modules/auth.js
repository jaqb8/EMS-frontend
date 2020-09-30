// import axios from 'axios';

const state = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: 'Kuligson'
};

const getters = {
  getUser: state => state.user
};

const actions = {
  logoutUser({ commit }) {
    commit('logout');
  }
};

const mutations = {
  logout: state => {
    state.token = null;
    state.isAuthenticated = null;
    state.loading = false;
    state.user = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
