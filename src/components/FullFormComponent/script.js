export default {
  props: {
    data: {
      type: Object,
      requried: true,
    },
    axiosFunction: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    var validatePassword = (rule, value, callback) => {
      this.data.form.error = false;
      if (!value) {
        return callback(new Error("Password is required"));
      }
      const pattern =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!pattern.test(value)) {
        this.data.form.error = true;
        return callback();
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
        phone_area_code: [
          {
            required: true,
            message: "Please select country code",
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
          this.axiosFunction();
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
