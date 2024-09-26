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
      data: {
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
        .post("/user/update-information", this.data.user)
        .then((result) => {
          console.log(result);
          this.$notify({
            title: "Basic Information Updated",
            message: result.data.data.message,
            type: "success",
          });
        })
        .then((error) => {
          console.log(error);
        });
    },
    changePassword() {
      this.dataPass.user = this.data.user.email;
      console.log(this.dataPass);
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
        .then((error) => {
          console.log(error);
        });
    },
    getUser() {
      axios
        .get("/user/me", localStorage.getItem("token"))
        .then((result) => {
          this.data.user = result.data.data;
        })
        .catch((error) => {
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
  async mounted() {
    this.getUser();
    this.getAllInterests();
    this.getAllPhoneCodes();
  },
};
