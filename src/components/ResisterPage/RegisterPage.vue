<template>
  <div class="register-container">
    <div class="register-item left">
      <div class="register-img">
        <img src="@/assets/RegisterComponent/side-image.png" alt="" />
      </div>
    </div>
    <div class="register-item right">
      <div class="text-field">
        <div class="top-text">
          <div class="create-field">
            <p><span>Crea</span>te a New Account</p>
          </div>
          <div class="top-img">
            <img src="@/assets/RegisterComponent/image 23.png" alt="" />
          </div>
        </div>
        <div class="login-field">
          <p>
            New an account or
            <a v-bind:href="url">Login</a>
          </p>
        </div>
      </div>
      <form-component></form-component>
    </div>
  </div>
</template>

<script>
import FormComponent from "./FormComponent.vue";

export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      url: "http://anywhere.com",
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.register-container {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  .left {
    flex-basis: 50%;
  }
  .right {
    flex-basis: 60%;
    padding-top: 60px;
  }
  .register-item {
    align-self: flex-start;
    .register-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .text-field {
      .top-text {
        display: flex;
        padding: 0 3.5rem;
        .create-field {
          color: #0b1d35;
          font-weight: 800;
          font-size: 36px;
          span {
            text-decoration: underline solid #78c147 5px;
            text-underline-offset: 20px;
          }
        }
        .top-img {
          align-self: center;
          padding: 0 0 1rem 1rem;
          width: 20%;
          img {
            width: 25%;
          }
        }
      }
      .login-field {
        padding: 0 3.5rem;
        font-weight: 400;
        font-size: 16px;
        a {
          color: #78c147;
          font-weight: 600;
          text-decoration: underline solid #78c147 2px;
        }
      }
    }
  }
}
</style>
