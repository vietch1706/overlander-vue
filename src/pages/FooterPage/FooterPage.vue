<template>
  <footer class="footer-container">
    <div class="content-container">
      <div class="footer-content left">
        <div class="bottom-container">
          <div class="bottom-btn">
            <router-link
              :to="{
                name: 'supportiveComponent',
                params: {
                  name: 'terms-and-condition',
                },
              }"
            >
              Terms & Conditions</router-link
            ><router-link
              :to="{
                name: 'supportiveComponent',
                params: {
                  name: 'policy-privacy',
                },
                replace: true,
              }"
            >
              Policy Privacy </router-link
            ><router-link
              :to="{
                name: 'supportiveComponent',
                params: {
                  name: 'disclaimer',
                },
                replace: true,
              }"
            >
              Disclaimer
            </router-link>
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
