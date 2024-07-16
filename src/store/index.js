import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    phone: null,
  },
  getters: {},
  mutations: {
    user(state, user) {
      state.user = user;
    },
    phone(state, phone) {
      state.phone = phone;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    phone(context, phone) {
      context.commit("phone", phone);
    },
  },
  modules: {},
});
