/* eslint-disable no-unused-vars */
const initialState = {
  activeUI: '',
  currentComponent: {},
  components: [], //预览视图的组件树
  currentType: 'view' // view: 预览模式； code: 源码模式
};

const actions = {
  updateCurrentComponent({ commit }, data) {
    commit('SET_COMPONENT', data);
    commit('UPDATE_COMPONENTS', data);
  },
  updateType({ commit }, data) {
    commit('SET_TYPE', data);
  },
};

const getters = {
  currentComponent: (state) => state.currentComponent,
  components: (state) => state.components,
  currentType: (state) => state.currentType,
};

const mutations = {
  SET_COMPONENT(state, data = {}) {
    state.currentComponent = data;
  },
  UPDATE_COMPONENTS(state, data = []) {
    const index = state.components.find(item => {
      return item.id === data.id;
    })
    let components = state.components;
    if(index > -1) {
      // 更新
      components[index] = data;
    } else {
      // 新增
      components.push(data);
    }
    state.components = components;
  },
  SET_TYPE(state, data = {}) {
    state.currentType = data;
  },
};

export default {
  state: initialState,
  actions,
  getters,
  mutations,
};
