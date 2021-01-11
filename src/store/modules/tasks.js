import api from '../../services/api';
import { createToken } from '../../services/createToken';
import { SET_LOADING, SET_TASKS, UPDATE_TASK } from '../types';

const state = {
  loading: false,
  tasks: []
};

const getters = {
  getAllTasks: state => state.tasks
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
  },
  async updateStatus({ commit }, payload) {
    // console.log(payload);
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
      const body = {
        status: payload.status
      };
      const response = await api.patch(`/tasks/${payload.id}`, body, config);
      commit(UPDATE_TASK, response.data);
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
  },
  [UPDATE_TASK](state, payload) {
    state.tasks = state.tasks.map(task =>
      task.id === payload.id ? { ...task, status: payload.status } : task
    );
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
