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
        error_message: {
          phone: "",
          email: "",
        },
        isHidden: "",
        hideAll: true,
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/UpdateComponent/side-image.png")})`,
        },
        form: {
          email: {
            isHidden: false,
          },
        },
        user: {
          member: "",
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
      questions: {
        BIRTH_QUESTION: 0,
        EMAIL_QUESTION: 1,
        MEMBERSHIP_QUESTION: 2,
        PURCHASE_QUESTION: 3,
        MEMBER_QUESTION: 4,
        CODE_QUESTION: 5,
        PHONE_QUESTION: 6,
      },
    };
  },
  methods: {
    update() {
      this.data.error = false;
      this.data.error_message.phone = "";
      this.data.error_message.email = "";
      this.data.user.password_confirmation = this.data.user.password;
      this.data.user.phone_area_code = this.data.user.phone_area_code.replace(
        "+",
        ""
      );
      axios
        .post("/user/update", this.data.user)
        .then((result) => {
          console.log("success");
          this.data.user.password = "";
          if (this.data.form.phone.isHidden === false) {
            this.sendCode();
          } else {
            this.$notify({
              title: "Save Success",
              message: result.data.data.message,
              type: "success",
            });
            this.$store.dispatch("success", {
              title: "Account Updated",
              welcome:
                "Welcome abroad!" + this.$store.getters.getUser.first_name,
              message: "Hope you enjoy your experience in Overlander!",
              button: "Go to Homepage",
            });
            this.$router.push({ name: "successPage" });
          }
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
          method: "Transfer Member",
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
    if (from.name === "authenTwoPage") {
      next((vm) => {
        if (
          vm.$store.getters.getExistsUser.question1 ===
          vm.questions.EMAIL_QUESTION
        ) {
          vm.data.user.email = vm.$store.getters.getExistsUser.answer1;
          vm.data.form.email.isHidden = true;
        }
      });
    } else if (from.name === "otpPage") {
      next((vm) => {
        if (
          vm.$store.getters.getExistsUser.question2 ===
          vm.questions.EMAIL_QUESTION
        ) {
          vm.data.user.email = vm.$store.getters.getExistsUser.answer2;
          vm.data.form.email.isHidden = true;
        }
      });
    }
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
