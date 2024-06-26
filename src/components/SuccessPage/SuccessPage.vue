<template>
  <div class="success-container">
    <div class="success-item right">
      <div class="success-image">
        <img
          src="@/assets/SuccessComponent/davide-sacchet-RYN-kov1lTY-unsplash 1.png"
          alt=""
        />
      </div>
    </div>
    <div class="success-item left">
      <div class="profile-image">
        <img src="@/assets/SuccessComponent/Frame 1321.png" alt="" />
      </div>
      <div class="pass-success">
        <div class="head-text">
          <p>{{ data.title }}</p>
          <div class="border-bottom"></div>
          <div class="text-img">
            <img src="@/assets/SuccessComponent/image 23.png" alt="" />
          </div>
        </div>
        <div class="sub-text">
          <p>{{ data.greeting }} {{ data.first_name }}</p>
          <p class="note-text">{{ data.note }}</p>
        </div>
        <el-button @click="changePage()">{{ data.button }}</el-button>
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
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      data: {
        title: "",
        greeting: "",
        first_name: "",
        note: "",
        button: "",
      },
    };
  },
  methods: {
    getDataUser() {
      console.log(this.$route.params);
      this.data.title = this.$route.params.title;
      this.data.greeting = this.$route.params.greeting;
      this.data.note = this.$route.params.note;
      this.data.button = this.$route.params.button;
    },
    changePage() {
      if (this.data.button === "Go to Login") {
        this.$router.push({ name: "loginPage" });
      } else if (this.data.button === "Go to Homepage") {
        this.$router.push({ name: "homePage" });
      }
    },
    getUserFirstName() {
      axios
        .get("users/user/get", {
          params: {
            phone: this.$route.params.phone,
          },
        })
        .then((result) => {
          this.data.first_name = result.data.first_name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted() {
    this.getDataUser();
    this.getUserFirstName();
  },
};
</script>
<style lang="scss" scoped>
.success-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  .left {
    flex-basis: 60%;
  }
  .right {
    flex-basis: 40%;
  }
  .success-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #d7eec8;
    .success-image {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .profile-image {
      padding-top: 20px;
      width: 30%;
      img {
        width: 100%;
      }
    }
  }
  .pass-success {
    color: #0b1d35;
    align-self: flex-start;
    padding: 0 0 0 5rem;
    .head-text {
      display: flex;
      font-weight: 800;
      font-size: 60px;
      p {
        background-image: linear-gradient(#78c147 0 0);
        background-position: bottom left;
        background-size: 17% 8px;
        background-repeat: no-repeat;
        padding-bottom: 4px;
      }
    }
    .sub-text {
      padding: 10px 0;
      font-weight: 600;
      font-size: 22px;
      .note-text {
        font-size: 20px;
        font-weight: 400;
      }
    }
    .el-button {
      background: #0b1d35;
      width: 75%;
      font-size: 20px;
      font-weight: 600;
      color: #78c147;
    }
  }
  .text-img {
    padding: 0 0 1rem 1rem;
    width: 20%;
    img {
      width: 25%;
    }
  }
  .bottom-container {
    padding: 300px 0 0 5rem;
    align-self: flex-start;
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
