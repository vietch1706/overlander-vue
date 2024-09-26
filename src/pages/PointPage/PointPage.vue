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
    <empty-component :hidden="isHidden" />
    <point-history-component :hidden="!isHidden" v-bind:data="data" />
  </div>
</template>
<script>
import Script from "./script.js";
export default Script;
</script>
<style lang="scss" scoped>
@import "./style.css";
</style>
