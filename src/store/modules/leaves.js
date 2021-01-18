import axios from 'axios';
import { SET_LEAVES, SET_LOADING, CLEAR_STATE } from '../types';

const getDefaultState = () => {
  return {
    loading: false,
    leaves: []
  };
};

const state = getDefaultState();

const getters = {
  getAllLeaves: state => state.leaves
};

const actions = {
  async fetchAllLeaves({ commit }) {
    commit(SET_LOADING, true);
    try {
      const response = await axios.get('/leaves');
      commit(SET_LEAVES, response.data);
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
  [SET_LEAVES](state, payload) {
    state.leaves = payload;
  },
  [SET_LOADING](state, payload) {
    state.loading = payload;
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
