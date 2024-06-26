import axios from "axios";
export default {
  data() {
    return {
      data: {
        user: {
          member_no: "",
        },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          console.log(this.data.user);
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
                  phone: this.data.user,
                },
              });
            })
            .catch((error) => {
              console.log("error!");
              this.$notify.error({
                title: "Error",
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

    pushToButtonComponent() {
      this.$parent.pushToButtonComponent();
    },
  },
  async mounted() {},
};
