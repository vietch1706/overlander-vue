import axios from "axios";
import FormComponent from "@/components/ProfileFormComponent/ProfileFormComponent.vue";
import PassFormComponent from "@/components/ChangePassForm/ChangePassForm.vue";
export default {
  components: {
    FormComponent,
    PassFormComponent,
  },
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${require("@/assets/Frame2823.png")})`,
      },
      profileImageStyle: {
        backgroundImage: `url(${require("@/assets/ProfileComponent/Frame2861.png")})`,
      },
      GENDER_MALE: 0,
      GENDER_FEMALE: 1,
      data: {
        isFilled: {
          gender: false,
          birthdate: false,
        },
        country: [],
        user: {
          first_name: "",
          last_name: "",
          phone_area_code: "",
          phone: "",
          country: "",
          email: "",
          year: "",
          month: "",
          gender: "",
          upgrade_point: "",
          membership_tier: [],
          join_date: "",
          validity_date: "",
          member_no: "",
          address: "",
          district: "",
        },
      },
      dataPass: {
        user: "",
        current_password: "",
        new_password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    updateInformation() {
      axios
        .post("/user/update", this.data.user)
        .then((result) => {
          console.log(result);
          this.$notify({
            title: "Basic Information Updated",
            message: result.data.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changePassword() {
      this.dataPass.user = this.data.user.email;
      axios
        .post("/user/change-password", this.dataPass)
        .then((result) => {
          console.log(result);
          this.$notify({
            title: "Basic Information Updated",
            message: result.data.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          console.log(error.response.data.message);
          this.$notify({
            title: "Error",
            message: error.response.data.message,
            type: "error",
          });
        });
    },
    getUser() {
      axios
        .get("/user/me", localStorage.getItem("token"))
        .then((result) => {
          this.data.user = result.data.data;
          if (this.data.user.gender != "") {
            this.data.isFilled.gender = true;
          }
          if (this.data.user.year != "") {
            this.data.isFilled.birthdate = true;
          }
          if (this.data.user.gender == this.GENDER_MALE) {
            this.data.user.gender = "Male";
          } else {
            this.data.user.gender = "Female";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkFilled() {},
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
  async beforeRouteEnter(to, from, next) {
    let token = localStorage.getItem("token");
    if (!token) {
      next((vm) => {
        vm.$router.push({ name: "loginPage" });
      });
    }
    next();
  },
  async mounted() {
    await this.getUser();
    await this.getAllInterests();
    await this.checkFilled();
    await this.getAllPhoneCodes();
  },
};
