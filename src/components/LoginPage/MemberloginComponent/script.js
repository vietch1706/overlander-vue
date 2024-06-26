import axios from "axios";
export default {
  data() {
    return {
      url: "http://anywhere.com",
      data: {
        user: {
          member_no: "",
          password: "",
        },
      },
      rules: {
        password: [
          {
            required: true,
            message: "Please input password",
            trigger: "blur",
          },
        ],
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
            .post("/users/user/login", this.data.user)
            .then((result) => {
              console.log(result);
              console.log("success");
              this.$notify({
                title: "Login Success",
                message: result.data.message,
                type: "success",
              });
              this.resetForm(formName);
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
    changeLoginMethod() {
      this.$parent.changeLoginMethod();
    },
  },
};
