import axios from "axios";
export default {
  data() {
    return {
      data: {
        country: [],
        phoneCode: null,
        phoneNumber: "",
        user: {
          phone: "",
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
          this.data.user.phone =
            this.data.phoneCode.toString().replace(/\s/g, "") +
            this.data.phoneNumber.toString();
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
    changeLoginMethod() {
      this.$parent.changeLoginMethod();
    },
  },
  async mounted() {
    this.getAllPhoneCodes();
  },
};
