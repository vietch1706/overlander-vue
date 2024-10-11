<template>
  <div class="pointrules-container" :style="backgroundImageStyle">
    <el-breadcrumb separator-class="el-icon-right">
      <el-breadcrumb-item to="/">
        <span class="el-icon-s-home overwrite-home-span">
          Home</span
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item
        ><span class="overwrite-current-span">
          Point Rules
        </span></el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="pointrules-wrapper">
      <div class="pointrules-item left">
        <div class="header-text">
          <p>Point Rules</p>
        </div>
        <div class="content-text">
          <p>
            Every time you purchase in overlander e-shop or physical store.
            <br />You will receive 1 point, for each purchased HKD $1, and will
            expire<br />
            after 4 years. Reward points can be used to upgrade membership<br />
            tier for more valuable personal discount offer.
          </p>
        </div>
        <div class="view-button">
          <router-link :to="{ name: 'homePage' }"
            >View Discount Details</router-link
          >
        </div>
        <div class="point-tc-header"><p>Points Terms & Condition</p></div>
        <div class="content-text">
          <p>
            Use of the card and/or participation in the program constitutes<br />
            acceptance of all program rules.The card will not be replaced if
            lost<br />
            or stolen. Card must be presented at the time of purchase to earn
            <br />points. <br />
            No point will be issued retroactively. <br />No points will be
            issued in conjunction with Dining-In or any other<br />
            delivery service.<br />
            No points will be issued with any promotions. <br />You will earn
            one point for every dollar spent. Every time you use<br />
            your loyalty card, your receipt will show the points credited to
            your<br />
            account.<br />
            When you obtain enough points to earn a reward, the reward will<br />
            automatically be printed on your receipt. You do not need to<br />
            present a receipt to receive a reward. Rewards are stored by the
            <br />computer system and are automatically updated. <br />Rewards
            are non-transferable, not redeemable for cash.
          </p>
        </div>
      </div>
      <div class="pointrules-item right">
        <div class="membership-container">
          <div class="membership-item left">
            <div class="img-container pt-4">
              <img src="@/assets/PointRulesComponent/Frame 2922.png" alt="" />
            </div>
          </div>
          <div class="membership-item right">
            <div class="container">
              <div
                class="col py-3"
                v-for="(item, index) in membershipTier"
                :key="index"
                :value="item"
              >
                <div class="row pb-4">
                  <div class="membership-type">
                    <p>{{ item.name }}</p>
                  </div>
                  <div class="membership-valid">
                    <p>
                      {{ item.message }}
                      <span class="expired-period">{{ item.period }}</span>
                    </p>
                  </div>
                  <div class="membership-points">
                    <p>{{ item.points_required }}</p>
                  </div>
                </div>
              </div>
            </div>
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
@import "./styles.css";
</style>
