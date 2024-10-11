<template>
  <div class="logouthome-container">
    <div class="logouthome-item left" :style="leftImageStyle"></div>
    <div class="logouthome-item right">
      <div class="header-container" :style="rightImageStyle">
        <div class="welcome-container">
          <div class="text-container pe-2">
            <p>Hello Guest, Welcome to</p>
          </div>
          <div class="img-container">
            <img src="@/assets/HomeComponent/image 25.png" alt="Logo" />
          </div>
        </div>
        <div class="header-wrapper">
          <div class="header-text">
            <p>Overlander Reward Program</p>
          </div>
          <div class="header-note pt-5 pb-3">
            <p>
              Please login or sign up to view member information, discounts, and
              your personal rewards
            </p>
          </div>
          <div class="header-btn">
            <div class="row py-2">
              <router-link :to="{ name: 'loginPage' }"
                ><el-button>Login</el-button></router-link
              >
            </div>
            <div class="row py-2">
              <router-link :to="{ name: 'registerPage' }"
                >Create New Account</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-btn">
        <div class="container">
          <div class="row">
            <router-link :to="{ name: 'homePage' }" class="col">
              <div class="img-container">
                <img src="@/assets/HomeComponent/discount.png" alt="Logo" />
              </div>
              <div class="text-container">
                <p>Member Discount</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'pointRulesPage' }" class="col">
              <div class="img-container">
                <img src="@/assets/HomeComponent/promote.png" alt="Logo" />
              </div>
              <div class="text-container">
                <p>Point Rules</p>
              </div>
            </router-link>
          </div>
        </div>
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
