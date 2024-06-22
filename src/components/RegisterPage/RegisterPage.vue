<template>
  <div class="register-container">
    <div class="register-item left">
      <div class="register-img">
        <div :style="backgroundImageStyle" class="side-image">
          <p class="head-text">
            Join <br />
            Overlander
          </p>
          <p class="sub-text">Already Existing Member?</p>
          <p class="description-text">
            Already a member? Transfer your point and account <br />
            information now
          </p>
          <el-button @click="$router.push('/exist-member-register')"
            >Transfer Extisting Account</el-button
          >
        </div>
      </div>
    </div>
    <div class="register-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="create-field">
              <p>Create a New Account</p>
            </div>
            <div class="top-img">
              <img src="@/assets/RegisterComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="login-field">
            <p>
              New an account or
              <router-link to="/login"> <a>Login</a></router-link>
            </p>
          </div>
        </div>
        <form-component />
      </div>
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
  </div>
</template>

<script>
import FormComponent from "./FormComponent/FormComponent.vue";

export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      url: "http://anywhere.com",
      backgroundImageStyle: {
        backgroundImage: `url(${require("@/assets/RegisterComponent/side-image.png")})`,
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.register-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  .left {
    flex-basis: 40%;
  }
  .right {
    flex-basis: 60%;
    padding-top: 20px;
  }
  .register-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .register-img {
      width: 100%;
      height: 100%;
      .side-image {
        display: flex;
        padding: 0 0 0 130px;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 1150px;
        background-size: 100%;
        color: #fff;
        .head-text {
          font-size: 40px;
          line-height: 40px;
          font-weight: 600;
        }
        .sub-text {
          font-size: 16px;
          background-image: linear-gradient(#78c147 0 0);
          background-position: bottom left;
          background-size: 12% 3px;
          background-repeat: no-repeat;
          padding-bottom: 4px;
        }
        .description-text {
          font-size: 12px;
          font-weight: 200;
        }
        .el-button {
          color: #fff;
          width: 60%;
          background: transparent;
          font-size: 16px;
          font-weight: 600;
        }
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
          p {
            background-image: linear-gradient(#78c147 0 0);
            background-position: bottom left;
            background-size: 18% 5px;
            background-repeat: no-repeat;
            padding-bottom: 5px;
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

    .bottom-container {
      padding: 40px 0 0 3.5rem;
      .bottom-btn {
        a {
          padding-right: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #0b1d35;
          cursor: pointer;
        }
      }
      p {
        font-size: 10px;
        font-weight: 400;
        color: #0b1d35;
      }
    }
  }
}
</style>
