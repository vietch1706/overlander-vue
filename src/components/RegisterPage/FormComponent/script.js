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
        phoneCode: null,
        phoneNumber: "",
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
          interests: "",
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
        year: [
          {
            min: 4,
            message: "Too short year",
            trigger: "blur",
          },
          {
            max: 4,
            message: "Too long year",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.error_message.phone = "";
      this.error_message.email = "";
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.data.user.phone =
            this.data.phoneCode.toString().replace(/\s/g, "") +
            this.data.phoneNumber.toString();
          axios
            .get("/users/user/check-exist", {
              params: {
                email: this.data.user.email,
                phone: this.data.user.phone,
              },
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
                      .get("/users/user/send-verification-code", {
                        params: {
                          phone: this.data.user.phone,
                        },
                      })
                      .then((result) => {
                        console.log(result);
                        this.$router.push({
                          name: "otpPage",
                          params: {
                            first_name: this.data.user.first_name,
                            last_name: this.data.user.last_name,
                            phone: this.data.user.phone,
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
    getAllDataUser() {
      if (this.data.user["first_name"] === "") {
        this.data.user = this.$route.params;
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
  },
};
