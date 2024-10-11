export default {
  props: {
    dataPass: {
      type: Object,
      requried: true,
    },
    changePassword: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    // current password != new password
    // current password format
    var validatePasswordConfirmation = (rule, value, callback) => {
      if (value !== this.dataPass.new_password) {
        return callback(new Error("Password do not match"));
      }
      callback();
    };
    var validatePassword = (rule, value, callback) => {
      this.form.error = false;
      const pattern =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!pattern.test(value)) {
        this.form.error = true;
        return callback();
      }
      callback();
    };
    return {
      form: {
        error: false,
      },
      rules: {
        new_password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
        password_confirmation: [
          {
            validator: validatePasswordConfirmation,
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
          this.changePassword();
          this.resetForm(formName);
          // reset form after successful
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
