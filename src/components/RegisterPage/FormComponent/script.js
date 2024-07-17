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
        phone: {
          phoneCode: "",
          phoneNumber: "",
        },
        interests: [],
        image: "",
        user: {
          first_name: "",
          last_name: "",
          password: "",
          phone: "",
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
          console.log(this.data.phone);
          this.data.user.phone =
            this.data.phone.phoneCode.toString() +
            this.data.phone.phoneNumber.toString();
          console.log(this.data.user);
          axios
            .post("/users/user/check-exist", {
              email: this.data.user.email,
              phone: this.data.user.phone,
            })
            .then((result) => {
              this.showErrorMessage();
              if (result.data !== "") {
                this.error_message.phone = result.data.phone;
                this.error_message.email = result.data.email;
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
                message: "hehe",
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
        .post("/users/user/register", this.data.user)
        .then(() => {
          console.log("success");
          this.data.user.password = "";
          this.$store.dispatch("user", this.data.user);
          this.$store.dispatch("phone", this.data.phone);
          this.postSendCode();
        })
        .catch((error) => {
          console.log("error!");
          this.$notify.error({
            title: "Error",
          });
          console.log(error);
        });
    },
    postSendCode() {
      axios
        .post("/users/user/send-verification-code", {
          email: this.data.user.email,
          method: "Register",
        })
        .then((result) => {
          this.$notify({
            title: "Save Success",
            message: result.data.message,
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
    getAllPhoneCodes() {
      axios
        .get("general/phonecode/get")
        .then((result) => {
          this.data.country = result.data;
          for (let keys in result.data) {
            this.data.country[keys]["code"] = "+" + result.data[keys]["code"];
            this.data.country[keys]["image"] =
              "fi fi-" + result.data[keys]["image"];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAllInterests() {
      axios
        .get("general/interests/get")
        .then((result) => {
          this.data.interests = result.data;
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
