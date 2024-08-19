<template>
  <div class="page_404">
    <div class="page_container">
      <div class="page_item left">
        <div class="top-text">
          <div class="text-field">
            <p>Page Not Found</p>
          </div>
          <div class="img-field">
            <img src="@/assets/404/image 23.png" alt="" />
          </div>
        </div>
        <div class="note-text">
          <p>We can’t find the page you are looking for.</p>
        </div>
        <div class="btn-container">
          <router-link :to="{ name: 'homePage' }"
            ><el-button type="button">Go to Homepage </el-button></router-link
          >
        </div>
      </div>
      <div class="page_item right">
        <div class="img-container">
          <img src="@/assets/404/404.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "./style.css";
</style>
