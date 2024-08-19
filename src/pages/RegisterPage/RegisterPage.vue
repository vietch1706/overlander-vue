<template>
  <div class="register-container">
    <div class="register-item left">
      <side-component v-bind:data="data" />
    </div>
    <div class="register-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="create-field">
              <p>Create a New Account</p>
            </div>
            <div class="top-img">
              <img src="@/assets/RegisterComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="login-field">
            <p>
              New an account or
              <router-link :to="{ name: `loginPage` }"> Login</router-link>
            </p>
          </div>
        </div>
        <form-component v-bind:data="data" v-bind:register="register" />
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
import Script from "./script";
export default Script;
</script>
<style lang="scss" scoped>
@import url("./style.css");
</style>
