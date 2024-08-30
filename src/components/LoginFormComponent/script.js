export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    login: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      method: false,
      isHidden: false,
      rules: {
        user: [
          {
            message: "Please input user",
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
          this.login();
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
      this.method = !this.method;
      this.isHidden = !this.isHidden;
    },
  },
};
