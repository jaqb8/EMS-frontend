import { v4 as uuidv4 } from 'uuid';

const state = {
  alertsList: []
};

const getters = {};

const actions = {
  setAlert({ commit }, payload) {
    const id = uuidv4();
    commit('SET_ALERT', {
      msg: payload.msg,
      alertType: payload.alertType,
      id: id
    });
    console.log(payload);

    if (payload.timeout) {
      setTimeout(
        () =>
          commit('REMOVE_ALERT', {
            id
          }),
        payload.timeout ? payload.timeout : 5000
      );
    }
  },
  removeAlert({ commit }, payload) {
    commit('REMOVE_ALERT', { id: payload.id });
  }
};

const mutations = {
  SET_ALERT(state, payload) {
    state.alertsList = state.alertsList.some(alert => alert.msg === payload.msg)
      ? [...state.alertsList]
      : [...state.alertsList, payload];
  },
  REMOVE_ALERT(state, payload) {
    state.alertsList = state.alertsList.filter(
      alert => alert.id !== payload.id
    );
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
