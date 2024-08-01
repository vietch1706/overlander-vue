import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    exist: null,
    interest: null,
    resetpassword: null,
  },
  getters: {},
  mutations: {
    user(state, user) {
      state.user = user;
    },
    exist(state, exist) {
      state.exist = exist;
    },
    interest(state, interest) {
      state.interest = interest;
    },
    resetpassword(state, resetpassword) {
      state.phone = resetpassword;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    exist(context, exist) {
      context.commit("exist", exist);
    },
    interest(context, interest) {
      context.commit("interest", interest);
    },
    resetpassword(context, resetpassword) {
      context.commit("resetpassword", resetpassword);
    },
  },
  modules: {},
});
