import api from '../../services/api';
import { createToken } from '../../services/createToken';
import { SET_LOADING, SET_TASKS } from '../types';

const state = {
  loading: false,
  tasks: []
};

const getters = {
  getAllTasks(state) {
    return state.tasks;
  }
};

const actions = {
  async fetchAllTasks({ commit }) {
    commit(SET_LOADING, true);
    try {
      const token = await createToken();

      const config = {
        headers: {
          //Bearer - means owner
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      };

      const response = await api.get('/tasks', config);
      commit(SET_TASKS, response.data);
      commit(SET_LOADING, false);
    } catch (error) {
      commit(SET_LOADING, false);
      console.log(error);
    }
  }
};

const mutations = {
  [SET_TASKS](state, payload) {
    state.tasks = payload;
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
