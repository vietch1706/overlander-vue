import axios from "axios";
export default {
  data() {
    return {
      data: {
        country: [],
        user: {
          email: "",
          password: "",
        },
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
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
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
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
  async mounted() {},
};
