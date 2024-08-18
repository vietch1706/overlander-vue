<template>
  <div class="authenone-container">
    <div class="authenone-item left">
      <side-component v-bind:data="data" />
    </div>
    <div class="authenone-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="transfer-field">
              <p>2-step Authentication (1/2)</p>
            </div>
            <div class="top-img">
              <img
                src="@/assets/ExistmemberComponent/image 23 (1).png"
                alt=""
              />
            </div>
          </div>
          <div class="note-text">
            <p>Please verify your identity with email address</p>
          </div>
        </div>
      </div>
      <form-component v-bind:data="data" v-bind:step1="step1" />
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
