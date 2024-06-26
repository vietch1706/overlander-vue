<template>
  <div class="resetpass-container">
    <div class="resetpass-item left">
      <div class="resetpass-img">
        <img src="@/assets/ForgetComponent/side-image.png" />
      </div>
    </div>
    <div class="resetpass-item right">
      <div class="form-wrapper">
        <div class="text-field">
          <div class="top-text">
            <div class="head-text">
              <p>Reset Password</p>
            </div>
            <div class="top-img">
              <img src="@/assets/ForgetComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="sub-field">
            <p>Please enter your phone no. to reset password</p>
          </div>
        </div>
        <change-form-component></change-form-component>
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
import ChangeFormComponent from "./ChangeformComponent/ChangeformComponent.vue";
export default {
  components: {
    ChangeFormComponent,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.resetpass-container {
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
  .resetpass-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .resetpass-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .text-field {
      .top-text {
        display: flex;
        padding: 0 3.5rem;
        .head-text {
          color: #0b1d35;
          font-weight: 800;
          font-size: 36px;
          p {
            background-image: linear-gradient(#78c147 0 0);
            background-position: bottom left;
            background-size: 28% 5px;
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
      .sub-field {
        padding: 0 3.5rem;
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
  .bottom-container {
    padding: 315px 0 0 3.5rem;
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
</style>
