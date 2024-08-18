<template>
  <div class="otp-container">
    <div class="otp-item left">
      <div class="otp-img">
        <side-component v-bind:data="data" />
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
            <span> {{ this.data.users.user }}</span> <br />
          </p>
          <router-link
            :to="{
              name: previousPage,
              query: {
                state: 'email',
              },
            }"
          >
            Re-enter your email address.
          </router-link>
        </div>
      </div>
      <div class="otp-field">
        <v-otp-input
          v-model="data.users.code"
          variant="underlined"
        ></v-otp-input>
      </div>
      <el-button
        :disabled="data.users.code.length < 6"
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
          <a @click="sendCode()" v-if="!available">
            Send Again ({{ data.timerCount }})
          </a>
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
import Script from "./script.js";
export default Script;
</script>
<style lang="scss" scoped>
@import "./style.css";
</style>
