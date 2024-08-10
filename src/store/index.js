import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    resetpassword: null,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    resetpassword(state, resetpassword) {
      state.phone = resetpassword;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    resetpassword(context, resetpassword) {
      context.commit("resetpassword", resetpassword);
    },
  },
  modules: {},
});
