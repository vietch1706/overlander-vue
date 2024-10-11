<template>
  <div class="loginhome-container" :style="backgroundStyleImage">
    <div class="loginhome-item left">
      <div class="welcome-container">
        <div class="text-container">
          <p>Hello&nbsp;</p>
        </div>
        <div class="img-container">
          <img src="@/assets/HomeComponent/image 25.png" alt="Logo" />
        </div>
      </div>
      <div class="customer-name">
        <p>{{ userData.user.first_name }} , {{ userData.user.last_name }}</p>
      </div>
    </div>
    <div class="loginhome-item right">
      <div class="right-item-container" :style="rightImageStyle">
        <div class="right-item-flex">
          <div class="right-item left">
            <div class="membership-container">
              <div class="membership-img">
                <img :src="userData.user.membership_tier.logo" alt="" />
              </div>
              <div class="membership-tier">
                <div class="membership-type">
                  <p>
                    {{ userData.user.membership_tier.name }} ID#
                    {{ userData.user.member_no }}
                  </p>
                </div>
                <div class="membership-expired">
                  <p>Tier expire at {{ userData.user.validity_date }}</p>
                </div>
              </div>
            </div>
            <div class="current-point" :style="userData.fontStyleColor">
              <p>{{ userData.user.points }}pt.</p>
            </div>
          </div>
          <div class="right-item right">
            <div class="qr-container" :style="userData.backgroundStyleColor">
              <img src="@/assets/HomeComponent/Frame (1).png" alt="" />
            </div>
            <div class="point-required">
              <p>
                Point to upgrade <br />
                <span> {{ userData.user.upgrade_point }}pt.</span>
              </p>
            </div>
          </div>
        </div>
        <div class="process-bar">
          <el-progress
            :text-inside="true"
            :stroke-width="35"
            :percentage="userData.processBar"
            :show-text="false"
            stroke-linecap="butt"
            color="#78C147"
          ></el-progress>
          <div class="process-bar-text">
            <div class="process-item left">
              <p>Last updated at Today</p>
            </div>
            <div class="process-item right">
              <p>
                <span
                  >{{ userData.user.points }}/
                  {{ userData.user.upgrade_point }}</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-btn">
        <div class="container">
          <div class="row">
            <router-link :to="{ name: 'pointPage' }" class="col">
              <div class="img-container">
                <img
                  src="@/assets/HomeComponent/point-history.png"
                  alt="Logo"
                />
              </div>
              <div class="text-container">
                <p>Point History</p>
              </div>
            </router-link>
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
