import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router/index.js";
import store from "./store";
import "./axios";
import vuetify from "./plugins/vuetify";
import "bootstrap-icons/font/bootstrap-icons.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
