import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    existsUser: null,
    success: null,
    header: false,
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
    getHeader(state) {
      return state.header;
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
    header(state, header) {
      state.header = header;
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
    header(context, header) {
      context.commit("header", header);
    },
  },
  modules: {},
});
