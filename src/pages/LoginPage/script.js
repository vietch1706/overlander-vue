import axios from "axios";
import LoginFormComponent from "@/components/LoginFormComponent/LoginFormComponent.vue";
import SideComponent from "@/components/SideComponent/SideComponent.vue";
export default {
  components: {
    LoginFormComponent,
    SideComponent,
  },
  data() {
    return {
      data: {
        user: {
          user: "",
          password: "",
        },
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/RegisterComponent/side-image.png")})`,
        },
      },
    };
  },
  methods: {
    login() {
      axios
        .post("/user/login", this.data.user)
        .then((result) => {
          if (result.data.data.token) {
            localStorage.setItem("token", result.data.data.token);
          }
          this.$notify({
            title: "Login Success",
            message: result.data.message,
            type: "success",
          });
          this.$store.dispatch("isLogin", true);
          this.$store.dispatch("user", result.data.data.user);
          this.$router.push({ name: "homePage" });
        })
        .catch((error) => {
          console.log("error!");
          this.$notify.error({
            title: "Error",
            // message: error.response.data.message,
          });
          console.log(error);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm.$store.getters.getIsLogin);
      if (vm.$store.getters.getIsLogin) {
        vm.$router.push({ name: "homePage" });
      }
    });
  },
};
