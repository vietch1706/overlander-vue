import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    existsUser: null,
    success: null,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getSuccess(state) {
      return state.success;
    },
    getExistsUser(state) {
      return state.existsUser;
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    existsUser(state, existsUser) {
      state.existsUser = existsUser;
    },
    success(state, success) {
      state.success = success;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    existsUser(context, existsUser) {
      context.commit("existsUser", existsUser);
    },
    success(context, success) {
      context.commit("success", success);
    },
  },
  modules: {},
});
