<template>
  <div class="login-container">
    <div class="login-item left">
      <div class="login-img">
        <div class="side-image">
          <p class="head-text">
            Welcome <br />
            Back
          </p>
          <p class="sub-text"><span>Already</span> Existing Member?</p>
          <p class="description-text">
            Already a member? Transfer your point and account <br />
            information now
          </p>
          <el-button>Transfer Extisting Account</el-button>
        </div>
      </div>
    </div>
    <div class="login-item right">
      <div class="text-field">
        <div class="top-text">
          <div class="create-field">
            <p><span>Logi</span>n</p>
          </div>
          <div class="top-img">
            <img src="@/assets/RegisterComponent/image 23.png" alt="" />
          </div>
        </div>
        <div class="login-field">
          <p>
            Need a new account?
            <router-link to="/register"> <a>Create an account</a></router-link>
          </p>
        </div>
      </div>
      <component :is="CurrentComponent" />
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
      url: "http://anywhere.com",
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
    padding: 260px 0 260px 0;
  }
  .login-item {
    align-self: flex-start;
    justify-self: center;
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
          span {
            text-decoration: underline solid #78c147 3px;
            text-underline-offset: 10px;
          }
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
