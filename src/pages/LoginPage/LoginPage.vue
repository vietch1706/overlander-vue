<template>
  <div class="login-container">
    <div class="login-item left">
      <side-component v-bind:data="data" />
    </div>
    <div class="login-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="login-field">
              <p>Login</p>
            </div>
            <div class="top-img">
              <img src="@/assets/RegisterComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="create-field">
            <p>
              Need a new account?
              <router-link to="/register">
                <a>Create an account</a></router-link
              >
            </p>
          </div>
        </div>
        <login-form-component v-bind:data="data" v-bind:login="login" />
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
