export default {
  props: {
    data: {
      type: Object,
      required: true,
      user: {
        type: Object,
        required: true,
      },
    },
    step1: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      rules: {
        // email: [
        //   {
        //     required: true,
        //     message: "Please input your email",
        //     type: "email",
        //     trigger: "blur",
        //   },
        // ],
      },
      user: {
        phone_area_code: "",
        phone: "",
        email: "",
        member: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.data.state.phone) {
            this.data.user.answer1 =
              this.user.phone_area_code.replace("+", "") + this.user.phone;
          } else if (this.data.state.email) {
            this.data.user.answer1 = this.user.email;
          } else {
            this.data.user.answer1 = this.user.member;
          }
          this.data.user.question1 = this.$route.query.state;
          console.log("submit!");
          this.step1();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
