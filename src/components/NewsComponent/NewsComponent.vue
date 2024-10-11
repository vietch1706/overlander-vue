<template>
  <div class="news-container">
    <div class="header-container">
      <div class="header-text">
        <p>Lastest News</p>
      </div>
      <div class="img-container">
        <img src="@/assets/NewsComponent/image 23.png" alt="" />
      </div>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item
        v-for="(item, index) in data.banner"
        :key="index"
        :value="item"
      >
        <router-link :to="item.link">
          <div class="img-container">
            <img :src="item.image" alt="" /></div
        ></router-link>
      </el-carousel-item>
    </el-carousel>
    <div class="brand-header">
      <p>Our Brands</p>
    </div>
    <div class="container mb-5">
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3">
        <div
          class="col m-2"
          v-for="(item, index) in data.brand.slice(0, 12)"
          :key="index"
          :value="item"
        >
          <div class="img-container">
            <img :src="item.image" :alt="item.name" />
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
