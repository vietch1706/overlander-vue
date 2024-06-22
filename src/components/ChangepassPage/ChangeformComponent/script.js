import axios from "axios";
export default {
  data() {
    return {
      error: false,
      data: {
        error_message: "",
        user: {
          phone: "",
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
              .get("users/user/change-password", {
                params: {
                  new_password: this.data.user.new_password,
                  confirm_password: this.data.user.confirm_password,
                  phone: this.data.user.phone,
                },
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
                    phone: this.data.user.phone,
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
          console.log(this.data.user);
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
    showErrorMessage() {
      console.log(this.data.error_message);
      if (this.data.error_message === "") {
        this.error = false;
      }
      if (this.data.error_message !== "") {
        this.error = true;
      }
    },
    getUserPhoneNumber() {
      this.data.user.phone = this.$route.params.phone;
    },
  },
  async mounted() {
    this.getAllPhoneCodes();
    this.showErrorMessage();
    this.getUserPhoneNumber();
  },
};
