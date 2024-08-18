import axios from "axios";
export default {
  data() {
    return {
      error: false,
      data: {
        error_message: "",
        user: {
          email: "",
          new_password: "",
          confirm_password: "",
        },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          if (this.data.user.new_password !== this.data.user.confirm_password) {
            this.data.error_message = "Password do not match";
          } else {
            this.data.error_message = "";
            axios
              .post("users/user/reset-password", {
                new_password: this.data.user.new_password,
                confirm_password: this.data.user.confirm_password,
                email: this.data.user.email,
              })
              .then((response) => {
                console.log();
                console.log(response);
                console.log("success");
                this.$notify({
                  title: "Save Success",
                  type: "success",
                });
                this.$router.push({
                  name: "successPage",
                  params: {
                    title: "Password Changed",
                    greetings: "Welcome back!",
                    note: "You have changed the password successfully!",
                    button: "Go to Login",
                  },
                });
                this.resetForm(formName);
              })
              .catch((error) => {
                console.log(error);
                this.$notify({
                  title: "Error",
                  type: "error",
                });
              });
          }
          this.showErrorMessage();
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
      if (this.data.error_message === "") {
        this.error = false;
      }
      if (this.data.error_message !== "") {
        this.error = true;
      }
    },
    getUserEmailAddress() {
      this.data.user.email = this.$route.params.email;
    },
  },
  async mounted() {
    this.getUserEmailAddress();
  },
};
