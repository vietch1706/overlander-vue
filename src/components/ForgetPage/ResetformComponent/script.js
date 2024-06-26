import axios from "axios";
export default {
  data() {
    return {
      error_message: "",
      error: false,
      data: {
        country: [],
        phoneCode: null,
        phoneNumber: "",
        user: {
          phone: "",
        },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.error_message = "";
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.data.user.phone =
            this.data.phoneCode.toString().replace(/\s/g, "") +
            this.data.phoneNumber.toString();
          axios
            .get("/users/user/check-exist", {
              params: {
                phone: this.data.user.phone,
              },
            })
            .then((result) => {
              this.showErrorMessage();
              if (result.data !== "") {
                console.log(result.data);
                this.error_message = "";
                axios
                  .get("/users/user/send-verification-code", {
                    params: {
                      phone: this.data.user.phone,
                    },
                  })
                  .then((result) => {
                    console.log(this.data.user);
                    console.log(result);
                    this.$router.push({
                      name: "otpPage",
                      params: {
                        phone: this.data.user.phone,
                        previous: "forgetPage",
                      },
                    });
                  })
                  .catch((error) => {
                    this.$notify.error({
                      title: "Error",
                    });
                    console.log(error);
                  });
              } else {
                this.error_message = "The phone number is not available";
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
          this.data.country = result.data;
          for (let keys in result.data) {
            this.data.country[keys]["phonecode"] =
              "+ " + result.data[keys]["phonecode"];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPhoneNumber() {
      let phoneNumber =
        this.data.phoneCode.toString().replace(/\s/g, "") +
        this.data.phoneNumber.toString();
      return phoneNumber;
    },
    showErrorMessage() {
      if (this.error_message === "") {
        this.error = true;
      }
      if (this.error_message !== "") {
        this.error = false;
      }
    },
  },
  async mounted() {
    this.getAllPhoneCodes();
    this.$root.$on("ForgetComponent", () => {
      this.getPhoneNumber();
    });
  },
};
