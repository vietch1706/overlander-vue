<template>
  <div class="home-container">
    <logout-home-component v-show="!isHidden" />
    <login-home-component v-bind:user-data="userData" v-show="isHidden" />
    <news-component v-bind:data="data" />
    <div class="app-container" :style="backgroundImageStyle">
      <div class="img-container">
        <img src="@/assets/HomeComponent/Frame2814.png" alt="" />
      </div>
    </div>
    <div class="upgrade-message scroll" v-show="isUpradeable">
      <div class="membership-logo">
        <img :src="upgradeMembership.logo" alt="" />
      </div>
      <div class="upgrade-header">
        <p>Upgrade to {{ upgradeMembership.name }} now</p>
      </div>
      <div class="upgrade-note">
        <p>
          Click upgrade now and update your profile to unlock new personal
          discounts
        </p>
      </div>
      <div class="upgrade-btn">
        <el-button @click="upgradeMembershipTier()"> Upgade Now</el-button>
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
