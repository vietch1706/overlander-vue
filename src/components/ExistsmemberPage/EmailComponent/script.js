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
          method: "email",
          answer: "",
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
            .post("/users/existing-user/step-1", {
              method: this.data.user.method,
              answer: this.data.user.answer,
            })
            .then((result) => {
              if (result.data.status === true) {
                this.error = false;
                this.data.user.previous = this.$parent.questions.EMAIL_QUESTION;
                this.$notify({
                  title: "Save Success",
                  message: result.data.message,
                  type: "success",
                });
                console.log(this.data.user);
                this.$store.dispatch("resetpassword", this.data.user);
                this.$router.push({
                  path: `/email-verification`,
                  query: {
                    current: "existing",
                  },
                });
                // this.pushToQuestionComponent(this.data.user.previous);
              } else {
                throw new Error("Server die");
              }
            })
            .catch((error) => {
              this.error = true;
              this.$notify.error({
                title: "Error",
                message: error,
              });
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
    pushToButtonComponent() {
      this.$parent.pushToButtonComponent();
    },
    pushToQuestionComponent(data) {
      this.$parent.pushToQuestionComponent(data);
    },
  },
  async mounted() {},
};
