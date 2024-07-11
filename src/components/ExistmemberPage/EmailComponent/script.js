import axios from "axios";
export default {
  data() {
    return {
      error: false,
      error_message: {
        email: "",
      },
      data: {
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
          axios
            .post("/users/user/check-exist", {
              email: this.data.user.method,
            })
            .then((result) => {
              this.showErrorMessage();
              console.log(result);
              if (result.data === "") {
                this.error = true;
                this.error_message.email = "The Email is not exists";
              } else {
                this.error_message.email = "";
                this.data.user.previous = this.$parent.questions.EMAIL_QUESTION;
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
    showErrorMessage() {
      if (this.error_message.email !== "") {
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
    this.showErrorMessage();
  },
};
