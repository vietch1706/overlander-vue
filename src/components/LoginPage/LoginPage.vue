<template>
  <div class="login-container">
    <div class="login-item left">
      <div class="login-img">
        <div class="side-image">
          <p class="head-text">
            Welcome <br />
            Back
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
    <div class="login-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="login-field">
              <p>Login</p>
            </div>
            <div class="top-img">
              <img src="@/assets/RegisterComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="create-field">
            <p>
              Need a new account?
              <router-link to="/register">
                <a>Create an account</a></router-link
              >
            </p>
          </div>
        </div>
        <component :is="CurrentComponent" />
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
import PhoneComponent from "@/components/LoginPage/PhoneloginComponent/PhoneloginComponent.vue";
import MemberComponent from "@/components/LoginPage/MemberloginComponent/MemberComponent.vue";
export default {
  components: {
    PhoneComponent,
    MemberComponent,
  },
  data() {
    return {
      CurrentComponent: "PhoneComponent",
    };
  },
  methods: {
    changeLoginMethod: function () {
      if (this.CurrentComponent == "PhoneComponent") {
        this.CurrentComponent = "MemberComponent";
      } else {
        this.CurrentComponent = "PhoneComponent";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login-container {
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
  }
  .login-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .login-img {
      width: 100%;
      height: 100%;
      .side-image {
        display: flex;
        padding: 0 0 0 130px;
        justify-content: center;
        flex-direction: column;
        background-image: url(@/assets/RegisterComponent/side-image.png);
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
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
          padding-bottom: 5px;
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
        .login-field {
          color: #0b1d35;
          font-weight: 800;
          font-size: 36px;
          p {
            background-image: linear-gradient(#78c147 0 0);
            background-position: bottom left;
            background-size: 80% 5px;
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
      .create-field {
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
      padding: 230px 0 0 3.5rem;
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
