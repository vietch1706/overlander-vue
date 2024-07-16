import axios from "axios";
export default {
  data() {
    return {
      data: {
        questions: [],
        phoneCode: null,
        phoneNumber: "",
        previousQuestion: "",
        user: {
          question: "",
          answer: "",
          method: "",
        },
        date: {
          birth_year: "",
          birth_month: "",
          joint_year: "",
          joint_month: "",
          purchase_year: "",
          purchase_month: "",
        },
      },
      questions: {
        birthdate: false,
        email: false,
        membership: false,
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
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
    getAllVerificationQuestions() {
      if (this.$route.params.previousPage === "otpPage") {
        this.data.previousQuestion = this.$route.params.previous;
        this.data.user.method = this.$route.params.method;
        this.data.user.answer = this.$route.params.answer;
      } else {
        this.data.previousQuestion = this.$parent.data.previous;
      }
      console.log(this.data.previousQuestion);
      axios
        .get("/users/existing-user/get-questions", {
          params: {
            previous: this.data.previousQuestion,
          },
        })
        .then((result) => {
          this.data.questions = result.data;
          console.log(this.$parent.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkQuestions() {
      switch (this.data.user.question) {
        case this.data.questions[this.$parent.questions.BIRTH_QUESTION]:
        case this.data.questions[this.$parent.questions.PURCHASE_QUESTION]:
          this.questions.birthdate = true;
          this.questions.email = false;
          this.questions.membership = false;
          this.questions.purchase = false;
          break;
        case this.data.questions[this.$parent.questions.EMAIL_QUESTION]:
          this.questions.email = true;
          this.questions.birthdate = false;
          this.questions.membership = false;
          this.questions.purchase = false;
          break;
        case this.data.questions[this.$parent.questions.MEMBERSHIP_QUESTION]:
          this.questions.membership = true;
          this.questions.email = false;
          this.questions.birthdate = false;
          this.questions.purchase = false;
          break;
        // case this.data.questions[this.$parent.questions.PURCHASE_QUESTION]:
        //   this.questions.purchase = true;
        //   this.questions.email = false;
        //   this.questions.birthdate = false;
        //   this.questions.membership = false;
        //   break;
      }
    },
  },
  async mounted() {
    this.getAllVerificationQuestions();
  },
};
