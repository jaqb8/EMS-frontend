import api from '../../services/api';
import router from '../../router/index';
import firebase from 'firebase';
import actionCodeSettings from '../../services/email';

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
    return isAuthenticated ? state.user.displayName : null;
  },
  getEmail(state) {
    const isAuthenticated = state.user !== null && state.user !== undefined;
    return isAuthenticated ? state.user.email : null;
  },
  isEmailVerified(state) {
    const isAuthenticated = state.user !== null && state.user !== undefined;
    return isAuthenticated ? state.user.emailVerified : null;
  }
};

const actions = {
  authAction({ commit }, user) {
    if (user) {
      commit('SET_USER', {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified
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
      console.log(error.message);
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
        email: user.user.email,
        emailVerified: user.user.emailVerified
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
  },
  async sendVerificationEmail({ commit }) {
    try {
      commit('SET_LOADING', true);
      await firebase
        .auth()
        .currentUser.sendEmailVerification(actionCodeSettings);
      commit('SET_LOADING', false);
      alert('Verification email was successfully sent.');
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
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
