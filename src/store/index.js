import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    existsUser: null,
    success: null,
    isLogin: false,
    needUpdateProfile: false,
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
    getIsLogin(state) {
      return state.isLogin;
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
    isLogin(state, isLogin) {
      state.isLogin = isLogin;
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
    isLogin(context, isLogin) {
      context.commit("isLogin", isLogin);
    },
  },
  modules: {},
});
