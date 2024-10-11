import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/pages/HomePage/HomePage.vue"),
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
      path: "/forgot/:name",
      component: () => import("@/pages/ForgotPage/ForgotPage.vue"),
      meta: { text: "ForgotPage" },
      name: "forgotPage",
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
    {
      path: "/my-profile",
      component: () => import("@/pages/ProfilePage/ProfilePage.vue"),
      meta: { text: "ProfilePage" },
      name: "profilePage",
    },
    {
      path: "/point-transaction-history",
      component: () => import("@/pages/PointPage/PointPage.vue"),
      meta: { text: "PointPage" },
      name: "pointPage",
    },
    {
      path: "/point-rules",
      component: () => import("@/pages/PointRulesPage/PointRulesPage.vue"),
      meta: { text: "PointRulesPage" },
      name: "pointRulesPage",
    },
    {
      path: "/404",
      component: () => import("@/pages/404Page/404Page.vue"),
      meta: { text: "404Page" },
      name: "404Page",
    },
    { path: "*", redirect: "/404" },
  ],
});

export default router;
