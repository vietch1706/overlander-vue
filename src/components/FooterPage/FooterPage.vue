<template>
  <footer class="footer-container">
    <div class="content-container">
      <div class="footer-content left">
        <div class="bottom-container">
          <div class="bottom-btn">
            <router-link to="/terms-and-conditions">
              Terms & Conditions</router-link
            ><router-link to="privacy-policy"> Policy Privacy </router-link
            ><router-link to="/disclaimer"> Disclaimer </router-link>
          </div>
          <p>© 2021 Overlander All Rights Reserved</p>
        </div>
      </div>
      <div class="footer-content center">
        <div class="footer-logo">
          <img src="@/assets/footer-logo.png" alt="" />
        </div>
      </div>
      <div class="footer-content right"></div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("./style.css");
</style>
