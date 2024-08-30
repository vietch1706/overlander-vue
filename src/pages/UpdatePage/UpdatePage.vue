<template>
  <div class="update-container">
    <div class="update-item left">
      <side-component v-bind:data="data" />
    </div>
    <div class="update-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="update-field">
              <p>Update Account</p>
            </div>
            <div class="top-img">
              <img src="@/assets/RegisterComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="bottom-text">
            <p>Update your existing account profile</p>
          </div>
        </div>
        <form-component
          v-bind:data="data"
          v-bind:axios-function="axiosFunction"
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
import Script from "./script";
export default Script;
</script>
<style lang="scss" scoped>
@import url("./style.css");
</style>
