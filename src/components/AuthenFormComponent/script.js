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
      user: {
        phone_area_code: "",
        phone: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.data.state.email) {
            this.data.user.answer1 =
              this.user.phone_area_code + this.user.phone;
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
