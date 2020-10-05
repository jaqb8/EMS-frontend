import api from '../../services/api';
import router from '../../router/index';
import firebase from 'firebase';

const state = {
  token: null,
  loading: false,
  user: null
};

const getters = {
  isAuthenticated(state) {
    return state.user !== null && state.user !== undefined;
  },
  getUser(state) {
    const isAuthenticated = state.user !== null && state.user !== undefined;
    return isAuthenticated ? state.user.displayName : false;
  },
  getEmail(state) {
    const isAuthenticated = state.user !== null && state.user !== undefined;
    return isAuthenticated ? state.user.email : false;
  }
};

const actions = {
  authAction({ commit }, user) {
    if (user) {
      commit('SET_USER', {
        displayName: user.displayName,
        email: user.email
      });
    } else {
      commit('SET_USER', null);
    }
  },
  async register({ commit, dispatch }, payload) {
    commit('SET_LOADING', true);
    const newUser = {
      email: payload.email,
      password: payload.password
    };

    try {
      await api.post('/api/users', newUser);
      dispatch('login', {
        email: payload.email,
        password: payload.password
      });
      commit('SET_LOADING', false);
      alert('Your account has been created.');
    } catch (error) {
      commit('SET_LOADING', false);
      console.log(error);
    }
  },
  async login({ commit }, payload) {
    try {
      const { email, password } = payload;
      commit('SET_LOADING', true);
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit('SET_USER', {
        displayName: user.user.displayName,
        email: user.user.email
      });
      commit('SET_LOADING', false);
      alert(`You are logged in as ${user.user.email}.`);
      router.push('/');
    } catch (error) {
      commit('SET_LOADING', false);
      alert(error.message);
    }
  },
  async logout({ commit }) {
    await firebase.auth().signOut();
    commit('SET_USER', null);
    router.push('/login');
  }
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
