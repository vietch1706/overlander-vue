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
    {
      path: "/terms-and-conditions",
      component: () => import("../components/SupportivePage/T&CPage.vue"),
      meta: { text: "SupportivePage" },
      name: "supportivePage",
    },
    {
      path: "/privacy-policy",
      component: () => import("../components/SupportivePage/PolicyPage.vue"),
      meta: { text: "SupportivePage" },
      name: "supportivePage",
    },
    {
      path: "/disclaimer",
      component: () =>
        import("../components/SupportivePage/DisclaimerPage.vue"),
      meta: { text: "SupportivePage" },
      name: "supportivePage",
    },
  ],
});

export default router;
