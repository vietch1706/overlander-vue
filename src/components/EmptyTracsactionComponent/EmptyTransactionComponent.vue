<template>
  <div class="page_container">
    <div class="page_item left">
      <div class="top-text">
        <div class="text-field">
          <p>No Point Record</p>
        </div>
        <div class="img-field">
          <img src="@/assets/EmptyTransactionComponent/image 23.png" alt="" />
        </div>
      </div>
      <div class="note-text">
        <p>Let’s go shop and redeem discount offer now</p>
      </div>
      <div class="btn-container">
        <router-link :to="{ name: 'homePage' }"
          ><el-button type="button">Go to Homepage </el-button></router-link
        >
      </div>
    </div>
    <div class="page_item right">
      <div class="img-container">
        <img src="@/assets/EmptyTransactionComponent/Group 1526.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "./style.css";
</style>
