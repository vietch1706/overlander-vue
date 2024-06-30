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
        phoneCode: "",
        phoneNumber: "",
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
          this.data.user.phone =
            this.data.phoneCode.toString().replace(/\s/g, "") +
            this.data.phoneNumber.toString();
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
                axios
                  .post("/users/user/register", this.data.user)
                  .then((result) => {
                    console.log("success");
                    this.$notify({
                      title: "Save Success",
                      message: result.data.message,
                      type: "success",
                    });
                    axios
                      .post("/users/user/send-verification-code", {
                        email: this.data.user.email,
                        method: "Register",
                      })
                      .then((result) => {
                        console.log(result);
                        this.$router.push({
                          name: "otpPage",
                          params: {
                            first_name: this.data.user.first_name,
                            last_name: this.data.user.last_name,
                            phoneCode: this.data.phoneCode,
                            phoneNumber: this.data.phoneNumber,
                            country: this.data.user.country,
                            email: this.data.user.email,
                            previous: "registerPage",
                          },
                        });
                      })
                      .catch((error) => {
                        this.$notify.error({
                          title: "Error",
                        });
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    console.log("error!");
                    this.$notify.error({
                      title: "Error",
                    });
                    console.log(error);
                  });
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
    getAllPhoneCodes() {
      axios
        .get("general/phonecode/get")
        .then((result) => {
          console.log(result.data);
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
      if (this.data.user["first_name"] === "") {
        this.data.user.first_name = this.$route.params.first_name;
        this.data.user.last_name = this.$route.params.last_name;
        this.data.phoneCode = this.$route.params.phoneCode;
        this.data.phoneNumber = this.$route.params.phoneNumber;
        this.data.user.country = this.$route.params.country;
        this.data.user.email = this.$route.params.email;
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
    this.getAllPhoneCodes();
    this.getAllDataUser();
    this.showErrorMessage();
    this.getAllInterests();
  },
};
