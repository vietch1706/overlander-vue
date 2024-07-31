import axios from "axios";
export default {
  data() {
    return {
      error: false,
      checkedNews: false,
      checkedPromotion: false,
      gender: "",
      verify: false,
      error_message: {
        email: "",
        phone: "",
      },
      data: {
        country: [],
        interests: [],
        choose_interest: [],
        image: "",
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
      rules: {
        first_name: [
          {
            required: true,
            message: "Please input first name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Too short first name",
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: "Please input last name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Too short last name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input password",
            trigger: "blur",
          },
        ],
        country: [
          {
            required: true,
            message: "Please select country",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input email",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.error_message.phone = "";
          this.error_message.email = "";
          this.data.user.password_confirmation = this.data.user.password;
          this.data.user.phone_area_code =
            this.data.user.phone_area_code.replace("+", "");
          this.getInterestsId();
          console.log(this.data.user);
          axios
            .post("/user/check-exist", {
              email: this.data.user.email,
              phone: this.data.user.phone_area_code + this.data.user.phone,
            })
            .then((result) => {
              this.showErrorMessage();
              if (result.data.data !== undefined) {
                this.error_message.phone = result.data.data.phone;
                this.error_message.email = result.data.data.email;
              } else {
                this.error_message.phone = "";
                this.error_message.email = "";
                this.postRegister();
              }
            })
            .catch((error) => {
              console.log("error!");
              this.$notify.error({
                title: "Error",
                message: "Exist information!",
              });
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    postRegister() {
      axios
        .post("/user/register", this.data.user)
        .then(() => {
          console.log("success");
          this.data.user.password = "";
          this.$store.dispatch("user", this.data.user);
          this.postSendCode();
        })
        .catch((error) => {
          console.log("error!");
          this.$notify.error({
            title: "Error",
            message: "Registration failed! Please try again.",
          });
          console.log(error);
        });
    },
    postSendCode() {
      axios
        .post("/user/send-verification-codes", {
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
            path: `/email-verification`,
            query: {
              previous: `register`,
            },
          });
        })
        .catch((error) => {
          this.$notify.error({
            title: "Error",
          });
          console.log(error);
        });
    },
    getInterestsId() {
      for (const interest in this.data.choose_interests) {
        for (const interestId in this.data.interests) {
          if (
            this.data.choose_interests[interest] ===
            this.data.interests[interestId].name
          ) {
            this.data.choose_interests[interest] =
              this.data.interests[interestId].id;
          }
        }
      }
      this.data.user.interests = this.data.choose_interests.toString();
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
    getAllDataUser() {
      if (this.$store.state.user !== null) {
        this.data.user = this.$store.state.user;
        this.data.phone = this.$store.state.phone;
      }
    },
    showErrorMessage() {
      if (this.error_message.phone === "" && this.error_message.mail === "") {
        this.error = false;
      }
      if (this.error_message.phone !== "" || this.error_message.mail !== "") {
        this.error = true;
      }
    },
  },
  async mounted() {
    await this.getAllPhoneCodes();
    await this.getAllInterests();
    await this.getAllDataUser();
    this.showErrorMessage();
  },
};
