export default {
  props: {
    data: {
      type: Object,
      requried: true,
    },
    register: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Password is required"));
      }
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!pattern.test(value)) {
        this.isHidden = true;
        return callback(
          new Error("8 - 16 characters with numbers, upper and lower case")
        );
      }
      callback();
    };
    return {
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
        phone: [
          {
            required: true,
            message: "Please input phone number",
            trigger: "blur",
          },
          {
            min: 7,
            message: "Too short for phone number",
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassword,
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
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register();
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
