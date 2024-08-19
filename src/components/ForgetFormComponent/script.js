export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    verify: {
      type: Function,
      default: () => {},
    },
    resetPassword: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          if (!this.data.form.isHidden) {
            this.verify();
          } else {
            this.resetPassword();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showErrorMessage() {
      if (this.data.error_message === "") {
        this.error = false;
      }
      if (this.data.error_message !== "") {
        this.error = true;
      }
    },
  },
  async mounted() {},
};
