import axios from "axios";
import SideComponent from "@/components/SideComponent/SideComponent.vue";
import FormComponent from "@/components/AuthenFormComponent/AuthenFormComponent.vue";
export default {
  components: {
    SideComponent,
    FormComponent,
  },
  data() {
    return {
      error: false,
      error_message: {
        email: "",
      },
      data: {
        country: [],
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/RegisterComponent/side-image.png")})`,
        },
        isHidden: true,
        user: {
          answer1: "",
          question1: "",
        },
        state: {
          phone: false,
          email: false,
          member: false,
        },
      },
    };
  },
  methods: {
    checkMethod() {
      switch (this.$route.query.state) {
        case "phone":
          this.data.state.phone = true;
          break;
        case "email":
          this.data.state.email = true;
          break;
        case "member":
          this.data.state.member = true;
          break;
        default:
          break;
      }
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
    step1() {
      axios
        .post(`existing-user/step-1`, this.data.user)
        .then((result) => {
          this.$notify({
            title: "Success",
            message: result.data.data.message,
            type: "success",
          });
          this.$store.dispatch(`existsUser`, this.data.user);
          if (this.data.user.question1 === "email") {
            this.$router.push({
              name: "otpPage",
            });
          } else {
            this.$router.push({
              name: `authenTwoPage`,
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
  },

  async mounted() {
    this.getAllPhoneCodes();
    this.checkMethod();
  },
};
