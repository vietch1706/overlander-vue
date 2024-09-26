<template>
  <div class="profile-container" :style="backgroundImageStyle">
    <el-breadcrumb separator-class="el-icon-right">
      <el-breadcrumb-item to="/">
        <span class="el-icon-s-home overwrite-home-span">
          Home</span
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item
        ><span class="overwrite-current-span"
          >My Profile</span
        ></el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="header-field">
      <div class="text-field">
        <p>My Profile</p>
      </div>
      <div class="img-field">
        <img src="@/assets/image 23 (1).png" alt="" />
      </div>
    </div>
    <div class="my-profile-container" :style="profileImageStyle">
      <div class="my-profile-item left">
        <div class="img-container">
          <img :src="data.user.membership_tier.logo" alt="" />
        </div>
        <div class="profile-information">
          <h2>{{ data.user.first_name }} , {{ data.user.last_name }}</h2>
          <p class="mail-text">{{ data.user.email }}</p>
          <div class="membership-text">
            <p class="text">
              {{ data.user.membership_tier.name }} &nbsp; &nbsp;
            </p>
            <p class="user-memberno">ID# {{ data.user.member_no }}</p>
            <p class="expired-date">
              &nbsp;&nbsp;|&nbsp; Tier expire at {{ data.user.validity_date }}
            </p>
          </div>
        </div>
      </div>
      <div class="my-profile-item right">
        <div class="img-container">
          <img src="@/assets/Frame 1268.png" alt="" />
        </div>
      </div>
    </div>
    <div class="profile-item-container">
      <div class="profile-item left">
        <div class="header-text">
          <p>Basic Information</p>
        </div>
        <form-component
          v-bind:data="data"
          v-bind:update-information="updateInformation"
        />
      </div>
      <div class="profile-item right">
        <div class="header-text">
          <p>Change Password</p>
        </div>
        <pass-form-component
          v-bind:data-pass="dataPass"
          v-bind:change-password="changePassword"
        />
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
