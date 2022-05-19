import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: 'Vue Demos',
    user: {
      firstName: 'Evan',
      lastName: 'Schultz',
    },
  },
  getters: {
    appTitle: (state) => state.appTitle,
  },
  mutations: {},
  actions: {},
  modules: {},
});
