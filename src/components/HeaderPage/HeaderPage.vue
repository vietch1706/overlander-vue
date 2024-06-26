<template>
  <header class="header-container" ref="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid header-menu">
        <div class="navbar-brand logo-container">
          <router-link to="/"
            ><img
              src="../../assets/Frame.png"
              alt="The Overlander"
              class="header-logo navbar-brand"
          /></router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Coupon</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Store Locator</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Message Center</a>
            </li>
          </ul>
        </div>
        <form class="form-inline">
          <router-link to="/register">
            <button class="btn btn-lg btn-signup" type="button">Sign Up</button>
          </router-link>
          <router-link to="/login">
            <button class="btn btn-lg btn-login" type="button">Login</button>
          </router-link>
          <button class="btn btn-shop" type="button">
            <img src="../../assets/Frame 2937.png" alt="" />
            <br />e-Shop
          </button>
        </form>
      </div>
    </nav>
  </header>
</template>
<script>
// import Script from "./script.js";
// export default Script;
</script>

<style lang="scss">
@import "./style.scss";
</style>
