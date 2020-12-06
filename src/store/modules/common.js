/* eslint-disable no-unused-vars */
const initialState = {
  activeUI: '',
  currentComponent: {},
  components: [], //预览视图的组件树
};

const actions = {
  updateCurrentComponent({ commit, state }, data) {
    commit('SET_COMPONENT', data);
    // const index = state.components.find(item => {
    //   return item.id === data.id;
    // })
    // let components = state.components;
    // if(index > -1) {
    //   // 更新
    //   components[index] = data;
    // } else {
    //   // 新增
    //   components.push(data);
    // }
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
};

export default {
  state: initialState,
  actions,
  getters,
  mutations,
};
