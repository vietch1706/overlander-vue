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
    var validateUser = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error("Please enter member number or email address")
        );
      }
      callback();
    };
    return {
      method: false,
      isHidden: false,
      rules: {
        email: [
          {
            validator: validateUser,
            trigger: "blur",
          },
        ],
        member_no: [
          {
            validator: validateUser,
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
