<template>
  <div class="success-container">
    <div class="success-item right">
      <div class="success-image">
        <side-component v-bind:data="data" />
      </div>
    </div>
    <div class="success-item left">
      <div class="profile-image">
        <img src="@/assets/SuccessComponent/Frame 1321.png" alt="" />
      </div>
      <div class="pass-success">
        <div class="head-text">
          <p>{{ data.success.title }}</p>
          <div class="border-bottom"></div>
          <div class="text-img">
            <img src="@/assets/SuccessComponent/image 23.png" alt="" />
          </div>
        </div>
        <div class="sub-text">
          <p>{{ data.success.welcome }}</p>
          <p class="note-text">{{ data.success.message }}</p>
        </div>
        <el-button @click="changePage()">{{ data.success.button }}</el-button>
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
