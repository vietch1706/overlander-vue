import axios from "axios";
export default {
  data() {
    return {
      url: "https://anywhere.com",
      checkedNews: false,
      checkedPromotion: false,
      gender: "",
      data: {
        country: [],
        phoneCode: null,
        phoneNumber: "",
        user: {
          first_name: "",
          last_name: "",
          password: "",
          phone: "",
          year: "",
          month: "",
          country: "",
          email: "",
          gender: "",
          interests: "",
        },
      },
      rules: {
        first_name: [
          {
            required: true,
            message: "Please input first name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Too short first name",
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: "Please input last name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Too short last name",
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
        country: [
          {
            required: true,
            message: "Please select country",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input email",
            trigger: "blur",
          },
        ],
        year: [
          {
            min: 4,
            message: "Too short year",
            trigger: "blur",
          },
          {
            max: 4,
            message: "Too long year",
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
            .post("/users/user/register", this.data.user)
            .then((result) => {
              console.log(result);
              console.log("success");
              this.$notify({
                title: "Save Success",
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
  },
  async mounted() {
    this.getAllPhoneCodes();
  },
};
