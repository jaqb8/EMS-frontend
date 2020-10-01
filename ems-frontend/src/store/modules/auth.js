// import axios from 'axios';
import firebase from 'firebase';

const state = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null
};

const getters = {
  getUser: state => state.user.displayName,
  isAuthenticated: state => state.isAuthenticated
};

const actions = {
  async login({ commit }, payload) {
    try {
      const { email, password } = payload;

      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit('loginUser', user);
      alert(`You are logged in as ${user.user.displayName}.`);
      // this.$router.go({ path: this.$router.path });
    } catch (error) {
      alert(error.message);
    }
  },
  logout({ commit }) {
    commit('logoutUser');
  }
};

const mutations = {
  loginUser: (state, user) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = user.user;
  },
  logoutUser: state => {
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
