import axios from "axios";
export default {
  data() {
    return {
      error: false,
      error_message: {
        phone: "",
      },
      data: {
        country: [],
        phoneCode: null,
        phoneNumber: "",
        user: {
          method: "",
          previous: "",
        },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.data.user.method =
            this.data.phoneCode.toString().replace(/\s/g, "") +
            this.data.phoneNumber.toString();
          console.log(this.data.user);
          axios
            .post("/users/user/check-exist", {
              phone: this.data.user.method,
            })
            .then((result) => {
              console.log(result);
              this.showErrorMessage();
              if (result.data === "") {
                this.error = true;
                this.error_message.phone = "The phone number is not exists";
              } else {
                this.error_message.phone = "";
                this.data.user.previous = this.$parent.questions.PHONE_QUESTION;
                this.pushToQuestionComponent(this.data.user);
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
    showAnswerInput() {},
    showErrorMessage() {
      if (this.error_message.phone !== "") {
        this.error = true;
      } else {
        this.error = false;
      }
    },
    pushToButtonComponent() {
      this.$parent.pushToButtonComponent();
    },
    pushToQuestionComponent(data) {
      this.$parent.pushToQuestionComponent(data);
    },
  },
  async mounted() {
    this.getAllPhoneCodes();
    this.showErrorMessage();
  },
};
