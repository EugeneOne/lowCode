/* eslint-disable no-unused-vars */
const initialState = {
  activeUI: '',
  currentComponent: {},
  components: [], //预览视图的组件树
};

const actions = {
  setCurrentComponent({ commit }, data) {
    commit('SET_COMPONENT', data);
  },
  addComponents({ commit }, data) {
    commit('SET_COMPONENT', data);
    commit('UPDATE_COMPONENTS', data);
  },
};

const getters = {
  currentComponent: (state) => state.currentComponent,
  components: (state) => state.components,
};

const mutations = {
  SET_COMPONENT(state, data = {}) {
    state.currentComponent = data;
  },
  UPDATE_COMPONENTS(state, data = {}) {
    state.components.push(data);
  },
};

export default {
  state: initialState,
  actions,
  getters,
  mutations,
};
