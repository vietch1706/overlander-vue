<template>
  <div class="otp-container">
    <div class="otp-item left">
      <div class="otp-img">
        <img src="@/assets/ForgetComponent/side-image.png" alt="" />
      </div>
    </div>
    <div class="otp-item right">
      <div class="text-field">
        <div class="top-text">
          <div class="head-text">
            <p>Verify Your Email Address</p>
          </div>
          <div class="top-img">
            <img src="@/assets/OtpComponent/image 23.png" alt="" />
          </div>
        </div>
        <div class="sub-text">
          <p>
            Please enter the OTP in the verification Email <br />
            we have sent to
            <span> {{ this.data.user.email }}</span> <br />
          </p>
          <p class="back-page" @click="backPage($route.query.previous)">
            Re-enter your email address.
          </p>
        </div>
      </div>
      <div class="otp-field">
        <v-otp-input
          v-model="data.user.code"
          variant="underlined"
        ></v-otp-input>
      </div>
      <el-button
        :disabled="data.user.code.length < 6"
        type="button"
        @click="
          started = !started;
          countdown();
          submitUser();
        "
        >Next</el-button
      >
      <template label="scope">
        <label class="overwrite-label-note">
          Didn’t get the email?
          <router-link to="" v-if="available">
            Send Again ({{ data.timerCount }})
          </router-link>
          <router-link to="/terms-and-conditions" v-if="!available">
            Send Again ({{ data.timerCount }})
          </router-link>
        </label>
      </template>
      <div class="bottom-container">
        <div class="bottom-btn">
          <router-link to="/terms-and-conditions">
            Terms & Conditions</router-link
          ><router-link to="privacy-policy"> Policy Privacy </router-link
          ><router-link to="/disclaimer"> Disclaimer </router-link>
        </div>
        <p>© 2021 Overlander All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      available: true,
      loading: false,
      started: null,
      data: {
        user: {
          email: "",
          code: "",
        },
        timerCount: 60,
      },
      timeout: null,
    };
  },
  methods: {
    submitUser() {
      axios
        .post("/users/user/verify-code", {
          email: this.data.user.email,
          code: this.data.user.code,
        })
        .then((result) => {
          console.log("success");
          this.$notify({
            title: "Success",
            message: result.data.message,
            type: "success",
          });
          if (this.$route.query.current === "existing") {
            console.log("hehe" + this.$store.state.resetpassword);
            this.$router.push({
              path: "exist-member/step-2",
              params: {
                email: this.data.user.answer,
                previous: this.$route.params.previous,
                method: "email",
                previousPage: "otpPage",
              },
            });
          }
          this.pushSuccessPage(this.$route.query.previous);
        })
        .catch((error) => {
          console.log("error!");
          this.$notify.error({
            title: "Error",
          });
          console.log(error);
        });
    },
    getEmailAddress() {
      console.log("hehe" + this.$store.state.resetpassword.answer);
      if (this.$route.query.current === "existing") {
        this.data.user.email = this.$store.state.resetpassword.answer;
      } else {
        this.data.user.email = this.$store.state.user.email;
      }
    },
    countdown() {
      if (this.started) {
        if (this.data.timerCount != 0) {
          this.timeout = setTimeout(() => {
            this.data.timerCount -= 1;
            this.countdown();
          }, 1000);
        } else {
          this.started = false;
          this.available = !this.available;
          clearTimeout(this.data.timerCount);
        }
      }
    },
    pushSuccessPage(previousPage) {
      if (previousPage === "forget") {
        this.$router.push({
          path: `/new-password`,
        });
      } else if (previousPage === "register") {
        this.$router.push({
          name: "successPage",
          params: {
            title: "Account Created",
            greeting: "Welcome abroad! ",
            note: "Hope you enjoy your experience in Overlander!",
            button: "Go to Homepage",
          },
        });
      }
    },
    backPage(previousPage) {
      console.log(previousPage);
      if (previousPage === "forget") {
        this.$router.push({
          path: `/reset-password`,
        });
      } else if (previousPage === "register") {
        this.$router.push({
          path: `/register`,
        });
      } else if (previousPage === "existMemberPage")
        this.$router.push({
          name: "existMemberPage",
        });
    },
  },
  async mounted() {
    this.getEmailAddress();
    this.countdown();
  },
};
</script>
<style lang="scss" scoped>
.otp-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  .left {
    flex-basis: 40%;
  }
  .right {
    flex-basis: 60%;
    padding: 20px 100px 20px 130px;
  }
  .otp-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .otp-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .text-field {
    .top-text {
      display: flex;
      padding: 0 3.5rem;
      .head-text {
        color: #0b1d35;
        font-weight: 800;
        font-size: 30px;
        p {
          background-image: linear-gradient(#78c147 0 0);
          background-position: bottom left;
          background-size: 25% 5px;
          background-repeat: no-repeat;
          padding-bottom: 5px;
        }
      }
      .top-img {
        align-self: center;
        padding: 0 0 1rem 1rem;
        width: 20%;
        img {
          width: 25%;
        }
      }
    }
    .sub-text {
      padding: 0 3.5rem;
      font-weight: 400;
      font-size: 16px;
      p {
        span {
          font-weight: 600;
        }
        margin: unset;
      }
      .back-page {
        padding-right: 20px;
        font-weight: 600;
        color: #0b1d35;
        cursor: pointer;
        text-decoration: underline solid #0b1d35 1px;
        margin-bottom: 1rem;
      }
    }
  }

  .otp-field {
    padding: 0 3.5rem;
    width: 432px;
    height: 80px;
  }

  .el-button {
    margin: 0 56px;
    background: #a1d47e;
    width: 75%;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }

  .overwrite-label-note {
    padding: 12px 56px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #6d7786;
    a {
      color: #6d7786;
      font-weight: 600;
    }
  }
  .bottom-container {
    padding: 240px 0 0 3.5rem;
    .bottom-btn {
      a {
        padding-right: 20px;
        font-size: 12px;
        font-weight: 600;
        color: #0b1d35;
        cursor: pointer;
      }
    }
    p {
      font-size: 10px;
      font-weight: 400;
      color: #0b1d35;
    }
  }
}
</style>
