import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/register",
      component: () => import("../components/ResisterPage/RegisterPage.vue"),
      meta: { text: "RegisterPage" },
      name: "registerPage",
    },
    {
      path: "/login",
      component: () => import("../components/LoginPage/LoginPage.vue"),
      meta: { text: "LoginPage" },
      name: "loginPage",
    },
  ],
});

export default router;
