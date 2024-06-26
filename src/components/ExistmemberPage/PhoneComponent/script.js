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
        },
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
                  phone: this.data.user.phone,
                  previous: "existMemberPage",
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
    getPhoneNumber() {
      let phoneNumber =
        this.data.phoneCode.toString().replace(/\s/g, "") +
        this.data.phoneNumber.toString();
      return phoneNumber;
    },
    pushToButtonComponent() {
      this.$parent.pushToButtonComponent();
    },
  },
  async mounted() {
    this.getAllPhoneCodes();
    this.$root.$on("ForgetComponent", () => {
      this.getPhoneNumber();
    });
  },
};
