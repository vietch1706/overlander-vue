import axios from "axios";
import FormComponent from "../../components/FullFormComponent/FullFormComponent.vue";
import SideComponent from "../../components/SideComponent/SideComponent.vue";
export default {
  components: {
    FormComponent,
    SideComponent,
  },
  data() {
    return {
      data: {
        country: [],
        interests: [],
        error: false,
        isFilled: true,
        error_message: {
          phone: "",
          email: "",
        },
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/RegisterComponent/side-image.png")})`,
        },
        form: {
          email: {
            isHidden: false,
          },
          error: false,
        },
        user: {
          first_name: "",
          last_name: "",
          phone_area_code: "",
          phone: "",
          password: "",
          password_confirmation: "",
          country: "",
          email: "",
          year: "",
          month: "",
          gender: "",
          interests: [],
          e_newsletter: false,
          mail_receive: false,
        },
      },
    };
  },
  methods: {
    axiosFunction() {
      this.data.error = false;
      this.data.error_message.phone = "";
      this.data.error_message.email = "";
      this.data.user.password_confirmation = this.data.user.password;
      this.data.user.phone_area_code = this.data.user.phone_area_code.replace(
        "+",
        ""
      );
      axios
        .post("/user/register", this.data.user)
        .then(() => {
          console.log("success");
          this.data.user.password = "";
          this.sendCode();
        })
        .catch((error) => {
          console.log("error!");
          if (
            error.response.data.message.search("email") > 0 &&
            error.response.data.message.search("phone") < 0
          ) {
            this.data.error_message.email = error.response.data.message;
            this.data.error = true;
          } else if (
            error.response.data.message.search("phone") > 0 &&
            error.response.data.message.search("email") < 0
          ) {
            this.data.error_message.phone = error.response.data.message;
            this.error = true;
          } else {
            this.data.error_message.phone =
              error.response.data.message.split("|")[0];
            this.data.error_message.email =
              error.response.data.message.split("|")[1];
            this.data.error = true;
          }
          this.$notify.error({
            title: "Error",
            message: error.response.data.message,
          });
          console.log(error);
        });
    },
    sendCode() {
      axios
        .post("/user/send-verification-code", {
          user: this.data.user.email,
          method: "Register",
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
    getAllPhoneCodes() {
      axios
        .get("general/country/get")
        .then((result) => {
          this.data.country = result.data.data;
          for (let keys in result.data.data) {
            this.data.country[keys]["code"] =
              "+" + result.data.data[keys]["code"];
            this.data.country[keys]["image"] =
              "fi fi-" + result.data.data[keys]["image"];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAllInterests() {
      axios
        .get("general/interest/get")
        .then((result) => {
          this.data.interests = result.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === "otpPage") {
      next((vm) => {
        vm.data.user = vm.$store.getters.getUser;
      });
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "otpPage") {
      this.$store.dispatch("user", this.data.user);
      next();
    }
    next();
  },
  async mounted() {
    await this.getAllPhoneCodes();
    await this.getAllInterests();
  },
};
