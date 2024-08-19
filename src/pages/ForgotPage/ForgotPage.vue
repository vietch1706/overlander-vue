<template>
  <div class="forget-container">
    <div class="forget-item left">
      <div class="forget-img">
        <side-component v-bind:data="data" />
      </div>
    </div>
    <div class="forget-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="head-text">
              <p>Forget Password</p>
            </div>
            <div class="top-img">
              <img src="@/assets/ForgetComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="sub-field">
            <p>Please enter your email address to reset password</p>
          </div>
        </div>
        <form-component
          v-bind:data="data"
          v-bind:verify="verify"
          v-bind:reset-password="resetPassword"
        />
      </div>
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
