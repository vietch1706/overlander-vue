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
          this.$store.dispatch("user", this.data.user);
          this.data.user.interests = this.data.user.interests.toString();
          axios
            .post("/user/register", this.data.user)
            .then(() => {
              this.error = false;
              console.log("success");
              console.log(this.data.message);
              this.data.user.password = "";
              this.postSendCode();
            })
            .catch((error) => {
              console.log("error!");
              if (
                error.response.data.message.search("email") > 0 &&
                error.response.data.message.search("phone") < 0
              ) {
                this.error_message.email = error.response.data.message;
                this.error = true;
              } else if (
                error.response.data.message.search("phone") > 0 &&
                error.response.data.message.search("email") < 0
              ) {
                this.error_message.phone = error.response.data.message;
                this.error = true;
              } else {
                this.error_message.phone =
                  error.response.data.message.split("|")[0];
                this.error_message.email =
                  error.response.data.message.split("|")[1];
                this.error = true;
              }
              this.$notify.error({
                title: "Error",
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
    postSendCode() {
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
            params: {
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
    // getAllDataUser() {
    //   if (this.$store.state.user !== null) {
    //     this.data.user = this.$store.getters.getUser;
    //   }
    // },
  },
  async mounted() {
    await this.getAllPhoneCodes();
    await this.getAllInterests();
    // await this.getAllDataUser();
  },
};
