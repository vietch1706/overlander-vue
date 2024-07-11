import axios from "axios";
export default {
  data() {
    return {
      error: false,
      error_message: {
        member_no: "",
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
              member_no: this.data.user.method,
            })
            .then((result) => {
              this.showErrorMessage();
              console.log(result);
              if (result.data !== "") {
                this.error_message.member_no = result.data.member_no;
                console.log(result.data.member_no);
              } else {
                this.error_message.member_no = "";
                this.data.user.previous =
                  this.$parent.questions.MEMBER_QUESTION;
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
