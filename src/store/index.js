import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    exist: null,
    phone: null,
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
    phone(state, phone) {
      state.phone = phone;
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
    phone(context, phone) {
      context.commit("phone", phone);
    },
    resetpassword(context, resetpassword) {
      context.commit("resetpassword", resetpassword);
    },
  },
  modules: {},
});
