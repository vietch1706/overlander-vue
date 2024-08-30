import axios from "axios";
import SideComponent from "@/components/SideComponent/SideComponent.vue";
import FormComponent from "@/components/QuestionsFormComponent/QuestionsFormComponent.vue";
export default {
  components: {
    SideComponent,
    FormComponent,
  },
  data() {
    return {
      data: {
        country: [],
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/RegisterComponent/side-image.png")})`,
        },
        datePicker: true,
        textField: true,
        phoneField: true,
        user: {
          question1: "",
          question2: "",
          answer1: "",
          answer2: "",
        },
        question: [],
        state: {
          phone: false,
          email: false,
          member: false,
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
      },
    };
  },
  methods: {
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
    step2() {
      console.log(this.data.user);
      axios
        .post(`existing-user/step-2`, this.data.user)
        .then((result) => {
          this.$store.dispatch("user", result.data.data.data);
          this.$notify({
            title: "Success",
            type: "success",
          });
          this.$store.dispatch(`existsUser`, this.data.user);
          if (this.data.user.question2 == this.data.questions.EMAIL_QUESTION) {
            this.$router.push({
              name: "otpPage",
            });
          } else {
            this.$router.push({
              name: `updatePage`,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$notify.error({
            title: "Error",
            message: error.response.data.message,
          });
        });
    },
    getQuestions(previousQuestion) {
      switch (previousQuestion) {
        case "email":
          this.data.user.question1 = this.data.questions.EMAIL_QUESTION;
          break;
        case "phone":
          this.data.user.question1 = this.data.questions.PHONE_QUESTION;
          break;
        case "member":
          this.data.user.question1 = this.data.questions.MEMBER_QUESTION;
          break;
      }
      this.data.user.answer1 = this.$store.getters.getExistsUser.answer1;
      axios
        .get(`existing-user/questions/get`, {
          params: {
            previous: this.data.user.question1,
          },
        })
        .then((result) => {
          this.data.question = result.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === "authenOnePage" || from.name === "otpPage") {
      next((vm) => {
        vm.getQuestions(vm.$store.getters.getExistsUser.question1);
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("existUser", vm.data.user);
      console.log(vm.$store.getters.getExistsUser);
    });
  },
  async mounted() {
    this.getAllPhoneCodes();
  },
};
