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
  register({ commit, dispatch }, payload) {
    commit('SET_LOADING', true);
    const newUser = {
      email: payload.email,
      password: payload.password
    };

    api
      .post('/api/users', newUser)
      .then(() => {
        dispatch('login', {
          email: payload.email,
          password: payload.password
        });
        commit('SET_LOADING', false);
      })
      .catch(err => {
        commit('SET_LOADING', false);
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach(error =>
            dispatch(
              'alert/setAlert',
              {
                msg: error.msg,
                alertType: 'danger'
              },
              {
                root: true
              }
            )
          );
        }
      });
  },
  login({ commit, dispatch }, payload) {
    const { email, password } = payload;
    commit('SET_LOADING', true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        commit('SET_USER', {
          displayName: user.user.displayName,
          email: user.user.email,
          emailVerified: user.user.emailVerified
        });
        commit('SET_LOADING', false);
        router.push('/');
      })
      .catch(err => {
        commit('SET_LOADING', false);
        if (err.message) {
          dispatch(
            'alert/setAlert',
            {
              msg: err.message,
              alertType: 'danger'
            },
            { root: true }
          );
        }
      });
  },
  logout({ commit, dispatch }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('SET_USER', null);
        router.push('/login');
      })
      .catch(err => {
        if (err.message) {
          dispatch(
            'alert/setAlert',
            {
              msg: err.message,
              alertType: 'danger'
            },
            {
              root: true
            }
          );
        }
      });
  },
  sendVerificationEmail({ commit, dispatch }) {
    commit('SET_LOADING', true);
    firebase
      .auth()
      .currentUser.sendEmailVerification(actionCodeSettings)
      .then(() => {
        commit('SET_LOADING', false);
        dispatch(
          'alert/setAlert',
          {
            msg: 'Verification email was successfully sent.',
            alertType: 'info'
          },
          {
            root: true
          }
        );
      });
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
