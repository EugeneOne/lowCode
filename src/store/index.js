import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import common from './modules/common';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common,
  },
  strict: process.env.NODE_ENV !== 'production',
  // vuex持久化，存储到seesionStorage
  // plugins: [createPersistedState({ storage: window.sessionStorage })],
});

export default store;
