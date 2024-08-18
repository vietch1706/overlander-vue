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
      path: "/registration",
      component: () => import("@/pages/RegisterPage/RegisterPage.vue"),
      meta: { text: "RegisterPage" },
      name: "registerPage",
    },
    {
      path: "/transfer-existing-member",
      component: () => import("@/pages/ExistsMemberPage/ExistsMemberPage.vue"),
      meta: { text: "ExistsMemberPage" },
      name: "existsMemberPage",
    },
    {
      path: "/two-step-authenication-one",
      component: () => import("@/pages/AuthenOnePage/AuthenOnePage.vue"),
      meta: { text: "AuthenOnePage" },
      name: "authenOnePage",
    },
    {
      path: "/two-step-authenication-two",
      component: () => import("@/pages/AuthenTwoPage/AuthenTwoPage.vue"),
      meta: { text: "AuthenTwoPage" },
      name: "authenTwoPage",
    },
    {
      path: "/successful",
      component: () => import("@/pages/SuccessPage/SuccessPage.vue"),
      meta: { text: "SuccessPage" },
      name: "successPage",
    },
    {
      path: "/update-existing-member",
      component: () => import("@/pages/UpdatePage/UpdatePage.vue"),
      meta: { text: "UpdatePage" },
      name: "updatePage",
    },
    {
      path: "/login",
      component: () => import("@/pages/LoginPage/LoginPage.vue"),
      meta: { text: "LoginPage" },
      name: "loginPage",
    },
    {
      path: "forget-password",
      component: () => import("@/pages/ForgetPage/ForgetPage.vue"),
      meta: { text: "ForgetPage" },
      name: "forgetPage",
    },
    {
      path: "/email-verification",
      component: () => import("@/pages/OtpPage/OtpPage.vue"),
      meta: { text: "OtpPage" },
      name: "otpPage",
    },
    {
      path: "/documentation",
      component: () => import("@/pages/SupportivePage/SupportivePage.vue"),
      meta: { text: "SupportivePage" },
      name: "supportivePage",
      children: [
        {
          path: ":name",
          component: () =>
            import("@/components/SupportiveComponent/SupportiveComponent.vue"),
          meta: { text: "SupportiveComponent" },
          name: "supportiveComponent",
        },
      ],
    },
  ],
});

export default router;
