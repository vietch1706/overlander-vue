<template>
  <div class="authentwo-container">
    <div class="authentwo-item left">
      <side-component v-bind:data="data" />
    </div>
    <div class="authentwo-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="transfer-field">
              <p>2-step Authentication (2/2)</p>
            </div>
            <div class="top-img">
              <img src="@/assets/image 23 (1).png" alt="" />
            </div>
          </div>
          <div class="note-text">
            <p>Please verify your identity with email address</p>
          </div>
        </div>
        <form-component v-bind:data="data" v-bind:step2="step2" />
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
