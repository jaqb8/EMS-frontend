import {
  v4 as uuidv4
} from 'uuid';

const state = {
  alertsList: []
};

const getters = {
  getAlertList(state) {
    return state.alertList;
  }
};

const actions = {
  setAlert({
    commit
  }, payload) {
    const id = uuidv4();
    commit('SET_ALERT', {
      msg: payload.msg,
      alertType: payload.alertType,
      id: id
    });
    console.log(this.state);

    setTimeout(
      () =>
      commit('REMOVE_ALERT', {
        id
      }),
      payload.timeout ? payload.timeout : 5000
    );
  }
};

const mutations = {
  SET_ALERT(state, payload) {
    state.alertsList = [...state.alertsList, payload];
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