<template>
  <div class="image-wrapper">
    <div :style="data.backgroundImageStyle" class="side-image">
      <p class="head-text" :hidden="data.hideAll">
        Join <br />
        Overlander
      </p>
      <div :hidden="data.isHidden">
        <p class="sub-text">Already Existing Member?</p>
        <p class="description-text">
          Already a member? Transfer your point and account <br />
          information now
        </p>
        <el-button>
          <router-link :to="{ name: 'existsMemberPage' }"
            >Transfer Extisting Account</router-link
          ></el-button
        >
      </div>
      <div :hidden="!data.isHidden">
        <p class="sub-text">Need Help?</p>
        <p class="description-text">
          Contact our customer service to help you transfer the <br />account.
          <span>Call us at +852 2410 1952</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Script from "./script.js";
export default Script;
</script>
<style lang="scss" scoped>
@import url("./styles.css");
</style>
