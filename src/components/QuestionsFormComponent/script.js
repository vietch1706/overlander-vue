export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    step2: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      answerTitle: "",
      user: {
        phone_area_code: "",
        phone: "",
        year: "",
        month: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.data.phoneField) {
            this.data.user.answer2 =
              this.user.phone_area_code + this.user.phone;
          } else if (!this.data.datePicker) {
            this.data.user.answer2 = this.user.year + " " + this.user.month;
          }
          this.step2();
          console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showAnswerField() {
      switch (this.data.user.question2) {
        case this.data.questions.BIRTH_QUESTION:
          this.answerTitle = "Birth Year and Month";
          this.data.datePicker = false;
          this.data.textField = true;
          this.data.phoneField = true;
          break;
        case this.data.questions.EMAIL_QUESTION:
          this.answerTitle = "Email Address";
          this.data.phoneField = true;
          this.data.datePicker = true;
          this.data.textField = false;
          break;
        case this.data.questions.MEMBERSHIP_QUESTION:
          this.answerTitle = "Membership Joint Date";
          this.data.datePicker = false;
          this.data.textField = true;
          this.data.phoneField = true;
          break;
        case this.data.questions.PURCHASE_QUESTION:
          this.answerTitle = "Last Purchase Date";
          this.data.datePicker = false;
          this.data.textField = true;
          this.data.phoneField = true;
          break;
        case this.data.questions.MEMBER_QUESTION:
          this.answerTitle = "Member No.";
          this.data.phoneField = true;
          this.data.datePicker = true;
          this.data.textField = false;
          break;
        case this.data.questions.CODE_QUESTION:
          this.answerTitle = "Access Code";
          this.data.phoneField = true;
          this.data.datePicker = true;
          this.data.textField = false;
          break;
        case this.data.questions.PHONE_QUESTION:
          this.answerTitle = "Phone No.";
          this.data.phoneField = false;
          this.data.textField = true;
          this.data.datePicker = true;
          break;
        default:
          this.data.phoneField = true;
          this.data.textField = true;
          this.data.datePicker = true;
          break;
      }
    },
  },
};
