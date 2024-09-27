<template>
  <header
    class="header-container"
    :class="scrolled ? 'scroll' : ''"
    ref="header"
  >
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
        <form class="form-inline" :hidden="isHidden">
          <router-link :to="{ name: 'registerPage' }">
            <button class="btn btn-lg btn-signup" type="button">Sign Up</button>
          </router-link>
          <router-link :to="{ name: 'loginPage' }">
            <button class="btn btn-lg btn-login" type="button">Login</button>
          </router-link>
          <button class="btn btn-shop" type="button">
            <img src="../../assets/Frame 2937.png" alt="" />
            <br />e-Shop
          </button>
        </form>
        <form class="form-inline" :hidden="!isHidden">
          <button
            class="btn btn-lg btn-logout log-out"
            type="button"
            @click="logOut()"
          >
            Logout
          </button>
          <button class="btn btn-shop" type="button">
            <img src="../../assets/Frame 2937.png" alt="" />
            <br />e-Shop
          </button>
          <router-link :to="{ name: 'profilePage' }">
            <button class="btn btn-profile log-out" type="button">
              <img src="../../assets/Frame 1268.png" alt="" />
              <br />Profile
            </button>
          </router-link>
        </form>
      </div>
    </nav>
  </header>
</template>
<script>
import Script from "./script.js";
export default Script;
</script>

<style lang="scss">
@import "./style.css";
</style>
