import axios from "axios";
export default {
  data() {
    return {
      error_message: "",
      error: false,
      data: {
        user: {
          email: "",
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
          axios
            .post("/users/user/check-exist", {
              email: this.data.user.email,
            })
            .then((result) => {
              this.showErrorMessage();
              if (result.data !== "") {
                this.error_message = "";
                axios
                  .post("/users/user/send-verification-code", {
                    email: this.data.user.email,
                    method: "Forget Password",
                  })
                  .then((result) => {
                    console.log(result);
                    this.$store.dispatch("user", this.data.user);
                    this.$router.push({
                      path: `/email-verification`,
                      query: {
                        previous: "forget",
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
                this.error_message = "The Email is not available";
              }
            })
            .catch((error) => {
              console.log("error!");
              this.$notify.error({
                title: "Error",
                message: "hehe",
                type: "error",
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
  },
};
