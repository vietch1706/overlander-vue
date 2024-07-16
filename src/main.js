import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router/index.js";
import store from "./store/index.js";
import "./axios";
import vuetify from "./plugins/vuetify";
import "bootstrap-icons/font/bootstrap-icons.css";
import locale from "element-ui/lib/locale/lang/en";

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
