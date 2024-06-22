<template>
  <div class="register-container">
    <div class="register-item left">
      <div class="register-img">
        <div :style="backgroundImageStyle" class="side-image">
          <p class="head-text">
            Join <br />
            Overlander
          </p>
          <p class="sub-text">Need Help?</p>
          <p class="description-text">
            Contact our customer service to help you transfer the <br />account.
            <span>Call us at +852 2410 1952</span>
          </p>
        </div>
      </div>
    </div>
    <div class="register-item right">
      <div class="button-wrapper">
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
import ButtonComponent from "./ButtonComponent/ButtonComponent.vue";
import PhoneComponent from "./PhoneComponent/PhoneComponent.vue";
import EmailComponent from "./EmailComponent/EmailComponent.vue";
import MemberComponent from "./MemberComponent/MemberComponent.vue";
export default {
  components: {
    ButtonComponent,
    PhoneComponent,
    EmailComponent,
    MemberComponent,
  },
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${require("@/assets/ExistmemberComponent/side-image.png")})`,
      },
      CurrentComponent: "ButtonComponent",
    };
  },
  methods: {
    pushToPhoneComponent() {
      this.CurrentComponent = "PhoneComponent";
    },
    pushToEmailComponent() {
      this.CurrentComponent = "EmailComponent";
    },
    pushToMemberComponent() {
      this.CurrentComponent = "MemberComponent";
    },
    pushToButtonComponent() {
      this.CurrentComponent = "ButtonComponent";
    },
  },
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
        height: 900px;
        background-size: 100%;
        color: #fff;
        .head-text {
          font-size: 40px;
          line-height: 40px;
          font-weight: 600;
        }
        .sub-text {
          font-size: 20px;
          font-weight: 500;
          background-image: linear-gradient(#78c147 0 0);
          background-position: bottom left;
          background-size: 12% 3px;
          background-repeat: no-repeat;
          padding-bottom: 4px;
        }
        .description-text {
          font-size: 16px;
          font-weight: 400;
          span {
            font-weight: 600;
            text-decoration: underline solid #ffffff;
          }
        }
      }
    }
    .button-wrapper {
      padding: 0 7rem;
      align-self: center;
    }

    .bottom-container {
      padding: 200px 0 0 7rem;
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
