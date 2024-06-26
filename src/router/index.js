import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      meta: { text: "HomePage" },
      name: "homePage",
    },
    {
      path: "/register",
      component: () => import("../components/RegisterPage/RegisterPage.vue"),
      meta: { text: "RegisterPage" },
      name: "registerPage",
    },
    {
      path: "/exist-member-register",
      component: () =>
        import("../components/ExistmemberPage/ExistmemberPage.vue"),
      meta: { text: "ExistmemberPage" },
      name: "existMemberPage",
    },
    {
      path: "/successful",
      component: () => import("../components/SuccessPage/SuccessPage.vue"),
      meta: { text: "SuccessPage" },
      name: "successPage",
    },
    {
      path: "/update-member",
      component: () => import("../components/UpdatePage/UpdatePage.vue"),
      meta: { text: "UpdatePage" },
      name: "updatePage",
    },
    {
      path: "/login",
      component: () => import("../components/LoginPage/LoginPage.vue"),
      meta: { text: "LoginPage" },
      name: "loginPage",
    },
    {
      path: "/reset-password",
      component: () => import("../components/ForgetPage/ForgetPage.vue"),
      meta: { text: "ForgetPage" },
      name: "forgetPage",
    },
    {
      path: "/phone-verification",
      component: () => import("../components/OtpPage/OtpPage.vue"),
      meta: { text: "OtpPage" },
      name: "otpPage",
    },
    {
      path: "/new-password",
      component: () =>
        import("../components/ChangepassPage/ChangepassPage.vue"),
      meta: { text: "ChangepassPage" },
      name: "changePassPage",
    },
    {
      path: "/terms-and-conditions",
      component: () => import("../components/SupportivePage/T&CPage.vue"),
      meta: { text: "T&CPage" },
      name: "t&cPage",
    },
    {
      path: "/privacy-policy",
      component: () => import("../components/SupportivePage/PolicyPage.vue"),
      meta: { text: "PolicyPage" },
      name: "policyPage",
    },
    {
      path: "/disclaimer",
      component: () =>
        import("../components/SupportivePage/DisclaimerPage.vue"),
      meta: { text: "DisclaimerPage" },
      name: "disclaimerPage",
    },
  ],
});

export default router;
