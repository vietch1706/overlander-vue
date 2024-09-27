<template>
  <div class="history-container" :style="backgroundImageStyle">
    <el-breadcrumb separator-class="el-icon-right">
      <el-breadcrumb-item to="/">
        <span class="el-icon-s-home overwrite-home-span">
          Home</span
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item
        ><span class="overwrite-current-span">{{
          currentComponent
        }}</span></el-breadcrumb-item
      >
    </el-breadcrumb>
    <empty-component v-show="!isHidden" />
    <point-history-component
      v-show="isHidden"
      v-bind:data="data"
      v-bind:show-all="showAll"
      v-bind:show-gain="showGain"
      v-bind:show-loss="showLoss"
    />
  </div>
</template>
<script>
import Script from "./script.js";
export default Script;
</script>
<style lang="scss" scoped>
@import "./style.css";
</style>
