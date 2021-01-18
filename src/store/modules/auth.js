import router from '../../router/index';
import firebase from 'firebase';
import actionCodeSettings from '../../services/email';
import { SET_LOADING, SET_USER, LOGOUT } from '../types';

const state = {
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
  async authAction({ commit, dispatch }, payload) {
    if (payload) {
      commit(SET_USER, {
        displayName: payload.displayName,
        email: payload.email,
        emailVerified: payload.emailVerified
      });
    } else {
      commit('LOGOUT');
    }
  },
  async register({ commit, dispatch }, payload) {
    const { email, password } = payload;
    commit(SET_LOADING, true);

    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      user.user.updateProfile({ displayName: email.split('@')[0] });
      dispatch('authAction', user.user);

      commit(SET_LOADING, false);
      router.push('/');
    } catch (error) {
      commit(SET_LOADING, false);
      if (error.message) {
        dispatch(
          'alert/setAlert',
          {
            msg: error.message,
            alertType: 'danger'
          },
          {
            root: true
          }
        );
      }
    }
  },
  async login({ commit, dispatch }, payload) {
    const { email, password } = payload;
    commit(SET_LOADING, true);

    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch('authAction', user.user);

      commit(SET_LOADING, false);
      router.push('/');
    } catch (error) {
      commit(SET_LOADING, false);
      if (error.message) {
        dispatch(
          'alert/setAlert',
          {
            msg: error.message,
            alertType: 'danger'
          },
          {
            root: true
          }
        );
      }
    }
  },
  logout({ commit, dispatch }) {
    dispatch('tasks/clearState', null, { root: true });
    dispatch('leaves/clearState', null, { root: true });
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit(LOGOUT);
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
    commit(SET_LOADING, true);
    firebase
      .auth()
      .currentUser.sendEmailVerification(actionCodeSettings)
      .then(() => {
        commit(SET_LOADING, false);
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
  [SET_USER](state, payload) {
    state.user = payload;
  },
  [SET_LOADING](state, payload) {
    state.loading = payload;
  },
  [LOGOUT](state) {
    state.user = null;
    state.token = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
