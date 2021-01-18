import { CLEAR_STATE, SET_LOADING, SET_TASKS, UPDATE_TASK } from '../types';
import axios from 'axios';

const getDefaultState = () => {
  return {
    loading: false,
    tasks: []
  };
};

const state = getDefaultState();

const getters = {
  getAllTasks: state => state.tasks
};

const actions = {
  async fetchAllTasks({ commit }) {
    commit(SET_LOADING, true);
    try {
      const response = await axios.get('/tasks');
      commit(SET_TASKS, response.data);
      commit(SET_LOADING, false);
    } catch (error) {
      commit(SET_LOADING, false);
      console.log(error);
    }
  },
  async updateStatus({ commit }, payload) {
    commit(SET_LOADING, true);
    try {
      const body = {
        status: payload.status
      };
      const response = await axios.patch(`/tasks/${payload.id}`, body);
      commit(UPDATE_TASK, response.data);
      commit(SET_LOADING, false);
    } catch (error) {
      commit(SET_LOADING, false);
      console.log(error);
    }
  },
  clearState({ commit }) {
    commit(CLEAR_STATE);
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
  },
  [CLEAR_STATE](state) {
    Object.assign(state, getDefaultState());
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
