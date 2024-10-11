export default {
  props: {
    data: {
      type: Object,
      requried: true,
    },
    updateInformation: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      rules: {
        district: [
          {
            required: true,
            message: "Please select district to receive booklet",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "Please fill in detailed address to receive booklet",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    isDisabled() {
      if (this.data.isFilled.birthdate) return "disabled-field";
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateInformation();
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
