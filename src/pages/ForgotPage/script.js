import axios from "axios";
import SideComponent from "@/components/SideComponent/SideComponent.vue";
import FormComponent from "@/components/ForgetFormComponent/ForgetFormComponent.vue";
export default {
  components: { SideComponent, FormComponent },
  data() {
    return {
      data: {
        error_message: "",
        user: {
          user: "",
          password: "",
          password_confirmation: "",
        },
        isHidden: "",
        hideAll: true,
        form: {
          btn_name: "",
          isHidden: false,
        },
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/UpdateComponent/side-image.png")})`,
        },
      },
    };
  },
  methods: {
    checkMethod(previousPage) {
      switch (previousPage) {
        case "verify":
          this.data.form.isHidden = false;
          this.data.form.btn_name = "Verify Email";
          break;
        case "reset-password":
          this.data.form.isHidden = true;
          this.data.form.btn_name = "Change Password";
          break;
        default:
          break;
      }
    },
    verify() {
      this.$store.dispatch("user", this.data.user);
      this.sendCode();
      this.$notify({
        title: "Success",
        message:
          "If your email matches an existing account we will send you a 6 digits length recovery email within a few minutes. If you have not received an email check your spam folder or contact Support.",
        type: "success",
      });
      this.$router.push({
        name: `otpPage`,
      });
    },
    sendCode() {
      axios
        .post("/user/send-verification-code", {
          user: this.data.user.user,
          method: "Forget Password",
        })
        .then((result) => {
          this.$notify({
            title: "Save Success",
            message: result.data.data.message,
            type: "success",
          });
          this.$router.push({
            name: "otpPage",
          });
        })
        .catch((error) => {
          this.$notify.error({
            title: "Error",
          });
          console.log(error);
        });
    },
    resetPassword() {
      axios
        .post("user/reset-password", this.data.user)
        .then((result) => {
          console.log(result);
          this.$store.dispatch("success", {
            title: "Password Changed",
            welcome: "Welcome back!" + " ",
            message: "You have change the password successfully!",
            button: "Go to Login",
          });
          this.$router.push({ name: "successPage" });
        })
        .catch((error) => {
          this.$notify.error({
            title: "Error",
          });
          console.log(error);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.name === "reset-password" && from.name === "otpPage") {
      next((vm) => {
        vm.data.user = vm.$store.getters.getUser;
        vm.checkMethod(to.params.name);
      });
    } else if (to.params.name === "verify") {
      next((vm) => {
        vm.checkMethod(to.params.name);
      });
    }
    return false;
  },
  async mounted() {},
};
