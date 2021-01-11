import router from '../../router/index';
import firebase from 'firebase';
import actionCodeSettings from '../../services/email';
import { SET_LOADING, SET_USER } from '../types';

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
  async authAction({ commit }, user) {
    if (user) {
      localStorage.setItem('token', await user.getIdToken());

      commit(SET_USER, {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified
      });
    } else {
      commit(SET_USER, null);
    }
  },
  async register({ commit, dispatch }, payload) {
    const { email, password } = payload;
    commit(SET_LOADING, true);

    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      localStorage.setItem('token', await user.user.getIdToken());
      user.user.updateProfile({ displayName: email.split('@')[0] });

      commit(SET_USER, {
        displayName: user.user.displayName,
        email: user.user.email,
        emailVerified: user.user.emailVerified
      });
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
      localStorage.setItem('token', await user.user.getIdToken());
      commit(SET_USER, {
        displayName: user.user.displayName,
        email: user.user.email,
        emailVerified: user.user.emailVerified
      });
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
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('token');
        commit(SET_USER, null);
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
