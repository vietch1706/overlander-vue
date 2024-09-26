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
          console.log(result);
          if (result.data.data.token) {
            localStorage.setItem("token", result.data.data.token);
          }
          this.$store.dispatch("header", false);
          this.$router.push({ name: "homePage" });
          this.$notify({
            title: "Login Success",
            message: result.data.message,
            type: "success",
          });
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
};
